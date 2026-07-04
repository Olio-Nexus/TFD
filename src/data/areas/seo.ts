// Per-page meta + JSON-LD (page-specific & FAQ) for "Areas We Serve" pages.
// Sourced from "Terraforma Drilling SEO - Metas & Schemas.csv".
// The sitewide Organization schema is injected separately via lib/seo.
import type { JsonLdSchema } from "@/lib/seo";

export interface AreaSeo {
  title: string;
  description: string;
  schema: JsonLdSchema;
  faqSchema?: JsonLdSchema;
}

export const areaSeo: Record<string, AreaSeo> = {
  "southern-tablelands": {
    title:
      "Geotechnical Drilling Southern Tablelands — Goulburn & Batemans Bay | TerraForma Drilling",
    description:
      "Geotechnical and environmental drilling across the Southern Tablelands — Goulburn and Batemans Bay — basalt soils, coastal DSI zones, and Snowy corridor.",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://tfdrilling.com.au/areas-we-serve/southern-tablelands",
      name: "Geotechnical Drilling Southern Tablelands — Goulburn and Batemans Bay | TerraForma Drilling",
      url: "https://tfdrilling.com.au/areas-we-serve/southern-tablelands",
      description:
        "TerraForma Drilling provides geotechnical and environmental drilling across the Southern Tablelands — Goulburn and Batemans Bay — basalt soils, coastal ESA zones, and Snowy corridor.",
      isPartOf: { "@id": "https://tfdrilling.com.au/#website" },
      about: [
        {
          "@type": "Service",
          name: "Solid Flight Auger Drilling",
          url: "https://tfdrilling.com.au/services/solid-flight-auger-drilling",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Goulburn" },
            { "@type": "City", name: "Queanbeyan" },
            { "@type": "City", name: "Yass" },
            { "@type": "City", name: "Batemans Bay" },
            { "@type": "City", name: "Braidwood" },
            { "@type": "City", name: "Moss Vale" },
            { "@type": "City", name: "Bowral" },
            { "@type": "City", name: "Mittagong" },
            { "@type": "City", name: "Crookwell" },
            { "@type": "City", name: "Bungendore" },
          ],
        },
        {
          "@type": "Service",
          name: "Standard Penetration Testing (SPT)",
          url: "https://tfdrilling.com.au/services/standard-penetration-testing",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Goulburn" },
            { "@type": "City", name: "Queanbeyan" },
            { "@type": "City", name: "Yass" },
            { "@type": "City", name: "Batemans Bay" },
            { "@type": "City", name: "Braidwood" },
            { "@type": "City", name: "Moss Vale" },
            { "@type": "City", name: "Bowral" },
            { "@type": "City", name: "Mittagong" },
            { "@type": "City", name: "Crookwell" },
            { "@type": "City", name: "Bungendore" },
          ],
        },
        {
          "@type": "Service",
          name: "Environmental Drilling",
          url: "https://tfdrilling.com.au/services/environmental-drilling",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Goulburn" },
            { "@type": "City", name: "Queanbeyan" },
            { "@type": "City", name: "Yass" },
            { "@type": "City", name: "Batemans Bay" },
            { "@type": "City", name: "Braidwood" },
            { "@type": "City", name: "Moss Vale" },
            { "@type": "City", name: "Bowral" },
            { "@type": "City", name: "Mittagong" },
            { "@type": "City", name: "Crookwell" },
            { "@type": "City", name: "Bungendore" },
          ],
        },
        {
          "@type": "Service",
          name: "Groundwater Well Installation",
          url: "https://tfdrilling.com.au/services/groundwater-well-installation",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Goulburn" },
            { "@type": "City", name: "Queanbeyan" },
            { "@type": "City", name: "Yass" },
            { "@type": "City", name: "Batemans Bay" },
            { "@type": "City", name: "Braidwood" },
            { "@type": "City", name: "Moss Vale" },
            { "@type": "City", name: "Bowral" },
            { "@type": "City", name: "Mittagong" },
            { "@type": "City", name: "Crookwell" },
            { "@type": "City", name: "Bungendore" },
          ],
        },
      ],
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://tfdrilling.com.au",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Areas We Serve",
            item: "https://tfdrilling.com.au/areas-we-serve",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Southern Tablelands",
            item: "https://tfdrilling.com.au/areas-we-serve/southern-tablelands",
          },
        ],
      },
    },
    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What geotechnical drilling services does TerraForma provide in the Southern Tablelands?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TerraForma provides Solid Flight Auger drilling, SPT testing, DCP testing, environmental drilling, and groundwater monitoring bore installation for geotechnical and environmental projects across the Southern Tablelands including Goulburn, Queanbeyan, Batemans Bay, Bowral, and surrounding areas.",
          },
        },
        {
          "@type": "Question",
          name: "Can TerraForma support infrastructure and renewable energy projects in the Southern Tablelands?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TerraForma regularly supports drilling for transport corridors, renewable energy projects, utility infrastructure, and regional construction projects throughout the Southern Tablelands.",
          },
        },
        {
          "@type": "Question",
          name: "Can TerraForma work on remote and difficult-access sites in the Southern Tablelands?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The compact ute-mounted drilling platform is built for rural locations, infrastructure corridors, and sites where larger rigs cannot easily access.",
          },
        },
        {
          "@type": "Question",
          name: "Does TerraForma work with consultants in the Southern Tablelands?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TerraForma works with geotechnical and environmental consultants providing drilling, sampling, and testing while consultants are responsible for interpretation, reporting, and recommendations.",
          },
        },
      ],
    },
  },
  "north-coast-nsw": {
    title:
      "Geotechnical Drilling North Coast NSW — Coffs Harbour | TerraForma Drilling",
    description:
      "Geotechnical and environmental drilling across North Coast NSW — Coffs Harbour and surrounds — acid sulfate soil risk zones and coastal developments.",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://tfdrilling.com.au/areas-we-serve/north-coast-nsw",
      name: "Geotechnical Drilling North Coast NSW — Coffs Harbour | TerraForma Drilling",
      url: "https://tfdrilling.com.au/areas-we-serve/north-coast-nsw",
      description:
        "TerraForma Drilling provides geotechnical and environmental drilling across North Coast NSW — Coffs Harbour and surrounds — acid sulfate soil risk zones and coastal developments.",
      isPartOf: { "@id": "https://tfdrilling.com.au/#website" },
      about: [
        {
          "@type": "Service",
          name: "Solid Flight Auger Drilling",
          url: "https://tfdrilling.com.au/services/solid-flight-auger-drilling",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Coffs Harbour" },
            { "@type": "City", name: "Woolgoolga" },
            { "@type": "City", name: "Byron Bay" },
            { "@type": "City", name: "Ballina" },
            { "@type": "City", name: "Lismore" },
            { "@type": "City", name: "Murwillumbah" },
            { "@type": "City", name: "Port Macquarie" },
            { "@type": "City", name: "Taree" },
            { "@type": "City", name: "Kempsey" },
            { "@type": "City", name: "Nambucca Heads" },
          ],
        },
        {
          "@type": "Service",
          name: "Standard Penetration Testing (SPT)",
          url: "https://tfdrilling.com.au/services/standard-penetration-testing",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Coffs Harbour" },
            { "@type": "City", name: "Woolgoolga" },
            { "@type": "City", name: "Byron Bay" },
            { "@type": "City", name: "Ballina" },
            { "@type": "City", name: "Lismore" },
            { "@type": "City", name: "Murwillumbah" },
            { "@type": "City", name: "Port Macquarie" },
            { "@type": "City", name: "Taree" },
            { "@type": "City", name: "Kempsey" },
            { "@type": "City", name: "Nambucca Heads" },
          ],
        },
        {
          "@type": "Service",
          name: "Environmental Drilling",
          url: "https://tfdrilling.com.au/services/environmental-drilling",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Coffs Harbour" },
            { "@type": "City", name: "Woolgoolga" },
            { "@type": "City", name: "Byron Bay" },
            { "@type": "City", name: "Ballina" },
            { "@type": "City", name: "Lismore" },
            { "@type": "City", name: "Murwillumbah" },
            { "@type": "City", name: "Port Macquarie" },
            { "@type": "City", name: "Taree" },
            { "@type": "City", name: "Kempsey" },
            { "@type": "City", name: "Nambucca Heads" },
          ],
        },
        {
          "@type": "Service",
          name: "Groundwater Well Installation",
          url: "https://tfdrilling.com.au/services/groundwater-well-installation",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Coffs Harbour" },
            { "@type": "City", name: "Woolgoolga" },
            { "@type": "City", name: "Byron Bay" },
            { "@type": "City", name: "Ballina" },
            { "@type": "City", name: "Lismore" },
            { "@type": "City", name: "Murwillumbah" },
            { "@type": "City", name: "Port Macquarie" },
            { "@type": "City", name: "Taree" },
            { "@type": "City", name: "Kempsey" },
            { "@type": "City", name: "Nambucca Heads" },
          ],
        },
      ],
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://tfdrilling.com.au",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Areas We Serve",
            item: "https://tfdrilling.com.au/areas-we-serve",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "North Coast NSW",
            item: "https://tfdrilling.com.au/areas-we-serve/north-coast-nsw",
          },
        ],
      },
    },
    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What geotechnical drilling services does TerraForma provide in North Coast NSW?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TerraForma provides Solid Flight Auger drilling, SPT testing, DCP testing, environmental drilling, and groundwater monitoring bore installation for geotechnical and environmental projects across North Coast NSW including Coffs Harbour, Byron Bay, Ballina, Lismore, and Port Macquarie.",
          },
        },
        {
          "@type": "Question",
          name: "Does TerraForma support acid sulfate soil investigations on the North Coast?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. North Coast NSW carries high acid sulfate soil risk across its coastal floodplains and estuarine zones. TerraForma supports acid sulfate soil investigations as part of environmental drilling programmes across the region from Tweed Heads to Port Macquarie.",
          },
        },
        {
          "@type": "Question",
          name: "Can TerraForma complete drilling in coastal and environmentally sensitive areas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TerraForma supports projects across coastal developments, environmentally sensitive sites, and regional communities. The compact drilling platform allows efficient access while reducing site disruption.",
          },
        },
        {
          "@type": "Question",
          name: "Does TerraForma work with consultants in North Coast NSW?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TerraForma works closely with geotechnical and environmental consultants carrying out drilling, sampling, and testing while consultants remain responsible for interpretation, reporting, and project recommendations.",
          },
        },
      ],
    },
  },
  "riverina-murray": {
    title:
      "Geotechnical Drilling Wagga Wagga — Riverina & Murray NSW | TerraForma Drilling",
    description:
      "Geotechnical and environmental drilling across the Riverina and Murray — Wagga Wagga and surrounds — high groundwater plains and irrigation corridors.",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://tfdrilling.com.au/areas-we-serve/riverina-murray",
      name: "Geotechnical Drilling Wagga Wagga — Riverina and Murray NSW | TerraForma Drilling",
      url: "https://tfdrilling.com.au/areas-we-serve/riverina-murray",
      description:
        "TerraForma Drilling provides geotechnical and environmental drilling across the Riverina and Murray — Wagga Wagga and surrounds — high groundwater plains and irrigation corridors.",
      isPartOf: { "@id": "https://tfdrilling.com.au/#website" },
      about: [
        {
          "@type": "Service",
          name: "Solid Flight Auger Drilling",
          url: "https://tfdrilling.com.au/services/solid-flight-auger-drilling",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Wagga Wagga" },
            { "@type": "City", name: "Griffith" },
            { "@type": "City", name: "Leeton" },
            { "@type": "City", name: "Narrandera" },
            { "@type": "City", name: "Hay" },
            { "@type": "City", name: "Junee" },
            { "@type": "City", name: "Albury" },
            { "@type": "City", name: "Corowa" },
            { "@type": "City", name: "Deniliquin" },
            { "@type": "City", name: "Tumut" },
          ],
        },
        {
          "@type": "Service",
          name: "Standard Penetration Testing (SPT)",
          url: "https://tfdrilling.com.au/services/standard-penetration-testing",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Wagga Wagga" },
            { "@type": "City", name: "Griffith" },
            { "@type": "City", name: "Leeton" },
            { "@type": "City", name: "Narrandera" },
            { "@type": "City", name: "Hay" },
            { "@type": "City", name: "Junee" },
            { "@type": "City", name: "Albury" },
            { "@type": "City", name: "Corowa" },
            { "@type": "City", name: "Deniliquin" },
            { "@type": "City", name: "Tumut" },
          ],
        },
        {
          "@type": "Service",
          name: "Environmental Drilling",
          url: "https://tfdrilling.com.au/services/environmental-drilling",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Wagga Wagga" },
            { "@type": "City", name: "Griffith" },
            { "@type": "City", name: "Leeton" },
            { "@type": "City", name: "Narrandera" },
            { "@type": "City", name: "Hay" },
            { "@type": "City", name: "Junee" },
            { "@type": "City", name: "Albury" },
            { "@type": "City", name: "Corowa" },
            { "@type": "City", name: "Deniliquin" },
            { "@type": "City", name: "Tumut" },
          ],
        },
        {
          "@type": "Service",
          name: "Groundwater Well Installation",
          url: "https://tfdrilling.com.au/services/groundwater-well-installation",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Wagga Wagga" },
            { "@type": "City", name: "Griffith" },
            { "@type": "City", name: "Leeton" },
            { "@type": "City", name: "Narrandera" },
            { "@type": "City", name: "Hay" },
            { "@type": "City", name: "Junee" },
            { "@type": "City", name: "Albury" },
            { "@type": "City", name: "Corowa" },
            { "@type": "City", name: "Deniliquin" },
            { "@type": "City", name: "Tumut" },
          ],
        },
      ],
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://tfdrilling.com.au",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Areas We Serve",
            item: "https://tfdrilling.com.au/areas-we-serve",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Riverina and Murray",
            item: "https://tfdrilling.com.au/areas-we-serve/riverina-murray",
          },
        ],
      },
    },
    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What geotechnical drilling services does TerraForma provide in the Riverina and Murray?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TerraForma provides Solid Flight Auger drilling, SPT testing, DCP testing, environmental drilling, and groundwater monitoring bore installation for geotechnical and environmental projects across the Riverina and Murray including Wagga Wagga, Griffith, and Albury.",
          },
        },
        {
          "@type": "Question",
          name: "Can TerraForma support agricultural and remote projects across the Riverina and Murray?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TerraForma regularly works in agricultural areas, irrigation districts, industrial sites, and remote regional locations. The compact drilling platform allows efficient mobilisation across different project environments.",
          },
        },
        {
          "@type": "Question",
          name: "Does TerraForma support groundwater monitoring investigations in the Riverina?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Groundwater monitoring bore and piezometer installation is provided for environmental and geotechnical monitoring programmes across the Riverina and Murray, in accordance with consultant specifications.",
          },
        },
        {
          "@type": "Question",
          name: "Does TerraForma work with consultants in the Riverina and Murray?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TerraForma works with geotechnical and environmental consultants providing drilling, sampling, and testing while consultants are responsible for interpretation, reporting, and recommendations.",
          },
        },
      ],
    },
  },
  "central-west-nsw": {
    title:
      "Geotechnical Drilling Central West NSW — Dubbo & Orange | TerraForma Drilling",
    description:
      "Geotechnical and environmental drilling across Central West NSW — Dubbo, Orange, and Bourke — weathered granite, basaltic soils, and mining corridors.",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://tfdrilling.com.au/areas-we-serve/central-west-nsw",
      name: "Geotechnical Drilling Central West NSW — Dubbo and Orange | TerraForma Drilling",
      url: "https://tfdrilling.com.au/areas-we-serve/central-west-nsw",
      description:
        "TerraForma Drilling provides geotechnical and environmental drilling across Central West NSW — Dubbo, Orange, and Bourke — weathered granite, basaltic soils, and mining corridors.",
      isPartOf: { "@id": "https://tfdrilling.com.au/#website" },
      about: [
        {
          "@type": "Service",
          name: "Solid Flight Auger Drilling",
          url: "https://tfdrilling.com.au/services/solid-flight-auger-drilling",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Dubbo" },
            { "@type": "City", name: "Orange" },
            { "@type": "City", name: "Bathurst" },
            { "@type": "City", name: "Parkes" },
            { "@type": "City", name: "Forbes" },
            { "@type": "City", name: "Mudgee" },
            { "@type": "City", name: "Cobar" },
            { "@type": "City", name: "Lithgow" },
            { "@type": "City", name: "Cowra" },
            { "@type": "City", name: "Blayney" },
          ],
        },
        {
          "@type": "Service",
          name: "Standard Penetration Testing (SPT)",
          url: "https://tfdrilling.com.au/services/standard-penetration-testing",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Dubbo" },
            { "@type": "City", name: "Orange" },
            { "@type": "City", name: "Bathurst" },
            { "@type": "City", name: "Parkes" },
            { "@type": "City", name: "Forbes" },
            { "@type": "City", name: "Mudgee" },
            { "@type": "City", name: "Cobar" },
            { "@type": "City", name: "Lithgow" },
            { "@type": "City", name: "Cowra" },
            { "@type": "City", name: "Blayney" },
          ],
        },
        {
          "@type": "Service",
          name: "Environmental Drilling",
          url: "https://tfdrilling.com.au/services/environmental-drilling",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Dubbo" },
            { "@type": "City", name: "Orange" },
            { "@type": "City", name: "Bathurst" },
            { "@type": "City", name: "Parkes" },
            { "@type": "City", name: "Forbes" },
            { "@type": "City", name: "Mudgee" },
            { "@type": "City", name: "Cobar" },
            { "@type": "City", name: "Lithgow" },
            { "@type": "City", name: "Cowra" },
            { "@type": "City", name: "Blayney" },
          ],
        },
        {
          "@type": "Service",
          name: "Groundwater Well Installation",
          url: "https://tfdrilling.com.au/services/groundwater-well-installation",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Dubbo" },
            { "@type": "City", name: "Orange" },
            { "@type": "City", name: "Bathurst" },
            { "@type": "City", name: "Parkes" },
            { "@type": "City", name: "Forbes" },
            { "@type": "City", name: "Mudgee" },
            { "@type": "City", name: "Cobar" },
            { "@type": "City", name: "Lithgow" },
            { "@type": "City", name: "Cowra" },
            { "@type": "City", name: "Blayney" },
          ],
        },
      ],
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://tfdrilling.com.au",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Areas We Serve",
            item: "https://tfdrilling.com.au/areas-we-serve",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Central West NSW",
            item: "https://tfdrilling.com.au/areas-we-serve/central-west-nsw",
          },
        ],
      },
    },
    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What geotechnical drilling services does TerraForma provide in Central West NSW?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TerraForma provides Solid Flight Auger drilling, SPT testing, DCP testing, environmental drilling, and groundwater monitoring bore installation for geotechnical and environmental projects across Central West NSW including Dubbo, Orange, Bathurst, and surrounding areas.",
          },
        },
        {
          "@type": "Question",
          name: "Can TerraForma mobilise to remote and regional locations in Central West NSW?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TerraForma regularly supports projects in regional towns, mining sites, agricultural areas, and infrastructure corridors across Central West NSW. Mobilisation schedules are confirmed during quoting.",
          },
        },
        {
          "@type": "Question",
          name: "Can TerraForma work on difficult-access sites in Central West NSW?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The ute-mounted drilling platform is designed for remote locations, agricultural sites, and projects where larger rigs cannot easily access.",
          },
        },
        {
          "@type": "Question",
          name: "Does TerraForma work with consultants in Central West NSW?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TerraForma works with geotechnical and environmental consultants providing drilling, sampling, and testing while consultants remain responsible for interpretation, reporting, and project recommendations.",
          },
        },
      ],
    },
  },
  "new-england-northwest": {
    title:
      "Geotechnical Drilling New England & Northwest NSW | TerraForma Drilling",
    description:
      "Geotechnical and environmental drilling across New England and Northwest NSW — black soil plains, agricultural corridors, and regional developments. ISO certified.",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://tfdrilling.com.au/areas-we-serve/new-england-northwest",
      name: "Geotechnical Drilling New England and Northwest NSW | TerraForma Drilling",
      url: "https://tfdrilling.com.au/areas-we-serve/new-england-northwest",
      description:
        "TerraForma Drilling provides geotechnical and environmental drilling across New England and Northwest NSW — black soil plains and regional developments. ISO certified.",
      isPartOf: { "@id": "https://tfdrilling.com.au/#website" },
      about: [
        {
          "@type": "Service",
          name: "Solid Flight Auger Drilling",
          url: "https://tfdrilling.com.au/services/solid-flight-auger-drilling",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Armidale" },
            { "@type": "City", name: "Tamworth" },
            { "@type": "City", name: "Inverell" },
            { "@type": "City", name: "Glen Innes" },
            { "@type": "City", name: "Tenterfield" },
            { "@type": "City", name: "Uralla" },
            { "@type": "City", name: "Narrabri" },
            { "@type": "City", name: "Moree" },
            { "@type": "City", name: "Gunnedah" },
            { "@type": "City", name: "Walcha" },
          ],
        },
        {
          "@type": "Service",
          name: "Standard Penetration Testing (SPT)",
          url: "https://tfdrilling.com.au/services/standard-penetration-testing",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Armidale" },
            { "@type": "City", name: "Tamworth" },
            { "@type": "City", name: "Inverell" },
            { "@type": "City", name: "Glen Innes" },
            { "@type": "City", name: "Tenterfield" },
            { "@type": "City", name: "Uralla" },
            { "@type": "City", name: "Narrabri" },
            { "@type": "City", name: "Moree" },
            { "@type": "City", name: "Gunnedah" },
            { "@type": "City", name: "Walcha" },
          ],
        },
        {
          "@type": "Service",
          name: "Environmental Drilling",
          url: "https://tfdrilling.com.au/services/environmental-drilling",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Armidale" },
            { "@type": "City", name: "Tamworth" },
            { "@type": "City", name: "Inverell" },
            { "@type": "City", name: "Glen Innes" },
            { "@type": "City", name: "Tenterfield" },
            { "@type": "City", name: "Uralla" },
            { "@type": "City", name: "Narrabri" },
            { "@type": "City", name: "Moree" },
            { "@type": "City", name: "Gunnedah" },
            { "@type": "City", name: "Walcha" },
          ],
        },
        {
          "@type": "Service",
          name: "Groundwater Well Installation",
          url: "https://tfdrilling.com.au/services/groundwater-well-installation",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Armidale" },
            { "@type": "City", name: "Tamworth" },
            { "@type": "City", name: "Inverell" },
            { "@type": "City", name: "Glen Innes" },
            { "@type": "City", name: "Tenterfield" },
            { "@type": "City", name: "Uralla" },
            { "@type": "City", name: "Narrabri" },
            { "@type": "City", name: "Moree" },
            { "@type": "City", name: "Gunnedah" },
            { "@type": "City", name: "Walcha" },
          ],
        },
      ],
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://tfdrilling.com.au",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Areas We Serve",
            item: "https://tfdrilling.com.au/areas-we-serve",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "New England and Northwest NSW",
            item: "https://tfdrilling.com.au/areas-we-serve/new-england-northwest",
          },
        ],
      },
    },
    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What geotechnical drilling services does TerraForma provide in New England and Northwest NSW?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TerraForma provides Solid Flight Auger drilling, SPT testing, DCP testing, environmental drilling, and groundwater monitoring bore and piezometer installation for geotechnical and environmental projects across New England and Northwest NSW.",
          },
        },
        {
          "@type": "Question",
          name: "Can TerraForma mobilise to remote locations across New England and Northwest NSW?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TerraForma regularly works on projects in regional towns, farms, mining sites, infrastructure corridors, and remote areas. The compact drilling platform allows efficient mobilisation across different project sites.",
          },
        },
        {
          "@type": "Question",
          name: "Does TerraForma support agricultural and renewable energy investigations in New England?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TerraForma supports agricultural infrastructure investigations, preliminary investigations for solar farms, wind energy projects, and associated infrastructure across New England and Northwest NSW.",
          },
        },
        {
          "@type": "Question",
          name: "Does TerraForma work with consultants in New England and Northwest NSW?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TerraForma works with geotechnical and environmental consultants providing drilling, sampling, and testing while consultants handle interpretation, reporting, and recommendations.",
          },
        },
      ],
    },
  },
  newcastle: {
    title:
      "Geotechnical Drilling Newcastle — Hunter Valley & Hunter Region | TerraForma Drilling",
    description:
      "Geotechnical and environmental drilling across Newcastle and the Hunter — industrial precincts, port facilities, and mining corridors. ISO certified.",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://tfdrilling.com.au/areas-we-serve/newcastle",
      name: "Geotechnical Drilling Newcastle — Hunter Valley and Hunter Region | TerraForma Drilling",
      url: "https://tfdrilling.com.au/areas-we-serve/newcastle",
      description:
        "TerraForma Drilling provides geotechnical and environmental drilling across Newcastle and the Hunter — industrial precincts, port facilities, and mining corridors. ISO certified.",
      isPartOf: { "@id": "https://tfdrilling.com.au/#website" },
      about: [
        {
          "@type": "Service",
          name: "Solid Flight Auger Drilling",
          url: "https://tfdrilling.com.au/services/solid-flight-auger-drilling",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Newcastle" },
            { "@type": "City", name: "Mayfield" },
            { "@type": "City", name: "Charlestown" },
            { "@type": "City", name: "Maitland" },
            { "@type": "City", name: "Cessnock" },
            { "@type": "City", name: "Singleton" },
            { "@type": "City", name: "Muswellbrook" },
            { "@type": "City", name: "Port Stephens" },
            { "@type": "City", name: "Tomago" },
            { "@type": "City", name: "Rutherford" },
          ],
        },
        {
          "@type": "Service",
          name: "Standard Penetration Testing (SPT)",
          url: "https://tfdrilling.com.au/services/standard-penetration-testing",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Newcastle" },
            { "@type": "City", name: "Mayfield" },
            { "@type": "City", name: "Charlestown" },
            { "@type": "City", name: "Maitland" },
            { "@type": "City", name: "Cessnock" },
            { "@type": "City", name: "Singleton" },
            { "@type": "City", name: "Muswellbrook" },
            { "@type": "City", name: "Port Stephens" },
            { "@type": "City", name: "Tomago" },
            { "@type": "City", name: "Rutherford" },
          ],
        },
        {
          "@type": "Service",
          name: "Environmental Drilling",
          url: "https://tfdrilling.com.au/services/environmental-drilling",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Newcastle" },
            { "@type": "City", name: "Mayfield" },
            { "@type": "City", name: "Charlestown" },
            { "@type": "City", name: "Maitland" },
            { "@type": "City", name: "Cessnock" },
            { "@type": "City", name: "Singleton" },
            { "@type": "City", name: "Muswellbrook" },
            { "@type": "City", name: "Port Stephens" },
            { "@type": "City", name: "Tomago" },
            { "@type": "City", name: "Rutherford" },
          ],
        },
        {
          "@type": "Service",
          name: "Groundwater Well Installation",
          url: "https://tfdrilling.com.au/services/groundwater-well-installation",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Newcastle" },
            { "@type": "City", name: "Mayfield" },
            { "@type": "City", name: "Charlestown" },
            { "@type": "City", name: "Maitland" },
            { "@type": "City", name: "Cessnock" },
            { "@type": "City", name: "Singleton" },
            { "@type": "City", name: "Muswellbrook" },
            { "@type": "City", name: "Port Stephens" },
            { "@type": "City", name: "Tomago" },
            { "@type": "City", name: "Rutherford" },
          ],
        },
      ],
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://tfdrilling.com.au",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Areas We Serve",
            item: "https://tfdrilling.com.au/areas-we-serve",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Newcastle and Hunter",
            item: "https://tfdrilling.com.au/areas-we-serve/newcastle",
          },
        ],
      },
    },
    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What geotechnical drilling services does TerraForma provide in Newcastle and the Hunter Region?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TerraForma provides Solid Flight Auger drilling, SPT testing, DCP testing, environmental drilling, and groundwater monitoring bore and piezometer installation for geotechnical and environmental projects across Newcastle and the Hunter Region.",
          },
        },
        {
          "@type": "Question",
          name: "Can TerraForma mobilise to industrial and regional sites across the Hunter Region?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TerraForma regularly supports projects in Newcastle, industrial precincts, infrastructure corridors, and regional Hunter locations. The compact drilling platform allows efficient mobilisation across different project environments.",
          },
        },
        {
          "@type": "Question",
          name: "Can TerraForma work on difficult-access sites in Newcastle?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The ute-mounted drilling platform is built for tight-access drilling including urban developments, existing facilities, and sites where larger drilling rigs have limited access.",
          },
        },
        {
          "@type": "Question",
          name: "Does TerraForma work with geotechnical and environmental consultants in Newcastle and the Hunter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TerraForma supports geotechnical and environmental consultants by providing drilling, sampling, and testing while consultants remain responsible for interpretation, reporting, and recommendations.",
          },
        },
      ],
    },
  },
  nsw: {
    title:
      "Geotechnical Drilling NSW — Regional NSW Drilling Contractor | TerraForma Drilling",
    description:
      "Geotechnical and environmental drilling across regional NSW — from coastal plains to inland plains and mining corridors. Ute-mounted rig. ISO certified.",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://tfdrilling.com.au/areas-we-serve/nsw",
      name: "Geotechnical Drilling NSW — Regional NSW | TerraForma Drilling",
      url: "https://tfdrilling.com.au/areas-we-serve/nsw",
      description:
        "TerraForma Drilling provides geotechnical and environmental drilling across regional NSW. Ute-mounted rig. Responsive mobilisation. ISO certified.",
      isPartOf: { "@id": "https://tfdrilling.com.au/#website" },
      about: [
        {
          "@type": "Service",
          name: "Solid Flight Auger Drilling",
          url: "https://tfdrilling.com.au/services/solid-flight-auger-drilling",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Sydney" },
            { "@type": "City", name: "Newcastle" },
            { "@type": "City", name: "Wollongong" },
            { "@type": "City", name: "Dubbo" },
            { "@type": "City", name: "Orange" },
            { "@type": "City", name: "Wagga Wagga" },
            { "@type": "City", name: "Armidale" },
            { "@type": "City", name: "Tamworth" },
            { "@type": "City", name: "Coffs Harbour" },
            { "@type": "City", name: "Goulburn" },
          ],
        },
        {
          "@type": "Service",
          name: "Standard Penetration Testing (SPT)",
          url: "https://tfdrilling.com.au/services/standard-penetration-testing",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Sydney" },
            { "@type": "City", name: "Newcastle" },
            { "@type": "City", name: "Wollongong" },
            { "@type": "City", name: "Dubbo" },
            { "@type": "City", name: "Orange" },
            { "@type": "City", name: "Wagga Wagga" },
            { "@type": "City", name: "Armidale" },
            { "@type": "City", name: "Tamworth" },
            { "@type": "City", name: "Coffs Harbour" },
            { "@type": "City", name: "Goulburn" },
          ],
        },
        {
          "@type": "Service",
          name: "Environmental Drilling",
          url: "https://tfdrilling.com.au/services/environmental-drilling",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Sydney" },
            { "@type": "City", name: "Newcastle" },
            { "@type": "City", name: "Wollongong" },
            { "@type": "City", name: "Dubbo" },
            { "@type": "City", name: "Orange" },
            { "@type": "City", name: "Wagga Wagga" },
            { "@type": "City", name: "Armidale" },
            { "@type": "City", name: "Tamworth" },
            { "@type": "City", name: "Coffs Harbour" },
            { "@type": "City", name: "Goulburn" },
          ],
        },
        {
          "@type": "Service",
          name: "Groundwater Well Installation",
          url: "https://tfdrilling.com.au/services/groundwater-well-installation",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Sydney" },
            { "@type": "City", name: "Newcastle" },
            { "@type": "City", name: "Wollongong" },
            { "@type": "City", name: "Dubbo" },
            { "@type": "City", name: "Orange" },
            { "@type": "City", name: "Wagga Wagga" },
            { "@type": "City", name: "Armidale" },
            { "@type": "City", name: "Tamworth" },
            { "@type": "City", name: "Coffs Harbour" },
            { "@type": "City", name: "Goulburn" },
          ],
        },
      ],
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://tfdrilling.com.au",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Areas We Serve",
            item: "https://tfdrilling.com.au/areas-we-serve",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "NSW",
            item: "https://tfdrilling.com.au/areas-we-serve/nsw",
          },
        ],
      },
    },
    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What geotechnical drilling services does TerraForma provide across NSW?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TerraForma provides Solid Flight Auger drilling, Standard Penetration Testing (SPT), DCP testing, environmental drilling, and monitoring bore installation for geotechnical and environmental investigations throughout New South Wales.",
          },
        },
        {
          "@type": "Question",
          name: "Can TerraForma mobilise to regional NSW projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TerraForma supports projects across metropolitan and regional NSW including Newcastle, Wollongong, Central West NSW, New England, Riverina, North Coast NSW, and the Southern Tablelands. Mobilisation schedules are confirmed during quoting.",
          },
        },
        {
          "@type": "Question",
          name: "Can TerraForma work on difficult-access sites across NSW?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The ute-mounted drilling platform allows drilling on constrained urban sites, infrastructure corridors, agricultural locations, and remote sites where larger rigs are impractical.",
          },
        },
        {
          "@type": "Question",
          name: "Does TerraForma work with geotechnical and environmental consultants across NSW?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TerraForma supports consultant-led investigations by providing drilling, sampling, and testing while consultants remain responsible for interpretation, reporting, and project recommendations.",
          },
        },
      ],
    },
  },
  wollongong: {
    title:
      "Geotechnical Drilling Wollongong — Illawarra & South Coast | TerraForma Drilling",
    description:
      "Geotechnical and environmental drilling across Wollongong and the Illawarra — escarpment terrain, coastal sites, and port infrastructure. ISO certified.",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://tfdrilling.com.au/areas-we-serve/wollongong",
      name: "Geotechnical Drilling Wollongong — Illawarra & South Coast | TerraForma Drilling",
      url: "https://tfdrilling.com.au/areas-we-serve/wollongong",
      description:
        "TerraForma Drilling provides geotechnical and environmental drilling across Wollongong and the Illawarra — escarpment terrain, coastal sites, and port infrastructure. ISO certified.",
      isPartOf: { "@id": "https://tfdrilling.com.au/#website" },
      about: [
        {
          "@type": "Service",
          name: "Solid Flight Auger Drilling",
          url: "https://tfdrilling.com.au/services/solid-flight-auger-drilling",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Wollongong" },
            { "@type": "City", name: "Corrimal" },
            { "@type": "City", name: "Fairy Meadow" },
            { "@type": "City", name: "Shellharbour" },
            { "@type": "City", name: "Albion Park" },
            { "@type": "City", name: "Kiama" },
            { "@type": "City", name: "Nowra" },
            { "@type": "City", name: "Helensburgh" },
            { "@type": "City", name: "Thirroul" },
            { "@type": "City", name: "Dapto" },
          ],
        },
        {
          "@type": "Service",
          name: "Standard Penetration Testing (SPT)",
          url: "https://tfdrilling.com.au/services/standard-penetration-testing",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Wollongong" },
            { "@type": "City", name: "Corrimal" },
            { "@type": "City", name: "Fairy Meadow" },
            { "@type": "City", name: "Shellharbour" },
            { "@type": "City", name: "Albion Park" },
            { "@type": "City", name: "Kiama" },
            { "@type": "City", name: "Nowra" },
            { "@type": "City", name: "Helensburgh" },
            { "@type": "City", name: "Thirroul" },
            { "@type": "City", name: "Dapto" },
          ],
        },
        {
          "@type": "Service",
          name: "Environmental Drilling",
          url: "https://tfdrilling.com.au/services/environmental-drilling",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Wollongong" },
            { "@type": "City", name: "Corrimal" },
            { "@type": "City", name: "Fairy Meadow" },
            { "@type": "City", name: "Shellharbour" },
            { "@type": "City", name: "Albion Park" },
            { "@type": "City", name: "Kiama" },
            { "@type": "City", name: "Nowra" },
            { "@type": "City", name: "Helensburgh" },
            { "@type": "City", name: "Thirroul" },
            { "@type": "City", name: "Dapto" },
          ],
        },
        {
          "@type": "Service",
          name: "Groundwater Well Installation",
          url: "https://tfdrilling.com.au/services/groundwater-well-installation",
          provider: { "@id": "https://tfdrilling.com.au/#organization" },
          areaServed: [
            { "@type": "City", name: "Wollongong" },
            { "@type": "City", name: "Corrimal" },
            { "@type": "City", name: "Fairy Meadow" },
            { "@type": "City", name: "Shellharbour" },
            { "@type": "City", name: "Albion Park" },
            { "@type": "City", name: "Kiama" },
            { "@type": "City", name: "Nowra" },
            { "@type": "City", name: "Helensburgh" },
            { "@type": "City", name: "Thirroul" },
            { "@type": "City", name: "Dapto" },
          ],
        },
      ],
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://tfdrilling.com.au",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Areas We Serve",
            item: "https://tfdrilling.com.au/areas-we-serve",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Wollongong and Illawarra",
            item: "https://tfdrilling.com.au/areas-we-serve/wollongong",
          },
        ],
      },
    },
    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What geotechnical drilling services does TerraForma provide in Wollongong and the Illawarra?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TerraForma provides Solid Flight Auger drilling, SPT testing, DCP testing, environmental drilling, and groundwater monitoring bore and piezometer installation for geotechnical and environmental projects throughout Wollongong and the Illawarra region.",
          },
        },
        {
          "@type": "Question",
          name: "Can TerraForma complete drilling on difficult-access sites across the Illawarra?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The ute-mounted drilling platform is designed to access constrained sites including residential developments, escarpment locations, industrial facilities, and areas where larger conventional rigs have access limitations.",
          },
        },
        {
          "@type": "Question",
          name: "Does TerraForma support geotechnical and environmental consultants in Wollongong?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TerraForma provides drilling, sampling, and testing in accordance with investigation programmes while consultants remain responsible for interpretation and reporting.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can TerraForma mobilise for projects across Wollongong and the Illawarra?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TerraForma provides responsive mobilisation across the Illawarra region. Mobilisation timeframes are confirmed during quoting based on project location, access requirements, and scheduling.",
          },
        },
      ],
    },
  },
  sydney: {
    title:
      "Geotechnical Drilling Contractor Sydney — Greater Sydney | TerraForma Drilling",
    description:
      "Geotechnical and environmental drilling across Greater Sydney — tight urban sites, sloped blocks, and low-clearance structures. 24-hour mobilisation. ISO certified.",
    schema: {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://tfdrilling.com.au/#organization",
      name: "TerraForma Drilling — Greater Sydney",
      url: "https://tfdrilling.com.au/areas-we-serve/sydney",
      telephone: "+61272398878",
      email: "sales@tfdrilling.com.au",
      image: "https://tfdrilling.com.au/images/ute-mounted-sfa-rig.jpg",
      description:
        "TerraForma Drilling provides geotechnical and environmental drilling across Greater Sydney — tight urban sites, sloped blocks, confined corridors. 24-hour mobilisation. ISO certified.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Wetherill Park",
        addressRegion: "NSW",
        postalCode: "2164",
        addressCountry: "AU",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -33.8354,
        longitude: 150.9009,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "07:00",
          closes: "17:00",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Geotechnical Drilling Services — Greater Sydney",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Solid Flight Auger Drilling",
              url: "https://tfdrilling.com.au/services/solid-flight-auger-drilling",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Standard Penetration Testing (SPT)",
              url: "https://tfdrilling.com.au/services/standard-penetration-testing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Environmental Drilling",
              url: "https://tfdrilling.com.au/services/environmental-drilling",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Groundwater Well Installation",
              url: "https://tfdrilling.com.au/services/groundwater-well-installation",
            },
          },
        ],
      },
      areaServed: [
        { "@type": "City", name: "Sydney" },
        { "@type": "City", name: "Parramatta" },
        { "@type": "City", name: "Penrith" },
        { "@type": "City", name: "Blacktown" },
        { "@type": "City", name: "Marrickville" },
        { "@type": "City", name: "Randwick" },
        { "@type": "City", name: "Chatswood" },
        { "@type": "City", name: "Hurstville" },
      ],
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://tfdrilling.com.au",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Areas We Serve",
            item: "https://tfdrilling.com.au/areas-we-serve",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Sydney",
            item: "https://tfdrilling.com.au/areas-we-serve/sydney",
          },
        ],
      },
    },
    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What geotechnical drilling services does TerraForma provide in Sydney?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TerraForma Drilling provides geotechnical drilling, Solid Flight Auger drilling, Standard Penetration Testing (SPT), DCP testing, environmental drilling, and monitoring bore installation across Greater Sydney for consultants, developers, contractors, and government projects.",
          },
        },
        {
          "@type": "Question",
          name: "Can TerraForma complete drilling on tight-access sites in Sydney?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The ute-mounted drilling platform is designed for tight Sydney sites including narrow lots, low-clearance areas, existing developments, and places that larger rigs cannot easily access across Greater Sydney.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can TerraForma mobilise for projects in Sydney?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For many projects in Greater Sydney, TerraForma can mobilise within 24 hours of confirmation. The exact timeframe is confirmed during quoting based on project scope, access needs, and scheduling.",
          },
        },
        {
          "@type": "Question",
          name: "Is TerraForma Drilling ISO certified for Sydney projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TerraForma holds ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certifications via TQCSI International. WHS documentation and SWMS are available for pre-qualification submissions on Sydney projects.",
          },
        },
        {
          "@type": "Question",
          name: "Does TerraForma work with geotechnical and environmental consultants in Sydney?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TerraForma supports consultant-led investigations by handling drilling, sampling, and testing while consultants remain in charge of interpretation, reporting, and client advice.",
          },
        },
      ],
    },
  },
};
