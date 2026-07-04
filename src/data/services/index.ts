import type { Service } from "@/types/service";
import { SITE_URL } from "@/lib/seo";

import { sfaSections } from "./solid-flight-auger-drilling";
import { sptSections } from "./standard-penetration-testing";
import { environmentalDrillingSections } from "./environmental-drilling";
import { groundwaterWellInstallationSections } from "./groundwater-well-installation";

const sydneyArea = {
  "@type": "City",
  name: "Sydney",
  containsPlace: [
    { "@type": "City", name: "Parramatta" },
    { "@type": "City", name: "Blacktown" },
    { "@type": "City", name: "Marrickville" },
    { "@type": "City", name: "Chatswood" },
    { "@type": "City", name: "Randwick" },
  ],
};

const availableChannel = {
  "@type": "ServiceChannel",
  serviceUrl: `${SITE_URL}/contact`,
  servicePhone: "+61272398878",
};

export const services: Service[] = [
  {
    slug: "solid-flight-auger-drilling",
    seo: {
      title: "Solid Flight Auger Drilling Sydney & NSW | TerraForma Drilling",
      description:
        "TerraForma Drilling's ute-mounted Solid Flight Auger Drilling (SFA) rig reaches the Sydney sites standard rigs cannot — narrow lots, sloped blocks, low-clearance structures. Bulk disturbed, U50 sampling, SPT and DCP in a single mobilisation. Same-day quote.",
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE_URL}/services/solid-flight-auger-drilling`,
      name: "Solid Flight Auger Drilling",
      url: `${SITE_URL}/services/solid-flight-auger-drilling`,
      description:
        "TerraForma Drilling provides solid flight auger drilling and auger drilling contractor services across Greater Sydney and regional NSW using a ute-mounted SFA rig designed for tight-access sites.",
      provider: { "@id": `${SITE_URL}/#organization` },
      serviceType: "Solid Flight Auger Drilling",
      areaServed: [
        sydneyArea,
        {
          "@type": "State",
          name: "New South Wales",
          containsPlace: [
            { "@type": "City", name: "Newcastle" },
            { "@type": "City", name: "Wollongong" },
            { "@type": "City", name: "Dubbo" },
            { "@type": "City", name: "Wagga Wagga" },
          ],
        },
      ],
      availableChannel,
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
          { "@type": "ListItem", position: 3, name: "Solid Flight Auger Drilling", item: `${SITE_URL}/services/solid-flight-auger-drilling` },
        ],
      },
    },
    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Solid Flight Auger (SFA) drilling used for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Solid Flight Auger drilling is used for geotechnical, environmental, and site investigations. It allows engineers and consultants to collect soil samples, assess subsurface conditions, and obtain ground information required for foundation design and project planning.",
          },
        },
        {
          "@type": "Question",
          name: "Can Solid Flight Auger drilling be used on tight-access sites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TerraForma Drilling's ute-mounted SFA rig is designed for tight-access environments including narrow residential lots, low-clearance structures, constrained urban developments, and sites where larger tracked drilling rigs cannot operate.",
          },
        },
        {
          "@type": "Question",
          name: "Does TerraForma Drilling perform Standard Penetration Testing (SPT)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TerraForma Drilling provides SPT using a calibrated automatic trip hammer. SPT measures soil resistance and density, providing N-value data that geotechnical engineers use for foundation design, site classification, and ground-condition assessments.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can TerraForma Drilling mobilise for an SFA drilling project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For most projects within Greater Sydney, TerraForma Drilling can mobilise within 24 hours of booking confirmation. Regional NSW mobilisation timeframes are confirmed during quoting based on project location and scope.",
          },
        },
        {
          "@type": "Question",
          name: "What makes TerraForma Drilling different from other auger drilling contractors in Sydney?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TerraForma Drilling combines the mobility of a ute-mounted SFA rig with geotechnical investigation capability including SPT and DCP testing in a single mobilisation. This allows access to challenging sites while delivering reliable drilling, sampling, and testing results — making TerraForma Drilling the auger drilling contractor Sydney consultants rely on.",
          },
        },
      ],
    },
    sections: sfaSections,
  },

  {
    slug: "standard-penetration-testing",
    seo: {
      title: "SPT Testing Sydney — Standard Penetration Testing NSW | TerraForma Drilling",
      description:
        "Well maintained SPT testing across Greater Sydney and NSW. Automatic trip hammer, N-values recorded at your specified depths and handed directly to your engineer. Same-day quote",
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE_URL}/services/standard-penetration-testing`,
      name: "Standard Penetration Testing (SPT)",
      url: `${SITE_URL}/services/standard-penetration-testing`,
      description:
        "TerraForma Drilling provides calibrated SPT testing across Greater Sydney and regional NSW. Automatic trip hammer. N-values at your specified depths handed directly to your engineer. Well maintained records on request.",
      provider: { "@id": `${SITE_URL}/#organization` },
      serviceType: "Standard Penetration Testing",
      areaServed: [
        sydneyArea,
        {
          "@type": "State",
          name: "New South Wales",
          containsPlace: [
            { "@type": "City", name: "Newcastle" },
            { "@type": "City", name: "Wollongong" },
            { "@type": "City", name: "Dubbo" },
            { "@type": "City", name: "Wagga Wagga" },
          ],
        },
      ],
      availableChannel,
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
          { "@type": "ListItem", position: 3, name: "Standard Penetration Testing", item: `${SITE_URL}/services/standard-penetration-testing` },
        ],
      },
    },
    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a Standard Penetration Test (SPT) used for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Standard Penetration Test is an in-situ soil testing method used to measure soil resistance and density. The resulting SPT N-value data helps geotechnical engineers assess ground conditions for foundation design, site classifications, and engineering assessments.",
          },
        },
        {
          "@type": "Question",
          name: "Does TerraForma provide SPT testing in Sydney?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TerraForma provides SPT testing in Sydney and regional NSW using calibrated equipment and a tight-access drilling platform for residential, commercial, infrastructure, and environmental investigations.",
          },
        },
        {
          "@type": "Question",
          name: "Can SPT testing be completed on tight-access sites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TerraForma's ute-mounted drilling rig enables Standard Penetration Testing on constrained sites including narrow residential lots, low-clearance areas, and developed urban environments across Greater Sydney.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can TerraForma mobilise for SPT testing projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For most projects within Greater Sydney, TerraForma can mobilise within 24 hours of confirmation. Regional NSW mobilisation schedules are confirmed during quoting based on project requirements and location.",
          },
        },
        {
          "@type": "Question",
          name: "What makes TerraForma different from other SPT testing contractors in Sydney?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TerraForma combines calibrated SPT equipment, tight-access drilling capability, and engineering-focused field delivery. SPT N-value data and field records are provided to support the geotechnical investigation while interpretation, engineering assessment, and reporting remain with the appointed consultant.",
          },
        },
      ],
    },
    sections: sptSections,
  },

  {
    slug: "environmental-drilling",
    seo: {
      title: "Environmental Drilling Sydney — Contaminated Land & Phase 2 DSI NSW | TerraForma Drilling",
      description:
        "Environmental drilling for Phase 2 DSI, contaminated land, VENM and acid sulfate soil investigations across Sydney and NSW. TFD drills, Your Engineers Handle Investigations",
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE_URL}/services/environmental-drilling`,
      name: "Environmental Drilling",
      url: `${SITE_URL}/services/environmental-drilling`,
      description:
        "Phase 2 DSI, contaminated land, VENM and acid sulfate soil drilling across Sydney and NSW. TFD drills to specification — sampling and chain of custody remain with your consultant.",
      provider: { "@id": `${SITE_URL}/#organization` },
      serviceType: "Environmental Investigation Drilling",
      areaServed: [
        sydneyArea,
        {
          "@type": "State",
          name: "New South Wales",
          containsPlace: [
            { "@type": "City", name: "Newcastle" },
            { "@type": "City", name: "Wollongong" },
            { "@type": "City", name: "Coffs Harbour" },
            { "@type": "City", name: "Wagga Wagga" },
          ],
        },
      ],
      availableChannel,
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
          { "@type": "ListItem", position: 3, name: "Environmental Drilling", item: `${SITE_URL}/services/environmental-drilling` },
        ],
      },
    },
    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is environmental drilling used for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Environmental drilling investigates subsurface conditions for contaminated land assessments, Phase 2 Detailed Site Investigations (DSI), groundwater investigations, and environmental monitoring programs. It helps consultants collect information to assess site conditions and manage environmental risks.",
          },
        },
        {
          "@type": "Question",
          name: "Does TerraForma Drilling complete contaminated land drilling in Sydney?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TerraForma provides contaminated land drilling services throughout Sydney and NSW, supporting environmental consultants with Phase 2 DSI investigations, soil contamination assessments, VENM and ENM assessments, and acid sulfate soil investigation programs.",
          },
        },
        {
          "@type": "Question",
          name: "Can environmental drilling be completed on tight-access sites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TerraForma's purpose-built ute-mounted drilling platform allows environmental drilling on constrained sites including urban developments, operating industrial facilities, and locations where larger rigs have access limitations.",
          },
        },
        {
          "@type": "Question",
          name: "Does TerraForma manage sampling and chain of custody for environmental investigations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. TerraForma Drilling provides the borehole only. Sampling methodologies, chain of custody, laboratory coordination, interpretation, and reporting remain with the appointed environmental consultant. Equipment is decontaminated between boreholes in accordance with site investigation requirements.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can TerraForma mobilise for environmental drilling projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For many projects within Greater Sydney, TerraForma can mobilise within 24 hours of project confirmation. Regional NSW mobilisation schedules are confirmed during quoting based on project location, scope, and site requirements.",
          },
        },
      ],
    },
    sections: environmentalDrillingSections,
  },

  {
    slug: "groundwater-well-installation",
    seo: {
      title: "Groundwater Well Installation Sydney — Monitoring Bore & Piezometer NSW | TerraForma Drilling",
      description:
        "Terraforma's Groundwater monitoring well installation across Sydney and NSW — casing, screen intervals, and filter pack to your exact specifications. TFD installs. Your engineer interprets.",
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE_URL}/services/groundwater-well-installation`,
      name: "Groundwater Well Installation",
      alternateName: "Monitoring Bore and Piezometer Installation",
      url: `${SITE_URL}/services/groundwater-well-installation`,
      description:
        "TerraForma Drilling provides groundwater well installation, monitoring bore installation, and piezometer installation across Greater Sydney and regional NSW. Installed to your exact specifications including casing, screen intervals, filter pack, and surface completion. Monitoring bores for environmental and geotechnical monitoring only — not water supply wells.",
      provider: { "@id": `${SITE_URL}/#organization` },
      serviceType: "Monitoring Bore Installation",
      areaServed: [
        sydneyArea,
        {
          "@type": "State",
          name: "New South Wales",
          containsPlace: [
            { "@type": "City", name: "Newcastle" },
            { "@type": "City", name: "Wollongong" },
            { "@type": "City", name: "Wagga Wagga" },
            { "@type": "City", name: "Coffs Harbour" },
          ],
        },
      ],
      availableChannel,
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
          { "@type": "ListItem", position: 3, name: "Groundwater Well Installation", item: `${SITE_URL}/services/groundwater-well-installation` },
        ],
      },
    },
    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a groundwater monitoring well used for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A monitoring bore, also known as a groundwater monitoring well, is used to monitor groundwater conditions and collect groundwater samples during environmental investigations, contaminated land assessments, and geotechnical investigation programmes. TerraForma Drilling installs monitoring bores for environmental and geotechnical monitoring purposes only — not for domestic or agricultural water supply.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between a monitoring bore and a piezometer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A monitoring bore is generally used for groundwater sampling and long-term environmental monitoring. A piezometer is specifically designed to measure groundwater levels and pressure within the subsurface.",
          },
        },
        {
          "@type": "Question",
          name: "Does TerraForma provide groundwater well installation in Sydney?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TerraForma provides groundwater monitoring well installation across Greater Sydney and regional NSW, including monitoring bore and piezometer installation for environmental and geotechnical investigations. TerraForma does not provide domestic or agricultural water supply bore installation.",
          },
        },
        {
          "@type": "Question",
          name: "Can groundwater monitoring wells be installed on tight-access sites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TerraForma's ute-mounted drilling platform allows groundwater monitoring well installation on constrained urban sites and locations where larger rigs have limited access.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can TerraForma mobilise for groundwater well installation projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For most projects in Greater Sydney, TerraForma can mobilise within 24 hours of confirmation. Regional NSW mobilisation schedules are confirmed during quoting based on project location, scope, and investigation requirements.",
          },
        },
      ],
    },
    sections: groundwaterWellInstallationSections,
  },
];
