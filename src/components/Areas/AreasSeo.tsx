"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ElectricsSection } from "@/components/Electrics/ElectricsSection";
import { locations } from "@/components/Areas/areas-data";

export function AreasSeo() {
  const [openCounties, setOpenCounties] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
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
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const visibleClass = isVisible ? "is-visible" : "";

  return (
    <ElectricsSection id="full-areas" muted majorSeam>
      <div ref={sectionRef} className={`reveal-fade-up ${visibleClass}`}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#905bf4] md:text-xs">
            Full coverage
          </p>
          <h2 className="text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            Full areas covered
          </h2>
          <p className="text-muted mx-auto mt-3 max-w-2xl text-sm leading-relaxed md:text-base">
            Every town we list below is part of our service area. Open a county for the full list, or
            open the area page for local detail.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl divide-y divide-[#4b378c]/25 border-y border-[#4b378c]/25">
          {locations.map((area) => {
            const isOpen = openCounties.has(area.county);
            const contentId = `areas-${area.slug}`;

            return (
              <div key={area.slug} className="py-4">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() =>
                    setOpenCounties((prev) => {
                      const next = new Set(prev);
                      if (next.has(area.county)) next.delete(area.county);
                      else next.add(area.county);
                      return next;
                    })
                  }
                  className="flex w-full items-center justify-between gap-3 text-left transition-colors hover:text-[#905bf4]"
                >
                  <span className="text-foreground text-base font-semibold md:text-lg">{area.county}</span>
                  <span aria-hidden className="text-lg font-semibold text-[#905bf4]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen ? (
                  <div id={contentId} className="mt-3 space-y-3">
                    <p className="text-muted text-sm leading-relaxed md:text-[15px]">
                      {area.towns.join(", ")}
                    </p>
                    <Link
                      href={`/areas/${area.slug}`}
                      className="inline-flex text-sm font-semibold text-[#905bf4] transition-colors hover:text-[#4b378c]"
                    >
                      View {area.county} details
                    </Link>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </ElectricsSection>
  );
}
