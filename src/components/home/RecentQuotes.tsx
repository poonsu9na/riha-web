import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { getBook } from "@/content/books";
import type { Quote } from "@/content/types";
import styles from "./RecentQuotes.module.css";

type Props = {
  quotes: Quote[];
};

/** "최근 문장": 짧은 인용 몇 개. 길면 4줄에서 자르고, 누르면 그 책의 문장 목록으로 간다 */
export default function RecentQuotes({ quotes }: Props) {
  return (
    <section className={styles.section}>
      <SectionHeader title="최근 문장" moreHref="/reading/quotes" moreLabel="문장 모두 보기" />
      <div className={styles.grid}>
        {quotes.map((quote) => {
          const book = getBook(quote.bookId);
          const source = [book?.title, book?.author].filter(Boolean).join(" · ");
          return (
            <Link key={quote.id} href={`/reading/quotes?book=${quote.bookId}`} className={styles.item}>
              <figure className={styles.figure}>
                <blockquote className={styles.quote}>{quote.text}</blockquote>
                {source && <figcaption className={styles.source}>{source}</figcaption>}
              </figure>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
