import type { ReactNode } from "react";
import styles from "./PageIntro.module.css";

type Props = {
  eyebrow: string;
  title: string;
  description: ReactNode;
  children?: ReactNode;
};

/** 각 섹션 페이지 상단의 "01 — 읽기 / 제목 / 소개" 블록 */
export default function PageIntro({ eyebrow, title, description, children }: Props) {
  return (
    <section className={styles.intro}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      {children}
    </section>
  );
}
