"use client";

import Image from "next/image";
import Link from "next/link";
import { ElectricsSection } from "@/components/Electrics/ElectricsSection";
import { WHY_US_HIGHLIGHTS } from "@/components/Electrics/WhyUs/whyUsContent";
import { primaryBtnClass } from "@/components/Electrics/ServiceLanding/serviceLandingShared";
import { RevealBlock } from "@/components/Electrics/ServiceLanding/useRevealInView";

export function WhyUsIntro() {
  return (
    <ElectricsSection>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <RevealBlock
          variant="fade-up"
          className="relative aspect-[4/3] overflow-hidden rounded-md lg:aspect-auto lg:min-h-[420px]"
        >
          <Image
            src="/ExcelElectrics/services/electrical/electrical-hero.webp"
            alt="Excel Electrics engineer carrying out careful electrical work in a home"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </RevealBlock>

        <RevealBlock variant="fade-up">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#905bf4] md:text-xs">
            Who we are
          </p>
          <h2 className="text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            Local electricians you can trust at home
          </h2>
          <p className="text-muted mt-4 text-sm leading-relaxed md:text-base">
            Excel Electrics is the home-facing name of Excel Fire Ltd. We help homeowners across
            Essex, Suffolk, Cambridgeshire, Hertfordshire and London with everyday electrics, fire
            safety, access systems, garage doors and EV charging.
          </p>
          <p className="text-muted mt-3 text-sm leading-relaxed md:text-base">
            The approach is simple: understand the job, give a clear price, do the work tidy, and
            leave you with the paperwork you need. Whether it is a small repair or a larger install,
            you get the same care and communication.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {WHY_US_HIGHLIGHTS.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-snug text-foreground md:text-[15px]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#905bf4]" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Link href="/contact" className={`${primaryBtnClass} mt-8`}>
            Speak to our team
          </Link>
        </RevealBlock>
      </div>
    </ElectricsSection>
  );
}
