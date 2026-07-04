import type { Metadata } from "next";

import ServicesHero from "@/components/services/ServicesHero"
import ServicesGrid from "@/components/services/ServicesGrid"
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, organizationSchema, type JsonLdSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Our Services | TerraForma Drilling",
  description:
    "Browse TerraForma Drilling's full range of field services. Select a service below to learn more.",
};

const pageSchema: JsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/services`,
  name: "Our Services | TerraForma Drilling",
  url: `${SITE_URL}/services`,
  description:
    "Browse TerraForma Drilling's full range of field services. Select a service below to learn more.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
    ],
  },
};

export default function Services(){
    return(
        <>
       <JsonLd schemas={[organizationSchema, pageSchema]} />
       <ServicesHero/>
       <ServicesGrid/>
        </>
    )
}