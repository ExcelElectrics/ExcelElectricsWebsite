"use client";

import { useState } from "react";
import { ElectricsSection } from "@/components/Electrics/ElectricsSection";
import type { ServiceFaqItem } from "@/components/Electrics/ServiceLanding/serviceLandingShared";
import { RevealBlock } from "@/components/Electrics/ServiceLanding/useRevealInView";

type ServiceFaqProps = {
  items: ServiceFaqItem[];
  title?: string;
  majorSeam?: boolean;
  muted?: boolean;
};

export function ServiceFaq({
  items,
  title = "Frequently asked questions",
  majorSeam = true,
  muted = true,
}: ServiceFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <ElectricsSection muted={muted} majorSeam={majorSeam}>
      <div>
        <RevealBlock variant="fade-up" className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#905bf4] md:text-xs">
            FAQ
          </p>
          <h2 className="text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        </RevealBlock>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-[#4b378c]/25 border-y border-[#4b378c]/25">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `service-faq-panel-${index}`;
            const buttonId = `service-faq-button-${index}`;
            return (
              <RevealBlock key={item.question} variant="rise">
                <button
                  id={buttonId}
                  type="button"
                  className="flex w-full items-start justify-between gap-4 py-4 text-left transition-colors hover:text-[#905bf4]"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-foreground text-sm font-semibold md:text-base">{item.question}</span>
                  <span
                    className={`mt-0.5 shrink-0 text-[#905bf4] transition-transform ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-muted pb-4 text-sm leading-relaxed md:text-[15px]">{item.answer}</p>
                  </div>
                </div>
              </RevealBlock>
            );
          })}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </ElectricsSection>
  );
}
