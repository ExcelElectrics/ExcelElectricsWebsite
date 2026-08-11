"use client";

import { useRef } from "react";
import { useMotionValue, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ElectricsSection } from "@/components/Electrics/ElectricsSection";
import { LightningBolt } from "@/components/Electrics/LightningBolt";
import type { ServiceProcessStep } from "@/components/Electrics/ServiceLanding/serviceLandingShared";
import { RevealBlock } from "@/components/Electrics/ServiceLanding/useRevealInView";

type ServiceProcessProps = {
  eyebrow?: string;
  title: string;
  steps: ServiceProcessStep[];
};

export function ServiceProcess({
  eyebrow = "How it works",
  title,
  steps,
}: ServiceProcessProps) {
  const accentRef = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: accentRef,
    offset: ["start 0.9", "end 0.55"],
  });
  const scrollCharge = useTransform(scrollYProgress, [0, 1], [0, 1], { clamp: true });
  const staticCharge = useMotionValue(1);
  const charge = reduceMotion ? staticCharge : scrollCharge;

  return (
    <ElectricsSection>
      <div>
        <RevealBlock variant="fade-up" className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#905bf4] md:text-xs">
            {eyebrow}
          </p>
          <h2 className="text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        </RevealBlock>

        <div ref={accentRef} className="relative mx-auto mt-10 max-w-4xl pl-8 md:pl-10">
          <LightningBolt
            progress={charge}
            density="tall"
            className="pointer-events-none absolute left-0 top-0 h-full w-[18px]"
          />
          <ol className="space-y-8">
            {steps.map((step, index) => (
              <RevealBlock key={step.title} as="li" variant="rise">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#905bf4]">
                  Step {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-foreground mt-1 text-lg font-semibold tracking-tight">{step.title}</h3>
                <p className="text-muted mt-2 text-sm leading-relaxed md:text-[15px]">{step.body}</p>
              </RevealBlock>
            ))}
          </ol>
        </div>
      </div>
    </ElectricsSection>
  );
}
