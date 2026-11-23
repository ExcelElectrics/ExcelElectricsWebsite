"use client";

import Image from "next/image";
import Link from "next/link";
import { ElectricsSection } from "@/components/Electrics/ElectricsSection";
import { RevealBlock } from "@/components/Electrics/ServiceLanding/useRevealInView";

/** Services page: a quiet nod to commercial work without changing the domestic lead. Mirrors the service rows above. */
export function ServicesCommercialBand() {
  return (
    <ElectricsSection>
      <RevealBlock variant="fade-up" className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <Link href="/projects" className="relative aspect-[16/10] overflow-hidden rounded-md">
          <Image
            src="/ExcelElectrics/photos/projects/bp-ipswich/forecourt-canopy-scissor-lift.webp"
            alt="Excel Electrics engineer on a scissor lift at a BP forecourt canopy"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </Link>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#905bf4] md:text-xs">
            For businesses too
          </p>
          <h2 className="text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            Also trusted by businesses and housing providers
          </h2>
          <p className="text-muted mt-3 max-w-xl text-sm leading-relaxed md:text-base">
            The same team and the same care also look after shops, forecourts, landlords and housing providers, from
            fault finding to access control across whole buildings.
          </p>
          <Link
            href="/projects"
            className="mt-5 inline-flex text-sm font-semibold text-[#905bf4] transition-colors hover:text-[#4b378c]"
          >
            See our projects
          </Link>
        </div>
      </RevealBlock>
    </ElectricsSection>
  );
}
