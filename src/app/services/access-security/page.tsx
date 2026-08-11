import type { Metadata } from "next";
import { ServiceHero } from "@/components/Electrics/ServiceLanding/ServiceHero";
import { ServiceOptionsTable } from "@/components/Electrics/ServiceLanding/ServiceOptionsTable";
import { ServiceFeatureGrid } from "@/components/Electrics/ServiceLanding/ServiceFeatureGrid";
import { ServiceProcess } from "@/components/Electrics/ServiceLanding/ServiceProcess";
import { ServiceAreas } from "@/components/Electrics/ServiceLanding/ServiceAreas";
import { ServiceFaq } from "@/components/Electrics/ServiceLanding/ServiceFaq";
import { ServiceClosingCta } from "@/components/Electrics/ServiceLanding/ServiceClosingCta";
import { accessLanding } from "@/components/Electrics/ServiceLanding/content/gatesFireAccess";
import { breadcrumbJsonLd, buildPageMetadata, JsonLd, serviceJsonLd } from "@/lib/seo";

const page = accessLanding;

export const metadata: Metadata = buildPageMetadata({
  title: page.meta.title,
  description: page.meta.description,
  path: page.path,
  image: page.hero.imageSrc,
  imageAlt: page.hero.imageAlt,
});

export default function AccessSecurityPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Access and security", path: page.path },
          ]),
          serviceJsonLd({
            name: "Access control and door entry",
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
        eyebrow={page.explainer.eyebrow}
        title={page.explainer.title}
        lead={page.explainer.lead}
        rows={page.explainer.rows}
        columnLabels={page.explainer.columnLabels}
        muted
      />
      <ServiceProcess title={page.process.title} steps={page.process.steps} />
      <ServiceClosingCta
        title={page.closing.title}
        lead={page.closing.lead}
        primaryLabel={page.closing.primaryLabel}
        formHref={page.closing.formHref}
      />
      <ServiceAreas title="Where we fit access systems" />
      <ServiceFaq items={page.faqs} />
    </>
  );
}
