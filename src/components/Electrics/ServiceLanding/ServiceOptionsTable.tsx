"use client";

import { ElectricsSection } from "@/components/Electrics/ElectricsSection";
import type { ServiceOptionRow } from "@/components/Electrics/ServiceLanding/serviceLandingShared";
import { RevealBlock } from "@/components/Electrics/ServiceLanding/useRevealInView";

type ServiceOptionsTableProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  rows: ServiceOptionRow[];
  columnLabels?: [string, string, string];
  muted?: boolean;
};

export function ServiceOptionsTable({
  eyebrow = "In plain English",
  title,
  lead,
  rows,
  columnLabels = ["Option", "What it means for you", "Typical"],
  muted = false,
}: ServiceOptionsTableProps) {
  return (
    <ElectricsSection muted={muted}>
      <div>
        <RevealBlock variant="fade-up" className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#905bf4] md:text-xs">
            {eyebrow}
          </p>
          <h2 className="text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
          {lead ? (
            <p className="text-muted mx-auto mt-3 max-w-2xl text-sm leading-relaxed md:text-base">{lead}</p>
          ) : null}
        </RevealBlock>

        <RevealBlock
          variant="fade-up"
          className="mx-auto mt-10 w-full min-w-0 max-w-4xl overflow-x-auto overscroll-x-contain"
        >
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[#4b378c]/30">
                {columnLabels.map((label) => (
                  <th
                    key={label}
                    className="px-3 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]"
                  >
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.option} className="border-b border-[#4b378c]/15 align-top">
                  <td className="px-3 py-4 font-semibold text-foreground">{row.option}</td>
                  <td className="text-muted px-3 py-4 leading-relaxed">{row.meaning}</td>
                  <td className="px-3 py-4 text-foreground">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </RevealBlock>
      </div>
    </ElectricsSection>
  );
}
