import type { Metadata } from "next";

const DEFAULT_OG_IMAGE = "/ExcelElectrics/NewLogo/ExcelWhatsapp.png";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  /** Absolute-path image for Open Graph / Twitter (prefer compressed WebP heroes). */
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
};

/** Shared title / description / canonical / Open Graph / Twitter for marketing pages. */
export function buildPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt = "Excel Electrics - Wire & Fire",
  noIndex = false,
}: PageMetaInput): Metadata {
  const brandedTitle = title.includes("Excel Electrics") ? title : `${title} | Excel Electrics`;

  return {
    title,
    description,
    alternates: { canonical: path },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type: "website",
      title: brandedTitle,
      description,
      url: path,
      siteName: "Excel Electrics",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: [image],
    },
  };
}

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://excelelectrics.com";
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  path: string;
  image?: string;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://excelelectrics.com";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: `${siteUrl}${input.path}`,
    image: input.image ? `${siteUrl}${input.image}` : undefined,
    provider: {
      "@type": "Electrician",
      name: "Excel Electrics",
      url: siteUrl,
    },
    areaServed: ["Essex", "Suffolk", "Cambridgeshire", "Hertfordshire", "London", "Greater London"],
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
