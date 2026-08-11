"use client";

import Link from "next/link";
import { ElectricsSection } from "@/components/Electrics/ElectricsSection";
import { locations } from "@/components/Areas/areas-data";
import { RevealBlock } from "@/components/Electrics/ServiceLanding/useRevealInView";

type ServiceAreasProps = {
  title?: string;
  lead?: string;
  /** Background tone — white after the dark next-step band, muted when used mid-page. */
  muted?: boolean;
};

export function ServiceAreas({
  title = "Where we work",
  lead = "We cover Essex, Suffolk, Cambridgeshire, Hertfordshire, central London and Greater London.",
  muted = false,
}: ServiceAreasProps) {
  const counties = locations.filter((location) =>
    ["essex", "suffolk", "cambridgeshire", "hertfordshire", "london"].includes(location.slug),
  );

  return (
    <ElectricsSection muted={muted}>
      <div>
        <RevealBlock variant="fade-up" className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#905bf4] md:text-xs">
            Local & reliable
          </p>
          <h2 className="text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
          <p className="text-muted mx-auto mt-3 max-w-2xl text-sm leading-relaxed md:text-base">{lead}</p>
        </RevealBlock>

        <div className="mx-auto mt-10 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {counties.map((county) => (
            <RevealBlock
              key={county.slug}
              variant="rise"
              className="border-t border-[#4b378c]/25 pt-4 text-left"
            >
              <h3 className="text-foreground text-base font-semibold tracking-tight">
                <Link href={`/areas/${county.slug}`} className="transition-colors hover:text-[#905bf4]">
                  {county.county}
                </Link>
              </h3>
              <p className="text-muted mt-2 text-sm leading-relaxed">{county.towns.slice(0, 8).join(", ")}</p>
            </RevealBlock>
          ))}
        </div>

        <RevealBlock variant="fade-up" className="mt-8 text-center">
          <Link
            href="/areas"
            className="text-sm font-semibold text-[#905bf4] transition-colors hover:text-[#4b378c]"
          >
            View all areas and towns
          </Link>
        </RevealBlock>
      </div>
    </ElectricsSection>
  );
}
