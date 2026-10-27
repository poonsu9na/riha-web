"use client";

import Link from "next/link";
import { useState } from "react";
import BookCover from "@/components/BookCover";
import Stars from "@/components/Stars";
import type { Book, BookStatus } from "@/content/types";
import styles from "./BookShelf.module.css";

type Filter = "all" | Exclude<BookStatus, "reading">;

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "전체" },
  { key: "done", label: "다 읽음" },
  { key: "want", label: "읽고 싶은 책" },
];

type Props = {
  /** 읽는 중인 책을 뺀 목록. 배열 순서 그대로 보여준다 */
  books: Book[];
  /** 책 id → 밑줄 개수 */
  quoteCounts: Record<string, number>;
};

/** 상태 필터가 달린 표지 그리드 */
export default function BookShelf({ books, quoteCounts }: Props) {
  const [filter, setFilter] = useState<Filter>("all");
  const shown = filter === "all" ? books : books.filter((book) => book.status === filter);

  return (
    <>
      <div className={styles.toolbar}>
        <div role="group" aria-label="상태로 거르기" className={styles.filters}>
          {filters.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              aria-pressed={filter === key}
              onClick={() => setFilter(key)}
              className={styles.filter}
            >
              {label}
            </button>
          ))}
        </div>
        <p className={styles.order}>최근에 읽은 순</p>
      </div>

      <section aria-label="책 목록" className={styles.grid}>
        {shown.map((book) => (
          <Link key={book.id} href={`/reading/quotes?book=${book.id}`} className={styles.card}>
            <span aria-hidden="true" className={styles.cover}>
              <BookCover book={book} width={240} shadow={false} />
            </span>
            <span className={styles.title}>{book.title}</span>
            <span className={styles.author}>{book.author}</span>
            <span className={styles.meta}>
              {book.status === "want" ? (
                "읽고 싶은 책"
              ) : (
                <>
                  <Stars rating={book.rating} />
                  {book.rating ? " · " : ""}밑줄 {quoteCounts[book.id] ?? 0}
                </>
              )}
            </span>
          </Link>
        ))}
      </section>
    </>
  );
}
