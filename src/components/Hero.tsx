"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import styles from "./Hero.module.css";

export function Hero() {
  const reduce = useReducedMotion();
  const pathname = usePathname();
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Replay the anaglyph focus-in each time the home route is shown — the App
  // Router can keep this page cached, so relying on mount alone isn't enough.
  useEffect(() => {
    if (reduce) return;
    const el = titleRef.current;
    if (!el) return;
    el.style.animation = "none";
    void el.offsetWidth; // reflow to restart the CSS animation
    el.style.animation = "";
  }, [pathname, reduce]);

  // Same starting state on server and client (useReducedMotion is only known in the
  // browser, so branching here causes a hydration mismatch). Reduced motion gets an
  // instant transition instead of a different starting point.
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduce ? 0 : 0.6,
      delay: reduce ? 0 : delay,
      ease: "easeOut" as const,
    },
  });

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <motion.p className={`${styles.name} reveal`} {...rise(0)}>
        Melissa Dowell
      </motion.p>
      <motion.h1 ref={titleRef} id="hero-title" className={`${styles.title} reveal anaglyph`} {...rise(0.08)}>
        Artist turned designer for complex technical systems.
      </motion.h1>
      <motion.p className={`${styles.lede} reveal`} {...rise(0.16)}>
        I dig into an industry and the people who work in it, I prototype in code, and I care
        a lot about how things look. Equally at home starting from scratch or
        reworking a platform people already rely on.
      </motion.p>
      <motion.div className={`${styles.chips} reveal`} {...rise(0.24)}>
        <a href="#work" className={styles.chip}>
          <BriefcaseIcon />
          Work
        </a>
        <a href="#contact" className={styles.chip}>
          <MailIcon />
          Contact
        </a>
        <Link href="/resume" className={styles.chip}>
          Résumé
          <span className={styles.chipArrow} aria-hidden="true">
            ↗
          </span>
        </Link>
      </motion.div>
    </section>
  );
}

function BriefcaseIcon() {
  return (
    <svg className={styles.chipIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
      <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.187.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className={styles.chipIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
    </svg>
  );
}
