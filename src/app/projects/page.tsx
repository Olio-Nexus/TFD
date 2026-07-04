import type { Metadata } from "next";

import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import CtaSection from "@/components/Industries/IndustriesDetail/CtaSection";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, organizationSchema, type JsonLdSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title:
    "Projects & Case Studies — TerraForma Drilling | NSW Geotechnical Drilling",
  description:
    "Real geotechnical and environmental drilling projects completed by TerraForma Drilling across Greater Sydney and regional NSW.",
};

const pageSchema: JsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/projects`,
  name: "Projects and Case Studies — TerraForma Drilling",
  url: `${SITE_URL}/projects`,
  description:
    "Real geotechnical and environmental drilling projects completed by TerraForma Drilling across Greater Sydney and regional NSW — tight-access investigations, Phase 2 DSI programs, and monitoring bore installations.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects and Case Studies",
        item: `${SITE_URL}/projects`,
      },
    ],
  },
};

export default function Projects() {
  return (
    <>
      <JsonLd schemas={[organizationSchema, pageSchema]} />
      <ProjectsHero />
      <ProjectsGrid />
      <CtaSection
        title="Do You Have a Site with Unique Access or Investigation Needs?"
        highlight="Unique Access or Investigation Needs?"
        description="TerraForma Drilling offers practical geotechnical and environmental field support throughout Sydney and regional New South Wales."
        secondaryLabel="View Services"
      />
    </>
  );
}
