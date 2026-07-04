export type Item = {
  title: string;
  href: string;
  image?: string;
};

export type NavGroup = {
  href: string;
  showImage: boolean;
  items: Item[];
};

export const navigation: Record<string, NavGroup> = {
  Services: {
    href: "/services",
    showImage: true,
    items: [
      {
        title: "Solid Flight Auger Drilling",
        href: "/services/solid-flight-auger-drilling",
        image: "/images/service-1.png",
      },
      {
        title: "Standard Penetration Testing (SPT)",
        href: "/services/standard-penetration-testing",
        image: "/services/spt.png",
      },
      {
        title: "Environmental Drilling",
        href: "/services/environmental-drilling",
        image: "/services/environmental.png",
      },
      {
        title: "Groundwater well Installation",
        href: "/services/groundwater-well-installation",
        image: "/services/groundwater.png",
      },
    ],
  },

  Industries: {
    href: "/industries",
    showImage: true,
    items: [
      {
        title: "Geotechnical Consultants",
        href: "/industries/geotechnical-consultants",
        image: "/images/service-1.png",
      },
      {
        title: "Commercial",
        href: "/industries/commercial",
        image: "/images/industry-1.png",
      },
      {
        title: "Environmental Consultant",
        href: "/industries/environmental-consultant",
        image: "/images/industry-3.png",
      },
      {
        title: "Government Bodies & Utilities",
        href: "/industries/government-bodies-utilities",
        image: "/images/industry-4.png",
      },
      {
        title: "Civil & Infrastructure",
        href: "/industries/civil-infrastructure",
        image: "/images/industry-5.png",
      },
      {
        title: "Mining & Resources",
        href: "/industries/mining-resources",
        image: "/images/industry-6.png",
      },
    ],
  },

  AreaWeServe: {
    href: "/areas-we-serve",
    showImage: false,
    items: [
      {
        title: "Sydney",
        href: "/areas-we-serve/sydney",
      },
      {
        title: "NSW",
        href: "/areas-we-serve/nsw",
      },
      {
        title: "Wollongong & Illawarra",
        href: "/areas-we-serve/wollongong",
      },
      {
        title: "Newcastle & Hunter",
        href: "/areas-we-serve/newcastle",
      },
      {
        title: "New England & Northwest",
        href: "/areas-we-serve/new-england-northwest",
      },
      {
        title: "Central West NSW",
        href: "/areas-we-serve/central-west-nsw",
      },
      {
        title: "Riverina & Murray",
        href: "/areas-we-serve/riverina-murray",
      },
      {
        title: "North Coast NSW",
        href: "/areas-we-serve/north-coast-nsw",
      },
      {
        title: "Southern Tablelands",
        href: "/areas-we-serve/southern-tablelands",
      },
    ],
  },

  Company: {
    href: "/about-us",
    showImage: false,
    items: [
      {
        title: "About Us",
        href: "/about-us",
      },
      {
        title: "Our Team",
        href: "/about/our-team",
      },
      {
        title: "Our Clients & Certifications",
        href: "/about/our-clients-certifications",
      },
    ],
  },
};