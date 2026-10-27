import type { Photo } from "./types";

// 사진 원본은 NCP Object Storage(riha 버킷 gallery/)에 있다. 이전 riha 사이트에서 옮겨 옴.
const GALLERY_BASE = "https://kr.object.ncloudstorage.com/riha/gallery/";

function gallery(file: string) {
  return GALLERY_BASE + encodeURIComponent(file);
}

// 배열 순서 = 최근에 올린 순
export const photos: Photo[] = [
  {
    id: "leaves-in-light",
    src: gallery("조명에-비친-나뭇잎.jpg"),
    width: 1536,
    height: 2048,
    alt: "조명에 비친 나뭇잎",
    tone: "#c9c5bb",
  },
  {
    id: "yeongjong-evening-1",
    src: gallery("영종의-저녁-1.jpg"),
    width: 1600,
    height: 1200,
    alt: "영종의 저녁 - 조명이 켜진 카페",
    tone: "#c9c5bb",
  },
  {
    id: "yeongjong-evening-2",
    src: gallery("영종의-저녁-2.jpg"),
    width: 1536,
    height: 2048,
    alt: "영종의 저녁",
    tone: "#c9c5bb",
  },
  {
    id: "yeongjong-evening-3",
    src: gallery("영종의-저녁-3.jpg"),
    width: 1536,
    height: 2048,
    alt: "영종의 저녁",
    tone: "#c9c5bb",
  },
];
