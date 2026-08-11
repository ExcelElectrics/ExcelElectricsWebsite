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

type LocationPageHeroProps = {
  county: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

function IconMail({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function AreaPageHero({ county, description, imageSrc, imageAlt }: LocationPageHeroProps) {
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
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const visibleClass = isVisible ? "is-visible" : "";

  return (
    <section className="electrics-hero-min-h-sm relative isolate overflow-hidden bg-black">
      <Image src={imageSrc} alt={imageAlt} fill priority sizes="100vw" className="object-cover object-center" />
      <div className="electrics-hero-overlay absolute inset-0" aria-hidden />

      <div className="absolute inset-x-0 top-0 z-10 border-b border-white/10 bg-black/35 backdrop-blur-sm">
        <nav
          aria-label="Breadcrumb"
          className="mx-auto flex w-full max-w-7xl items-center gap-2 px-6 py-3 text-xs font-semibold text-slate-200 md:text-sm"
        >
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <span aria-hidden className="text-slate-400">
            /
          </span>
          <Link href="/areas" className="transition hover:text-white">
            Areas we cover
          </Link>
          <span aria-hidden className="text-slate-400">
            /
          </span>
          <span aria-current="page" className="truncate text-white">
            {county}
          </span>
        </nav>
      </div>

      <div
        className={`electrics-hero-min-h-sm relative mx-auto flex w-full max-w-7xl items-end px-6 pt-20 md:items-center ${ELECTRICS_HERO_BOTTOM_ONLY}`}
      >
        <div ref={contentRef} className="max-w-3xl space-y-5">
          <p className={`reveal-rise ${visibleClass} text-[11px] font-semibold uppercase tracking-[0.2em] text-[#905bf4] md:text-xs`}>
            Local coverage
          </p>
          <h1 className={`reveal-rise ${visibleClass} text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl`}>
            Electrical services in {county}
          </h1>
          <p className={`reveal-rise ${visibleClass} max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg`}>
            {description}
          </p>
          <div className={`reveal-rise ${visibleClass} flex flex-col gap-3 sm:flex-row`}>
            <Link href="/contact" className={primaryBtnClass}>
              <IconMail className="h-5 w-5" />
              Get a quote
            </Link>
            <a href={SERVICE_PHONE_TEL} className={heroSecondaryBtnClass}>
              <IconPhone className="h-5 w-5" />
              Call {SERVICE_PHONE_LABEL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
