import type { Metadata } from "next";
import { HomeLocations } from "@/components/Home/HomeLocations";
import { AreasHero } from "@/components/Areas/AreasHero";
import { AreasSeo } from "@/components/Areas/AreasSeo";
import { breadcrumbJsonLd, buildPageMetadata, JsonLd } from "@/lib/seo";

const title = "Areas We Cover";
const description =
  "Excel Electrics covers Essex, Suffolk, Cambridgeshire, Hertfordshire, central London and Greater London. Browse the map and full town lists for local electrical services.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/areas",
  image: "/ExcelElectrics/services/electrical/electrical-hero.webp",
  imageAlt: "Excel Electrics coverage across the East of England and London",
});

export default function AreasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Areas", path: "/areas" },
        ])}
      />
      <AreasHero />
      <HomeLocations
        variant="electrics"
        sectionId="map"
        majorSeam={false}
        detailBasePath="/areas"
        heading={{
          kicker: "Explore the map",
          title: "Tap a county for detail",
          lead:
            "We cover Essex, Suffolk, Cambridgeshire, Hertfordshire, central London and Greater London. Select a county on the map or in the list to see key towns, then open the full area page for more.",
        }}
      />
      <AreasSeo />
    </>
  );
}
