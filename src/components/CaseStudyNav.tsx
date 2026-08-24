import Link from "next/link";
import { projects, otherWorks } from "@/lib/projects";
import styles from "./CaseStudyNav.module.css";

// Prev / Next navigation shown at the bottom of case-study pages. Wraps around so
// every project always has a previous and a next, cycling within its own list
// (main gallery projects among themselves; Other Works among themselves).
export function CaseStudyNav({
  slug,
  place = "bottom",
}: {
  slug: string;
  place?: "top" | "bottom";
}) {
  const inMain = projects.some((p) => p.slug === slug);
  const list = inMain ? projects : otherWorks;

  const i = list.findIndex((p) => p.slug === slug);
  if (i === -1) return null;

  const prev = list[(i - 1 + list.length) % list.length];
  const next = list[(i + 1) % list.length];

  return (
    <nav
      className={`${styles.nav} ${place === "bottom" ? styles.bottom : styles.top}`}
      aria-label="More case studies"
    >
      <Link href={`/projects/${prev.slug}`} className={`${styles.link} ${styles.prev}`}>
        <span className={styles.dir}>← Prev</span>
        <span className={styles.name}>{prev.name}</span>
      </Link>

      <Link href={`/projects/${next.slug}`} className={`${styles.link} ${styles.next}`}>
        <span className={styles.dir}>Next →</span>
        <span className={styles.name}>{next.name}</span>
      </Link>
    </nav>
  );
}
