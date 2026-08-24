import styles from "./Footer.module.css";
import { ObfuscatedEmail } from "./ObfuscatedEmail";

// Contact + social links.
const CONTACT = {
  emailUser: "hello",
  emailDomain: "melissadowell.com",
  linkedin: "https://www.linkedin.com/in/melissadowell/",
  github: "https://github.com/glukkake",
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.cta}>
          <h2 className={styles.heading}>Let&rsquo;s work together</h2>
          <p className={styles.sub}>
            Open to senior product design roles. The fastest way to reach me is email.
          </p>
          <ObfuscatedEmail
            user={CONTACT.emailUser}
            domain={CONTACT.emailDomain}
            className={styles.email}
          />
        </div>

        <nav className={styles.socials} aria-label="Social and professional links">
          <a
            className={styles.social}
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
            <span>LinkedIn</span>
          </a>
          <a
            className={styles.social}
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            <span>GitHub</span>
          </a>
        </nav>

        <p className={styles.copyright}>
          © {year} Melissa Dowell. Built with Claude, hosted on GitHub!
        </p>
      </div>
    </footer>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.7 0-.7 0-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.3-.5-1.5.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z" />
    </svg>
  );
}
