import Link from "next/link";
import BookCover from "@/components/BookCover";
import SectionHeader from "@/components/SectionHeader";
import Stars from "@/components/Stars";
import type { Book } from "@/content/types";
import styles from "./RecentBooks.module.css";

type Props = {
  reading?: Book;
  done: Book[];
};

/** "요즘 읽은 책": 읽는 중인 책 하나 + 다 읽은 책 몇 권 */
export default function RecentBooks({ reading, done }: Props) {
  const percent = reading?.progress
    ? Math.round((reading.progress.current / reading.progress.total) * 100)
    : undefined;

  return (
    <section className={styles.section}>
      <SectionHeader title="요즘 읽은 책" moreHref="/reading" moreLabel="책 목록 모두 보기" />
      <div className={styles.body}>
        {reading && (
          <Link href="/reading" className={styles.current}>
            <span aria-hidden="true" className={styles.currentCover}>
              <BookCover book={reading} width={150} />
            </span>
            <span className={styles.currentInfo}>
              <span className={styles.status}>
                지금 읽는 중{percent !== undefined && ` · ${percent}%`}
              </span>
              <span className={styles.currentTitle}>{reading.title}</span>
              <span className={styles.author}>{reading.author}</span>
            </span>
          </Link>
        )}
        <div className={styles.grid}>
          {done.map((book) => (
            <Link key={book.id} href="/reading" className={styles.book}>
              <span aria-hidden="true" className={styles.cover}>
                <BookCover book={book} width={140} shadow={false} />
              </span>
              <span className={styles.title}>{book.title}</span>
              <span className={styles.stars}>
                <Stars rating={book.rating} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
