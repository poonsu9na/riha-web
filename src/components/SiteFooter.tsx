import Logo from "@/components/Logo";
import { site } from "@/content/site";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  const links = site.links.filter((link) => link.href);

  return (
    <footer id="about" className={styles.footer}>
      <div>
        <Logo className={styles.logo} />
        <p className={styles.description}>
          {site.domain} · {site.description}
        </p>
      </div>
      <nav aria-label="외부 링크" className={styles.links}>
        {links.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
        {site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}
      </nav>
    </footer>
  );
}
