import type { Metadata } from "next";

import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, organizationSchema, type JsonLdSchema } from "@/lib/seo";
import Certificates from "@/components/our-clients-certifications/Certificates";
import ClientsCTA from "@/components/our-clients-certifications/ClientsCTA";
import ClientsHero from "@/components/our-clients-certifications/ClientsHero";
import TrustedClients from "@/components/our-clients-certifications/TrustedClients";
import WhyChooseSection from "@/components/our-clients-certifications/WhyChooseSection";

export const metadata: Metadata = {
  title:
    "ISO Certified Drilling Contractor — Clients & Certifications | TerraForma Drilling",
  description: "Know about the clients tfd has served so far and its certified work",
};

const pageSchema: JsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}/about/our-clients-certifications`,
  name: "Clients and Certifications — TerraForma Drilling",
  url: `${SITE_URL}/about/our-clients-certifications`,
  description: "Know about the clients tfd has served so far and its certified work",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    award: [
      "ISO 9001:2015 Quality Management Systems — TQCSI International",
      "ISO 14001:2015 Environmental Management Systems — TQCSI International",
      "ISO 45001:2018 Occupational Health and Safety Management Systems — TQCSI International",
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "About Us", item: `${SITE_URL}/about-us` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Clients and Certifications",
        item: `${SITE_URL}/about/our-clients-certifications`,
      },
    ],
  },
};

export default function OurClientsCertifications() {
  return (
    <>
      <JsonLd schemas={[organizationSchema, pageSchema]} />
      <ClientsHero/>
      <Certificates/>
      <TrustedClients/>
      <WhyChooseSection/>
      <ClientsCTA/>
    </>
  );
}