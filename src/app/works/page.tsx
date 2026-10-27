import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import FeaturedProject from "@/components/works/FeaturedProject";
import { profile, projects } from "@/content/projects";
import { site } from "@/content/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "포트폴리오",
};

export default function WorksPage() {
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

      {projects.map((project, index) => (
        <FeaturedProject key={project.id} project={project} index={index} />
      ))}

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
