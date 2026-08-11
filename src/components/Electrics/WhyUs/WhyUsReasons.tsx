"use client";

import { ElectricsSection } from "@/components/Electrics/ElectricsSection";
import { WHY_US_REASONS } from "@/components/Electrics/WhyUs/whyUsContent";
import { RevealBlock } from "@/components/Electrics/ServiceLanding/useRevealInView";

export function WhyUsReasons() {
  return (
    <ElectricsSection muted majorSeam>
      <div>
        <RevealBlock variant="fade-up" className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#905bf4] md:text-xs">
            What that looks like
          </p>
          <h2 className="text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            Standards we hold ourselves to
          </h2>
          <p className="text-muted mx-auto mt-3 max-w-2xl text-sm leading-relaxed md:text-base">
            These are the promises behind every visit. The same list you see on the homepage, with a
            little more detail on what it means in practice.
          </p>
        </RevealBlock>

        <ol className="mx-auto mt-10 max-w-4xl space-y-0">
          {WHY_US_REASONS.map((reason, index) => (
            <RevealBlock
              key={reason.title}
              as="li"
              variant="fade-up"
              className="border-t border-[#4b378c]/25 py-6 md:py-7"
            >
              <div className="flex gap-4 md:gap-5">
                <span className="font-mono text-[11px] font-semibold tabular-nums text-[#905bf4] md:text-xs">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-foreground text-base font-semibold tracking-tight md:text-lg">
                    {reason.title}
                  </h3>
                  <p className="text-muted mt-2 text-sm leading-relaxed md:text-[15px]">{reason.body}</p>
                </div>
              </div>
            </RevealBlock>
          ))}
        </ol>
      </div>
    </ElectricsSection>
  );
}
