/** Shared geography and contact constants for Ads service landing pages. */

export const SERVICE_PHONE_LABEL = "07730591822";
export const SERVICE_PHONE_TEL = "tel:+447730591822";
export const SERVICE_EMAIL = "info@excelelectrics.com";

/** Compact service-area line used in landing heroes. */
export const SERVICE_AREAS_SHORT = "Essex · Suffolk · Cambs · Herts · London";

export type ServiceFaqItem = {
  question: string;
  answer: string;
};

export type ServiceProcessStep = {
  title: string;
  body: string;
};

export type ServiceTrustPoint = string;

export type ServiceOptionRow = {
  option: string;
  meaning: string;
  note: string;
};

export type ServiceFeatureBlock = {
  title: string;
  intro?: string;
  items: string[];
};

export const labelClass =
  "text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]";

export const inputClass =
  "w-full rounded-md border border-[var(--border)] bg-transparent px-3 py-2.5 text-sm text-foreground outline-none transition placeholder:text-[var(--text-muted)] focus:border-[#905bf4] focus:ring-2 focus:ring-[#905bf4]/25 focus:ring-offset-0";

export const selectClass = `${inputClass} cursor-pointer`;

export const primaryBtnClass =
  "group inline-flex items-center justify-center gap-2 rounded-md bg-[#905bf4] px-6 py-3 text-sm font-semibold text-white shadow-none transition-all duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:active:translate-y-0 motion-safe:active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#905bf4]/45 disabled:cursor-not-allowed disabled:opacity-60";

export const secondaryBtnClass =
  "group inline-flex items-center justify-center gap-2 rounded-md border border-[#905bf4]/45 bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 ease-out hover:border-[#905bf4] hover:bg-[#905bf4]/10 motion-safe:hover:-translate-y-1 motion-safe:active:translate-y-0 motion-safe:active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#905bf4]/40";

export const heroSecondaryBtnClass =
  "electrics-hero-secondary-btn group inline-flex items-center justify-center gap-2 rounded-md border border-[#b8a3f9]/55 bg-white/10 px-6 py-3 text-sm font-semibold text-[#efe8ff] shadow-none backdrop-blur-sm transition-all duration-200 ease-out hover:border-[#905bf4] hover:bg-[#905bf4]/18 motion-safe:hover:-translate-y-1 motion-safe:active:translate-y-0 motion-safe:active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70";
