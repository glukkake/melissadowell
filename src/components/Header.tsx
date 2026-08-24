import Link from "next/link";
import styles from "./Header.module.css";
import { ThemeToggle } from "./ThemeToggle";

// Update this as you change roles — it's the "currently at" status in the header.
const CURRENT = {
  company: "Turngate",
  companyUrl: "https://turngate.io",
  location: "Remote, USA",
};

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Link href="/" className={styles.home} aria-label="Home — Melissa Dowell">
            MD
          </Link>
          <p className={styles.status}>
            <span className={styles.statusLabel}>Currently</span>{" "}
            <span className={styles.statusMain}>
              @{" "}
              <a
                className={styles.statusLink}
                href={CURRENT.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {CURRENT.company} ↗
              </a>{" "}
              · {CURRENT.location}
            </span>
          </p>
        </div>

        <ThemeToggle />
      </div>
    </header>
  );
}
