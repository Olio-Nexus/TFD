import type { AreaSection } from "@/types/area";

export const sydneySections: AreaSection[] = [
  {
    type: "hero",
    data: {
      region: "Sydney",
      title:
        "Geotechnical & Environmental Drilling Services in Greater Sydney",
      highlight: "Greater Sydney",
      paragraphs: [
        "TerraForma Drilling provides geotechnical & environmental drilling services across Greater Sydney. Our ute-mounted drilling platform allows us to work in tight urban spaces that larger rigs cannot access.",
        "We help geotechnical consultants, developers, civil contractors, and government teams by offering fast field service, 24-hour mobilisation in Sydney, calibrated equipment, and ISO-certified systems to keep projects on track.",
      ],
      map: "/maps/nsw-map2.svg",
      pin: { top: "50%", left: "79%" },
      mapAlt:
        "Map of New South Wales highlighting TerraForma Drilling's service area around Greater Sydney",
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
        "Geotechnical & Environmental Drilling Services in Greater Sydney",
      highlight: "Greater Sydney",
      paragraphs: [
        "Access issues often slow down site investigations in Sydney. Narrow lots, existing buildings, low-clearance & tight spaces, and dense urban areas all require a mobile drilling solution.",
        "Our team has experience working across Sydney's varied ground conditions, including Hawkesbury Sandstone, Wianamatta Shale, and Inner West fill areas. We follow consultant bore plans and investigation requirements to deliver accurate drilling, sampling, and testing across different site conditions.",
      ],
      featuresTitle: "Built for Sydney's Toughest Access Conditions",
      featuresHighlight: "Toughest Access Conditions",
      features: [
        "Sub-3m gate access",
        "Low-clearance structures",
        "Inner-city developments",
        "Staged construction sites",
        "Basement access areas",
        "Night drilling capability",
        "ISO Certified - ISO 9001, ISO 14001, and ISO 45001",
      ],
      image: "/areas-we-serve/area-1.png",
      imageAlt: "TerraForma Drilling rig on a tight-access Sydney site",
    },
  },
  {
    type: "services",
    data: {
      tag: "Available Drilling Services",
      title: "Drilling Services Available Across Sydney",
      highlight: "Sydney",
      description:
        "We provide practical drilling, sampling, and testing services to support geotechnical and environmental site investigations throughout Greater Sydney.",
      services: [
        {
          id: "01",
          title: "Solid Flight Auger Drilling",
          slug: "solid-flight-auger-drilling",
          description:
            "We offer tight-access geotechnical drilling with both bulk disturbed and U50 undisturbed sampling to support foundation checks, ground investigations, and development projects.",
          image: "/images/service-1.png",
        },
        {
          id: "02",
          title: "Standard Penetration Testing (SPT)",
          slug: "standard-penetration-testing",
          description:
            "Our calibrated SPT testing gives N-value data that geotechnical engineers use to assess soil resistance and subsurface conditions, helping you make better project decisions.",
          image: "/images/service-2.png",
        },
        {
          id: "03",
          title: "Environmental Drilling",
          slug: "environmental-drilling",
          description:
            "We provide environmental drilling support for contaminated land studies, Phase 2 environmental site assessments, and groundwater investigations.",
          image: "/images/service-3.png",
        },
        {
          id: "04",
          title: "Groundwater Well Installation",
          slug: "groundwater-well-installation",
          description:
            "We install groundwater monitoring bores and piezometers to meet consultant specifications for environmental and geotechnical monitoring programs, supporting your project requirements.",
          image: "/images/service-4.png",
        },
        {
          id: "05",
          title: "Dynamic Cone Penetrometer (DCP) Testing",
          slug: null,
          description:
            "Our calibrated DCP testing offers fast and cost-effective assessments of shallow soil strength and pavement subgrade conditions for site and ground investigations.",
          image: "/images/service-5.png",
        },
      ],
    },
  },
  {
    type: "whyChooseUs",
    data: {
      tag: "Site Access & Mobilisation",
      title: "Sydney Site Access & Mobilisation Capability",
      highlight: "Mobilisation Capability",
      description:
        "Sydney's dense urban environment often restricts access to conventional drilling rigs. TerraForma's purpose-built ute-mounted drilling platform reaches challenging sites without large equipment, extensive setup, or unnecessary disruption.",
      items: [
        {
          icon: "house",
          title: "Narrow inner-city lots",
          description:
            "Reach access-constrained residential and commercial sites where larger rigs cannot operate.",
        },
        {
          icon: "slope",
          title: "Sloped residential blocks",
          description:
            "Enable drilling on difficult terrain and extend access to sites larger rigs cannot manage.",
        },
        {
          icon: "low-clearance",
          title: "Low-clearance structures",
          description:
            "Conduct investigations beneath overhead restrictions, existing buildings, and in confined areas where conventional rigs cannot fit.",
        },
        {
          icon: "construction",
          title: "Staged construction corridors",
          description:
            "Support investigations in active construction zones while meeting project access requirements and maintaining progress.",
        },
        {
          icon: "night",
          title: "Night drilling capability",
          description:
            "Suitable for projects requiring after-hours drilling to minimise disruption and maintain schedules without slowing access needs.",
        },
        {
          icon: "ute",
          title: "No crane, tracks, or extensive site preparation required",
          description:
            "The ute-mounted platform drives directly to the drilling location, reducing mobilisation time, setup, and disruption.",
        },
      ],
      note: "Note: If a standard ute can access the site, TerraForma can drill it: A practical solution for Sydney projects with significant access challenges.",
    },
  },
  {
    type: "coverage",
    data: {
      tag: "Available Drilling Services",
      title: "Where TerraForma Drilling Works Across Sydney",
      highlight: "Sydney",
      paragraphs: [
        "TerraForma Drilling delivers geotechnical and environmental drilling services throughout Greater Sydney. Our ute-mounted drilling platform enables efficient site investigations in both inner-city and suburban areas.",
        "We support projects across all of Greater Sydney.",
      ],
      groups: [
        {
          name: "Inner West & Sydney City",
          suburbs: [
            "Alexandria",
            "Annandale",
            "Balmain",
            "Camperdown",
            "Chippendale",
            "Glebe",
            "Leichhardt",
            "Marrickville",
            "Newtown",
            "Pyrmont",
            "Redfern",
            "Rozelle",
            "Sydney CBD",
            "Ultimo",
          ],
        },
        {
          name: "Parramatta & Western Sydney",
          suburbs: [
            "Blacktown",
            "Castle Hill",
            "Granville",
            "Liverpool",
            "Parramatta",
            "Penrith",
            "Rouse Hill",
            "Seven Hills",
            "Smithfield",
            "Wetherill Park",
          ],
        },
        {
          name: "North Shore, Hills & Ryde",
          suburbs: [
            "Chatswood",
            "Gordon",
            "Hornsby",
            "Lane Cove",
            "Macquarie Park",
            "North Ryde",
            "Pymble",
            "St Ives",
            "Ryde",
            "Wahroonga",
          ],
        },
        {
          name: "Eastern Suburbs & Southern Sydney",
          suburbs: [
            "Bondi",
            "Botany",
            "Coogee",
            "Hurstville",
            "Kogarah",
            "Maroubra",
            "Mascot",
            "Randwick",
            "Rockdale",
            "Sutherland",
          ],
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
        "TerraForma Drilling helps consultants, developers, contractors, and government teams with geotechnical investigations, environmental drilling, testing, and groundwater monitoring across Greater Sydney. We also offer drilling services throughout regional New South Wales.",
      regions: [
        { id: "sydney", name: "NSW", top: "63%", left: "74%" },
        { id: "newcastle", name: "Newcastle & Hunter", top: "42%", left: "81%" },
        { id: "wollongong", name: "Wollongong & Illawarra", top: "70%", left: "71%" },
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
      title: "Big Rigs Can't Move? Site Too Remote? Let's Talk!",
      highlight: "Let's Talk!",
      description:
        "We go where most drillers won't. Tight urban sites. Regional NSW. You need us there? We'll be there.",
      primaryLabel: "Get a Quote",
      primaryHref: "/contact",
      secondaryLabel: "View Our Services",
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
            "What geotechnical drilling services does TerraForma provide in Sydney?",
          answer:
            "We provide geotechnical drilling, Solid Flight Auger drilling, Standard Penetration Testing (SPT), environmental drilling, and monitoring bore installation across Greater Sydney for consultants, developers, contractors, and government projects.",
        },
        {
          question:
            "Can TerraForma complete drilling on tight-access sites in Sydney?",
          answer:
            "Yes. Our ute-mounted drilling platform is made for tight Sydney sites, including narrow lots, low-clearance areas, existing developments, and places that larger rigs cannot easily access.",
        },
        {
          question:
            "How quickly can TerraForma mobilise for projects in Sydney?",
          answer:
            "For many projects in Greater Sydney, we can mobilise within 24 hours of confirmation. We will confirm the exact timeframe during quoting, based on your project scope, access needs, and our schedule, so you can plan with confidence.",
        },
        {
          question:
            "Do you work with geotechnical consultants and environmental consultants in Sydney?",
          answer:
            "Yes. We support consultant-led investigations by handling drilling, sampling, and testing as needed, while consultants remain in charge of interpretation, reporting, and client advice.",
        },
      ],
    },
  },
];
