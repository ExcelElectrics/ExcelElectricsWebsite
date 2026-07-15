/** Enquiry form options aligned with the services shown on the homepage. */
export const ENQUIRY_SERVICES = [
  { value: "electrical-work", label: "Electrical work" },
  { value: "fire-safety", label: "Fire safety" },
  { value: "access-security", label: "Access & security" },
  { value: "garage-doors-electric-gates", label: "Garage doors & electric gates" },
  { value: "ev-charging", label: "EV charging" },
  { value: "other", label: "Other" },
] as const;

export const ENQUIRY_PREFERRED_CONTACT = [
  { value: "phone", label: "Phone" },
  { value: "email", label: "Email" },
  { value: "text", label: "Text" },
  { value: "whatsapp", label: "WhatsApp" },
] as const;

/** Matches Matt's request to track lead sources. */
export const ENQUIRY_HEARD_ABOUT = [
  { value: "google", label: "Google" },
  { value: "social-media", label: "Social media" },
  { value: "recommendation", label: "Recommendation" },
  { value: "word-of-mouth", label: "Word of mouth" },
  { value: "local-advertisement", label: "Local advertisement" },
  { value: "magazine", label: "Magazine" },
  { value: "leaflet", label: "Leaflet" },
  { value: "other", label: "Other" },
] as const;

/** Coverage areas shown on the homepage, plus a catch-all for enquiries from further afield. */
export const ENQUIRY_LOCATIONS = [
  { value: "essex", label: "Essex" },
  { value: "cambridgeshire", label: "Cambridgeshire" },
  { value: "hertfordshire", label: "Hertfordshire" },
  { value: "suffolk", label: "Suffolk" },
  { value: "london", label: "London" },
  { value: "other", label: "Other" },
] as const;

export type EnquiryServiceValue = (typeof ENQUIRY_SERVICES)[number]["value"];
export type EnquiryPreferredContactValue = (typeof ENQUIRY_PREFERRED_CONTACT)[number]["value"];
export type EnquiryHeardAboutValue = (typeof ENQUIRY_HEARD_ABOUT)[number]["value"];
export type EnquiryLocationValue = (typeof ENQUIRY_LOCATIONS)[number]["value"];

const SERVICE_LABELS = new Map(ENQUIRY_SERVICES.map((option) => [option.value, option.label]));
const CONTACT_LABELS = new Map(ENQUIRY_PREFERRED_CONTACT.map((option) => [option.value, option.label]));
const HEARD_ABOUT_LABELS = new Map(ENQUIRY_HEARD_ABOUT.map((option) => [option.value, option.label]));
const LOCATION_LABELS = new Map(ENQUIRY_LOCATIONS.map((option) => [option.value, option.label]));

export function getEnquiryServiceLabel(value: string): string | undefined {
  return SERVICE_LABELS.get(value as EnquiryServiceValue);
}

export function getEnquiryPreferredContactLabel(value: string): string | undefined {
  return CONTACT_LABELS.get(value as EnquiryPreferredContactValue);
}

export function getEnquiryHeardAboutLabel(value: string): string | undefined {
  return HEARD_ABOUT_LABELS.get(value as EnquiryHeardAboutValue);
}

export function getEnquiryLocationLabel(value: string): string | undefined {
  return LOCATION_LABELS.get(value as EnquiryLocationValue);
}

export function isEnquiryServiceValue(value: string): value is EnquiryServiceValue {
  return SERVICE_LABELS.has(value as EnquiryServiceValue);
}

export function isEnquiryPreferredContactValue(value: string): value is EnquiryPreferredContactValue {
  return CONTACT_LABELS.has(value as EnquiryPreferredContactValue);
}

export function isEnquiryHeardAboutValue(value: string): value is EnquiryHeardAboutValue {
  return HEARD_ABOUT_LABELS.has(value as EnquiryHeardAboutValue);
}

export function isEnquiryLocationValue(value: string): value is EnquiryLocationValue {
  return LOCATION_LABELS.has(value as EnquiryLocationValue);
}
