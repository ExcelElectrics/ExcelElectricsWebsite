import type { Metadata } from "next";
import { ServiceHero } from "@/components/Electrics/ServiceLanding/ServiceHero";
import { ServiceOptionsTable } from "@/components/Electrics/ServiceLanding/ServiceOptionsTable";
import { ServiceFeatureGrid } from "@/components/Electrics/ServiceLanding/ServiceFeatureGrid";
import { ServiceProcess } from "@/components/Electrics/ServiceLanding/ServiceProcess";
import { ServiceAreas } from "@/components/Electrics/ServiceLanding/ServiceAreas";
import { ServiceFaq } from "@/components/Electrics/ServiceLanding/ServiceFaq";
import { ServiceClosingCta } from "@/components/Electrics/ServiceLanding/ServiceClosingCta";
import { electricalLanding } from "@/components/Electrics/ServiceLanding/content/evAndElectrical";
import { breadcrumbJsonLd, buildPageMetadata, JsonLd, serviceJsonLd } from "@/lib/seo";

const page = electricalLanding;

export const metadata: Metadata = buildPageMetadata({
  title: page.meta.title,
  description: page.meta.description,
  path: page.path,
  image: page.hero.imageSrc,
  imageAlt: page.hero.imageAlt,
});

export default function ElectricalWorkPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Electrical work", path: page.path },
          ]),
          serviceJsonLd({
            name: "Domestic electrical work",
            description: page.meta.description,
            path: page.path,
            image: page.hero.imageSrc,
          }),
        ]}
      />
      <ServiceHero {...page.hero} trustPoints={page.trust} />
      <ServiceFeatureGrid
        title={page.features.title}
        lead={page.features.lead}
        blocks={page.features.blocks}
        imageSrc={page.features.imageSrc}
        imageAlt={page.features.imageAlt}
      />
      <ServiceOptionsTable
        eyebrow="EICR explained"
        title={page.codes.title}
        lead={page.codes.lead}
        rows={page.codes.rows}
        columnLabels={page.codes.columnLabels}
        muted
      />
      <ServiceProcess title={page.process.title} steps={page.process.steps} />
      <ServiceClosingCta
        title={page.closing.title}
        lead={page.closing.lead}
        primaryLabel={page.closing.primaryLabel}
        formHref={page.closing.formHref}
      />
      <ServiceAreas />
      <ServiceFaq items={page.faqs} />
    </>
  );
}
