import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import type { Project } from "@/content/types";
import styles from "./FeaturedWorks.module.css";

type Props = {
  projects: Project[];
};

// 홈에서는 최근 작업 몇 개만 섬네일로 보여 주고 나머지는 포트폴리오 페이지로 넘긴다
const HOME_LIMIT = 6;

/** "포트폴리오": 대표 프로젝트 섬네일. 상세 페이지가 있으면 바로 상세로, 없으면 목록의 그 항목으로 간다 */
export default function FeaturedWorks({ projects }: Props) {
  return (
    <section className={styles.section}>
      <SectionHeader title="포트폴리오" moreHref="/works" moreLabel="프로젝트 모두 보기" />
      <div className={styles.grid}>
        {projects.slice(0, HOME_LIMIT).map((project) => (
          <Link
            key={project.id}
            href={project.caseStudy ? `/works/${project.id}` : `/works#${project.id}`}
            className={styles.item}
          >
            <span className={styles.thumb} style={{ backgroundColor: project.coverColor }}>
              {project.coverSrc && (
                <Image
                  src={project.coverSrc}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 360px"
                  className={styles.thumbImage}
                />
              )}
            </span>
            <span className={styles.year}>{project.year}</span>
            <span className={styles.title}>{project.title}</span>
          </Link>
        ))}
      </div>
      {projects.length > HOME_LIMIT && (
        <div className={styles.moreRow}>
          <Link href="/works" className={styles.moreButton}>
            프로젝트 모두 보기 →
          </Link>
        </div>
      )}
    </section>
  );
}
