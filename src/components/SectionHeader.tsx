import Link from "next/link";
import styles from "./SectionHeader.module.css";

type Props = {
  title: string;
  moreHref?: string;
  moreLabel?: string;
};

/** 홈 섹션의 "제목 ······ 모두 보기" 줄 */
export default function SectionHeader({ title, moreHref, moreLabel }: Props) {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      {moreHref && (
        <Link href={moreHref} className={styles.more}>
          {moreLabel}
        </Link>
      )}
    </div>
  );
}
