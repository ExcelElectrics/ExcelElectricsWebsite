import { NextResponse } from "next/server";
import { locations } from "@/components/Areas/areas-data";
import { getLegalPolicySlugs, legalPolicyPath } from "@/components/Legal/legalRoutes";
import { SERVICE_NAV_LINKS } from "@/components/Navigation/serviceNavLinks";
import { projects } from "@/components/Projects/projects-data";

/**
 * Next.js 16.2's `app/sitemap.ts` metadata-route convention has a known production
 * regression on Vercel. Serving XML via a route handler avoids that pipeline.
 * See: https://github.com/vercel/next.js/issues/85632
 */
export const dynamic = "force-dynamic";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://excelelectrics.com";

/** Bump when page content meaningfully changes (a per-request "now" tells crawlers everything always changed). */
const SITE_LAST_UPDATED = "2026-11-24";
const LEGAL_LAST_UPDATED = "2026-08-13";

type SitemapEntry = {
  url: string;
  changeFrequency: "monthly" | "yearly";
  priority: number;
  lastModified?: string;
  images?: string[];
};

/** Every publicly indexable marketing URL — built from the same sources as the nav. */
function buildEntries(): SitemapEntry[] {
  const servicePages: SitemapEntry[] = SERVICE_NAV_LINKS.map((service) => ({
    url: `${siteUrl}${service.href}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const areaPages: SitemapEntry[] = locations.map((location) => ({
    url: `${siteUrl}/areas/${location.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const legalPages: SitemapEntry[] = getLegalPolicySlugs().map((slug) => ({
    url: `${siteUrl}${legalPolicyPath(slug)}`,
    changeFrequency: "yearly" as const,
    priority: 0.2,
    lastModified: LEGAL_LAST_UPDATED,
  }));

  const projectPages: SitemapEntry[] = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    images: [project.heroImage, ...project.gallery].map((image) => `${siteUrl}${image.src}`),
  }));

  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/services`, changeFrequency: "monthly", priority: 0.92 },
    ...servicePages,
    { url: `${siteUrl}/why-us`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteUrl}/projects`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/excel-fire`, changeFrequency: "yearly", priority: 0.5 },
    ...projectPages,
    { url: `${siteUrl}/areas`, changeFrequency: "monthly", priority: 0.85 },
    ...areaPages,
    { url: `${siteUrl}/contact`, changeFrequency: "monthly", priority: 0.8 },
    ...legalPages,
  ];
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const entries = buildEntries();

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries
  .map(
    (entry) => `  <url>
    <loc>${escapeXml(entry.url)}</loc>
    <lastmod>${entry.lastModified ?? SITE_LAST_UPDATED}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>${(entry.images ?? [])
      .map((image) => `\n    <image:image><image:loc>${escapeXml(image)}</image:loc></image:image>`)
      .join("")}
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
