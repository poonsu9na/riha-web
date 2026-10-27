import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import type { Project } from "@/content/types";
import styles from "./FeaturedWorks.module.css";

type Props = {
  projects: Project[];
};

/** "포트폴리오": 대표 프로젝트 목록 */
export default function FeaturedWorks({ projects }: Props) {
  return (
    <section className={styles.section}>
      <SectionHeader title="포트폴리오" moreHref="/works" moreLabel="프로젝트 모두 보기" />
      <div className={styles.grid}>
        {projects.map((project) => (
          <Link key={project.id} href="/works" className={styles.item}>
            <span className={styles.year}>{project.year}</span>
            <span>
              <span className={styles.title}>{project.title}</span>
              <span className={styles.summary}>{project.summary}</span>
              <span className={styles.meta}>
                {[project.role, project.stack.join(", ")].filter(Boolean).join(" · ")}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
