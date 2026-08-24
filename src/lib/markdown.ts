import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

export type MarkdownDoc = {
  html: string;
  data: Record<string, unknown>;
};

/** Path helper for files under the repo-root `content/` directory. */
export function contentPath(...segments: string[]): string {
  return path.join(process.cwd(), "content", ...segments);
}

/**
 * Reads a Markdown file, parses optional frontmatter, and renders the body to
 * HTML. Returns null if the file doesn't exist. Server-only (uses fs).
 * Content is authored by the site owner, so rendered HTML is trusted.
 */
export async function renderMarkdownFile(
  absPath: string
): Promise<MarkdownDoc | null> {
  if (!fs.existsSync(absPath)) return null;
  const raw = fs.readFileSync(absPath, "utf8");
  const { content, data } = matter(raw);
  // sanitize: false lets the owner's own Markdown include raw HTML — e.g.
  // <figure>/<figcaption> for captions and <video> for demo clips.
  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content);
  // Lazy-load images so image-heavy case studies stay fast.
  const html = processed
    .toString()
    .replace(/<img /g, '<img loading="lazy" decoding="async" ');
  return { html, data: data as Record<string, unknown> };
}
