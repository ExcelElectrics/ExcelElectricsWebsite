export const COOKIE_CONSENT_STORAGE_KEY = "excelelectrics_cookie_consent_v1";

/** All cookies including analytics (use when loading non-essential scripts). */
export const COOKIE_CONSENT_ACCEPTED = "accepted";

/** Essential cookies only; do not load optional analytics or marketing cookies. */
export const COOKIE_CONSENT_ESSENTIAL_ONLY = "essential_only";

export const COOKIE_CONSENT_CHANGED_EVENT = "excelelectrics_cookie_consent_changed";

export type CookieConsentValue =
  | typeof COOKIE_CONSENT_ACCEPTED
  | typeof COOKIE_CONSENT_ESSENTIAL_ONLY;
