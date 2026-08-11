import type { Metadata } from "next";
import { ServiceHero } from "@/components/Electrics/ServiceLanding/ServiceHero";
import { ServiceOptionsTable } from "@/components/Electrics/ServiceLanding/ServiceOptionsTable";
import { ServiceFeatureGrid } from "@/components/Electrics/ServiceLanding/ServiceFeatureGrid";
import { ServiceProcess } from "@/components/Electrics/ServiceLanding/ServiceProcess";
import { ServiceAreas } from "@/components/Electrics/ServiceLanding/ServiceAreas";
import { ServiceFaq } from "@/components/Electrics/ServiceLanding/ServiceFaq";
import { ServiceClosingCta } from "@/components/Electrics/ServiceLanding/ServiceClosingCta";
import { gatesLanding } from "@/components/Electrics/ServiceLanding/content/gatesFireAccess";
import { breadcrumbJsonLd, buildPageMetadata, JsonLd, serviceJsonLd } from "@/lib/seo";

const page = gatesLanding;

export const metadata: Metadata = buildPageMetadata({
  title: page.meta.title,
  description: page.meta.description,
  path: page.path,
  image: page.hero.imageSrc,
  imageAlt: page.hero.imageAlt,
});

export default function GatesGarageBollardsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Gates, garage doors and bollards", path: page.path },
          ]),
          serviceJsonLd({
            name: "Electric gates, garage doors and bollards",
            description: page.meta.description,
            path: page.path,
            image: page.hero.imageSrc,
          }),
        ]}
      />
      <ServiceHero {...page.hero} trustPoints={page.trust} />
      <ServiceFeatureGrid
        title={page.products.title}
        lead={page.products.lead}
        blocks={page.products.blocks}
        imageSrc={page.products.imageSrc}
        imageAlt={page.products.imageAlt}
      />
      <ServiceOptionsTable
        eyebrow={page.feasibility.eyebrow}
        title={page.feasibility.title}
        lead={page.feasibility.lead}
        rows={page.feasibility.rows}
        columnLabels={page.feasibility.columnLabels}
        muted
      />
      <ServiceProcess title={page.process.title} steps={page.process.steps} />
      <ServiceClosingCta
        title={page.closing.title}
        lead={page.closing.lead}
        primaryLabel={page.closing.primaryLabel}
        formHref={page.closing.formHref}
      />
      <ServiceAreas title="Where we install gates, doors and bollards" />
      <ServiceFaq items={page.faqs} />
    </>
  );
}
