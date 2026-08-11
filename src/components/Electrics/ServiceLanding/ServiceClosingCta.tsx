"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import {
  ELECTRICS_SECTION_PAD_Y,
  ELECTRICS_SECTION_PAD_Y_MAJOR_SEAM,
} from "@/components/Electrics/ElectricsSection";
import {
  heroSecondaryBtnClass,
  primaryBtnClass,
  SERVICE_EMAIL,
  SERVICE_PHONE_LABEL,
  SERVICE_PHONE_TEL,
} from "@/components/Electrics/ServiceLanding/serviceLandingShared";
import { useRevealInView } from "@/components/Electrics/ServiceLanding/useRevealInView";

type ServiceClosingCtaProps = {
  title: string;
  lead: string;
  primaryLabel: string;
  formHref?: string;
  majorSeam?: boolean;
  children?: ReactNode;
};

const ctaPrimaryClass = `${primaryBtnClass} px-7 py-3.5 text-base shadow-[0_16px_40px_-12px_rgba(144,91,244,0.7)]`;

/**
 * Closing CTA band for service / marketing pages.
 * Dark brand surface breaks the white page rhythm so the next step reads as the decision point.
 */
export function ServiceClosingCta({
  title,
  lead,
  primaryLabel,
  formHref = "/contact#enquiry-form",
  majorSeam = false,
  children,
}: ServiceClosingCtaProps) {
  const { ref, visibleClass } = useRevealInView<HTMLDivElement>();
  const pad = majorSeam ? ELECTRICS_SECTION_PAD_Y_MAJOR_SEAM : ELECTRICS_SECTION_PAD_Y;

  return (
    <section className={`electrics-small-jobs-band relative overflow-hidden ${pad}`}>
      <div className="relative mx-auto max-w-7xl px-6">
        <div ref={ref} className={`mx-auto max-w-3xl text-center reveal-fade-up ${visibleClass}`}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#b794ff] md:text-xs">
            Next step
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
            {lead}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={formHref} className={ctaPrimaryClass}>
              {primaryLabel}
            </Link>
            <a href={SERVICE_PHONE_TEL} className={heroSecondaryBtnClass}>
              Call {SERVICE_PHONE_LABEL}
            </a>
          </div>

          <p className="mt-7 text-xs leading-snug text-slate-400">
            Mon-Fri, 08:00-17:00 ·{" "}
            <a href={`mailto:${SERVICE_EMAIL}`} className="font-medium text-[#cbb7ff] hover:underline">
              {SERVICE_EMAIL}
            </a>
          </p>

          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
