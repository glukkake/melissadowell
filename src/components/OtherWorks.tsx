"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { otherWorks } from "@/lib/projects";
import styles from "./OtherWorks.module.css";

// A single-row, scroll-snapping strip of earlier + personal projects, seated on a
// white tray with flanking arrows and pagination dots. Card links are
// keyboard-focusable (focus scrolls them into view); arrows loop past the ends.
export function OtherWorks() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const n = otherWorks.length;

  const items = (track: HTMLUListElement) =>
    Array.from(track.querySelectorAll<HTMLLIElement>(":scope > li"));

  // Active = the card nearest the left edge; snaps to the last dot at the end.
  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const lis = items(track);
    if (!lis.length) return;
    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 4) {
      setActive(n - 1);
      return;
    }
    const left = track.getBoundingClientRect().left;
    let best = 0;
    let bestDist = Infinity;
    lis.forEach((li, i) => {
      const d = Math.abs(li.getBoundingClientRect().left - left);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActive(best);
  }, [n]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const ticking = useRef(false);
  const onScroll = () => {
    if (ticking.current) return;
    ticking.current = true;
    requestAnimationFrame(() => {
      ticking.current = false;
      measure();
    });
  };

  const scrollToIndex = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const li = items(track)[i];
    if (!li) return;
    const delta =
      li.getBoundingClientRect().left - track.getBoundingClientRect().left;
    const padLeft = parseFloat(getComputedStyle(track).paddingLeft || "0");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({
      left: track.scrollLeft + delta - padLeft,
      behavior: reduce ? "auto" : "smooth",
    });
  };

  const go = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const atEnd =
      track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    const atStart = track.scrollLeft <= 4;
    if (dir === 1 && atEnd) return scrollToIndex(0); // loop to start
    if (dir === -1 && atStart) return scrollToIndex(n - 1); // loop to end
    const base = atEnd ? n - 1 : active;
    scrollToIndex(Math.min(Math.max(base + dir, 0), n - 1));
  };

  return (
    <div className={styles.outer}>
      <div className={styles.wrap}>
        <button
          type="button"
          className={styles.arrow}
          onClick={() => go(-1)}
          aria-label="Scroll to previous works"
        >
          ←
        </button>

        <ul className={styles.track} ref={trackRef} onScroll={onScroll}>
          {otherWorks.map((p) => (
            <li key={p.slug} className={styles.item}>
              <Link
                href={`/projects/${p.slug}`}
                className={styles.card}
                aria-label={`${p.name} — ${p.company} case study`}
              >
                <span className={styles.thumb}>
                  {p.thumb && (
                    <Image
                      src={p.thumb}
                      alt=""
                      fill
                      className={styles.img}
                      style={
                        p.thumbPos ? { objectPosition: p.thumbPos } : undefined
                      }
                      sizes="(max-width: 560px) 220px, 260px"
                    />
                  )}
                </span>
                <span className={styles.body}>
                  <span className={styles.name}>{p.name}</span>
                  <span className={styles.metaLine}>
                    {p.role} · {p.years}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={styles.arrow}
          onClick={() => go(1)}
          aria-label="Scroll to more works"
        >
          →
        </button>
      </div>

      <div className={styles.dots}>
        {otherWorks.map((p, i) => (
          <button
            key={p.slug}
            type="button"
            className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
            aria-label={`Go to ${p.name}`}
            aria-current={i === active ? "true" : undefined}
            onClick={() => scrollToIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
