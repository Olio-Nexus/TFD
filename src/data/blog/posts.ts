// Blog hub — placeholder content mirroring the Figma mock.
// Swap the dummy copy / categories for real posts when content is ready.

/**
 * A single block in an article body. Consecutive `text` blocks are spaced
 * tightly; an `image` block gets a larger gap above and below it.
 */
export type BlogContentBlock =
  | { type: "text"; paragraphs: string[] }
  | { type: "image"; src: string; alt: string };

export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  /** Optional trailing segment of the title rendered in the accent colour on the article hero. */
  titleHighlight?: string;
  description: string;
  image: string;
  readTime: number; // minutes
  /** Human-readable published date shown on the article hero, e.g. "28 June 2026". */
  date: string;
  /** Ordered body content rendered below the hero on the article page. */
  content: BlogContentBlock[];
}

// Filter chips shown above the grid (first entry is the "show all" pill).
export const blogCategories: string[] = [
  "All Blogs",
  "Lorem ipsum",
  "dolor sit",
  "amet consectetur",
  "Nisl justo non",
  "Augue tincidunt",
  "Bibendum egestas",
];

const TITLE = "Lorem ipsum dolor sit amet consectetur.";
const TITLE_HIGHLIGHT =
  "Libero nunc est a nunc ut felis sed sem amet.";
const DESCRIPTION =
  "Lorem ipsum dolor sit amet consectetur. Pulvinar a velit risus ac in. Tortor risus tellus elit vulputate at diam. Purus vel laoreet diam fames.";

// Shared placeholder article body mirroring the Figma mock: an intro text
// group, a full-width image, then a closing text block.
const CONTENT: BlogContentBlock[] = [
  {
    type: "text",
    paragraphs: [
      "Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.",
      "Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.",
    ],
  },
  {
    type: "text",
    paragraphs: [
      "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.",
      "Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.",
      "Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.",
    ],
  },
  {
    type: "image",
    src: "/services/gallery-7.png",
    alt: "TerraForma Drilling crew breaking ground on site",
  },
  {
    type: "text",
    paragraphs: [
      "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.",
      "Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.",
      "Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.",
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "post-1",
    category: "Category Tag",
    title: TITLE,
    titleHighlight: TITLE_HIGHLIGHT,
    description: DESCRIPTION,
    image: "/services/gallery-1.png",
    readTime: 5,
    date: "28 June 2026",
    content: CONTENT,
  },
  {
    slug: "post-2",
    category: "Category Tag",
    title: TITLE,
    titleHighlight: TITLE_HIGHLIGHT,
    description: DESCRIPTION,
    image: "/services/gallery-2.png",
    readTime: 8,
    date: "24 June 2026",
    content: CONTENT,
  },
  {
    slug: "post-3",
    category: "Category Tag",
    title: TITLE,
    titleHighlight: TITLE_HIGHLIGHT,
    description: DESCRIPTION,
    image: "/services/gallery-3.png",
    readTime: 7,
    date: "19 June 2026",
    content: CONTENT,
  },
  {
    slug: "post-4",
    category: "Category Tag",
    title: TITLE,
    titleHighlight: TITLE_HIGHLIGHT,
    description: DESCRIPTION,
    image: "/services/gallery-4.png",
    readTime: 10,
    date: "12 June 2026",
    content: CONTENT,
  },
  {
    slug: "post-5",
    category: "Category Tag",
    title: TITLE,
    titleHighlight: TITLE_HIGHLIGHT,
    description: DESCRIPTION,
    image: "/services/gallery-5.png",
    readTime: 8,
    date: "5 June 2026",
    content: CONTENT,
  },
  {
    slug: "post-6",
    category: "Category Tag",
    title: TITLE,
    titleHighlight: TITLE_HIGHLIGHT,
    description: DESCRIPTION,
    image: "/services/gallery-6.png",
    readTime: 15,
    date: "30 May 2026",
    content: CONTENT,
  },
];
