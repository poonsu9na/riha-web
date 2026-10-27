import type { Project } from "@/content/types";
import ProjectLinks from "./ProjectLinks";
import { projectNumber } from "./projectNumber";
import styles from "./ProjectList.module.css";

type Props = {
  /** 목차 번호와 맞추기 위해 전체 목록에서의 index 를 함께 받는다 */
  items: { project: Project; index: number }[];
};

/** 대표가 아닌 프로젝트들의 간단한 목록 */
export default function ProjectList({ items }: Props) {
  if (items.length === 0) return null;

  return (
    <section aria-labelledby="works-more" className={styles.section}>
      <h2 id="works-more" className={styles.heading}>
        그 밖에 만든 것
      </h2>
      <ul className={styles.list}>
        {items.map(({ project, index }) => (
          <li key={project.id} id={project.id} className={styles.item}>
            <span className={styles.number}>{projectNumber(index)}</span>
            <div className={styles.body}>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.summary}>{project.summary}</p>
              <p className={styles.meta}>{[project.role, ...project.stack].join(" · ")}</p>
              <ProjectLinks links={project.links} />
            </div>
            <span className={styles.year}>{project.year}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
