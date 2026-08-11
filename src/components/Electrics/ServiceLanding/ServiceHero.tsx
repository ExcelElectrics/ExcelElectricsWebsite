"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ELECTRICS_HERO_BOTTOM_ONLY } from "@/components/Electrics/ElectricsSection";
import {
  heroSecondaryBtnClass,
  primaryBtnClass,
  SERVICE_PHONE_LABEL,
  SERVICE_PHONE_TEL,
} from "@/components/Electrics/ServiceLanding/serviceLandingShared";

const HERO_REVEAL_DURATION_MS = 1050;
const revealDelay = (ms: number) =>
  ({ "--reveal-delay": `${ms}ms`, transitionDuration: `${HERO_REVEAL_DURATION_MS}ms` }) as React.CSSProperties;

type ServiceHeroProps = {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  lead: string;
  ticks?: string[];
  trustPoints?: string[];
  imageSrc: string;
  imageAlt: string;
  primaryCtaLabel: string;
  formHref?: string;
};

function IconMail({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function ServiceHero({
  eyebrow,
  title,
  titleAccent,
  lead,
  ticks,
  trustPoints,
  imageSrc,
  imageAlt,
  primaryCtaLabel,
  formHref = "/contact#enquiry-form",
}: ServiceHeroProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = contentRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      const frame = window.requestAnimationFrame(() => setIsVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const visibleClass = isVisible ? "is-visible" : "";

  return (
    <section className="electrics-hero-min-h relative isolate w-full scroll-mt-0 overflow-hidden bg-black">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="electrics-hero-overlay absolute inset-0" aria-hidden />

      <div
        className={`electrics-hero-min-h relative mx-auto flex w-full max-w-7xl items-end px-6 pt-16 md:items-center ${ELECTRICS_HERO_BOTTOM_ONLY}`}
      >
        <div ref={contentRef} className="max-w-4xl space-y-5 md:space-y-6">
          <p
            className={`reveal-rise ${visibleClass} text-[11px] font-semibold uppercase tracking-[0.2em] text-[#905bf4] md:text-xs`}
            style={revealDelay(0)}
          >
            {eyebrow}
          </p>

          <h1
            className={`reveal-rise ${visibleClass} text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl`}
            style={revealDelay(130)}
          >
            {title}
            {titleAccent ? (
              <>
                <br />
                <span className="text-[#905bf4]">{titleAccent}</span>
              </>
            ) : null}
          </h1>

          <p
            className={`reveal-rise ${visibleClass} max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg`}
            style={revealDelay(260)}
          >
            {lead}
          </p>

          {ticks && ticks.length > 0 ? (
            <ul
              className={`reveal-rise ${visibleClass} space-y-2 text-sm text-slate-200 md:text-[15px]`}
              style={revealDelay(320)}
            >
              {ticks.map((tick) => (
                <li key={tick} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#905bf4]" aria-hidden />
                  <span>{tick}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <div
            className={`reveal-rise ${visibleClass} flex flex-col gap-3 sm:flex-row sm:flex-wrap`}
            style={revealDelay(390)}
          >
            <Link href={formHref} className={primaryBtnClass}>
              <IconMail className="h-5 w-5" />
              {primaryCtaLabel}
            </Link>
            <a href={SERVICE_PHONE_TEL} className={heroSecondaryBtnClass}>
              <IconPhone className="h-5 w-5" />
              Call {SERVICE_PHONE_LABEL}
            </a>
          </div>

          {trustPoints && trustPoints.length > 0 ? (
            <ul
              className={`reveal-rise ${visibleClass} flex flex-row flex-wrap items-center gap-x-5 gap-y-2 text-[12px] font-medium text-slate-200 md:gap-x-6 md:text-[13px]`}
              style={revealDelay(470)}
            >
              {trustPoints.map((point) => (
                <li key={point} className="flex min-w-0 items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#905bf4]" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}
