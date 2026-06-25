// service listing page data

export type ServiceCard = {
  number: string;
  category: string;
  title: string;
  highlight: string;
  description: string;
  image: string;
  slug: string;
  imagePosition: "left" | "right";
  background: "white" | "alt";
};

export const serviceData: ServiceCard[] = [
  {
    slug: "solid-flight-auger-drilling",
    number: "01",
    category: "Drilling",
    title: "Solid Flight",
    highlight: "Auger Drilling",
    description:
      "Our ute-mounted SFA rig delivers efficient geotechnical drilling where larger rigs lack access, saving clients time and costs. We conduct bulk auger and U50 sampling for site investigations, foundation design, and geotechnical assessments across Sydney and NSW",
    image: "/services/sfa-drilling.png",
    imagePosition: "left",
    background: "white",
  },

  {
    slug: "standard-penetration-testing",
    number: "02",
    category: "In Site Testing",
    title: "Standard",
    highlight: "Penetration Testing",
    description:
      "Our Standard Penetration Testing (SPT) services provide in-situ measurements of soil strength and density for geotechnical investigations. Using calibrated equipment, we deliver accurate N-value data that engineers use for foundation design, site classification, and ground assessment.",
    image: "/services/spt.png",
    
    imagePosition: "right",
    background: "alt",
  },

  {
    slug: "environmental-drilling",
    number: "03",
    category: "Environmental",
    title: "Environmental",
    highlight: "Drilling",
    description:
      "Our environmental drilling services deliver reliable results for contaminated land, Phase 2 environmental site assessments, and acid sulfate soil investigations across NSW. We follow project-specific drilling protocols, site protocols, and sampling procedures to ensure precise, compliant environmental assessments.",
    image: "/services/environmental.png",
    imagePosition: "left",
    background: "white",
  },

  {
    slug: "groundwater-well-installation",
    number: "04",
    category: "Monitoring Infrastructure",
    title: "Groundwater Well",
    highlight: "Installation",
    description:
      "We install monitoring bores, groundwater monitoring wells, and piezometers for environmental and geotechnical investigations across NSW. Installations comply with consultant specifications and project requirements to ensure reliable, tailored results.",
    image: "/services/groundwater.png",
    imagePosition: "right",
    background: "alt",
  },
];