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

export type WorkImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** 이미지 아래 짧은 설명 */
  caption?: string;
  /** 화면 하나짜리 세로 캡처처럼 너무 크게 보이면 안 되는 이미지의 최대 표시 너비(px) */
  maxWidth?: number;
};

/** 포트폴리오 상세 페이지(/works/<id>) 내용 */
export type CaseStudy = {
  /** 맨 위 큰 이미지 */
  hero: WorkImage;
  /** 클라이언트·디자인·개발 같은 정보 표 */
  credits: { label: string; value: string }[];
  sections: {
    title: string;
    /** 문단 단위 */
    body: string[];
    /** 작업 항목처럼 나열할 것들. 문단 아래 목록으로 보인다 */
    items?: string[];
    images?: WorkImage[];
    /** "row" 면 이미지들을 가로로 나란히 놓는다(폰 화면 여러 장 등). 기본은 위아래로 쌓기 */
    layout?: "stack" | "row";
  }[];
  /** 원문(디자인 파트너 사이트 등) 링크 */
  source?: { label: string; href: string };
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
  /** 있으면 /works/<id> 상세 페이지가 생긴다 */
  caseStudy?: CaseStudy;
};
