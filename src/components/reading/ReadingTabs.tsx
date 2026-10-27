import Link from "next/link";
import { books } from "@/content/books";
import { quotes } from "@/content/quotes";
import styles from "./ReadingTabs.module.css";

type Props = {
  current: "books" | "quotes";
};

/** 읽기 섹션 상단의 "읽은 책 / 밑줄 문장" 탭 */
export default function ReadingTabs({ current }: Props) {
  const doneCount = books.filter((book) => book.status === "done").length;
  const tabs = [
    { key: "books", label: "읽은 책", count: doneCount, href: "/reading" },
    { key: "quotes", label: "밑줄 문장", count: quotes.length, href: "/reading/quotes" },
  ] as const;

  return (
    <nav aria-label="읽기 보기 방식" className={styles.tabs}>
      {tabs.map((tab) => {
        const active = tab.key === current;
        return (
          <Link
            key={tab.key}
            href={tab.href}
            aria-current={active ? "page" : undefined}
            className={`${styles.tab} ${active ? styles.active : ""}`}
          >
            {tab.label} {tab.count}
          </Link>
        );
      })}
    </nav>
  );
}
