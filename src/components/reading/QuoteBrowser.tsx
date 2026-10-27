"use client";

import { useState } from "react";
import { books, getBook } from "@/content/books";
import { quotes } from "@/content/quotes";
import styles from "./QuoteBrowser.module.css";

type Props = {
  /** 처음 골라둘 책 id. 없거나 모르는 id 면 전체 */
  initialBookId?: string | null;
};

// 문장이 있는 책만, books 배열 순서대로
const booksWithQuotes = books
  .map((book) => ({ book, count: quotes.filter((quote) => quote.bookId === book.id).length }))
  .filter(({ count }) => count > 0);

/** 왼쪽 "책으로 거르기" + 오른쪽 문장 카드 목록 */
export default function QuoteBrowser({ initialBookId }: Props) {
  const initial = initialBookId && getBook(initialBookId) ? initialBookId : "all";
  const [selected, setSelected] = useState<string>(initial);

  const shown = selected === "all" ? quotes : quotes.filter((quote) => quote.bookId === selected);
  const options = [
    { id: "all", title: "전체", count: quotes.length },
    ...booksWithQuotes.map(({ book, count }) => ({ id: book.id, title: book.title, count })),
  ];

  return (
    <div className={styles.layout}>
      <aside className={styles.aside}>
        <h2 className={styles.heading}>책으로 거르기</h2>
        <div role="group" aria-label="책으로 거르기" className={styles.options}>
          {options.map((option) => (
            <button
              key={option.id}
              type="button"
              aria-pressed={selected === option.id}
              onClick={() => setSelected(option.id)}
              className={styles.option}
            >
              <span>{option.title}</span>
              <span>{option.count}</span>
            </button>
          ))}
        </div>
      </aside>

      <section aria-label="문장 목록" className={styles.list}>
        {shown.length === 0 ? (
          <p className={styles.empty}>
            {getBook(selected)?.title ?? "이 책"}에서 옮겨 적은 문장이 아직 없습니다.
          </p>
        ) : (
          shown.map((quote) => {
            const book = getBook(quote.bookId);
            const caption = [book?.title, book?.author, quote.page ? `p.${quote.page}` : null]
              .filter(Boolean)
              .join(" · ");
            return (
              <figure key={quote.id} className={styles.card}>
                <blockquote className={styles.text}>{quote.text}</blockquote>
                <figcaption className={styles.caption}>{caption}</figcaption>
                {quote.memo ? <p className={styles.memo}>{quote.memo}</p> : null}
              </figure>
            );
          })
        )}
      </section>
    </div>
  );
}
