import { NextResponse } from "next/server";
import { locations } from "@/components/Areas/areas-data";
import { getLegalPolicySlugs, legalPolicyPath } from "@/components/Legal/legalRoutes";
import { SERVICE_NAV_LINKS } from "@/components/Navigation/serviceNavLinks";

/**
 * Next.js 16.2's `app/sitemap.ts` metadata-route convention has a known production
 * regression on Vercel. Serving XML via a route handler avoids that pipeline.
 * See: https://github.com/vercel/next.js/issues/85632
 */
export const dynamic = "force-dynamic";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://excelelectrics.com";

type SitemapEntry = {
  url: string;
  changeFrequency: "monthly" | "yearly";
  priority: number;
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
  }));

  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/services`, changeFrequency: "monthly", priority: 0.92 },
    ...servicePages,
    { url: `${siteUrl}/why-us`, changeFrequency: "monthly", priority: 0.85 },
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
  const lastModified = new Date().toISOString();
  const entries = buildEntries();

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${escapeXml(entry.url)}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
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
