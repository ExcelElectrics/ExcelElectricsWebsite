import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectHero } from "@/components/Projects/ProjectHero";
import { ProjectClosing, ProjectGallery, ProjectOverview, ProjectSteps } from "@/components/Projects/ProjectDetail";
import { getProjectBySlug, projects } from "@/components/Projects/projects-data";
import { breadcrumbJsonLd, buildPageMetadata, JsonLd } from "@/lib/seo";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://excelelectrics.com";

type ProjectPageParams = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: ProjectPageParams): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return buildPageMetadata({
    title: project.metaTitle,
    description: project.metaDescription,
    path: `/projects/${project.slug}`,
    image: project.heroImage.src,
    imageAlt: project.heroImage.alt,
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageParams) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const others = projects.filter((other) => other.slug !== project.slug);
  const images = [project.heroImage, ...project.gallery, ...(project.beforeAfter ?? []).flatMap((pair) => [pair.before, pair.after])];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: project.name, path: `/projects/${project.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: project.title,
            description: project.metaDescription,
            url: `${siteUrl}/projects/${project.slug}`,
            image: images.map((image) => `${siteUrl}${image.src}`),
            about: project.category,
            locationCreated: { "@type": "Place", name: project.location },
            author: { "@type": "Organization", name: "Excel Electrics", url: siteUrl },
            publisher: {
              "@type": "Organization",
              name: "Excel Electrics",
              logo: {
                "@type": "ImageObject",
                url: `${siteUrl}/ExcelElectrics/NewLogo/Excel%20Electrics%20Horizontal%20Light%20Mode.png`,
              },
            },
          },
        ]}
      />
      <ProjectHero
        eyebrow={project.category}
        title={project.title}
        description={project.summary}
        imageSrc={project.heroImage.src}
        imageAlt={project.heroImage.alt}
        crumbs={[{ name: "Home", href: "/" }, { name: "Projects", href: "/projects" }, { name: project.name }]}
      />
      <ProjectOverview project={project} />
      <ProjectSteps project={project} />
      <ProjectGallery project={project} />
      <ProjectClosing project={project} others={others} />
    </>
  );
}
