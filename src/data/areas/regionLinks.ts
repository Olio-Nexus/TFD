/**
 * Maps a WhereWeDrill region `id` (used in the map/list data across the area
 * and service detail pages) to its canonical area-we-serve route slug.
 *
 * Region ids are short handles (e.g. "southern"), while the routed slug is the
 * SEO slug registered in ./index.ts (e.g. "southern-tablelands"). Keep this in
 * sync with the `buildArea(...)` slugs there.
 */
const REGION_SLUGS: Record<string, string> = {
  nsw: "nsw",
  sydney: "sydney",
  wollongong: "wollongong",
  newcastle: "newcastle",
  "new-england": "new-england-northwest",
  "central-west": "central-west-nsw",
  riverina: "riverina-murray",
  "north-coast": "north-coast-nsw",
  southern: "southern-tablelands",
};

/** Returns the area detail href for a region id, or null if unmapped. */
export function areaHrefForRegion(id: string): string | null {
  const slug = REGION_SLUGS[id];
  return slug ? `/areas-we-serve/${slug}` : null;
}
