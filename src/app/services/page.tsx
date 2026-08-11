import type { Metadata } from "next";
import { ServicesHero } from "@/components/Electrics/ServicesIndex/ServicesHero";
import { ServicesIndexGrid } from "@/components/Electrics/ServicesIndex/ServicesIndexGrid";
import { ServiceClosingCta } from "@/components/Electrics/ServiceLanding/ServiceClosingCta";
import { breadcrumbJsonLd, buildPageMetadata, JsonLd } from "@/lib/seo";

const title = "Our Services";
const description =
  "Browse Excel Electrics services: domestic electrical work, fire safety, access and security, gates and garage doors, and EV charging across Essex, Suffolk, Cambridgeshire, Hertfordshire and London.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/services",
  image: "/ExcelElectrics/services/electrical/electrical-hero.webp",
  imageAlt: "Domestic electrical work by Excel Electrics",
});

export default function ServicesIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <ServicesHero />
      <ServicesIndexGrid />
      <ServiceClosingCta
        title="Not sure which service you need?"
        lead="Tell us what is happening and your postcode. We will come back with clear advice and a fixed price, usually the same day."
        primaryLabel="Get a quote"
        formHref="/contact#enquiry-form"
      />
    </>
  );
}
