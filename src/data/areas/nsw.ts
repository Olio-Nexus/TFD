import type { AreaSection } from "@/types/area";

export const nswSections: AreaSection[] = [
  {
    type: "hero",
    data: {
      region: "NSW",
      title: "Geotechnical & Environmental Drilling Services Across NSW",
      highlight: "Across NSW",
      paragraphs: [
        "TerraForma Drilling offers geotechnical & environmental drilling services across New South Wales. Our purpose-built ute-mounted drilling platform delivers efficient solutions for metropolitan, regional, and environmental projects where access, mobilisation, and timelines are critical.",
        "We support geotechnical and environmental consultants, developers, civil contractors, and government organisations with responsive scheduling, calibrated equipment, ISO-certified systems, and dependable field delivery throughout NSW.",
      ],
      map: "/maps/nsw-map2.svg",
      pin: { top: "55%", left: "60%" },
      mapAlt:
        "Map of New South Wales highlighting TerraForma Drilling's statewide service area",
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
      title: "Why NSW Project Teams Choose TerraForma Drilling",
      highlight: "TerraForma Drilling",
      paragraphs: [
        "New South Wales features diverse project conditions, including dense urban areas, developed infrastructure corridors, and regional sites with challenging terrain and variable ground conditions.",
        "Our team operates across NSW's varied geological environments. We follow consultant bore plans and investigation requirements to ensure accurate drilling, sampling, and testing.",
      ],
      featuresTitle: "Built for Projects Across New South Wales",
      featuresHighlight: "New South Wales",
      features: [
        "Multi-location programs",
        "Regional mobilisation",
        "Urban and remote access",
        "Infrastructure corridors",
        "Tight-access capability",
        "Night drilling capability",
        "ISO Certified: ISO 9001, ISO 14001, ISO 45001",
      ],
      image: "/areas-we-serve/area-2.png",
      imageAlt: "TerraForma Drilling rig on a regional NSW project site",
    },
  },
  {
    type: "services",
    data: {
      tag: "Available Drilling Services",
      title: "Drilling Services Available Across NSW",
      highlight: "NSW",
      description:
        "We deliver practical drilling, sampling, and testing services to support geotechnical and environmental investigations across New South Wales.",
      services: [
        {
          id: "01",
          title: "Solid Flight Auger Drilling",
          slug: "solid-flight-auger-drilling",
          description:
            "We support tight-access geotechnical drilling with bulk disturbed and U50 undisturbed sampling for site investigations, foundation assessments, and development projects.",
          image: "/images/service-1.png",
        },
        {
          id: "02",
          title: "Standard Penetration Testing (SPT)",
          slug: "standard-penetration-testing",
          description:
            "Our SPT testing provides N-value data for geotechnical engineers to assess soil resistance, density, and subsurface conditions.",
          image: "/images/service-2.png",
        },
        {
          id: "03",
          title: "Dynamic Cone Penetrometer (DCP) Testing",
          slug: null,
          description:
            "Our DCP testing offers fast, cost-effective assessment of shallow soil strength and pavement subgrade conditions for site investigations.",
          image: "/images/service-5.png",
        },
        {
          id: "04",
          title: "Environmental Drilling",
          slug: "environmental-drilling",
          description:
            "We support contaminated land investigations, Phase 2 Detailed Site Assessments (ESA), groundwater investigations, and environmental monitoring programs with specialised environmental drilling.",
          image: "/images/service-3.png",
        },
        {
          id: "05",
          title: "Groundwater Well Installation",
          slug: "groundwater-well-installation",
          description:
            "We install groundwater monitoring bores and piezometers in accordance with consultant specifications for environmental monitoring and geotechnical investigations.",
          image: "/images/service-4.png",
        },
      ],
    },
  },
  {
    type: "whyChooseUs",
    data: {
      tag: "Site Access & Mobilisation",
      title: "NSW Site Access & Mobilisation Capability",
      highlight: "Mobilisation Capability",
      description:
        "Projects across New South Wales often present access challenges, from constrained urban sites to remote regional locations. TerraForma's ute-mounted drilling platform enables efficient mobilisation without the need for large support equipment or extensive site preparation.",
      items: [
        {
          icon: "/services/icons/sfa-1.svg",
          title: "Greater Sydney and regional coverage",
          description:
            "We support projects across metropolitan and regional NSW.",
        },
        {
          icon: "house",
          title: "Remote and regional access",
          description:
            "We mobilise to regional towns, infrastructure corridors, and remote project locations throughout NSW.",
        },
        {
          icon: "slope",
          title: "Tight-access urban sites",
          description:
            "We work within constrained developments where larger conventional drilling rigs may have access limitations.",
        },
        {
          icon: "/areas-we-serve/icons/construction 2.svg",
          title: "Large infrastructure corridors",
          description:
            "We support staged construction areas, transport projects, and utility developments.",
        },
        {
          icon: "night",
          title: "Night drilling capability",
          description:
            "We undertake after-hours work to minimise disruption and maintain project schedules.",
        },
        {
          icon: "ute",
          title: "No crane, tracks, or extensive site preparation required",
          description:
            "Our ute-mounted configuration allows quick access to drilling locations, reducing setup time and minimising disruption.",
        },
      ],
      note: "Note: If a standard ute can access your site, we can complete the drilling efficiently.",
    },
  },
  {
    type: "coverage",
    data: {
      tag: "Available Drilling Services",
      title: "Where TerraForma Drilling Works Across NSW",
      highlight: "Across NSW",
      paragraphs: [
        "TerraForma Drilling delivers geotechnical and environmental drilling services throughout New South Wales, supporting both metropolitan and regional projects.",
        "We regularly support investigations across the regions below. If your project location is not listed, please contact TerraForma Drilling to confirm access and mobilisation requirements for your location in NSW.",
      ],
      groups: [
        {
          name: "Greater Sydney",
          suburbs: [
            "Sydney CBD",
            "Inner West",
            "Eastern Suburbs",
            "North Shore",
            "Northern Beaches",
            "Western Sydney",
            "South Western Sydney",
            "Hills District",
            "Sutherland Shire",
          ],
        },
        {
          name: "Hunter & Newcastle",
          suburbs: [
            "Newcastle",
            "Lake Macquarie",
            "Maitland",
            "Cessnock",
            "Singleton",
            "Port Stephens",
          ],
        },
        {
          name: "Illawarra & South Coast",
          suburbs: [
            "Wollongong",
            "Shellharbour",
            "Kiama",
            "Nowra",
            "Shoalhaven",
          ],
        },
        {
          name: "Regional NSW",
          suburbs: [
            "Central West",
            "New England & Northwest",
            "Riverina & Murray",
            "North Coast",
            "Southern Tablelands",
          ],
        },
      ],
    },
  },
  {
    type: "whereWeDrill",
    data: {
      title: "Geotechnical & Environmental Drilling Across ",
      highlight: "NSW",
      description:
        "TerraForma Drilling helps consultants, developers, contractors, and project teams with geotechnical and environmental investigations, drilling, testing, and groundwater monitoring across New South Wales.",
      regions: [
        { id: "nsw", name: "NSW", top: "50%", left: "50%" },
        { id: "sydney", name: "Sydney", top: "63%", left: "74%" },
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
      title: "Need Reliable Drilling Support Anywhere in NSW?",
      highlight: "Anywhere in NSW?",
      description:
        "From Sydney developments to regional infrastructure and environmental investigations, TerraForma Drilling provides practical geotechnical, environmental, and testing services across New South Wales.",
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
            "What geotechnical drilling services does TerraForma provide across NSW?",
          answer:
            "TerraForma provides Solid Flight Auger drilling, Standard Penetration Testing (SPT), Dynamic Cone Penetrometer (DCP) testing, environmental drilling, and monitoring bore installation for geotechnical and environmental investigations throughout New South Wales.",
        },
        {
          question: "Can TerraForma mobilise to regional NSW projects?",
          answer:
            "Yes. TerraForma supports projects across metropolitan and regional NSW. We regularly mobilise to regional locations for geotechnical investigations, environmental drilling programs, infrastructure projects, and groundwater monitoring installations.",
        },
        {
          question:
            "Can TerraForma work on difficult-access sites across NSW?",
          answer:
            "Yes. Our purpose-built ute-mounted drilling platform enables us to undertake investigations on constrained urban sites, in infrastructure corridors, and at locations where larger conventional drilling rigs may have access limitations.",
        },
        {
          question:
            "Do you work with geotechnical and environmental consultants across NSW?",
          answer:
            "Yes. We support consultant-led investigations by providing drilling, sampling, and testing services in accordance with project requirements, while consultants remain responsible for interpretation, reporting, and project recommendations.",
        },
      ],
    },
  },
];
