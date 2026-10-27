import Link from "next/link";
import styles from "./SectionIndex.module.css";

type Item = {
  href: string;
  title: string;
  description: string;
};

type Props = {
  items: Item[];
};

/** 읽기·사진·포트폴리오 세 칸 목차 */
export default function SectionIndex({ items }: Props) {
  return (
    <section aria-label="세 가지 기록" className={styles.index}>
      {items.map((item, i) => (
        <Link key={item.href} href={item.href} className={styles.item}>
          <span className={styles.number}>{String(i + 1).padStart(2, "0")}</span>
          <span className={styles.title}>{item.title}</span>
          <span className={styles.description}>{item.description}</span>
        </Link>
      ))}
    </section>
  );
}
