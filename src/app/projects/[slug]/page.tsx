import { CaseStudyNav } from "@/components/CaseStudyNav";
import { BackLink } from "@/components/BackLink";
import { Prose } from "@/components/Prose";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allProjects, projects } from "@/lib/projects";
import { renderMarkdownFile, contentPath } from "@/lib/markdown";
import styles from "./page.module.css";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${project.company}`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const doc = await renderMarkdownFile(contentPath("projects", `${slug}.md`));
  const live = typeof doc?.data.live === "string" ? doc.data.live : undefined;
  const repo = typeof doc?.data.repo === "string" ? doc.data.repo : undefined;
  const status = typeof doc?.data.status === "string" ? doc.data.status : undefined;
  // Optional external-link chips from frontmatter: links: [{ label, url }]
  const links = (Array.isArray(doc?.data.links) ? doc.data.links : []).filter(
    (l): l is { label: string; url: string } =>
      !!l &&
      typeof l === "object" &&
      typeof (l as { label?: unknown }).label === "string" &&
      typeof (l as { url?: unknown }).url === "string"
  );

  const inMain = projects.some((p) => p.slug === slug);
  const back = inMain
    ? { href: "/#work", label: "All work" }
    : { href: "/#other-works", label: "Other works" };

  return (
    <article className={styles.wrap}>
      <BackLink href={back.href} label={back.label} />

      <header className={styles.header}>
        <p className={styles.meta}>
          {project.company} · {project.role} · {project.years}
        </p>
        <h1 className={styles.title}>{project.name}</h1>
        <p className={styles.summary}>{project.summary}</p>
        {(live || repo || links.length > 0) && (
          <p className={styles.liveRow}>
            {live && (
              <a
                className={styles.live}
                href={live}
                target="_blank"
                rel="noopener noreferrer"
              >
                View live site ↗
              </a>
            )}
            {repo && (
              <a
                className={styles.live}
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                View the repo ↗
              </a>
            )}
            {links.map((l) => (
              <a
                key={l.url}
                className={styles.live}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {l.label} ↗
              </a>
            ))}
            {status && <span className={styles.status}>{status}</span>}
          </p>
        )}
      </header>

      {doc ? (
        <Prose html={doc.html} />
      ) : (
        <div className={styles.body}>
          <section aria-labelledby="overview-heading">
            <h2 id="overview-heading">Overview</h2>
            <p className={styles.placeholder}>
              Draft — add this case study by creating{" "}
              <code>content/projects/{slug}.md</code>.
            </p>
          </section>
        </div>
      )}

      <CaseStudyNav slug={slug} place="bottom" />
    </article>
  );
}
