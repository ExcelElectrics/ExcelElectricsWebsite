import { LegalMarkdown } from "@/components/Legal/LegalMarkdown";
import { LegalPolicyTabs } from "@/components/Legal/LegalPolicyTabs";
import type { LegalPolicy } from "@/components/Legal/legal";

type LegalContentProps = {
  policy: LegalPolicy;
};

export function LegalContent({ policy }: LegalContentProps) {
  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="mb-6 md:mb-8">
          <LegalPolicyTabs />
        </div>

        <article className="space-y-5 rounded-xl border border-[var(--border)] border-l-[3px] border-l-[#905bf4] bg-[var(--surface)] p-6 pl-5 md:p-8 md:pl-7">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">{policy.title}</h2>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
              Last updated: {policy.lastUpdated}
            </p>
          </div>
          <div className="space-y-4">
            <LegalMarkdown markdown={policy.markdown} />
          </div>
        </article>
      </div>
    </section>
  );
}
