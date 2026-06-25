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
        title: "Monitoring Bore & Piezometer Installation",
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
        href: "/industries/geotechnical",
        image: "/images/service-1.png",
      },
      {
        title: "Commercial",
        href: "/industries/commercial",
        image: "/images/industries/commercial.jpg",
      },
      {
        title: "Environmental Consultant",
        href: "/industries/environmental",
        image: "/images/industries/environmental.jpg",
      },
      {
        title: "Government Bodies & Utilities",
        href: "/industries/government",
        image: "/images/industries/government.jpg",
      },
      {
        title: "Civil & Infrastructure",
        href: "/industries/civil",
        image: "/images/industries/civil.jpg",
      },
      {
        title: "Mining & Resources",
        href: "/industries/mining",
        image: "/images/industries/mining.jpg",
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
        href: "/areas-we-serve/NSW",
      },
      {
        title: "Wollongong & Illawarra",
        href: "/areas-we-serve/wollongong-illawarra",
      },
      {
        title: "Newcastle & Hunter",
        href: "/areas-we-serve/newcastle-hunter",
      },
      {
        title: "New England & Northwest ",
        href: "/areas-we-serve/new-england-northwest ",
      },
      {
        title: "Central West NSW",
        href: "/areas-we-serve/central-west-nsw",
      },
      {
        title: "Riverina & Murray ",
        href: "/areas-we-serve/riverina-murray ",
      },
      {
        title: "North Coast NSW ",
        href: "/areas-we-serve/north-coast-nsw ",
      },
      {
        title: "Southern Tablelands ",
        href: "/areas-we-serve/southern-tablelands ",
      },
    ],
  },

  Company: {
    href: "/about",
    showImage: false,
    items: [
      {
        title: "About Us",
        href: "/about",
      },
      {
        title: "Our Team",
        href: "/about/team",
      },
      {
        title: "Careers",
        href: "/about/career",
      },
      {
        title: "News & Events",
        href: "/about/news-and-events",
      },
      {
        title: "Our Clients & Certifications",
        href: "/about/clients-and-certifications",
      },
    ],
  },
};