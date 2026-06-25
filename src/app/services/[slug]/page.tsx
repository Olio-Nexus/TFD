
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { services } from "@/data/services";
import ServiceRenderer from "@/components/services/ServiceRenderer";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find(
    (service) => service.slug === slug
  );

  if (!service) {
    return {};
  }

  return {
    title: service.seo?.title,
    description: service.seo?.description,
  };
}

export default async function Page({
  params,
}: Props) {
  const { slug } = await params;

  const service = services.find(
    (service) => service.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <ServiceRenderer
      sections={service.sections}
    />
  );
}

