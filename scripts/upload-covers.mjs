// 책 표지를 NCP Object Storage 에 올리는 스크립트.
//
// 표지는 목록에서 최대 180px 정도로 보이므로 가로 360px(2배) JPEG 한 장만 만든다.
//   covers/<id>.jpg
//
// 사용법:
//   npm run upload-covers -- <표지 파일 또는 폴더>...
// 파일명이 책 id 가 된다(books.ts 의 id 와 맞출 것. 보통 ISBN).
// 같은 id 가 이미 NCP 에 있으면 멈추고, 일부러 바꿀 때만 --overwrite 를 붙인다.

import { readFileSync } from "node:fs";
import sharp from "sharp";
import { assertNoDuplicates, parseArgs, putJpeg, toId } from "./lib/ncp.mjs";

const PREFIX = "covers";
const WIDTH = 360;

const { files, overwrite } = parseArgs("올릴 표지 파일이나 폴더를 넘겨 주세요. 예: npm run upload-covers -- ~/Desktop/표지");
await assertNoDuplicates(files, (id) => `${PREFIX}/${id}.jpg`, overwrite);

for (const file of files) {
  const id = toId(file);
  const data = await sharp(readFileSync(file))
    .rotate()
    .resize({ width: WIDTH, withoutEnlargement: true })
    .flatten({ background: "#ffffff" })
    .jpeg({ quality: 80, mozjpeg: true })
    .toBuffer();

  await putJpeg(`${PREFIX}/${id}.jpg`, data);
  console.log(`  ✓ ${PREFIX}/${id}.jpg  ${(data.length / 1024).toFixed(0)}KB`);
}

console.log(`\n✔ 표지 ${files.length}장 업로드 완료.`);
