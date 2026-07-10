import type { AreaSection } from "@/types/area";

export const newEnglandSections: AreaSection[] = [
  {
    type: "hero",
    data: {
      region: "New England & Northwest NSW",
      title:
        "Geotechnical & Environmental Drilling Services in New England & Northwest NSW",
      highlight: "New England & Northwest NSW",
      paragraphs: [
        "TerraForma Drilling offers geotechnical drilling in New England and environmental drilling in Northwest NSW. We support residential, commercial, agricultural, infrastructure, mining, and energy projects across the region. Our compact ute-mounted drilling platform makes it easy to reach regional centres, remote sites, and challenging locations.",
        "We work with geotechnical and environmental consultants, developers, civil contractors, and government organisations. Our team offers flexible scheduling, well-maintained equipment, and ISO-certified systems to provide dependable field services throughout New England and Northwest NSW.",
      ],
      map: "/maps/nsw-map2.svg",
      pin: { top: "34%", left: "65%" },
      mapAlt:
        "Map of New South Wales highlighting TerraForma Drilling's service area across New England and Northwest NSW",
      primaryLabel: "Get a Quote",
      primaryHref: "/contact",
      secondaryLabel: "View Services",
      secondaryHref: "/services",
    },
  },
  {
    type: "about",
    data: {
      tag: "Your Drilling Subcontractor",
      title:
        "Why New England & Northwest Project Teams Choose TerraForma Drilling",
      highlight: "TerraForma Drilling",
      paragraphs: [
        "New England and Northwest NSW include regional towns, farms, transport routes, mining sites, and renewable energy projects. These areas often require long travel, encounter varied ground conditions, and require efficient mobilisation to keep projects moving.",
        "Our team handles geotechnical and environmental investigations across the region. We follow consultant bore plans and project requirements to deliver accurate drilling, sampling, and testing. This gives engineers and project teams the subsurface information they need for design, planning, and environmental assessments.",
      ],
      featuresTitle: "Built for Projects Across New England & Northwest NSW",
      featuresHighlight: "New England & Northwest NSW",
      features: [
        "Regional mobilisation",
        "Mining and energy projects",
        "Agricultural infrastructure",
        "Transport corridors",
        "Remote site access",
        "Variable ground conditions",
        "ISO Certified: ISO 9001, ISO 14001, ISO 45001",
      ],
      image: "/areas-we-serve/area-5.png",
      imageAlt:
        "TerraForma Drilling rig on a New England and Northwest NSW project site",
    },
  },
  {
    type: "services",
    data: {
      tag: "Available Drilling Services",
      title: "Drilling Services Available Across New England & Northwest NSW",
      highlight: "New England & Northwest NSW",
      description:
        "We offer practical drilling, sampling, and testing services to support site investigations, environmental assessments, and development projects throughout New England and Northwest NSW.",
      services: [
        {
          id: "01",
          title: "Solid Flight Auger Drilling",
          slug: "solid-flight-auger-drilling",
          description:
            "Our ute-mounted Solid Flight Auger rig makes it easy to reach regional and hard-to-access sites. We handle bulk disturbed and U50 undisturbed sampling for ground investigations, foundation checks, and construction projects where larger drilling rigs may be difficult to mobilise.",
          image: "/images/service-1.png",
        },
        {
          id: "02",
          title: "Standard Penetration Testing (SPT)",
          slug: "standard-penetration-testing",
          description:
            "We use calibrated equipment for SPT testing to provide reliable N-value data. This helps geotechnical engineers assess soil resistance, density, and subsurface conditions for design and construction decisions.",
          image: "/images/service-2.png",
        },
        {
          id: "03",
          title: "Dynamic Cone Penetrometer (DCP) Testing",
          slug: null,
          description:
            "Our DCP testing quickly and affordably measures shallow soil strength and pavement subgrade conditions. This supports civil infrastructure projects and other site investigations.",
          image: "/images/service-5.png",
        },
        {
          id: "04",
          title: "Environmental Drilling",
          slug: "environmental-drilling",
          description:
            "We offer environmental drilling in New England and Northwest NSW for contaminated land checks, Phase 2 Detailed Site Investigation (DSI), and groundwater investigations on farms, industrial sites, infrastructure, and resource projects.",
          image: "/images/service-3.png",
        },
        {
          id: "05",
          title: "Groundwater Well Installation",
          slug: "groundwater-well-installation",
          description:
            "We install groundwater monitoring bores and piezometers as specified by consultants. This supports environmental monitoring and long-term geotechnical investigations.",
          image: "/images/service-4.png",
        },
      ],
    },
  },
  {
    type: "whyChooseUs",
    data: {
      tag: "Site Access & Mobilisation",
      title: "New England & Northwest Site Access & Mobilisation Capability",
      highlight: "Mobilisation Capability",
      description:
        "Projects in New England and Northwest NSW include regional developments, farm infrastructure, and remote mining, energy, and transport sites. Our compact ute-mounted drilling platform provides efficient access without requiring large equipment or complex site preparation.",
      items: [
        {
          icon: "/services/icons/sfa-1.svg",
          title: "Regional and remote access",
          description:
            "We mobilise efficiently across large geographic areas, supporting projects in regional centres and remote locations.",
        },
        {
          icon: "/areas-we-serve/icons/nature 1.svg",
          title: "Agricultural and rural developments",
          description:
            "Providing investigation support for farming infrastructure, water-related projects, and rural developments.",
        },
        {
          icon: "/areas-we-serve/icons/hammer 1.svg",
          title: "Mining and renewable energy projects",
          description:
            "Supporting preliminary investigations for resource developments, solar farms, wind energy projects, and associated infrastructure.",
        },
        {
          icon: "/areas-we-serve/icons/transport 1.svg",
          title: "Transport and infrastructure corridors",
          description:
            "Assisting road, rail, utility, and public infrastructure investigations.",
        },
        {
          icon: "night",
          title: "Night drilling capability",
          description:
            "Supporting projects requiring after-hours drilling to minimise disruption and maintain project schedules.",
        },
        {
          icon: "ute",
          title: "No crane, tracks, or extensive site preparation required",
          description:
            "Our ute-mounted configuration reduces setup time and allows faster access to suitable drilling locations.",
        },
      ],
      note: "Note: If a standard ute can reach your site, we can usually complete the drilling efficiently.",
    },
  },
  {
    type: "coverage",
    data: {
      tag: "Available Drilling Services",
      title: "Where TerraForma Drilling Works Across New England & Northwest NSW",
      highlight: "New England & Northwest NSW",
      paragraphs: [
        "TerraForma Drilling provides geotechnical drilling in New England and environmental drilling in Northwest NSW. We work across regional centres, agricultural areas, mining regions, and infrastructure corridors.",
        "We regularly support projects across the regions below. If your project location is not listed, contact TerraForma Drilling to check access and mobilisation options for your site.",
      ],
      groups: [
        {
          name: "New England Region",
          suburbs: [
            "Armidale",
            "Tamworth",
            "Inverell",
            "Glen Innes",
            "Tenterfield",
            "Uralla",
          ],
        },
        {
          name: "Northwest NSW",
          suburbs: [
            "Narrabri",
            "Moree",
            "Gunnedah",
            "Boggabri",
            "Wee Waa",
            "Warialda",
          ],
        },
        {
          name: "Regional & Infrastructure Areas",
          suburbs: ["Walcha", "Quirindi", "Barraba", "Bingara", "Manilla", "Guyra"],
        },
      ],
    },
  },
  {
    type: "whereWeDrill",
    data: {
      title: "Geotechnical & Environmental Drilling Across ",
      highlight: "NSW Regions",
      description:
        "TerraForma Drilling offers geotechnical and environmental investigations for agricultural, mining, energy, infrastructure, and regional development projects in New England & Northwest NSW. We also work on projects in other parts of New South Wales.",
      regions: [
        { id: "nsw", name: "NSW", top: "50%", left: "50%" },
        { id: "sydney", name: "Sydney", top: "63%", left: "74%" },
        { id: "newcastle", name: "Newcastle & Hunter", top: "42%", left: "81%" },
        { id: "wollongong", name: "Wollongong & Illawarra", top: "70%", left: "71%" },
        { id: "central-west", name: "Central West NSW", top: "49%", left: "55%" },
        { id: "riverina", name: "Riverina & Murray", top: "66%", left: "49%" },
        { id: "north-coast", name: "North Coast NSW", top: "30%", left: "86%" },
        { id: "southern", name: "Southern Tablelands", top: "77%", left: "68%" },
      ],
    },
  },
  {
    type: "cta",
    data: {
      title: "Reliable Drilling Support Across New England & Northwest NSW",
      highlight: "New England & Northwest NSW",
      description:
        "From agricultural developments and transport corridors to mining and renewable energy projects, we deliver practical drilling solutions built for regional conditions.",
      primaryLabel: "Get a Quote",
      primaryHref: "/contact",
      secondaryLabel: "View Services",
      secondaryHref: "/services",
    },
  },
  {
    type: "faq",
    data: {
      title: "Frequently Asked",
      highlight: "Questions",
      faqs: [
        {
          question:
            "What geotechnical drilling services does TerraForma provide in New England & Northwest NSW?",
          answer:
            "TerraForma offers Solid Flight Auger drilling, SPT testing, DCP testing, environmental drilling, and groundwater monitoring bores and piezometer installation for geotechnical and environmental projects across New England and Northwest NSW.",
        },
        {
          question:
            "Can TerraForma mobilise to remote locations across New England & Northwest NSW?",
          answer:
            "Yes. We often work on projects in regional towns, farms, mining sites, infrastructure corridors, and remote areas. Our compact drilling platform lets us mobilise efficiently across different project sites.",
        },
        {
          question:
            "Can TerraForma work on challenging sites in New England & Northwest NSW?",
          answer:
            "Yes. Our ute-mounted drilling platform is designed for hard-to-reach locations, remote sites, and projects where larger rigs may struggle to access.",
        },
        {
          question:
            "Do you work with geotechnical and environmental consultants in New England & Northwest NSW?",
          answer:
            "Yes. We work with geotechnical and environmental consultants, providing drilling, sampling, and testing as part of their investigation programs. The consultants handle interpretation, reporting, and project recommendations.",
        },
      ],
    },
  },
];
