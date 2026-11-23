import type { Metadata } from "next";
import { ServiceClosingCta } from "@/components/Electrics/ServiceLanding/ServiceClosingCta";
import { ServiceHero } from "@/components/Electrics/ServiceLanding/ServiceHero";
import { ProjectsIndexGrid } from "@/components/Projects/ProjectsIndexGrid";
import { projects } from "@/components/Projects/projects-data";
import { breadcrumbJsonLd, buildPageMetadata, JsonLd } from "@/lib/seo";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://excelelectrics.com";
const title = "Our Projects";
const description =
  "Recent work by Excel Electrics: door entry and electric gates for a London almshouse, a forecourt lighting repair in Ipswich and fire door alarm interlinking at the Emirates Stadium.";
const heroImage = "/ExcelElectrics/photos/projects/almshouses/fitting-video-monitor.webp";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/projects",
  image: heroImage,
  imageAlt: "Excel Electrics engineer fitting a video door entry monitor",
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Excel Electrics projects",
            description,
            url: `${siteUrl}/projects`,
            hasPart: projects.map((project) => ({
              "@type": "Article",
              headline: project.title,
              url: `${siteUrl}/projects/${project.slug}`,
              image: `${siteUrl}${project.cardImage.src}`,
            })),
          },
        ]}
      />
      <ServiceHero
        eyebrow="A selection of our recent work"
        title="Our projects"
        lead="Here's a look at some of the homes and sites we've been trusted with lately, from new door entry for residents to getting a busy forecourt's lights back on."
        trustPoints={["Fully qualified & insured", "Friendly, tidy & respectful", "Essex · Suffolk · Cambs · Herts · London"]}
        imageSrc={heroImage}
        darken={0.45}
        imageAlt="Excel Electrics engineer fitting a video door entry monitor in a resident's home"
        primaryCtaLabel="Tell us about your job"
      />
      <ProjectsIndexGrid />
      <ServiceClosingCta
        title="Got a job you'd like a hand with?"
        lead="Big or small, just tell us what's going on and your postcode. We'll come back with friendly advice and a clear, fixed price, usually the same day."
        primaryLabel="Tell us about your job"
        formHref="/contact#enquiry-form"
        majorSeam
      />
    </>
  );
}
