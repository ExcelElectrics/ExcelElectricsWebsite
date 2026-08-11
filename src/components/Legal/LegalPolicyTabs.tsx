"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { legalPolicies } from "@/components/Legal/legal";
import { legalPolicyPath } from "@/components/Legal/legalRoutes";

const tabBase =
  "rounded-md px-4 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#905bf4]/45";

/** Solid brand fill so the active tab stays readable in light mode. */
const tabActive = "border border-[#905bf4] bg-[#905bf4] text-white shadow-[0_10px_20px_-14px_rgba(75,1,184,0.85)]";

const tabInactive =
  "border border-[var(--border)] bg-[var(--surface)] text-foreground hover:border-[#905bf4]/55 hover:text-[#905bf4]";

export function LegalPolicyTabs() {
  const pathname = usePathname();

  return (
    <nav aria-label="Choose a policy" className="flex flex-wrap items-center gap-2 md:gap-3">
      {legalPolicies.map((policy) => {
        const href = legalPolicyPath(policy.id);
        const isActive = pathname === href;
        return (
          <Link
            key={policy.id}
            href={href}
            className={`${tabBase} ${isActive ? tabActive : tabInactive}`}
            aria-current={isActive ? "page" : undefined}
          >
            {policy.title}
          </Link>
        );
      })}
    </nav>
  );
}
