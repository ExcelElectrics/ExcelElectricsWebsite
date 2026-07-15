import { NextResponse } from "next/server";

/**
 * Next.js 16.2's `app/sitemap.ts` metadata-route convention has a known production
 * regression on Vercel (the route builds fine but serves a 500/404 at runtime, while
 * `robots.txt` works as expected). Serving the XML directly via a route handler avoids
 * that broken pipeline entirely. See: https://github.com/vercel/next.js/issues/85632
 */
export const dynamic = "force-dynamic";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://excel-electrical.vercel.app";

type SitemapEntry = {
  url: string;
  changeFrequency: "monthly" | "yearly";
  priority: number;
};

const entries: SitemapEntry[] = [
  { url: siteUrl, changeFrequency: "monthly", priority: 1 },
  { url: `${siteUrl}/legal`, changeFrequency: "yearly", priority: 0.2 },
];

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
