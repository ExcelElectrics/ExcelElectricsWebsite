"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  COOKIE_CONSENT_ACCEPTED,
  COOKIE_CONSENT_ESSENTIAL_ONLY,
  hasStoredConsentChoice,
  setStoredConsent,
  type CookieConsentValue,
} from "@/components/CookieConsent/cookieConsent";

export { COOKIE_CONSENT_ACCEPTED, COOKIE_CONSENT_ESSENTIAL_ONLY } from "@/components/CookieConsent/cookieConsent";

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (hasStoredConsentChoice()) return;
    const timer = window.setTimeout(() => setVisible(true), 0);
    return () => window.clearTimeout(timer);
  }, []);

  const dismiss = (value: CookieConsentValue) => {
    setStoredConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      aria-live="polite"
      className="fixed inset-x-3 bottom-3 z-[130] mx-auto max-w-6xl rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 shadow-[0_18px_45px_-24px_rgba(15,23,42,0.4)] md:bottom-6 md:px-6 md:py-5 dark:shadow-[0_18px_45px_-24px_rgba(0,0,0,0.65)]"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-8">
        <div className="min-w-0 flex-1 space-y-1 md:space-y-2">
          <h2 id="cookie-consent-title" className="text-sm font-semibold text-foreground md:text-base">
            Cookies on this site
          </h2>
          <p id="cookie-consent-desc" className="text-[13px] leading-snug text-[var(--text-muted)] md:text-sm md:leading-relaxed">
            We use cookies as explained in our{" "}
            <Link
              href="/legal/cookie-policy"
              className="font-medium text-brand-blue underline-offset-2 hover:underline"
            >
              Cookie policy
            </Link>
            {" "}
            - including those needed for the site to work and optional analytics such as Google Analytics. Choose{" "}
            <strong className="font-semibold text-foreground">Accept</strong> to allow analytics cookies, or{" "}
            <strong className="font-semibold text-foreground">Essential only</strong> to use necessary cookies only.
          </p>
        </div>
        <div className="grid shrink-0 grid-cols-2 items-center gap-2 pr-16 md:flex md:flex-wrap md:justify-end md:gap-3 md:pr-0">
          <button
            type="button"
            onClick={() => dismiss(COOKIE_CONSENT_ACCEPTED)}
            className="inline-flex cursor-pointer items-center justify-center rounded-md bg-brand-blue whitespace-nowrap px-3 py-2.5 text-sm font-semibold md:px-6 text-white shadow-sm transition hover:bg-brand-blue/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/45"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => dismiss(COOKIE_CONSENT_ESSENTIAL_ONLY)}
            className="inline-flex cursor-pointer items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] whitespace-nowrap px-3 py-2.5 text-sm font-semibold md:px-6 text-foreground transition hover:border-brand-blue/45 hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40"
          >
            Essential only
          </button>
        </div>
      </div>
    </div>
  );
}
