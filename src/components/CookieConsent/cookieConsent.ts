export const COOKIE_CONSENT_STORAGE_KEY = "excelelectrics_cookie_consent_v1";

/** All cookies including analytics (use when loading non-essential scripts). */
export const COOKIE_CONSENT_ACCEPTED = "accepted";

/** Essential cookies only; do not load optional analytics or marketing cookies. */
export const COOKIE_CONSENT_ESSENTIAL_ONLY = "essential_only";

export const COOKIE_CONSENT_CHANGED_EVENT = "excelelectrics_cookie_consent_changed";

export type CookieConsentValue =
  | typeof COOKIE_CONSENT_ACCEPTED
  | typeof COOKIE_CONSENT_ESSENTIAL_ONLY;

export function getStoredConsent(): CookieConsentValue | null {
  try {
    const value = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (value === COOKIE_CONSENT_ACCEPTED || value === COOKIE_CONSENT_ESSENTIAL_ONLY) {
      return value;
    }
  } catch {
    /* ignore */
  }
  return null;
}

export function hasAnalyticsConsent(): boolean {
  return getStoredConsent() === COOKIE_CONSENT_ACCEPTED;
}

export function setStoredConsent(value: CookieConsentValue): void {
  try {
    localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_CHANGED_EVENT, { detail: value }));
}

export function hasStoredConsentChoice(): boolean {
  return getStoredConsent() !== null;
}
