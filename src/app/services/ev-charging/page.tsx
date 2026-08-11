import type { Metadata } from "next";
import { ServiceHero } from "@/components/Electrics/ServiceLanding/ServiceHero";
import { ServiceOptionsTable } from "@/components/Electrics/ServiceLanding/ServiceOptionsTable";
import { ServiceFeatureGrid } from "@/components/Electrics/ServiceLanding/ServiceFeatureGrid";
import { ServiceProcess } from "@/components/Electrics/ServiceLanding/ServiceProcess";
import { ServiceAreas } from "@/components/Electrics/ServiceLanding/ServiceAreas";
import { ServiceFaq } from "@/components/Electrics/ServiceLanding/ServiceFaq";
import { ServiceClosingCta } from "@/components/Electrics/ServiceLanding/ServiceClosingCta";
import { evLanding } from "@/components/Electrics/ServiceLanding/content/evAndElectrical";
import { breadcrumbJsonLd, buildPageMetadata, JsonLd, serviceJsonLd } from "@/lib/seo";

const page = evLanding;

export const metadata: Metadata = buildPageMetadata({
  title: page.meta.title,
  description: page.meta.description,
  path: page.path,
  image: page.hero.imageSrc,
  imageAlt: page.hero.imageAlt,
});

export default function EvChargingPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "EV charging", path: page.path },
          ]),
          serviceJsonLd({
            name: "EV charger installation",
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
        eyebrow={page.options.eyebrow}
        title={page.options.title}
        lead={page.options.lead}
        rows={page.options.rows}
        columnLabels={page.options.columnLabels}
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
