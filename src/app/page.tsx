import { Hero } from "@/components/Hero";
import { ProjectGallery } from "@/components/ProjectGallery";
import { OtherWorks } from "@/components/OtherWorks";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <section id="work" className={styles.work} aria-labelledby="work-title">
        <div className={styles.workHeader}>
          <h2 id="work-title" className={styles.workTitle}>
            Selected work
          </h2>
          <p className={styles.workSub}>
            A few things I&rsquo;ve designed and shipped.
          </p>
        </div>
        <ProjectGallery />
      </section>

      <section
        id="other-works"
        className={styles.work}
        aria-labelledby="other-title"
      >
        <div className={styles.workHeader}>
          <h2 id="other-title" className={styles.workTitle}>
            Other works
          </h2>
          <p className={styles.workSub}>
            Earlier projects, personal ventures, and the making of this site.
          </p>
        </div>
        <OtherWorks />
      </section>
    </div>
  );
}
