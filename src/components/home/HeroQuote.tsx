import Link from "next/link";
import type { Quote } from "@/content/types";
import { getBook } from "@/content/books";
import styles from "./HeroQuote.module.css";

type Props = {
  quote: Quote;
};

/** 홈 맨 위, 가운데 놓이는 큰 문장 한 줄 */
export default function HeroQuote({ quote }: Props) {
  const book = getBook(quote.bookId);
  const source = [book?.title, book?.author, quote.page ? `p.${quote.page}` : undefined].filter(Boolean).join(" · ");

  return (
    <section aria-label="밑줄 그은 문장" className={styles.hero}>
      <p className={styles.label}>밑줄 그은 문장</p>
      <Link href="/reading/quotes" className={styles.link}>
        <blockquote className={styles.quote}>{quote.text}</blockquote>
      </Link>
      <span aria-hidden="true" className={styles.rule} />
      {source && <p className={styles.source}>{source}</p>}
    </section>
  );
}
