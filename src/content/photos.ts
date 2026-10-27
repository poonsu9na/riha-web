import type { Photo } from "./types";

// 최근 사진 원본은 NCP Object Storage(riha 버킷 gallery/)에 있다. 이전 riha 사이트에서 옮겨 옴.
const GALLERY_BASE = "https://kr.object.ncloudstorage.com/riha/gallery/";

function gallery(file: string) {
  return GALLERY_BASE + encodeURIComponent(file);
}

const TONE = "#c9c5bb";

// 배열 순서 = 최근에 올린 순.
// public/photos/ 의 사진은 예전 블로그(riha6615.github.io)의 Gallery 글과 임시 글에서 옮겨 왔다.
export const photos: Photo[] = [
  { id: "leaves-in-light", src: gallery("조명에-비친-나뭇잎.jpg"), width: 1536, height: 2048, title: "조명에 비친 나뭇잎", alt: "조명에 비친 나뭇잎", tone: TONE },
  { id: "yeongjong-evening-1", src: gallery("영종의-저녁-1.jpg"), width: 1600, height: 1200, title: "영종의 저녁", alt: "영종의 저녁 - 조명이 켜진 카페", tone: TONE },
  { id: "yeongjong-evening-2", src: gallery("영종의-저녁-2.jpg"), width: 1536, height: 2048, title: "영종의 저녁", alt: "영종의 저녁", tone: TONE },
  { id: "yeongjong-evening-3", src: gallery("영종의-저녁-3.jpg"), width: 1536, height: 2048, title: "영종의 저녁", alt: "영종의 저녁", tone: TONE },

  // 예전 블로그 임시 글(2025): Day 2 · Day 1 · 소래 습지 생태 공원
  { id: "day2-light-1", src: "/photos/day2-light-1.jpg", width: 2000, height: 1333, title: "Day 2. 빛을 따라 걷다", alt: "Day 2. 빛을 따라 걷다", tone: TONE },
  { id: "day2-light-2", src: "/photos/day2-light-2.jpg", width: 1600, height: 2400, title: "Day 2. 빛을 따라 걷다", alt: "Day 2. 빛을 따라 걷다", tone: TONE },
  { id: "day2-light-3", src: "/photos/day2-light-3.jpg", width: 1600, height: 1067, title: "Day 2. 빛을 따라 걷다", alt: "Day 2. 빛을 따라 걷다", tone: TONE },
  { id: "day2-light-4", src: "/photos/day2-light-4.jpg", width: 1600, height: 1067, title: "Day 2. 빛을 따라 걷다", alt: "Day 2. 빛을 따라 걷다", tone: TONE },
  { id: "day2-light-5", src: "/photos/day2-light-5.jpg", width: 1600, height: 1067, title: "Day 2. 빛을 따라 걷다", alt: "Day 2. 빛을 따라 걷다", tone: TONE },
  { id: "day2-light-6", src: "/photos/day2-light-6.jpg", width: 1600, height: 1067, title: "Day 2. 빛을 따라 걷다", alt: "Day 2. 빛을 따라 걷다", tone: TONE },
  { id: "day2-light-7", src: "/photos/day2-light-7.jpg", width: 1600, height: 1067, title: "Day 2. 빛을 따라 걷다", alt: "Day 2. 빛을 따라 걷다", tone: TONE },
  { id: "day2-light-8", src: "/photos/day2-light-8.jpg", width: 1600, height: 1067, title: "Day 2. 빛을 따라 걷다", alt: "Day 2. 빛을 따라 걷다", tone: TONE },
  { id: "day2-light-9", src: "/photos/day2-light-9.jpg", width: 1600, height: 1067, title: "Day 2. 빛을 따라 걷다", alt: "Day 2. 빛을 따라 걷다", tone: TONE },
  { id: "day2-light-10", src: "/photos/day2-light-10.jpg", width: 1600, height: 1067, title: "Day 2. 빛을 따라 걷다", alt: "Day 2. 빛을 따라 걷다", tone: TONE },
  { id: "day2-light-11", src: "/photos/day2-light-11.jpg", width: 1600, height: 1067, title: "Day 2. 빛을 따라 걷다", alt: "Day 2. 빛을 따라 걷다", tone: TONE },
  { id: "day2-light-12", src: "/photos/day2-light-12.jpg", width: 1600, height: 2400, title: "Day 2. 빛을 따라 걷다", alt: "Day 2. 빛을 따라 걷다", tone: TONE },
  { id: "day1-contrast-1", src: "/photos/day1-contrast-1.jpg", width: 2000, height: 1333, title: "Day 1. 대비를 찾아라", alt: "Day 1. 대비를 찾아라", tone: TONE },
  { id: "day1-contrast-2", src: "/photos/day1-contrast-2.jpg", width: 1600, height: 2400, title: "Day 1. 대비를 찾아라", alt: "Day 1. 대비를 찾아라", tone: TONE },
  { id: "day1-contrast-3", src: "/photos/day1-contrast-3.jpg", width: 1600, height: 2400, title: "Day 1. 대비를 찾아라", alt: "Day 1. 대비를 찾아라", tone: TONE },
  { id: "day1-contrast-4", src: "/photos/day1-contrast-4.jpg", width: 1600, height: 2400, title: "Day 1. 대비를 찾아라", alt: "Day 1. 대비를 찾아라", tone: TONE },
  { id: "day1-contrast-5", src: "/photos/day1-contrast-5.jpg", width: 1600, height: 2400, title: "Day 1. 대비를 찾아라", alt: "Day 1. 대비를 찾아라", tone: TONE },
  { id: "sorae-1", src: "/photos/sorae-1.jpg", width: 2000, height: 1333, title: "소래 습지 생태 공원", alt: "소래 습지 생태 공원", tone: TONE },
  { id: "sorae-2", src: "/photos/sorae-2.jpg", width: 1600, height: 1067, title: "소래 습지 생태 공원", alt: "소래 습지 생태 공원", tone: TONE },
  { id: "sorae-3", src: "/photos/sorae-3.jpg", width: 1600, height: 1067, title: "소래 습지 생태 공원", alt: "소래 습지 생태 공원", tone: TONE },
  { id: "sorae-4", src: "/photos/sorae-4.jpg", width: 1600, height: 1067, title: "소래 습지 생태 공원", alt: "소래 습지 생태 공원", tone: TONE },
  { id: "sorae-5", src: "/photos/sorae-5.jpg", width: 1600, height: 1067, title: "소래 습지 생태 공원", alt: "소래 습지 생태 공원", tone: TONE },
  { id: "sorae-6", src: "/photos/sorae-6.jpg", width: 1600, height: 2400, title: "소래 습지 생태 공원", alt: "소래 습지 생태 공원", tone: TONE },
  { id: "sorae-7", src: "/photos/sorae-7.jpg", width: 1600, height: 1067, title: "소래 습지 생태 공원", alt: "소래 습지 생태 공원", tone: TONE },
  { id: "sorae-8", src: "/photos/sorae-8.jpg", width: 1600, height: 2400, title: "소래 습지 생태 공원", alt: "소래 습지 생태 공원", tone: TONE },
  { id: "sorae-9", src: "/photos/sorae-9.jpg", width: 1600, height: 1067, title: "소래 습지 생태 공원", alt: "소래 습지 생태 공원", tone: TONE },
  { id: "sorae-10", src: "/photos/sorae-10.jpg", width: 1600, height: 1067, title: "소래 습지 생태 공원", alt: "소래 습지 생태 공원", tone: TONE },
  { id: "sorae-11", src: "/photos/sorae-11.jpg", width: 1600, height: 1067, title: "소래 습지 생태 공원", alt: "소래 습지 생태 공원", tone: TONE },
  { id: "sorae-12", src: "/photos/sorae-12.jpg", width: 1600, height: 1067, title: "소래 습지 생태 공원", alt: "소래 습지 생태 공원", tone: TONE },
  { id: "sorae-13", src: "/photos/sorae-13.jpg", width: 1600, height: 1067, title: "소래 습지 생태 공원", alt: "소래 습지 생태 공원", tone: TONE },
  { id: "sorae-14", src: "/photos/sorae-14.jpg", width: 1600, height: 1067, title: "소래 습지 생태 공원", alt: "소래 습지 생태 공원", tone: TONE },
  { id: "sorae-15", src: "/photos/sorae-15.jpg", width: 1600, height: 1067, title: "소래 습지 생태 공원", alt: "소래 습지 생태 공원", tone: TONE },
  { id: "sorae-16", src: "/photos/sorae-16.jpg", width: 1600, height: 1067, title: "소래 습지 생태 공원", alt: "소래 습지 생태 공원", tone: TONE },

  { id: "first-snow-0", src: "/photos/first-snow-0.jpg", width: 2000, height: 1500, title: "첫눈이 그린 겨울 그림", alt: "첫눈 내린 도심", tone: TONE },
  { id: "first-snow-1", src: "/photos/first-snow-1.jpg", width: 1500, height: 2000, title: "첫눈이 그린 겨울 그림", alt: "첫눈 내린 풍경", tone: TONE },
  { id: "first-snow-2", src: "/photos/first-snow-2.jpg", width: 1600, height: 1200, title: "첫눈이 그린 겨울 그림", alt: "첫눈 내린 풍경", tone: TONE },
  { id: "first-snow-3", src: "/photos/first-snow-3.jpg", width: 1500, height: 2000, title: "첫눈이 그린 겨울 그림", alt: "첫눈 내린 풍경", tone: TONE },
  { id: "first-snow-4", src: "/photos/first-snow-4.jpg", width: 1600, height: 1200, title: "첫눈이 그린 겨울 그림", alt: "첫눈 내린 풍경", tone: TONE },
  { id: "homebound-in-blue-light", src: "/photos/homebound-in-blue-light.jpg", width: 2000, height: 1500, title: "푸른 빛으로 물든 퇴근길", alt: "푸른 빛으로 물든 퇴근길", tone: TONE },
  { id: "a-sip-of-the-worlds-aroma", src: "/photos/a-sip-of-the-worlds-aroma.jpg", width: 2000, height: 1500, title: "세계의 향기를 담은 한 잔", alt: "커피 한 잔", tone: TONE },
  { id: "whispers-of-autumn", src: "/photos/whispers-of-autumn.jpg", width: 2000, height: 1500, title: "도심 속 가을의 속삭임", alt: "붉게 물든 나뭇잎", tone: TONE },
  { id: "yeosu-1", src: "/photos/yeosu-1.jpg", width: 2000, height: 1500, title: "여수", alt: "여수", tone: TONE },
  { id: "yeosu-2", src: "/photos/yeosu-2.jpg", width: 1000, height: 750, title: "여수", alt: "여수", tone: TONE },
  { id: "yeosu-3", src: "/photos/yeosu-3.jpg", width: 1000, height: 750, title: "여수", alt: "여수", tone: TONE },
  { id: "yeosu-4", src: "/photos/yeosu-4.jpg", width: 1000, height: 750, title: "여수", alt: "여수", tone: TONE },
  { id: "yeosu-5", src: "/photos/yeosu-5.jpg", width: 1000, height: 667, title: "여수", alt: "여수", tone: TONE },
  { id: "yeosu-6", src: "/photos/yeosu-6.jpg", width: 1000, height: 667, title: "여수", alt: "여수", tone: TONE },
  { id: "yeosu-7", src: "/photos/yeosu-7.jpg", width: 1000, height: 667, title: "여수", alt: "여수", tone: TONE },
  { id: "yeosu-8", src: "/photos/yeosu-8.jpg", width: 1000, height: 666, title: "여수", alt: "여수", tone: TONE },
  { id: "yeosu-9", src: "/photos/yeosu-9.jpg", width: 1000, height: 563, title: "여수", alt: "여수", tone: TONE },
  { id: "yeosu-10", src: "/photos/yeosu-10.jpg", width: 1000, height: 666, title: "여수", alt: "여수", tone: TONE },
  { id: "overtime-songdo", src: "/photos/overtime-songdo.jpg", width: 2000, height: 1500, title: "야근 중 마주한 일상의 아름다움", alt: "인천 송도의 밤", tone: TONE },
];
