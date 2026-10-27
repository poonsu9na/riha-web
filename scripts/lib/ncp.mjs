// NCP Object Storage 업로드 공통 코드. upload-photos·upload-covers 가 함께 쓴다.

import { existsSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { HeadObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

if (existsSync(".env.local")) process.loadEnvFile(".env.local");

const {
  NCP_ACCESS_KEY,
  NCP_SECRET_KEY,
  NCP_BUCKET,
  NCP_ENDPOINT = "https://kr.object.ncloudstorage.com",
  NCP_REGION = "kr-standard",
} = process.env;

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".heic", ".tif", ".tiff"]);

export function fail(message) {
  console.error(`✖ ${message}`);
  process.exit(1);
}

if (!NCP_ACCESS_KEY || !NCP_SECRET_KEY || !NCP_BUCKET) {
  fail(".env.local 에 NCP_ACCESS_KEY, NCP_SECRET_KEY, NCP_BUCKET 을 넣어 주세요.");
}

const s3 = new S3Client({
  region: NCP_REGION,
  endpoint: NCP_ENDPOINT,
  credentials: { accessKeyId: NCP_ACCESS_KEY, secretAccessKey: NCP_SECRET_KEY },
  forcePathStyle: true,
});

/** 명령행 인자를 파일 목록과 --overwrite 여부로 나눈다. 폴더는 안의 이미지 파일로 펼친다 */
export function parseArgs(usage) {
  const args = process.argv.slice(2);
  const overwrite = args.includes("--overwrite");
  const inputs = args.filter((arg) => arg !== "--overwrite");
  if (inputs.length === 0) fail(usage);

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
  return { files, overwrite };
}

/** 파일명으로 id 를 만든다 (예: "Yeosu 1.JPG" → "yeosu-1") */
export function toId(file) {
  return path
    .basename(file, path.extname(file))
    .toLowerCase()
    .replace(/[^\w가-힣]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function exists(key) {
  try {
    await s3.send(new HeadObjectCommand({ Bucket: NCP_BUCKET, Key: key }));
    return true;
  } catch (error) {
    if (error?.$metadata?.httpStatusCode === 404) return false;
    throw error;
  }
}

/**
 * 덮어쓰기 방지. 올릴 파일끼리 id 가 겹치거나, NCP 에 같은 key 가 이미 있으면 아무것도 올리지 않고 멈춘다.
 * @param files 올릴 파일 목록
 * @param keyOf id → 존재 여부를 확인할 NCP key
 */
export async function assertNoDuplicates(files, keyOf, overwrite) {
  const owners = new Map();
  for (const file of files) {
    const id = toId(file);
    if (owners.has(id)) fail(`'${owners.get(id)}' 와 '${file}' 의 id 가 '${id}' 로 겹쳐요. 파일명을 바꿔 주세요.`);
    owners.set(id, file);
  }
  if (overwrite) return;

  const taken = [];
  for (const id of owners.keys()) {
    if (await exists(keyOf(id))) taken.push(id);
  }
  if (taken.length > 0) {
    fail(
      `NCP 에 이미 같은 이름이 있어요: ${taken.join(", ")}\n` +
        "  파일명을 바꾸거나, 정말 바꿔 올리려면 --overwrite 를 붙여 주세요.",
    );
  }
}

/** JPEG 한 장을 공개(public-read)로 올린다 */
export async function putJpeg(key, body) {
  await s3.send(
    new PutObjectCommand({
      Bucket: NCP_BUCKET,
      Key: key,
      Body: body,
      ContentType: "image/jpeg",
      ACL: "public-read",
      CacheControl: "public, max-age=31536000, immutable",
    }),
  );
}
