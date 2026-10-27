// 사진을 NCP Object Storage 에 올리는 스크립트.
//
// 사진마다 두 가지 크기를 만들어 올린다.
//   photos/<id>-800.jpg   목록(그리드)용 썸네일
//   photos/<id>-1600.jpg  크게 보기용
// 사이트는 이 주소를 Vercel 이미지 최적화 없이 바로 불러온다.
//
// 사용법:
//   1) .env.local 에 NCP_ACCESS_KEY, NCP_SECRET_KEY, NCP_BUCKET 을 넣는다 (커밋되지 않음)
//   2) npm run upload-photos -- <사진 파일 또는 폴더>...
//   3) 끝에 출력되는 줄을 src/content/photos.ts 의 원하는 위치에 붙이고 title·alt 를 고친다
//
// id 는 파일명에서 만든다(예: "yeosu-1.jpg" → "yeosu-1").
// 같은 id 가 이미 NCP 에 있거나 이번에 올릴 파일끼리 id 가 겹치면 아무것도 올리지 않고 멈춘다.
// 일부러 바꿔 올릴 때만 --overwrite 를 붙인다.

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { HeadObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import sharp from "sharp";

if (existsSync(".env.local")) process.loadEnvFile(".env.local");

const {
  NCP_ACCESS_KEY,
  NCP_SECRET_KEY,
  NCP_BUCKET,
  NCP_ENDPOINT = "https://kr.object.ncloudstorage.com",
  NCP_REGION = "kr-standard",
} = process.env;

const PREFIX = "photos";
const SIZES = [
  { suffix: "800", width: 800, quality: 78 },
  { suffix: "1600", width: 1600, quality: 82 },
];
const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".heic", ".tif", ".tiff"]);

function fail(message) {
  console.error(`✖ ${message}`);
  process.exit(1);
}

if (!NCP_ACCESS_KEY || !NCP_SECRET_KEY || !NCP_BUCKET) {
  fail(".env.local 에 NCP_ACCESS_KEY, NCP_SECRET_KEY, NCP_BUCKET 을 넣어 주세요.");
}

const args = process.argv.slice(2);
const overwrite = args.includes("--overwrite");
const inputs = args.filter((arg) => arg !== "--overwrite");
if (inputs.length === 0) fail("올릴 사진 파일이나 폴더를 넘겨 주세요. 예: npm run upload-photos -- ~/Desktop/새사진");

const files = inputs.flatMap((input) => {
  if (!existsSync(input)) fail(`'${input}' 이(가) 없어요.`);
  if (statSync(input).isDirectory()) {
    return readdirSync(input)
      .filter((f) => IMAGE_EXT.has(path.extname(f).toLowerCase()))
      .sort()
      .map((f) => path.join(input, f));
  }
  return [input];
});

function toId(file) {
  return path
    .basename(file, path.extname(file))
    .toLowerCase()
    .replace(/[^\w가-힣]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const s3 = new S3Client({
  region: NCP_REGION,
  endpoint: NCP_ENDPOINT,
  credentials: { accessKeyId: NCP_ACCESS_KEY, secretAccessKey: NCP_SECRET_KEY },
  forcePathStyle: true,
});

// 이번에 올릴 파일끼리 id 가 겹치는지 (예: "a.jpg" 와 "A.jpeg")
const idOwners = new Map();
for (const file of files) {
  const id = toId(file);
  if (idOwners.has(id)) fail(`'${idOwners.get(id)}' 와 '${file}' 의 id 가 '${id}' 로 겹쳐요. 파일명을 바꿔 주세요.`);
  idOwners.set(id, file);
}

async function existsOnNcp(key) {
  try {
    await s3.send(new HeadObjectCommand({ Bucket: NCP_BUCKET, Key: key }));
    return true;
  } catch (error) {
    if (error?.$metadata?.httpStatusCode === 404) return false;
    throw error;
  }
}

// NCP 에 같은 id 가 이미 있는지 (하나라도 있으면 아무것도 올리지 않는다)
if (!overwrite) {
  const taken = [];
  for (const id of idOwners.keys()) {
    if (await existsOnNcp(`${PREFIX}/${id}-800.jpg`)) taken.push(id);
  }
  if (taken.length > 0) {
    fail(
      `NCP 에 이미 같은 이름의 사진이 있어요: ${taken.join(", ")}\n` +
        "  파일명을 바꾸거나, 정말 바꿔 올리려면 --overwrite 를 붙여 주세요.",
    );
  }
}

const lines = [];
for (const file of files) {
  const id = toId(file);
  // EXIF 방향을 먼저 바로잡아야 가로·세로 크기가 맞다
  const source = sharp(readFileSync(file)).rotate();
  let size;

  for (const { suffix, width, quality } of SIZES) {
    const { data, info } = await source
      .clone()
      .resize({ width, withoutEnlargement: true })
      .jpeg({ quality, mozjpeg: true })
      .toBuffer({ resolveWithObject: true });

    await s3.send(
      new PutObjectCommand({
        Bucket: NCP_BUCKET,
        Key: `${PREFIX}/${id}-${suffix}.jpg`,
        Body: data,
        ContentType: "image/jpeg",
        ACL: "public-read",
        CacheControl: "public, max-age=31536000, immutable",
      }),
    );
    size = info;
    console.log(`  ✓ ${PREFIX}/${id}-${suffix}.jpg  ${info.width}×${info.height}  ${(data.length / 1024).toFixed(0)}KB`);
  }

  lines.push(`  ncp("${id}", ${size.width}, ${size.height}, "[제목]", "[설명]"),`);
}

console.log(`\n✔ ${files.length}장 업로드 완료. src/content/photos.ts 에 붙일 줄:\n`);
console.log(lines.join("\n"));
