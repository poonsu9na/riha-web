import type { Metadata } from "next";
import Link from "next/link";
import BookCover from "@/components/BookCover";
import PageIntro from "@/components/PageIntro";
import BookShelf from "@/components/reading/BookShelf";
import ReadingTabs from "@/components/reading/ReadingTabs";
import { books } from "@/content/books";
import { quotes } from "@/content/quotes";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "읽은 책",
};

export default function ReadingPage() {
  const reading = books.filter((book) => book.status === "reading");
  const shelf = books.filter((book) => book.status !== "reading");
  const doneCount = books.filter((book) => book.status === "done").length;

  const quoteCounts: Record<string, number> = {};
  for (const quote of quotes) {
    quoteCounts[quote.bookId] = (quoteCounts[quote.bookId] ?? 0) + 1;
  }

  return (
    <>
      <PageIntro
        eyebrow="01 — 읽기"
        title="읽은 책들"
        description={`지금까지 ${doneCount}권을 읽었고, ${reading.length}권을 읽고 있습니다.`}
      >
        <ReadingTabs current="books" />
      </PageIntro>

      {reading.length > 0 ? (
        <section aria-label="지금 읽는 책" className={styles.reading}>
          {reading.map((book) => {
            const percent = book.progress
              ? Math.round((book.progress.current / book.progress.total) * 100)
              : 0;
            return (
              <Link key={book.id} href={`/reading/quotes?book=${book.id}`} className={styles.current}>
                <span aria-hidden="true" className={styles.currentCover}>
                  <BookCover book={book} width={140} />
                </span>
                <span className={styles.currentInfo}>
                  <span className={styles.status}>읽는 중</span>
                  <span className={styles.currentTitle}>{book.title}</span>
                  <span className={styles.byline}>
                    {[book.author, book.publisher].filter(Boolean).join(" · ")}
                  </span>
                  <span aria-hidden="true" className={styles.track}>
                    <span className={styles.bar} style={{ width: `${percent}%` }} />
                  </span>
                  <span className={styles.progress}>
                    {book.progress ? `${book.progress.current} / ${book.progress.total}쪽 · ` : ""}
                    밑줄 {quoteCounts[book.id] ?? 0}개
                  </span>
                </span>
              </Link>
            );
          })}
        </section>
      ) : null}

      <BookShelf books={shelf} quoteCounts={quoteCounts} />
    </>
  );
}
