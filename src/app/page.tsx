import type { Metadata } from "next";

import AboutHero from "@/components/home/AboutHero";
import CaseStudies from "@/components/home/CaseStudies";
import CompanyIntro from "@/components/home/CompanyIntro";
import ContactCTA from "@/components/home/ContactCTA";
import FaqSection from "@/components/home/FaqSection";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import IndustriesSection from "@/components/home/IndustriesSection";
import InsightsSection from "@/components/home/InsightsSection";
import OurServices from "@/components/home/OurServices";
import StatsBar from "@/components/home/StatsBar";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, organizationSchema, type JsonLdSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Geotechnical Drilling Contractor | TerraForma Drilling",
  description:
    "TerraForma Drilling is a reliable geotechnical drilling contractor and drilling company based in Sydney, NSW. SFA drilling, SPT testing, environmental drilling, and Groundwater well installation across Greater Sydney and regional NSW. ISO certified. Same-day quote.",
};

const pageSchema: JsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "TerraForma Drilling",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/`,
      url: SITE_URL,
      name: "Geotechnical Drilling Contractor | TerraForma Drilling",
      description:
        "Reliable geotechnical drilling contractor based in Sydney NSW. SFA drilling, SPT testing, environmental drilling and monitoring bore installation across Greater Sydney and regional NSW. ISO certified.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        ],
      },
    },
  ],
};

const faqSchema: JsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is TerraForma Drilling based and where do they operate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TerraForma Drilling is a geotechnical drilling contractor based in Sydney, NSW. We work across Greater Sydney and regional NSW, including Newcastle, Wollongong, Central West NSW, New England, the Riverina, North Coast NSW, and the Southern Tablelands.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can TerraForma Drilling mobilise to site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TerraForma Drilling can be on site in Greater Sydney within 24 hours of booking confirmation. For regional NSW, mobilisation timeframes are confirmed during quoting and scheduled to fit the investigation programme.",
      },
    },
    {
      "@type": "Question",
      name: "Is TerraForma Drilling ISO certified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. TerraForma Drilling holds ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018, all independently audited and certified by TQCSI International.",
      },
    },
    {
      "@type": "Question",
      name: "Does TerraForma Drilling work with geotechnical and environmental consultants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Consulting firms are TerraForma Drilling's primary clients. TerraForma works as the drilling subcontractor, following the bore plan without competing for reporting, interpretation, or client relationships. Field data is handed directly to the nominated contact on completion.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
     <JsonLd schemas={[organizationSchema, pageSchema, faqSchema]} />
     <HomeHeroSection/>
     <CompanyIntro/>
     <StatsBar/>
     <OurServices/>
     <WhyChooseUs/>
     <AboutHero/>
     <IndustriesSection/>
     <HowItWorks/>
     <CaseStudies/>
     <InsightsSection/>
     <ContactCTA/>
     <FaqSection/> 
    </>
  );
}