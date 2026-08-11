import type { Metadata } from "next";
import { WhyUsHero } from "@/components/Electrics/WhyUs/WhyUsHero";
import { WhyUsIntro } from "@/components/Electrics/WhyUs/WhyUsIntro";
import { WhyUsReasons } from "@/components/Electrics/WhyUs/WhyUsReasons";
import { ServiceClosingCta } from "@/components/Electrics/ServiceLanding/ServiceClosingCta";
import { breadcrumbJsonLd, buildPageMetadata, JsonLd } from "@/lib/seo";

const title = "Why Us";
const description =
  "Why homeowners choose Excel Electrics: tidy, qualified, clearly priced electrical and fire safety work across Essex, Suffolk, Cambridgeshire, Hertfordshire and London.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/why-us",
  image: "/ExcelElectrics/services/electrical/electrical-hero.webp",
  imageAlt: "Excel Electrics engineer carrying out careful electrical work",
});

export default function WhyUsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Why us", path: "/why-us" },
        ])}
      />
      <WhyUsHero />
      <WhyUsIntro />
      <WhyUsReasons />
      <ServiceClosingCta
        title="Ready when you are"
        lead="Tell us the job and your postcode. We will come back with clear advice and a fixed price, usually the same day."
        primaryLabel="Get a quote"
        formHref="/contact#enquiry-form"
        majorSeam
      />
    </>
  );
}
