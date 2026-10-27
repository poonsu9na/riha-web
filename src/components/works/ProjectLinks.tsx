import Link from "next/link";
import type { Project } from "@/content/types";
import styles from "./ProjectLinks.module.css";

type Props = {
  links: Project["links"];
};

/** 프로젝트 링크 버튼 줄. href 가 빈 링크는 숨긴다 */
export default function ProjectLinks({ links }: Props) {
  const visible = links.filter((link) => link.href);
  if (visible.length === 0) return null;

  return (
    <div className={styles.links}>
      {visible.map((link) =>
        link.href.startsWith("/") ? (
          <Link key={link.label} href={link.href} className={styles.button}>
            {link.label}
          </Link>
        ) : (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className={styles.button}>
            {link.label}
          </a>
        ),
      )}
    </div>
  );
}
