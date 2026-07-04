import type { AreaSection } from "@/types/area";

export const newcastleSections: AreaSection[] = [
  {
    type: "hero",
    data: {
      region: "Newcastle & Hunter",
      title:
        "Geotechnical & Environmental Drilling Services in Newcastle & Hunter",
      highlight: "Newcastle & Hunter",
      paragraphs: [
        "TerraForma Drilling provides geotechnical and environmental drilling services throughout Newcastle and the Hunter region. We support residential, commercial, industrial, infrastructure, and resource projects. Our compact but purpose-built ute-mounted drilling platform lets us move quickly between different types of sites.",
        "We partner with geotechnical and environmental consultants, developers, civil contractors, and government organisations. Our team provides flexible scheduling, well-maintained equipment, and ISO-certified systems to deliver reliable field services across Newcastle and the Hunter Region.",
      ],
      map: "/maps/nsw-map2.svg",
      pin: { top: "44%", left: "80%" },
      mapAlt:
        "Map of New South Wales highlighting TerraForma Drilling's service area around Newcastle and the Hunter Region",
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
      title: "Why Newcastle & Hunter Project Teams Choose TerraForma Drilling",
      highlight: "TerraForma Drilling",
      paragraphs: [
        "The Newcastle and Hunter Region includes a wide range of project sites, such as coastal urban areas, industrial facilities, ports, mines, transport corridors, and growing communities. These projects need a drilling partner who can manage different site conditions and access requirements.",
        "Our team carries out geotechnical and environmental drilling across the Hunter Region. We follow consultant plans and requirements to ensure accurate drilling, sampling, and testing. This gives engineers and project teams the subsurface information they need for design, planning, and risk management.",
      ],
      featuresTitle: "Built for Projects Across Newcastle & the Hunter",
      featuresHighlight: "Newcastle & the Hunter",
      features: [
        "Industrial facilities",
        "Port infrastructure",
        "Mining and resource projects",
        "Regional mobilisation",
        "Transport corridors",
        "Tight-access capability",
        "ISO Certified: ISO 9001, ISO 14001, ISO 45001",
      ],
      image: "/areas-we-serve/area-4.png",
      imageAlt:
        "TerraForma Drilling rig on a Newcastle and Hunter Region project site",
    },
  },
  {
    type: "services",
    data: {
      tag: "Available Drilling Services",
      title: "Drilling Services Available Across Newcastle & Hunter",
      highlight: "Newcastle & Hunter",
      description:
        "We provide practical drilling and environmental field services to support site investigations and regional development projects across Newcastle and the Hunter Region.",
      services: [
        {
          id: "01",
          title: "Solid Flight Auger Drilling",
          slug: "solid-flight-auger-drilling",
          description:
            "Our ute-mounted Solid Flight Auger rig is designed for tight-access drilling. It can collect both bulk disturbed and U50 undisturbed samples for ground investigations, foundation assessments, and projects where larger rigs cannot reach.",
          image: "/images/service-1.png",
        },
        {
          id: "02",
          title: "Standard Penetration Testing (SPT)",
          slug: "standard-penetration-testing",
          description:
            "We use calibrated equipment for SPT testing to provide accurate N-value data. Geotechnical engineers use this information to assess soil resistance, density, and subsurface conditions for their designs.",
          image: "/images/service-2.png",
        },
        {
          id: "03",
          title: "Dynamic Cone Penetrometer (DCP) Testing",
          slug: null,
          description:
            "Our DCP testing provides a fast and cost-effective way to assess shallow soil strength and pavement subgrade conditions for civil projects and site investigations.",
          image: "/images/service-5.png",
        },
        {
          id: "04",
          title: "Environmental Drilling",
          slug: "environmental-drilling",
          description:
            "We provide environmental drilling in Newcastle for contaminated land investigations, Phase 2 Detailed Site Investigation (DSI), and groundwater studies at industrial, commercial, and infrastructure sites throughout the Hunter Region.",
          image: "/images/service-3.png",
        },
        {
          id: "05",
          title: "Groundwater Well Installation",
          slug: "groundwater-well-installation",
          description:
            "We install groundwater monitoring bores and piezometers following consultant specifications. These installations support environmental monitoring programs and geotechnical investigations.",
          image: "/images/service-4.png",
        },
      ],
    },
  },
  {
    type: "whyChooseUs",
    data: {
      tag: "Site Access & Mobilisation",
      title: "Hunter Region Site Access & Mobilisation Capability",
      highlight: "Mobilisation Capability",
      description:
        "Projects in Newcastle and the Hunter Region include tight urban sites, large industrial areas, infrastructure corridors, and regional locations. Our compact ute-mounted drilling platform makes access easy and removes the need for extra equipment or complicated setup.",
      items: [
        {
          icon: "/services/icons/sfa-1.svg",
          title: "Urban and tight-access sites",
          description:
            "Suitable for residential, commercial, and redevelopment projects where conventional drilling rigs may have limited access.",
        },
        {
          icon: "/areas-we-serve/icons/hammer 1.svg",
          title: "Industrial and port environments",
          description:
            "Supports investigations around manufacturing facilities, logistics precincts, and heavy industrial zones.",
        },
        {
          icon: "/areas-we-serve/icons/plant 1.svg",
          title: "Mining and resource corridors",
          description:
            "Provides field support for preliminary investigations associated with mining, energy, and resource developments.",
        },
        {
          icon: "house",
          title: "Regional and remote locations",
          description:
            "Enables efficient mobilisation across the wider Hunter Region and surrounding project areas.",
        },
        {
          icon: "night",
          title: "Night drilling capability",
          description:
            "Supports projects requiring after-hours drilling to minimise disruption and maintain construction schedules.",
        },
        {
          icon: "ute",
          title: "No crane, tracks, or extensive site preparation required",
          description:
            "Our ute-mounted drilling configuration reduces setup time and allows faster access to suitable drilling locations.",
        },
      ],
      note: "Note: If a standard ute can reach your site, TerraForma can usually complete the drilling quickly and efficiently.",
    },
  },
  {
    type: "coverage",
    data: {
      tag: "Available Drilling Services",
      title: "Where TerraForma Drilling Works Across Newcastle & Hunter",
      highlight: "Newcastle & Hunter",
      paragraphs: [
        "TerraForma Drilling provides geotechnical and environmental drilling services across coastal, industrial, urban, and regional areas in the Hunter Region.",
        "We regularly support projects across the regions below. If your project location is not listed, please contact TerraForma Drilling to check access and mobilisation options for your site.",
      ],
      groups: [
        {
          name: "Newcastle & Lake Macquarie",
          suburbs: [
            "Newcastle",
            "Mayfield",
            "Charlestown",
            "Belmont",
            "Warners Bay",
            "Swansea",
            "Toronto",
          ],
        },
        {
          name: "Lower & Upper Hunter",
          suburbs: [
            "Maitland",
            "Cessnock",
            "Singleton",
            "Muswellbrook",
            "Branxton",
            "Kurri Kurri",
          ],
        },
        {
          name: "Port, Industrial & Regional Areas",
          suburbs: [
            "Port Stephens",
            "Tomago",
            "Heatherbrae",
            "Raymond Terrace",
            "Rutherford",
            "Beresfield",
          ],
        },
      ],
    },
  },
  {
    type: "whereWeDrill",
    data: {
      title: "Geotechnical & Environmental Drilling Across Newcastle & Hunter",
      highlight: "Newcastle & Hunter",
      description:
        "TerraForma Drilling provides geotechnical investigations, environmental drilling, and site investigation support throughout Newcastle, the Hunter Region, and surrounding areas. Our team also mobilises to projects across Greater Sydney and regional New South Wales.",
      regions: [
        { id: "nsw", name: "NSW", top: "50%", left: "50%" },
        { id: "sydney", name: "Sydney", top: "63%", left: "74%" },
        { id: "newcastle", name: "Newcastle & Hunter", top: "42%", left: "81%" },
        { id: "central-west", name: "Central West NSW", top: "49%", left: "55%" },
        { id: "new-england", name: "New England & Northwest", top: "35%", left: "60%" },
        { id: "riverina", name: "Riverina & Murray", top: "66%", left: "49%" },
        { id: "north-coast", name: "North Coast NSW", top: "30%", left: "86%" },
        { id: "southern", name: "Southern Tablelands", top: "77%", left: "68%" },
      ],
    },
  },
  {
    type: "cta",
    data: {
      title: "The Drilling Partner Newcastle & Hunter Projects Rely On",
      highlight: "Newcastle & Hunter",
      description:
        "Geotechnical and environmental drilling for port, urban, and regional projects, delivered with local knowledge and ISO-certified systems.",
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
            "What geotechnical drilling services does TerraForma provide in Newcastle & Hunter?",
          answer:
            "At TFD, we offer Solid Flight Auger drilling, SPT testing, DCP testing, environmental drilling, and groundwater monitoring bore and piezometer installation services for geotechnical investigations and environmental projects across Newcastle and the Hunter Region.",
        },
        {
          question:
            "Can TerraForma mobilise to industrial and regional sites across the Hunter Region?",
          answer:
            "Yes. We regularly support projects in Newcastle, industrial precincts, infrastructure corridors, and regional Hunter locations. Our compact drilling platform allows us to mobilise efficiently across different project environments.",
        },
        {
          question:
            "Can TerraForma work on difficult-access sites in Newcastle?",
          answer:
            "Yes. Our ute-mounted drilling platform is built for tight-access drilling, including urban developments, existing facilities, and sites where larger drilling rigs may have limited access.",
        },
        {
          question:
            "Do you work with geotechnical and environmental consultants in Newcastle & Hunter?",
          answer:
            "Yes. We support geotechnical and environmental consultants by providing drilling, sampling, and testing services according to investigation programs. Consultants remain responsible for interpretation, reporting, and project recommendations.",
        },
      ],
    },
  },
];
