// Projects & Case Studies listing — content mirrors the Figma mock.
// Detail pages aren't wired yet; `href` points at the intended /projects/[slug]
// route so the data model is ready when those pages are built.

/** A numbered narrative block in the case-study body (Challenge / What we did / Outcome). */
export interface ProjectSection {
  title: string;
  paragraphs: string[];
}

/** Sidebar "Project Details" meta shown on the detail page. */
export interface ProjectDetails {
  service: string;
  location: string;
  projectType: string;
  mobilisation: string;
}

/** A "Related Services" sidebar entry. */
export interface RelatedService {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  /** Service category shown as the mono eyebrow and used for filtering. */
  category: string;
  title: string;
  /** Trailing portion of `title` rendered in accent red in the detail hero. Must be a substring of `title`. */
  titleHighlight?: string;
  description: string;
  /** Location label shown in the card footer, e.g. "Sydney", "Regional NSW". */
  location: string;
  image: string;
  /** All filter chips this project should appear under (category + locations). */
  tags: string[];
  /** Inline meta shown as a pipe-separated row beneath the detail-hero description. */
  heroTags?: string[];
  /** Numbered narrative blocks rendered in the detail-page body. */
  sections?: ProjectSection[];
  /** Case-study gallery: [0] is the large lead image, [1] and [2] the paired images below. */
  gallery?: string[];
  /** Sidebar "Project Details" meta. */
  details?: ProjectDetails;
  /** Sidebar "Related Services" list. */
  relatedServices?: RelatedService[];
}

// Filter chips shown above the grid (first entry is the "show all" pill).
export const projectCategories: string[] = [
  "All Projects",
  "Geotechnical Drilling",
  "Environmental Drilling",
  "SPT Testing",
  "Groundwater Well Installation",
  "Sydney",
  "Regional NSW",
];

export const projects: Project[] = [
  {
    slug: "tight-access-sfa-inner-west-sydney",
    category: "Geotechnical Drilling",
    title: "Tight-Access Solid Flight Auger Drilling for Inner West Sydney Development",
    titleHighlight: "Inner West Sydney Development",
    description:
      "A residential development site with restricted access required geotechnical drilling and testing within a constrained working area. TerraForma's compact ute-mounted drilling platform provided a practical solution where larger rigs were unsuitable.",
    location: "Sydney",
    image: "/services/gallery-1.png",
    tags: ["Geotechnical Drilling", "Sydney"],
    heroTags: [
      "Solid Flight Auger Drilling",
      "Inner West Sydney",
      "Geotechnical Investigation",
      "Same-Day Mobilisation",
    ],
    sections: [
      {
        title: "The Challenge",
        paragraphs: [
          "The project site included narrow access, nearby structures, and limited working space. Conventional drilling equipment would have created access constraints and unnecessary disruption.",
          "The project team required drilling and testing to obtain the subsurface information necessary to progress the geotechnical investigation.",
        ],
      },
      {
        title: "What TerraForma Drilling Did",
        paragraphs: [
          "TerraForma mobilised its ute-mounted Solid Flight Auger drilling rig and reviewed the proposed borehole locations, access conditions, and service information before commencing works.",
          "The investigation programme was completed in accordance with the project scope, with drilling and testing undertaken safely and efficiently.",
        ],
      },
      {
        title: "The Outcome",
        paragraphs: [
          "The drilling works were completed without requiring larger plant or creating unnecessary disruption on site.",
          "The client obtained the required field information needed to progress the geotechnical investigation and subsequent project planning activities.",
        ],
      },
    ],
    gallery: [
      "/services/sfa-cs-2.png",
      "/services/sfa-cs-1.png",
      "/services/sfa-drilling.png",
    ],
    details: {
      service: "Solid Flight Auger Drilling",
      location: "Inner West, Sydney NSW",
      projectType: "Geotechnical Investigation",
      mobilisation: "Same Day",
    },
    relatedServices: [
      {
        label: "Solid Flight Auger Drilling",
        href: "/services/solid-flight-auger-drilling",
      },
      {
        label: "Standard penetration testing",
        href: "/services/standard-penetration-testing",
      },
      {
        label: "Environmental Drilling",
        href: "/services/environmental-drilling",
      },
      {
        label: "Groundwater well Installation",
        href: "/services/groundwater-well-installation",
      },
    ],
  },
  {
    slug: "environmental-investigation-industrial-redevelopment",
    category: "Environmental Drilling",
    title: "Environmental Investigation for Industrial Redevelopment Project",
    description:
      "Supporting an environmental consultant's sampling programme, TerraForma completed drilling works in accordance with nominated locations, depths, and site-specific requirements.",
    location: "NSW",
    image: "/services/gallery-2.png",
    tags: ["Environmental Drilling", "Regional NSW"],
  },
  {
    slug: "multi-site-investigation-regional-infrastructure",
    category: "Geotechnical Drilling",
    title: "Multi-Site Investigation Programme for Regional Infrastructure Project",
    description:
      "Multiple locations. Different site conditions. Consistent drilling, testing, safety procedures, and communication throughout the investigation programme.",
    location: "Regional NSW",
    image: "/services/gallery-3.png",
    tags: ["Geotechnical Drilling", "Regional NSW"],
  },
  {
    slug: "shallow-pavement-investigation-easy-access",
    category: "Geotechnical Drilling",
    title: "Shallow Pavement Investigation for Easy Access",
    description:
      "A shallow pavement investigation requiring efficient access and rapid drilling. Our ute-mounted drilling rig delivered the required field information without over-mobilising a larger plant.",
    location: "Sydney & NSW",
    image: "/services/gallery-4.png",
    tags: ["Geotechnical Drilling", "Sydney", "Regional NSW"],
  },
];
