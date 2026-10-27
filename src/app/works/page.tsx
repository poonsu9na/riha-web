import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import FeaturedProject from "@/components/works/FeaturedProject";
import ProjectList from "@/components/works/ProjectList";
import ProjectToc from "@/components/works/ProjectToc";
import { profile, projects } from "@/content/projects";
import { site } from "@/content/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "포트폴리오",
};

export default function WorksPage() {
  // 목차 번호를 전체 순서 기준으로 유지하려고 index 를 붙여 둔다
  const indexed = projects.map((project, index) => ({ project, index }));
  const featured = indexed.filter(({ project }) => project.featured);
  const others = indexed.filter(({ project }) => !project.featured);

  return (
    <>
      <div className={styles.intro}>
        <PageIntro eyebrow="03 — 만들기" title="만든 것들" description={site.intro} />
        <dl className={styles.skills}>
          {profile.skills.map((skill) => (
            <div key={skill.label} className={styles.skill}>
              <dt className={styles.skillLabel}>{skill.label}</dt>
              <dd className={styles.skillValue}>{skill.value}</dd>
            </div>
          ))}
          {profile.resumeHref && (
            <div className={styles.skill}>
              <dt className={styles.skillLabel}>이력서</dt>
              <dd className={styles.skillValue}>
                <a href={profile.resumeHref} target="_blank" rel="noreferrer" className={styles.textLink}>
                  PDF로 보기
                </a>
              </dd>
            </div>
          )}
        </dl>
      </div>

      <ProjectToc projects={projects} />

      {featured.map(({ project, index }) => (
        <FeaturedProject key={project.id} project={project} index={index} />
      ))}

      {/* featured 가 아닌 프로젝트가 있을 때만 "그 밖에 만든 것" 목록을 보여준다 */}
      {others.length > 0 && <ProjectList items={others} />}

      <section aria-labelledby="works-contact" className={styles.contact}>
        <h2 id="works-contact" className={styles.contactTitle}>
          함께 만들 일이 있다면
        </h2>
        {site.email ? (
          <a href={`mailto:${site.email}`} className={styles.textLink}>
            {site.email}
          </a>
        ) : (
          <span className={styles.textLink}>[이메일 주소]</span>
        )}
      </section>
    </>
  );
}
