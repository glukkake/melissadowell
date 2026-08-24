"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Prose.module.css";

type Zoomed = { src: string; alt: string };

// Renders trusted case-study Markdown HTML and makes its images click-to-zoom in
// a native <dialog>. showModal() handles the accessible parts for us: focus moves
// into the dialog, focus is trapped, Escape closes, and focus returns to the
// triggering image afterward.
export function Prose({ html }: { html: string }) {
  const proseRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [zoomed, setZoomed] = useState<Zoomed | null>(null);

  // Wire every rendered image up as a zoom trigger (keyboard + pointer).
  useEffect(() => {
    const root = proseRef.current;
    if (!root) return;
    const imgs = Array.from(root.querySelectorAll("img"));
    const cleanups: Array<() => void> = [];
    imgs.forEach((img) => {
      img.classList.add(styles.zoomable);
      img.setAttribute("role", "button");
      img.setAttribute("tabindex", "0");
      const alt = img.getAttribute("alt")?.trim();
      img.setAttribute(
        "aria-label",
        alt ? `View full size: ${alt}` : "View image full size"
      );
      const open = () =>
        setZoomed({ src: img.currentSrc || img.src, alt: img.getAttribute("alt") || "" });
      const onClick = () => open();
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      };
      img.addEventListener("click", onClick);
      img.addEventListener("keydown", onKey);
      cleanups.push(() => {
        img.removeEventListener("click", onClick);
        img.removeEventListener("keydown", onKey);
      });
    });
    return () => cleanups.forEach((c) => c());
  }, [html]);

  useEffect(() => {
    const d = dialogRef.current;
    if (zoomed && d && !d.open) d.showModal();
  }, [zoomed]);

  return (
    <>
      <div
        className="prose"
        ref={proseRef}
        // Content is the site owner's own trusted Markdown.
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label="Full-size image"
        onClose={() => setZoomed(null)}
        onClick={(e) => {
          // Click on the backdrop (the dialog element itself) closes it.
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
      >
        {zoomed && (
          <>
            <button
              type="button"
              className={styles.close}
              aria-label="Close full-size image"
              onClick={() => dialogRef.current?.close()}
            >
              ×
            </button>
            <img src={zoomed.src} alt={zoomed.alt} className={styles.zoomImg} />
          </>
        )}
      </dialog>
    </>
  );
}
