import type { Metadata } from "next";
import { Suspense } from "react";
import { ElectricsSection } from "@/components/Electrics/ElectricsSection";
import { ContactHero } from "@/components/Electrics/ContactHero";
import { ContactPageForm } from "@/components/Electrics/ContactPageForm";
import { CONTACT_PAGE_FAQS } from "@/components/Electrics/contactPageFaqs";
import { breadcrumbJsonLd, buildPageMetadata, JsonLd } from "@/lib/seo";

const title = "Contact";
const description =
  "Get a quote from Excel Electrics for electrical work, EV charging, fire safety, access control, gates and garage doors across Essex, Suffolk, Cambridgeshire, Hertfordshire and London.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/contact",
  image: "/ExcelElectrics/Excel Home Hero.webp",
  imageAlt: "Excel Electrics home electrical and fire safety specialists",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: CONTACT_PAGE_FAQS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

function ContactFormFallback() {
  return (
    <ElectricsSection majorSeam>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-muted text-sm leading-relaxed md:text-base">Loading the enquiry form…</p>
      </div>
    </ElectricsSection>
  );
}

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          faqJsonLd,
        ]}
      />
      <ContactHero />
      <Suspense fallback={<ContactFormFallback />}>
        <ContactPageForm />
      </Suspense>
    </>
  );
}
