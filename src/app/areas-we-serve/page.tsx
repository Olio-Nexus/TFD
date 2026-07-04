import type { Metadata } from "next";

import AreaWeServeCta from "@/components/areaweserve/AreaWeServeCta";
import AreaWeServeFaq from "@/components/areaweserve/AreaWeServeFaq";
import RegionSection from "@/components/areaweserve/RegionSection";
import ServicesAWS from "@/components/areaweserve/ServicesAWS";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, organizationSchema, type JsonLdSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Areas We Serve | TerraForma Drilling",
  description:
    "Select your region below to find TerraForma Drilling services near you.",
};

const pageSchema: JsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/areas-we-serve`,
  name: "Areas We Serve | TerraForma Drilling",
  url: `${SITE_URL}/areas-we-serve`,
  description:
    "Select your region below to find TerraForma Drilling services near you.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Areas We Serve", item: `${SITE_URL}/areas-we-serve` },
    ],
  },
};

const faqSchema: JsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where does TerraForma Drilling operate in New South Wales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TerraForma Drilling provides geotechnical drilling, environmental drilling, testing, and groundwater monitoring bore installation services across Greater Sydney and regional NSW, including Newcastle & Hunter, Wollongong & Illawarra, Central West, North Coast, Riverina, Southern Tablelands, and New England regions.",
      },
    },
    {
      "@type": "Question",
      name: "Can TerraForma Drilling mobilise to regional NSW projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. TerraForma Drilling supports projects throughout metropolitan and regional New South Wales. Mobilisation to regional locations is regularly undertaken for geotechnical investigations, environmental drilling programmes, and monitoring bore installations, with schedules confirmed during quoting.",
      },
    },
  ],
};

export default function AreaWeServe(){
    return(
        <>
        <JsonLd schemas={[organizationSchema, pageSchema, faqSchema]} />
        <RegionSection/>
        <ServicesAWS/>
        <AreaWeServeCta/>
        <AreaWeServeFaq/>
        </>
    )
};