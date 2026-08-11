import Link from "next/link";
import { ServiceFaq } from "@/components/Electrics/ServiceLanding/ServiceFaq";
import { ServiceClosingCta } from "@/components/Electrics/ServiceLanding/ServiceClosingCta";
import type { ServiceFaqItem } from "@/components/Electrics/ServiceLanding/serviceLandingShared";

type LocationPageClosingProps = {
  county: string;
  faqs: ServiceFaqItem[];
};

export function AreaPageFaqAndCta({ county, faqs }: LocationPageClosingProps) {
  return (
    <>
      <ServiceClosingCta
        title={`Need an electrician in ${county}?`}
        lead="Tell us the job and your postcode. We will come back with clear advice and a fixed price, usually the same day."
        primaryLabel="Get a quote"
        formHref="/contact#enquiry-form"
      >
        <Link
          href="/areas"
          className="text-sm font-semibold text-[#cbb7ff] transition-colors hover:text-white"
        >
          ← Back to all areas
        </Link>
      </ServiceClosingCta>

      <ServiceFaq
        items={faqs}
        title={`Frequently asked questions about ${county}`}
        muted={false}
        majorSeam
      />
    </>
  );
}
