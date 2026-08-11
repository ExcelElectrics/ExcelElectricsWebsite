"use client";

import { useSearchParams } from "next/navigation";
import { ElectricsContact } from "@/components/Electrics/ElectricsContact";
import { CONTACT_PAGE_FAQS } from "@/components/Electrics/contactPageFaqs";
import {
  isEnquiryServiceValue,
  type EnquiryServiceValue,
} from "@/components/Electrics/enquiryFormOptions";

export function ContactPageForm() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") ?? "";
  const defaultService: EnquiryServiceValue | "" = isEnquiryServiceValue(serviceParam)
    ? serviceParam
    : "";

  return (
    <ElectricsContact variant="page" faqs={CONTACT_PAGE_FAQS} defaultService={defaultService} />
  );
}
