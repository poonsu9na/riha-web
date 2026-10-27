export type BookStatus = "reading" | "done" | "want";

export type Book = {
  id: string;
  title: string;
  /** 부제. 목록에는 쓰지 않고 남겨만 둔다 */
  subtitle?: string;
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
  /** 크게 보기용 이미지 URL. 없으면 placeholder 로 그린다 */
  src?: string;
  /** 목록(그리드)용 작은 이미지 URL. 없으면 src 를 쓴다 */
  thumb?: string;
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
