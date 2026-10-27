import type { Project } from "@/content/types";
import { projectNumber } from "./projectNumber";
import styles from "./ProjectToc.module.css";

type Props = {
  projects: Project[];
};

/** "01 제목 ······ 연도" 점선 목차. 각 줄은 프로젝트 블록으로 가는 앵커 */
export default function ProjectToc({ projects }: Props) {
  return (
    <section aria-labelledby="works-toc" className={styles.toc}>
      <h2 id="works-toc" className={styles.heading}>
        목차
      </h2>
      <ol className={styles.list}>
        {projects.map((project, i) => (
          <li key={project.id}>
            <a href={`#${project.id}`} className={styles.row}>
              <span className={styles.number}>{projectNumber(i)}</span>
              <span className={styles.title}>{project.title}</span>
              <span aria-hidden="true" className={styles.leader} />
              <span className={styles.year}>{project.year}</span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
