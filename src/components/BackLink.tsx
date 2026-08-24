import Link from "next/link";
import styles from "./BackLink.module.css";

// Plain back breadcrumb used at the top of every subpage (résumé + case studies).
export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <nav className={styles.wrap} aria-label="Breadcrumb">
      <Link href={href} className={styles.back}>
        <span className={styles.arrow} aria-hidden="true">
          ←
        </span>
        <span className={styles.label}>{label}</span>
      </Link>
    </nav>
  );
}
