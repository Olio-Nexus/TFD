import type { Metadata } from "next";

import AboutSection from "@/components/about/AboutSection";
import AboutStory from "@/components/about/AboutStory";
import CertificationsSection from "@/components/about/CertificationsSection";
import EquipmentSafetySection from "@/components/about/EquipmentSafetySection";
import NSWCoverageSection from "@/components/about/NSWCoverageSection";
import StatsStrip from "@/components/about/StatsStrip";
import AboutFaq from "@/components/about/AboutFaq";
import AboutCta from "@/components/about/AboutCta"
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, organizationSchema, type JsonLdSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About TerraForma Drilling — Built by Engineers, for Engineers",
  description:
    "Know more about Terraforma and how TFD Has Established its place in this Niche.",
};

const pageSchema: JsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}/about-us`,
  name: "About TerraForma Drilling — Built by Engineers, for Engineers",
  url: `${SITE_URL}/about-us`,
  description:
    "Know more about Terraforma and how TFD Has Established its place in this Niche.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "About Us", item: `${SITE_URL}/about-us` },
    ],
  },
};

const faqSchema: JsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is TerraForma Drilling based and where do you operate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TerraForma Drilling is based in Sydney, NSW, and provides geotechnical and environmental drilling services throughout New South Wales including Greater Sydney, Newcastle, Wollongong, Central West NSW, New England, North Coast NSW, Riverina, and Southern Tablelands.",
      },
    },
    {
      "@type": "Question",
      name: "What makes TerraForma Drilling different from other drilling contractors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TerraForma Drilling is built by engineers, for engineers. The ute-mounted SFA rig reaches constrained and tight-access sites where standard rigs cannot operate. TerraForma holds three active ISO certifications via TQCSI International and uses calibrated SPT and DCP equipment with records available on request.",
      },
    },
    {
      "@type": "Question",
      name: "Does TerraForma Drilling operate outside New South Wales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. TerraForma Drilling currently operates exclusively within New South Wales covering Greater Sydney and all regional NSW areas.",
      },
    },
  ],
};

export default function AboutPage() {
  return (
  <>
   <JsonLd schemas={[organizationSchema, pageSchema, faqSchema]} />
   <AboutSection/>
   <StatsStrip/>
   <AboutStory/>
   <EquipmentSafetySection/>
   <CertificationsSection/>
   <NSWCoverageSection/>
   <AboutCta/>
   <AboutFaq/>
   </>
  )
}