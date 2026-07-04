import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { areas } from "@/data/areas";
import AreaRenderer from "@/components/areaweserve/detail/AreaRenderer";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema, type JsonLdSchema } from "@/lib/seo";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return areas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const area = areas.find((area) => area.slug === slug);

  if (!area) {
    return {};
  }

  return {
    title: area.seo?.title,
    description: area.seo?.description,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const area = areas.find((area) => area.slug === slug);

  if (!area) {
    notFound();
  }

  const schemas: JsonLdSchema[] = [organizationSchema];
  if (area.schema) schemas.push(area.schema);
  if (area.faqSchema) schemas.push(area.faqSchema);

  return (
    <>
      <JsonLd schemas={schemas} />
      <AreaRenderer sections={area.sections} />
    </>
  );
}
