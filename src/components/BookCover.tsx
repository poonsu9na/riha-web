import Image from "next/image";
import type { Book } from "@/content/types";
import styles from "./BookCover.module.css";

type Props = {
  book: Book;
  /** 렌더링 폭(px). next/image sizes 계산용 */
  width?: number;
  shadow?: boolean;
};

/** 2:3 비율 책 표지. 이미지가 없으면 coverColor 로 채운다 */
export default function BookCover({ book, width = 180, shadow = true }: Props) {
  return (
    <span
      className={`${styles.cover} ${shadow ? styles.shadow : ""}`}
      style={{ backgroundColor: book.coverColor }}
    >
      {book.coverSrc ? (
        <Image src={book.coverSrc} alt="" fill sizes={`${width}px`} className={styles.image} />
      ) : null}
    </span>
  );
}
