import type { Metadata } from "next";

import ContactHero from "@/components/contact/ContactHero";
import DrillingCoverage from "@/components/contact/DrillingCoverage";
import EnquirySection from "@/components/contact/EnquirySection";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, organizationSchema, type JsonLdSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact TerraForma Drilling | Sydney & NSW",
  description: "Contact TerraForma Drilling for geotechnical drilling",
};

const pageSchema: JsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact`,
  name: "Contact TerraForma Drilling ",
  url: `${SITE_URL}/contact`,
  description:
    "Contact TerraForma Drilling for geotechnical drilling, SPT testing, environmental drilling, and monitoring bore installation across Greater Sydney and NSW. Same-day quotes. 24-hour mobilisation.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  mainEntity: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: "TerraForma Drilling",
    telephone: "+61272398878",
    email: "sales@tfdrilling.com.au",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wetherill Park",
      addressRegion: "NSW",
      postalCode: "2164",
      addressCountry: "AU",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "17:00",
      },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Contact Us", item: `${SITE_URL}/contact` },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd schemas={[organizationSchema, pageSchema]} />
      <ContactHero />
      <EnquirySection />
      <DrillingCoverage />
    </>
  );
}
