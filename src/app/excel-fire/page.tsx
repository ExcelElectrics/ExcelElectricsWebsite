import type { Metadata } from "next";
import { ServiceClosingCta } from "@/components/Electrics/ServiceLanding/ServiceClosingCta";
import { ServiceFaq } from "@/components/Electrics/ServiceLanding/ServiceFaq";
import { ServiceHero } from "@/components/Electrics/ServiceLanding/ServiceHero";
import { ExcelFireIntro, ExcelFireServices, ExcelFireWireAndFire } from "@/components/ExcelFire/ExcelFireSections";
import { breadcrumbJsonLd, buildPageMetadata, JsonLd } from "@/lib/seo";

const title = "Excel Fire";
const description =
  "Excel Electrics is part of Excel Fire Ltd, specialists in fire doors, fire stopping and fire safety inspections. One company for the electrics and the fire safety of your building.";
const heroImage = "/ExcelElectrics/photos/projects/emirates/emirates-stadium.webp";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/excel-fire",
  image: heroImage,
  imageAlt: "The Emirates Stadium, an Excel Fire project",
});

const faqs = [
  {
    question: "Is Excel Electrics part of Excel Fire?",
    answer:
      "Yes. Excel Electrics is the home-facing name of Excel Fire Ltd. Same company, same standards, with our own NICEIC approved electricians and our own phone line.",
  },
  {
    question: "Do I need Excel Fire for a smoke alarm at home?",
    answer:
      "No. Smoke and heat alarms in your home are a job for Excel Electrics, so just get in touch with us as normal. Excel Fire is mainly for fire doors and fire stopping in flats, blocks and commercial buildings.",
  },
  {
    question: "Can one team do the fire doors and the electrics on our building?",
    answer:
      "Yes. Fire doors often need maglocks, hold-open devices or links to the fire alarm. Excel Fire and Excel Electrics plan it as one job, with one point of contact.",
  },
  {
    question: "How do I contact Excel Fire?",
    answer:
      "Call Excel Fire on 0203 302 9558 or visit excelfireltd.com. If you are not sure which team you need, contact us here and we will pass it to the right people.",
  },
];

export default function ExcelFirePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Excel Fire", path: "/excel-fire" },
        ])}
      />
      <ServiceHero
        eyebrow="Part of Excel Fire Ltd"
        title="Excel Fire"
        lead="Excel Electrics is part of Excel Fire, the fire safety specialists trusted with fire doors and fire stopping in buildings across London and the South East."
        trustPoints={["Same company, same standards", "Fire doors & fire stopping", "London & the South East"]}
        imageSrc={heroImage}
        darken={0.45}
        imageAlt="The Emirates Stadium, an Excel Fire project"
        primaryCtaLabel="Talk to us"
      />
      <ExcelFireIntro />
      <ExcelFireServices />
      <ExcelFireWireAndFire />
      <ServiceFaq items={faqs} title="Common questions about Excel Fire" />
      <ServiceClosingCta
        title="Need fire safety and electrics on the same job?"
        lead="Talk to us once. We'll put the right Excel Fire and Excel Electrics people on it, with one point of contact."
        primaryLabel="Tell us about your job"
        formHref="/contact#enquiry-form"
        majorSeam
      />
    </>
  );
}
