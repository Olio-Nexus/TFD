import type { Metadata } from "next";

import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, organizationSchema, type JsonLdSchema } from "@/lib/seo";
import OurTeamHero from "@/components/our-team/OurTeamHero";
import AboutCrew from "@/components/our-team/AboutCrew";
import WhatDefinesOurTeam from "@/components/our-team/WhatDefinesOurTeam";

export const metadata: Metadata = {
  title: "Our Team — TerraForma Drilling | Geotechnical Drillers NSW",
  description:
    "Meet the TerraForma Drilling team — experienced geotechnical drillers and field operators delivering reliable site investigations across Greater Sydney and regional NSW.",
};

const pageSchema: JsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}/about/our-team`,
  name: "Our Team — TerraForma Drilling",
  url: `${SITE_URL}/about/our-team`,
  description:
    "Meet the TerraForma Drilling team — experienced geotechnical drillers and field operators delivering reliable site investigations across Greater Sydney and regional NSW.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    employee: [
      { "@type": "Person", jobTitle: "Managing Director", worksFor: { "@id": `${SITE_URL}/#organization` } },
      { "@type": "Person", jobTitle: "Lead Engineer", worksFor: { "@id": `${SITE_URL}/#organization` } },
      { "@type": "Person", jobTitle: "Operations Coordinator", worksFor: { "@id": `${SITE_URL}/#organization` } },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "About Us", item: `${SITE_URL}/about-us` },
      { "@type": "ListItem", position: 3, name: "Our Team", item: `${SITE_URL}/about/our-team` },
    ],
  },
};

export default function TeamPage() {
  return (
    <>
      <JsonLd schemas={[organizationSchema, pageSchema]} />
      <OurTeamHero />
      <AboutCrew/>
      <WhatDefinesOurTeam/>
    </>
  );
}
