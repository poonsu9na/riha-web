export type BookStatus = "reading" | "done" | "want";

export type Book = {
  id: string;
  title: string;
  author: string;
  publisher?: string;
  status: BookStatus;
  /** 1~5, 다 읽은 책만 */
  rating?: number;
  /** 읽는 중인 책의 진행 쪽수 */
  progress?: { current: number; total: number };
  /** 표지 이미지가 없을 때 쓰는 배경색 */
  coverColor: string;
  coverSrc?: string;
};

export type Quote = {
  id: string;
  bookId: string;
  text: string;
  page?: number;
  memo?: string;
};

export type Photo = {
  id: string;
  /** public/ 기준 경로 또는 원격 URL. 없으면 placeholder 로 그린다 */
  src?: string;
  width: number;
  height: number;
  alt: string;
  /** 마우스를 올리거나 크게 볼 때 보이는 짧은 제목 */
  title?: string;
  /** placeholder 배경색 */
  tone: string;
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  year: string;
  period?: string;
  role: string;
  stack: string[];
  featured?: boolean;
  problem?: string;
  solution?: string;
  result?: string;
  coverColor: string;
  coverSrc?: string;
  links: { label: string; href: string }[];
};
