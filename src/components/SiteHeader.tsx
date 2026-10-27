"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, site } from "@/content/site";
import styles from "./SiteHeader.module.css";

function isActive(pathname: string, href: string) {
  if (href.includes("#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        {site.name}
      </Link>
      <nav aria-label="주 메뉴" className={styles.nav}>
        {navItems.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={active ? styles.active : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
