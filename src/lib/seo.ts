// Centralised SEO helpers and shared structured data (JSON-LD).
// Page-specific schemas live alongside their pages; the Organization
// schema is shared sitewide and defined once here.

export const SITE_URL = "https://tfdrilling.com.au";

/** A single JSON-LD structured-data object. */
export type JsonLdSchema = Record<string, unknown>;

/**
 * Organization schema rendered on every page. Matches the
 * "Organizational Schema" column of the SEO spec.
 */
export const organizationSchema: JsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "TerraForma Drilling",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  telephone: "+61272398878",
  email: "sales@tfdrilling.com.au",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wetherill Park",
    addressRegion: "NSW",
    postalCode: "2164",
    addressCountry: "AU",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+61272398878",
    contactType: "sales",
    areaServed: "AU-NSW",
    availableLanguage: "en",
  },
  areaServed: [
    { "@type": "City", name: "Sydney" },
    { "@type": "City", name: "Newcastle" },
    { "@type": "City", name: "Wollongong" },
    { "@type": "AdministrativeArea", name: "Central West NSW" },
    { "@type": "AdministrativeArea", name: "New England NSW" },
    { "@type": "AdministrativeArea", name: "Riverina" },
    { "@type": "AdministrativeArea", name: "North Coast NSW" },
    { "@type": "AdministrativeArea", name: "Southern Tablelands" },
  ],
};
