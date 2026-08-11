import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocationBySlug, locations } from "@/components/Areas/areas-data";
import { AreaPageHero } from "@/components/Areas/AreaPageHero";
import { AreaPageIntro } from "@/components/Areas/AreaPageIntro";
import { AreaPageTowns } from "@/components/Areas/AreaPageTowns";
import { AreaPageServices } from "@/components/Areas/AreaPageServices";
import { AreaPageFaqAndCta } from "@/components/Areas/AreaPageFaqAndCta";
import { breadcrumbJsonLd, buildPageMetadata, JsonLd } from "@/lib/seo";

type AreaPageParams = {
  params: Promise<{ area: string }>;
};

export function generateStaticParams() {
  return locations.map((location) => ({ area: location.slug }));
}

export async function generateMetadata({ params }: AreaPageParams): Promise<Metadata> {
  const { area: slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};

  return buildPageMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: `/areas/${location.slug}`,
    image: location.heroImage,
    imageAlt: location.heroImageAlt,
  });
}

export default async function AreaDetailPage({ params }: AreaPageParams) {
  const { area: slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Areas", path: "/areas" },
          { name: location.county, path: `/areas/${location.slug}` },
        ])}
      />
      <AreaPageHero
        county={location.county}
        description={location.heroDescription}
        imageSrc={location.heroImage}
        imageAlt={location.heroImageAlt}
      />
      <AreaPageIntro county={location.county} paragraphs={location.intro} />
      <AreaPageTowns county={location.county} towns={location.towns} />
      <AreaPageServices county={location.county} />
      <AreaPageFaqAndCta county={location.county} faqs={location.faqs} />
    </>
  );
}
