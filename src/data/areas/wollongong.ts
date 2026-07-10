import type { AreaSection } from "@/types/area";

export const wollongongSections: AreaSection[] = [
  {
    type: "hero",
    data: {
      region: "Wollongong & Illawarra",
      title:
        "Geotechnical & Environmental Drilling Services in Wollongong & Illawarra",
      highlight: "Wollongong & Illawarra",
      paragraphs: [
        "TerraForma Drilling offers geotechnical and environmental drilling services in Wollongong and Illawarra for residential, commercial, infrastructure, and industrial projects. Our custom ute-mounted drilling platform makes it easy to reach tight urban sites, coastal areas, escarpments, and busy industrial locations.",
        "We work with geotechnical and environmental consultants, developers, civil contractors, and government organisations. Our team provides quick mobilisation, well-maintained equipment, and ISO-certified systems to ensure reliable field services throughout Illawarra.",
      ],
      map: "/maps/nsw-map2.svg",
      pin: { top: "55%", left: "77%" },
      mapAlt:
        "Map of New South Wales highlighting TerraForma Drilling's service area around Wollongong and the Illawarra",
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
        "Why Wollongong & Illawarra Project Teams Choose TerraForma Drilling",
      highlight: "TerraForma Drilling",
      paragraphs: [
        "The Illawarra region has a wide range of project sites, including coastal areas, urban developments, industrial facilities, transport corridors, and escarpment terrain. These different conditions mean you need a drilling team that can handle a range of access challenges and investigative needs.",
        "We provide geotechnical and environmental drilling throughout Wollongong and the Illawarra. Our team follows consultant plans and project requirements to deliver accurate drilling, sampling, and testing, giving you the subsurface data needed for engineering and planning.",
      ],
      featuresTitle: "Built for Projects Across the Illawarra",
      featuresHighlight: "the Illawarra",
      features: [
        "Coastal developments",
        "Escarpment terrain",
        "Industrial sites",
        "Port infrastructure",
        "Tight-access capability",
        "Residential expansion areas",
        "ISO Certified: ISO 9001, ISO 14001, ISO 45001",
      ],
      image: "/areas-we-serve/area-3.png",
      imageAlt:
        "TerraForma Drilling rig on a Wollongong and Illawarra project site",
    },
  },
  {
    type: "services",
    data: {
      tag: "Available Drilling Services",
      title: "Drilling Services Available Across Wollongong & Illawarra",
      highlight: "Wollongong & Illawarra",
      description:
        "We provide practical drilling, sampling, and testing services to support site investigations and environmental assessments across Wollongong and the Illawarra region.",
      services: [
        {
          id: "01",
          title: "Solid Flight Auger Drilling",
          slug: "solid-flight-auger-drilling",
          description:
            "Our ute-mounted Solid Flight Auger rig is designed for tight-access drilling. It offers both bulk disturbed and U50 undisturbed sampling for ground investigations, foundation checks, and construction projects where bigger rigs can't reach.",
          image: "/images/service-1.png",
        },
        {
          id: "02",
          title: "Standard Penetration Testing (SPT)",
          slug: "standard-penetration-testing",
          description:
            "Our SPT testing provides accurate N-value data, helping geotechnical engineers assess soil resistance, density, and ground conditions for design and risk assessment.",
          image: "/images/service-2.png",
        },
        {
          id: "03",
          title: "Dynamic Cone Penetrometer (DCP) Testing",
          slug: null,
          description:
            "Our DCP testing quickly measures shallow soil strength and pavement subgrade conditions, supporting civil projects and site investigations.",
          image: "/images/service-5.png",
        },
        {
          id: "04",
          title: "Environmental Drilling",
          slug: "environmental-drilling",
          description:
            "We offer environmental drilling in Wollongong for contaminated land investigations, Phase 2 Detailed Site Investigation (DSI), and groundwater studies across the Illawarra region.",
          image: "/images/service-3.png",
        },
        {
          id: "05",
          title: "Groundwater Well Installation",
          slug: "groundwater-well-installation",
          description:
            "We install groundwater monitoring bores and piezometers following consultant specifications, supporting long-term environmental monitoring and geotechnical assessments.",
          image: "/images/service-4.png",
        },
      ],
    },
  },
  {
    type: "whyChooseUs",
    data: {
      tag: "Site Access & Mobilisation",
      title: "Illawarra Site Access & Mobilisation Capability",
      highlight: "Mobilisation Capability",
      description:
        "Projects in Wollongong and the Illawarra often face different access challenges, such as narrow urban sites, sloping escarpments, industrial areas, and coastal developments. Our compact ute-mounted drilling platform lets us mobilise quickly without needing large equipment or major site prep.",
      items: [
        {
          icon: "/services/icons/sfa-1.svg",
          title: "Urban and tight-access sites",
          description:
            "Suitable for residential and commercial developments where conventional drilling rigs may have limited access.",
        },
        {
          icon: "slope",
          title: "Escarpment and sloping terrain",
          description:
            "Provides a practical drilling solution for challenging sites across elevated and uneven landscapes.",
        },
        {
          icon: "/areas-we-serve/icons/plant 1.svg",
          title: "Industrial and port facilities",
          description:
            "Supports investigations within active industrial environments, manufacturing zones, and infrastructure areas.",
        },
        {
          icon: "/areas-we-serve/icons/construction 2.svg",
          title: "Transport and infrastructure corridors",
          description:
            "Assists staged construction projects, utilities, and public infrastructure investigations.",
        },
        {
          icon: "/areas-we-serve/icons/speed 1.svg",
          title: "Rapid mobilisation",
          description:
            "Responsive scheduling helps project teams maintain investigation programmes and construction timelines.",
        },
        {
          icon: "ute",
          title: "No crane, tracks, or extensive site preparation required",
          description:
            "Our ute-mounted drilling platform reaches many locations quickly, reducing setup time and minimising disruption.",
        },
      ],
      note: "Note: If a standard ute can reach your site, we can usually complete the drilling efficiently.",
    },
  },
  {
    type: "coverage",
    data: {
      tag: "Available Drilling Services",
      title: "Where TerraForma Drilling Works Across Wollongong & Illawarra",
      highlight: "Wollongong & Illawarra",
      paragraphs: [
        "TerraForma Drilling provides geotechnical and environmental drilling services across Illawarra, supporting coastal, industrial, residential, and infrastructure projects.",
        "We regularly support projects across the regions below. If you don't see your project location listed, contact us to check access and mobilisation options for your site.",
      ],
      groups: [
        {
          name: "Wollongong & Northern Illawarra",
          suburbs: [
            "Wollongong",
            "Corrimal",
            "Fairy Meadow",
            "Thirroul",
            "Austinmer",
            "Bulli",
            "Helensburgh",
          ],
        },
        {
          name: "Southern Illawarra",
          suburbs: [
            "Shellharbour",
            "Albion Park",
            "Albion Park Rail",
            "Dapto",
            "Warilla",
            "Oak Flats",
          ],
        },
        {
          name: "Kiama & South Coast Corridor",
          suburbs: ["Kiama", "Gerringong", "Gerroa", "Berry", "Nowra", "Shoalhaven"],
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
        "From coastal developments and industrial facilities to infrastructure projects, TerraForma Drilling supports geotechnical and environmental investigations across Wollongong and the Illawarra region. We also provide drilling services across Sydney and regional NSW.",
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
      title: "Reliable Data Starts With the Right Drilling Partner",
      highlight: "Right Drilling Partner",
      description:
        "From coastal developments to industrial sites across Wollongong and the Illawarra, we deliver on-time geotechnical and environmental drilling completion as per the investigation requirements, project schedule, and site conditions.",
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
            "What geotechnical drilling services does TerraForma provide in Wollongong & Illawarra?",
          answer:
            "TerraForma provides Solid Flight Auger drilling, SPT testing, DCP testing, environmental drilling, and groundwater monitoring bore and piezometer installation services for geotechnical investigations and environmental projects throughout Wollongong and the Illawarra region.",
        },
        {
          question:
            "Can TerraForma complete drilling on difficult-access sites across Illawarra?",
          answer:
            "Yes. Our purpose-built ute-mounted drilling platform is designed to access constrained sites, including residential developments, escarpment locations, industrial facilities, and areas where larger conventional rigs may face access limitations.",
        },
        {
          question:
            "Does TerraForma support geotechnical and environmental consultants in Wollongong?",
          answer:
            "Yes. We regularly work with geotechnical and environmental consultants, providing drilling, sampling, and testing services in accordance with their investigation programmes, while the consultants remain responsible for interpretation and reporting.",
        },
        {
          question:
            "How quickly can TerraForma mobilise for projects across Wollongong & Illawarra?",
          answer:
            "We provide responsive mobilisation across the Illawarra region. Mobilisation timeframes are confirmed during the quoting process based on project location, access requirements, and scheduling considerations.",
        },
      ],
    },
  },
];
