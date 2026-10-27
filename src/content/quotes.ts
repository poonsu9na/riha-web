import type { Quote } from "./types";

// TODO: 실제 밑줄 문장으로 바꾸기. 배열 순서 = 최근에 옮겨 적은 순
export const quotes: Quote[] = [
  { id: "q1", bookId: "book-a", text: "[밑줄 그은 한 줄]", page: 112 },
  {
    id: "q2",
    bookId: "book-c",
    text: "[조금 더 긴 문장. 두 줄로 넘어가도 카드 하나에 한 문장만 담습니다.]",
    page: 48,
  },
  {
    id: "q3",
    bookId: "book-a",
    text: "[밑줄 그은 한 줄]",
    page: 87,
    memo: "[남기고 싶은 짧은 메모가 있으면 이렇게 한 줄 덧붙입니다.]",
  },
  { id: "q4", bookId: "book-d", text: "[밑줄 그은 한 줄]", page: 203 },
  { id: "q5", bookId: "book-c", text: "[밑줄 그은 한 줄]", page: 19 },
  { id: "q6", bookId: "book-e", text: "[밑줄 그은 한 줄]", page: 154 },
];

export function getQuotesByBook(bookId: string): Quote[] {
  return quotes.filter((quote) => quote.bookId === bookId);
}
