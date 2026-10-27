import type { Photo } from "./types";

const tones = ["#8c8a82", "#b4b0a6", "#6e6c66", "#a09d94", "#7d7b74", "#c2beb4"];
const sizes: [number, number][] = [
  [1600, 2000],
  [2400, 1600],
  [2000, 2000],
  [1600, 2400],
  [1600, 2000],
  [2400, 1600],
  [2000, 2000],
  [1600, 2000],
  [2400, 1600],
  [1600, 2400],
  [2000, 2000],
  [1600, 2000],
];

// TODO: 실제 사진으로 바꾸기 (src 에 public/ 경로나 원격 URL). 배열 순서 = 최근에 올린 순
export const photos: Photo[] = sizes.map(([width, height], i) => ({
  id: `photo-${i + 1}`,
  width,
  height,
  alt: "[사진 설명]",
  tone: tones[i % tones.length],
}));
