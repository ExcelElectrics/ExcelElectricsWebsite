"use client";

import Image from "next/image";
import Link from "next/link";
import { ElectricsSection } from "@/components/Electrics/ElectricsSection";
import { SERVICE_NAV_LINKS } from "@/components/Navigation/serviceNavLinks";
import { RevealBlock } from "@/components/Electrics/ServiceLanding/useRevealInView";

export function ServicesIndexGrid() {
  return (
    <ElectricsSection majorSeam>
      <div>
        <RevealBlock variant="fade-up" className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#905bf4] md:text-xs">
            All services
          </p>
          <h2 className="text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            Choose the work you need
          </h2>
          <p className="text-muted mx-auto mt-3 max-w-2xl text-sm leading-relaxed md:text-base">
            Open any service for the full detail, or send one enquiry and we will advise what fits.
          </p>
        </RevealBlock>

        <ul className="mx-auto mt-12 max-w-7xl space-y-12 md:space-y-14">
          {SERVICE_NAV_LINKS.map((service, index) => {
            const imageFirst = index % 2 === 0;
            return (
              <RevealBlock
                key={service.href}
                as="li"
                variant="fade-up"
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
              >
                <Link
                  href={service.href}
                  className={`relative aspect-[16/10] overflow-hidden rounded-md ${
                    imageFirst ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                </Link>

                <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
                  <p className="font-mono text-[11px] font-semibold tabular-nums text-[#905bf4]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                    <Link href={service.href} className="transition-colors hover:text-[#905bf4]">
                      {service.label}
                    </Link>
                  </h3>
                  <p className="text-muted mt-3 max-w-xl text-sm leading-relaxed md:text-base">
                    {service.blurb}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-5 inline-flex text-sm font-semibold text-[#905bf4] transition-colors hover:text-[#4b378c]"
                  >
                    View full detail
                  </Link>
                </div>
              </RevealBlock>
            );
          })}
        </ul>
      </div>
    </ElectricsSection>
  );
}
