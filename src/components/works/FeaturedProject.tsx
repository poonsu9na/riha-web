import Image from "next/image";
import type { Project } from "@/content/types";
import ProjectLinks from "./ProjectLinks";
import { projectNumber } from "./projectNumber";
import styles from "./FeaturedProject.module.css";

type Props = {
  project: Project;
  index: number;
};

/** #rrggbb 배경이 어두우면 true. 스크린샷 자리 글자색을 고르는 데 쓴다 */
function isDark(hex: string): boolean {
  const match = /^#([0-9a-f]{6})$/i.exec(hex);
  if (!match) return false;
  const n = parseInt(match[1], 16);
  const r = (n >> 16) & 0xff;
  const g = (n >> 8) & 0xff;
  const b = n & 0xff;
  return 0.299 * r + 0.587 * g + 0.114 * b < 140;
}

/** 대표 프로젝트 큰 블록: 스크린샷 자리 + 문제/해결/결과(또는 요약) + 역할·스택 + 링크 */
export default function FeaturedProject({ project, index }: Props) {
  const details = [
    { label: "문제", value: project.problem },
    { label: "해결", value: project.solution },
    { label: "결과", value: project.result },
  ].filter((item) => item.value);
  const coverClass = isDark(project.coverColor) ? `${styles.cover} ${styles.coverDark}` : styles.cover;

  return (
    <article id={project.id} className={styles.project}>
      <div aria-hidden="true" className={coverClass} style={{ backgroundColor: project.coverColor }}>
        {project.coverSrc ? (
          <Image src={project.coverSrc} alt="" fill sizes="(max-width: 800px) 100vw, 560px" className={styles.coverImage} />
        ) : (
          "[스크린샷]"
        )}
      </div>
      <div>
        <p className={styles.eyebrow}>
          {projectNumber(index)} · {project.period ?? project.year}
        </p>
        <h2 className={styles.title}>{project.title}</h2>
        {details.length > 0 ? (
          <dl className={styles.details}>
            {details.map((item) => (
              <div key={item.label}>
                <dt className={styles.term}>{item.label}</dt>
                <dd className={styles.description}>{item.value}</dd>
              </div>
            ))}
          </dl>
        ) : (
          <p className={styles.summary}>{project.summary}</p>
        )}
        <p className={styles.meta}>{[project.role, ...project.stack].join(" · ")}</p>
        <ProjectLinks links={project.links} />
      </div>
    </article>
  );
}
