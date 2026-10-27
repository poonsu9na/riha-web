import type { Book } from "./types";

// TODO: 실제 독서 기록으로 바꾸기. 배열 순서 = 최근에 읽은 순
export const books: Book[] = [
  {
    id: "book-a",
    title: "[책 제목 A]",
    author: "[저자]",
    publisher: "[출판사]",
    status: "reading",
    progress: { current: 186, total: 300 },
    coverColor: "#2f5d50",
  },
  {
    id: "book-b",
    title: "[책 제목 B]",
    author: "[저자]",
    publisher: "[출판사]",
    status: "reading",
    progress: { current: 54, total: 298 },
    coverColor: "#8a5a44",
  },
  { id: "book-c", title: "[책 제목 C]", author: "[저자]", status: "done", rating: 4, coverColor: "#3e4a61" },
  { id: "book-d", title: "[책 제목 D]", author: "[저자]", status: "done", rating: 5, coverColor: "#1c1b19" },
  { id: "book-e", title: "[책 제목 E]", author: "[저자]", status: "done", rating: 3, coverColor: "#6b6b3a" },
  { id: "book-f", title: "[책 제목 F]", author: "[저자]", status: "done", rating: 4, coverColor: "#5a4660" },
  { id: "book-g", title: "[책 제목 G]", author: "[저자]", status: "done", rating: 4, coverColor: "#2f5d50" },
  { id: "book-h", title: "[책 제목 H]", author: "[저자]", status: "done", rating: 3, coverColor: "#8a5a44" },
  { id: "book-i", title: "[책 제목 I]", author: "[저자]", status: "want", coverColor: "#9a958a" },
  { id: "book-j", title: "[책 제목 J]", author: "[저자]", status: "want", coverColor: "#b4b0a6" },
];

export function getBook(id: string): Book | undefined {
  return books.find((book) => book.id === id);
}
