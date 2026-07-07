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

export type EnquiryServiceValue = (typeof ENQUIRY_SERVICES)[number]["value"];
export type EnquiryPreferredContactValue = (typeof ENQUIRY_PREFERRED_CONTACT)[number]["value"];

const SERVICE_LABELS = new Map(ENQUIRY_SERVICES.map((option) => [option.value, option.label]));
const CONTACT_LABELS = new Map(ENQUIRY_PREFERRED_CONTACT.map((option) => [option.value, option.label]));

export function getEnquiryServiceLabel(value: string): string | undefined {
  return SERVICE_LABELS.get(value as EnquiryServiceValue);
}

export function getEnquiryPreferredContactLabel(value: string): string | undefined {
  return CONTACT_LABELS.get(value as EnquiryPreferredContactValue);
}

export function isEnquiryServiceValue(value: string): value is EnquiryServiceValue {
  return SERVICE_LABELS.has(value as EnquiryServiceValue);
}

export function isEnquiryPreferredContactValue(value: string): value is EnquiryPreferredContactValue {
  return CONTACT_LABELS.has(value as EnquiryPreferredContactValue);
}
