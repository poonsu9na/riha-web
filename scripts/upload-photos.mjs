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

import { readFileSync } from "node:fs";
import sharp from "sharp";
import { assertNoDuplicates, parseArgs, putJpeg, toId } from "./lib/ncp.mjs";

const PREFIX = "photos";
const SIZES = [
  { suffix: "800", width: 800, quality: 78 },
  { suffix: "1600", width: 1600, quality: 82 },
];

const { files, overwrite } = parseArgs("올릴 사진 파일이나 폴더를 넘겨 주세요. 예: npm run upload-photos -- ~/Desktop/새사진");
await assertNoDuplicates(files, (id) => `${PREFIX}/${id}-800.jpg`, overwrite);

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

    await putJpeg(`${PREFIX}/${id}-${suffix}.jpg`, data);
    size = info;
    console.log(`  ✓ ${PREFIX}/${id}-${suffix}.jpg  ${info.width}×${info.height}  ${(data.length / 1024).toFixed(0)}KB`);
  }

  lines.push(`  ncp("${id}", ${size.width}, ${size.height}, "[제목]", "[설명]"),`);
}

console.log(`\n✔ ${files.length}장 업로드 완료. src/content/photos.ts 에 붙일 줄:\n`);
console.log(lines.join("\n"));
