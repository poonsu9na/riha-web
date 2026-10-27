import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import type { Project } from "@/content/types";
import styles from "./FeaturedWorks.module.css";

type Props = {
  projects: Project[];
};

/** "포트폴리오": 대표 프로젝트 목록. 상세 페이지가 있으면 바로 상세로, 없으면 목록의 그 항목으로 간다 */
export default function FeaturedWorks({ projects }: Props) {
  return (
    <section className={styles.section}>
      <SectionHeader title="포트폴리오" moreHref="/works" moreLabel="프로젝트 모두 보기" />
      <div className={styles.grid}>
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.caseStudy ? `/works/${project.id}` : `/works#${project.id}`}
            className={styles.item}
          >
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
