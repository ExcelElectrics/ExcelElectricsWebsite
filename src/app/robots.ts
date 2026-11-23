import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://excelelectrics.com";

// Search and AI assistants are welcome to read the public site. API routes and the
// gated case study PDFs (unlocked via the download form) stay out of indexes.
const PRIVATE_PATHS = ["/api/", "/case-studies/"];

const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: PRIVATE_PATHS },
      { userAgent: AI_CRAWLERS, allow: "/", disallow: PRIVATE_PATHS },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
