"use client";

import Image from "next/image";
import { ElectricsSection } from "@/components/Electrics/ElectricsSection";
import type { ServiceFeatureBlock } from "@/components/Electrics/ServiceLanding/serviceLandingShared";
import { RevealBlock } from "@/components/Electrics/ServiceLanding/useRevealInView";

type ServiceFeatureGridProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  blocks: ServiceFeatureBlock[];
  imageSrc?: string;
  imageAlt?: string;
  muted?: boolean;
};

export function ServiceFeatureGrid({
  eyebrow = "What we cover",
  title,
  lead,
  blocks,
  imageSrc,
  imageAlt,
  muted = false,
}: ServiceFeatureGridProps) {
  const hasImage = Boolean(imageSrc);

  return (
    <ElectricsSection muted={muted}>
      <div>
        <RevealBlock
          variant="fade-up"
          className={`mx-auto max-w-3xl ${hasImage ? "lg:mx-0 lg:max-w-xl lg:text-left" : "text-center"}`}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#905bf4] md:text-xs">
            {eyebrow}
          </p>
          <h2 className="text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
          {lead ? (
            <p className="text-muted mt-3 text-sm leading-relaxed md:text-base">{lead}</p>
          ) : null}
        </RevealBlock>

        <div
          className={`mt-10 grid gap-10 ${
            hasImage ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-12" : ""
          }`}
        >
          <div className="grid gap-8 sm:grid-cols-2">
            {blocks.map((block) => (
              <RevealBlock
                key={block.title}
                variant="rise"
                className="border-t border-[#4b378c]/25 pt-4"
              >
                <h3 className="text-foreground text-base font-semibold tracking-tight md:text-lg">
                  {block.title}
                </h3>
                {block.intro ? (
                  <p className="text-muted mt-2 text-sm leading-relaxed">{block.intro}</p>
                ) : null}
                {block.items.length > 0 ? (
                  <ul className="mt-3 space-y-2">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-relaxed text-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4b378c]" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </RevealBlock>
            ))}
          </div>

          {imageSrc ? (
            <RevealBlock
              variant="slide-right"
              className="relative aspect-[4/3] overflow-hidden rounded-md lg:aspect-auto lg:min-h-[420px]"
            >
              <Image
                src={imageSrc}
                alt={imageAlt ?? ""}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </RevealBlock>
          ) : null}
        </div>
      </div>
    </ElectricsSection>
  );
}
