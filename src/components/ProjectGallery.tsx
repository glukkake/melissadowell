import Link from "next/link";
import { projects } from "@/lib/projects";
import styles from "./ProjectGallery.module.css";

// Static by design — the only load motion on the site is the hero.
export function ProjectGallery() {
  return (
    <ul className={styles.grid}>
      {projects.map((project) => (
        <li key={project.slug} className={styles.item}>
          <Link
            href={`/projects/${project.slug}`}
            className={styles.card}
            aria-label={`${project.name} — ${project.company} case study`}
          >
            <div className={styles.cardTop}>
              <span className={styles.company}>{project.company}</span>
              <span className={styles.years}>{project.years}</span>
            </div>
            <h3 className={styles.name}>{project.name}</h3>
            <p className={styles.summary}>{project.summary}</p>
            <div className={styles.meta}>
              <span className={styles.role}>{project.role}</span>
              <span className={styles.cta} aria-hidden="true">
                View case study →
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
