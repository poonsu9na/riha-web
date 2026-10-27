// 포트폴리오 상세 페이지 이미지를 NCP Object Storage 에 올리는 스크립트.
//
// 가로 최대 1600px JPEG 로 줄여(투명 배경은 흰색으로) works/<프로젝트>/<id>.jpg 에 올린다.
//
// 사용법:
//   npm run upload-work-images -- <프로젝트 slug> <이미지 파일 또는 폴더>...
//   예) npm run upload-work-images -- tmoney ~/Desktop/tmoney
// 파일명이 이미지 id 가 된다. 같은 이름이 이미 있으면 멈추고, 일부러 바꿀 때만 --overwrite.

import { readFileSync } from "node:fs";
import sharp from "sharp";
import { assertNoDuplicates, fail, parseArgs, putJpeg, toId } from "./lib/ncp.mjs";

const WIDTH = 1600;
const BASE = "https://kr.object.ncloudstorage.com/riha";

const slug = process.argv[2];
if (!slug || slug.startsWith("-") || !/^[a-z0-9-]+$/.test(slug)) {
  fail("첫 번째 인자로 프로젝트 slug(영문 소문자·숫자·-)를 넘겨 주세요. 예: npm run upload-work-images -- tmoney ./images");
}
process.argv.splice(2, 1);

const prefix = `works/${slug}`;
const { files, overwrite } = parseArgs("올릴 이미지 파일이나 폴더를 넘겨 주세요.");
await assertNoDuplicates(files, (id) => `${prefix}/${id}.jpg`, overwrite);

const lines = [];
for (const file of files) {
  const id = toId(file);
  const { data, info } = await sharp(readFileSync(file), { limitInputPixels: false })
    .rotate()
    .resize({ width: WIDTH, withoutEnlargement: true })
    .flatten({ background: "#ffffff" })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer({ resolveWithObject: true });

  await putJpeg(`${prefix}/${id}.jpg`, data);
  console.log(`  ✓ ${prefix}/${id}.jpg  ${info.width}×${info.height}  ${(data.length / 1024).toFixed(0)}KB`);
  lines.push(`  { src: "${BASE}/${prefix}/${id}.jpg", width: ${info.width}, height: ${info.height}, alt: "[설명]" },`);
}

console.log(`\n✔ ${files.length}장 업로드 완료. projects.ts 에 붙일 줄:\n`);
console.log(lines.join("\n"));
