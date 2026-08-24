"use client";

import { useEffect, useState } from "react";

type Props = {
  /** local part, e.g. "hello" — kept separate so the full address is never a
   *  single literal in the shipped HTML/JS (light anti-scraping measure). */
  user: string;
  /** domain part, e.g. "example.com" */
  domain: string;
  className?: string;
};

// The address is only assembled into a real mailto: after the component mounts
// in the browser. The server-rendered fallback shows a human-readable, non-linked
// hint that naive email harvesters won't parse as an address.
export function ObfuscatedEmail({ user, domain, className }: Props) {
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    setAddress(`${user}@${domain}`);
  }, [user, domain]);

  if (!address) {
    return (
      <span className={className}>
        {user}&nbsp;[at]&nbsp;{domain}
      </span>
    );
  }

  return (
    <a className={className} href={`mailto:${address}`}>
      {address}
      <span aria-hidden="true"> ↗</span>
    </a>
  );
}
