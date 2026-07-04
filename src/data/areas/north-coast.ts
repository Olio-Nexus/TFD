import type { AreaSection } from "@/types/area";

export const northCoastSections: AreaSection[] = [
  {
    type: "hero",
    data: {
      region: "North Coast NSW",
      title: "Geotechnical & Environmental Drilling Services in North Coast NSW",
      highlight: "North Coast NSW",
      paragraphs: [
        "TerraForma Drilling offers geotechnical and environmental drilling services across North Coast NSW. We work on residential, commercial, infrastructure, tourism, and environmental projects. Our compact ute-mounted drilling platform makes it easy to reach coastal developments, regional communities, and hard-to-access sites.",
        "We work with consultants, developers, civil contractors, and government organisations to provide reliable field services. Our team offers flexible scheduling, well-maintained equipment, and ISO-certified systems throughout North Coast NSW.",
      ],
      map: "/maps/nsw-map2.svg",
      pin: { top: "28%", left: "87%" },
      mapAlt:
        "Map of New South Wales highlighting TerraForma Drilling's service area across North Coast NSW",
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
      title: "Why North Coast NSW Project Teams Choose TerraForma Drilling",
      highlight: "TerraForma Drilling",
      paragraphs: [
        "The North Coast is home to growing coastal communities, sensitive environments, tourism infrastructure, and key transport networks. Projects here often need practical knowledge of different soil types, groundwater, and efficient movement across the region.",
        "North Coast NSW carries high acid sulfate soil risk across its coastal floodplains and estuarine zones. TerraForma Drilling supports acid sulfate soil investigations as part of environmental drilling programs from Tweed Heads to Port Macquarie.",
        "Our team conducts geotechnical and environmental drilling in accordance with consultant bore plans and project requirements. With accurate drilling, sampling, and testing, we deliver the subsurface information needed for engineering design, environmental assessments, and responsible development.",
      ],
      featuresTitle: "Built for Projects Across North Coast NSW",
      featuresHighlight: "North Coast NSW",
      features: [
        "Coastal developments",
        "Environmental monitoring",
        "Transport infrastructure",
        "Groundwater investigations",
        "Regional mobilisation",
        "Variable coastal conditions",
        "ISO Certified: ISO 9001, ISO 14001, ISO 45001",
      ],
      image: "/areas-we-serve/area-8.png",
      imageAlt: "TerraForma Drilling rig on a North Coast NSW project site",
    },
  },
  {
    type: "services",
    data: {
      tag: "Available Drilling Services",
      title: "Drilling Services Available Across North Coast NSW",
      highlight: "North Coast NSW",
      description:
        "Each project has unique ground conditions and investigation needs. TerraForma Drilling offers practical drilling, sampling, and testing services for site investigations, environmental assessments, and development projects across North Coast NSW.",
      services: [
        {
          id: "01",
          title: "Solid Flight Auger Drilling",
          slug: "solid-flight-auger-drilling",
          description:
            "Our ute-mounted Solid Flight Auger rig is a practical choice for coastal sites, established communities, and places where bigger rigs can't reach. We handle bulk disturbed and U50 undisturbed sampling for ground investigations, foundation checks, and construction projects.",
          image: "/images/service-1.png",
        },
        {
          id: "02",
          title: "Standard Penetration Testing (SPT)",
          slug: "standard-penetration-testing",
          description:
            "We use calibrated equipment for SPT testing to provide accurate N-value data. This helps geotechnical engineers assess soil resistance, density, and subsurface conditions for construction and infrastructure planning.",
          image: "/images/service-2.png",
        },
        {
          id: "03",
          title: "Dynamic Cone Penetrometer (DCP) Testing",
          slug: null,
          description:
            "Our DCP testing is a quick way to check shallow soil strength and pavement subgrade conditions. It supports road projects, civil works, and other site investigation needs.",
          image: "/images/service-5.png",
        },
        {
          id: "04",
          title: "Environmental Drilling",
          slug: "environmental-drilling",
          description:
            "We offer environmental drilling in North Coast NSW for contaminated land investigations, Phase 2 Detailed Site Investigation (DSI), and groundwater checks. Our services cover coastal developments, commercial sites, industrial facilities, and infrastructure projects.",
          image: "/images/service-3.png",
        },
        {
          id: "05",
          title: "Groundwater Well Installation",
          slug: "groundwater-well-installation",
          description:
            "We install groundwater monitoring bores and piezometers following consultant specifications. This supports long-term environmental monitoring and geotechnical investigations.",
          image: "/images/service-4.png",
        },
      ],
    },
  },
  {
    type: "whyChooseUs",
    data: {
      tag: "Site Access & Mobilisation",
      title: "North Coast NSW Site Access & Mobilisation Capability",
      highlight: "Mobilisation Capability",
      description:
        "Projects across North Coast NSW, from coastal towns to remote sites, need a drilling team that can adapt to different conditions. Our compact ute-mounted drilling platform allows us to mobilise quickly with minimal setup.",
      items: [
        {
          icon: "/areas-we-serve/icons/beach 1.svg",
          title: "Coastal and urban developments",
          description:
            "Supporting residential, tourism, and commercial projects in established and expanding communities.",
        },
        {
          icon: "/areas-we-serve/icons/nature (1) 1.svg",
          title: "Environmentally sensitive locations",
          description:
            "Providing drilling support for projects requiring groundwater monitoring and environmental assessment.",
        },
        {
          icon: "/areas-we-serve/icons/transport 1.svg",
          title: "Transport and community infrastructure",
          description:
            "Assisting road upgrades, utilities, public facilities, and essential regional infrastructure.",
        },
        {
          icon: "/areas-we-serve/icons/transport 1.svg",
          title: "Regional and remote access",
          description:
            "Mobilising efficiently between coastal communities and inland project locations.",
        },
        {
          icon: "night",
          title: "Night drilling capability",
          description:
            "Supporting projects requiring after-hours drilling to minimise disruption and maintain construction schedules.",
        },
        {
          icon: "ute",
          title: "Minimal site requirements",
          description:
            "Our compact drilling platform does not require cranes, tracks, or extensive site preparation, reducing disruption and setup time.",
        },
      ],
      note: "Note: If a standard ute can access your site, TerraForma can usually complete the drilling efficiently.",
    },
  },
  {
    type: "coverage",
    data: {
      tag: "Available Drilling Services",
      title: "Where TerraForma Drilling Works Across North Coast NSW",
      highlight: "North Coast NSW",
      paragraphs: [
        "TerraForma Drilling offers geotechnical and environmental drilling in coastal communities, regional centres, and infrastructure corridors throughout North Coast NSW.",
        "We regularly support projects across the regions below. If your project location isn't listed, please contact TerraForma Drilling to discuss access and mobilisation for your site.",
      ],
      groups: [
        {
          name: "Northern North Coast",
          suburbs: [
            "Tweed Heads",
            "Kingscliff",
            "Murwillumbah",
            "Byron Bay",
            "Ballina",
            "Lismore",
          ],
        },
        {
          name: "Mid North Coast",
          suburbs: [
            "Coffs Harbour",
            "Woolgoolga",
            "Sawtell",
            "Macksville",
            "Nambucca Heads",
            "Kempsey",
          ],
        },
        {
          name: "Southern North Coast",
          suburbs: [
            "Port Macquarie",
            "Wauchope",
            "Taree",
            "Forster",
            "Tuncurry",
            "Gloucester",
          ],
        },
      ],
    },
  },
  {
    type: "whereWeDrill",
    data: {
      title: "Geotechnical & Environmental Drilling Across North Coast NSW",
      highlight: "North Coast NSW",
      description:
        "TerraForma Drilling supports a wide range of projects in North Coast NSW, from coastal developments and environmental monitoring to regional infrastructure. We also offer drilling services in other metropolitan and regional areas of New South Wales.",
      regions: [
        { id: "nsw", name: "NSW", top: "50%", left: "50%" },
        { id: "sydney", name: "Sydney", top: "63%", left: "74%" },
        { id: "newcastle", name: "Newcastle & Hunter", top: "42%", left: "81%" },
        { id: "wollongong", name: "Wollongong & Illawarra", top: "70%", left: "71%" },
        { id: "central-west", name: "Central West NSW", top: "49%", left: "55%" },
        { id: "new-england", name: "New England & Northwest", top: "35%", left: "60%" },
        { id: "riverina", name: "Riverina & Murray", top: "66%", left: "49%" },
        { id: "southern", name: "Southern Tablelands", top: "77%", left: "68%" },
      ],
    },
  },
  {
    type: "cta",
    data: {
      title: "Understanding the Ground Conditions That Shape Coastal Projects",
      highlight: "Coastal Projects",
      description:
        "North Coast projects need reliable subsurface information, quick field work, and a team that understands the area's coastal conditions. We will help you keep it on track!",
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
            "What geotechnical drilling services does TerraForma provide in North Coast NSW?",
          answer:
            "TerraForma offers Solid Flight Auger drilling, SPT testing, DCP testing, environmental drilling, and groundwater monitoring bores installation for geotechnical and environmental projects across North Coast NSW.",
        },
        {
          question:
            "Can TerraForma complete drilling in coastal and environmentally sensitive areas?",
          answer:
            "Yes. We support projects across coastal developments, environmentally sensitive sites, and regional communities. Our compact drilling platform allows efficient access while reducing site disruption.",
        },
        {
          question: "Can TerraForma mobilise across the North Coast region?",
          answer:
            "Yes. We regularly work throughout the North Coast, including coastal towns, regional centres, and infrastructure corridors. Our flexible mobilisation approach allows us to support projects across a wide geographic area.",
        },
        {
          question:
            "Do you work with geotechnical and environmental consultants in North Coast NSW?",
          answer:
            "Yes. We work closely with geotechnical and environmental consultants, carrying out drilling, sampling, and testing as part of their investigation programmes. Consultants remain responsible for interpretation, reporting, and project recommendations.",
        },
      ],
    },
  },
];
