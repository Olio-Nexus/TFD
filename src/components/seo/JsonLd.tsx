import type { JsonLdSchema } from "@/lib/seo";

/**
 * Renders one or more JSON-LD structured-data blocks as
 * <script type="application/ld+json"> tags. Server-component safe.
 */
export default function JsonLd({ schemas }: { schemas: JsonLdSchema[] }) {
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
