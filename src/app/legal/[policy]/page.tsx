import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalHero } from "@/components/Legal/LegalHero";
import { LegalContent } from "@/components/Legal/LegalContent";
import { getLegalPolicy, getLegalPolicySlugs, legalPolicyPath } from "@/components/Legal/legalRoutes";
import { breadcrumbJsonLd, buildPageMetadata, JsonLd } from "@/lib/seo";

type LegalPolicyPageParams = {
  params: Promise<{ policy: string }>;
};

export function generateStaticParams() {
  return getLegalPolicySlugs().map((policy) => ({ policy }));
}

export async function generateMetadata({ params }: LegalPolicyPageParams): Promise<Metadata> {
  const { policy: slug } = await params;
  const policy = getLegalPolicy(slug);
  if (!policy) return {};

  return buildPageMetadata({
    title: policy.title,
    description: `${policy.title} for the Excel Electrics website operated by Excel Fire Ltd. Last updated ${policy.lastUpdated}.`,
    path: legalPolicyPath(policy.id),
  });
}

export default async function LegalPolicyPage({ params }: LegalPolicyPageParams) {
  const { policy: slug } = await params;
  const policy = getLegalPolicy(slug);
  if (!policy) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Legal", path: "/legal" },
          { name: policy.title, path: legalPolicyPath(policy.id) },
        ])}
      />
      <LegalHero />
      <LegalContent policy={policy} />
    </>
  );
}
