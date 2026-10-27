import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CaseImage from "@/components/works/CaseImage";
import ProjectLinks from "@/components/works/ProjectLinks";
import { getProject, projects } from "@/content/projects";
import styles from "./page.module.css";

export function generateStaticParams() {
  return projects.filter((project) => project.caseStudy).map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: PageProps<"/works/[id]">): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);
  if (!project?.caseStudy) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { images: [project.caseStudy.hero.src] },
  };
}

export default async function WorkDetailPage({ params }: PageProps<"/works/[id]">) {
  const { id } = await params;
  const project = getProject(id);
  if (!project?.caseStudy) notFound();
  const { hero, credits, sections, source } = project.caseStudy;
  // 목록용 "자세히 보기"(이 페이지 자신)는 빼고 사이트 주소 같은 외부 링크만 보여준다
  const externalLinks = project.links.filter((link) => !link.href.startsWith("/"));

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <Link href="/works" className={styles.back}>
          ← 만든 것들
        </Link>
        <p className={styles.eyebrow}>Case study · {project.year}</p>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.summary}>{project.summary}</p>
        <dl className={styles.credits}>
          {credits.map((credit) => (
            <div key={credit.label} className={styles.credit}>
              <dt className={styles.creditLabel}>{credit.label}</dt>
              <dd className={styles.creditValue}>{credit.value}</dd>
            </div>
          ))}
        </dl>
        {externalLinks.length > 0 && (
          <div className={styles.links}>
            <ProjectLinks links={externalLinks} />
          </div>
        )}
      </header>

      <div className={styles.hero}>
        <CaseImage image={hero} priority />
      </div>

      {sections.map((section, index) => (
        <section key={section.title} className={styles.section}>
          <div className={styles.sectionText}>
            <p className={styles.sectionNumber}>{String(index + 1).padStart(2, "0")}</p>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
            {section.items && (
              <ul className={styles.items}>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
          {section.images && section.layout === "row" ? (
            <div className={styles.imageRow}>
              {section.images.map((image) => (
                <CaseImage key={image.src} image={image} />
              ))}
            </div>
          ) : (
            section.images?.map((image) => <CaseImage key={image.src} image={image} />)
          )}
        </section>
      ))}

      <footer className={styles.footer}>
        <Link href="/works" className={styles.back}>
          ← 다른 작업 보기
        </Link>
        {source && (
          <a href={source.href} target="_blank" rel="noreferrer" className={styles.source}>
            {source.label} ↗
          </a>
        )}
      </footer>
    </article>
  );
}
