"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ELECTRICS_HERO_BOTTOM_ONLY } from "@/components/Electrics/ElectricsSection";

type Crumb = { name: string; href?: string };

type ProjectHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  crumbs: Crumb[];
  /** CSS object-position for the background photo. */
  imagePosition?: string;
  children?: React.ReactNode;
};

/** Hero for /projects and /projects/[slug]; same chrome as the area page hero. */
export function ProjectHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  crumbs,
  imagePosition = "center",
  children,
}: ProjectHeroProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setIsVisible(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const visibleClass = isVisible ? "is-visible" : "";

  return (
    <section className="electrics-hero-min-h-sm relative isolate overflow-hidden bg-black">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: imagePosition }}
      />
      <div className="electrics-hero-overlay absolute inset-0" aria-hidden />

      <div className="absolute inset-x-0 top-0 z-10 border-b border-white/10 bg-black/35 backdrop-blur-sm">
        <nav
          aria-label="Breadcrumb"
          className="mx-auto flex w-full max-w-7xl items-center gap-2 px-6 py-3 text-xs font-semibold text-slate-200 md:text-sm"
        >
          {crumbs.map((crumb, index) => (
            <span key={crumb.name} className="flex min-w-0 items-center gap-2">
              {index > 0 ? (
                <span aria-hidden className="text-slate-400">
                  /
                </span>
              ) : null}
              {crumb.href ? (
                <Link href={crumb.href} className="shrink-0 transition hover:text-white">
                  {crumb.name}
                </Link>
              ) : (
                <span aria-current="page" className="truncate text-white">
                  {crumb.name}
                </span>
              )}
            </span>
          ))}
        </nav>
      </div>

      <div
        className={`electrics-hero-min-h-sm relative mx-auto flex w-full max-w-7xl items-end px-6 pt-20 md:items-center ${ELECTRICS_HERO_BOTTOM_ONLY}`}
      >
        <div ref={contentRef} className="max-w-3xl space-y-5">
          <p className={`reveal-rise ${visibleClass} text-[11px] font-semibold uppercase tracking-[0.2em] text-[#905bf4] md:text-xs`}>
            {eyebrow}
          </p>
          <h1 className={`reveal-rise ${visibleClass} text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl`}>
            {title}
          </h1>
          <p className={`reveal-rise ${visibleClass} max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg`}>
            {description}
          </p>
          {children ? <div className={`reveal-rise ${visibleClass}`}>{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
