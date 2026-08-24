import fs from "node:fs";
import path from "node:path";
import { BackLink } from "@/components/BackLink";
import type { Metadata } from "next";
import { renderMarkdownFile, contentPath } from "@/lib/markdown";
import styles from "./resume.module.css";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Résumé of Melissa Dowell, Product Designer.",
};

// Drop a PDF here to enable the download button: public/melissa-dowell-resume.pdf
const RESUME_PDF = "/melissa-dowell-resume.pdf";

export default async function ResumePage() {
  const doc = await renderMarkdownFile(contentPath("resume.md"));
  const hasPdf = fs.existsSync(path.join(process.cwd(), "public", RESUME_PDF));

  return (
    <article className={styles.wrap}>
      <BackLink href="/" label="Home" />

      <header className={styles.header}>
        <h1 className={styles.title}>Résumé</h1>
        <p className={styles.sub}>Melissa Dowell — Product Designer</p>
        {hasPdf && (
          <div className={styles.actions}>
            <a
              className={styles.download}
              href={RESUME_PDF}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download PDF ↗
            </a>
          </div>
        )}
      </header>

      {doc ? (
        // Content is the site owner's own trusted Markdown.
        <div className="prose" dangerouslySetInnerHTML={{ __html: doc.html }} />
      ) : (
        <div className={styles.placeholder}>
          <p>
            Add your résumé content two ways (either or both):
          </p>
          <ul>
            <li>
              <code>content/resume.md</code> — rendered inline on this page.
            </li>
            <li>
              <code>public{RESUME_PDF}</code> — enables the “Download PDF” button.
            </li>
          </ul>
        </div>
      )}
    </article>
  );
}
