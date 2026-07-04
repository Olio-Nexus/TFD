import type { Metadata } from "next";

import IndustriesCTA from "@/components/Industries/IndustriesCTA";
import IndustriesFAQ from "@/components/Industries/IndustriesFAQ";
import IndustriesWhyChoose from "@/components/Industries/IndustriesWhyChoose";
import IndustriesWeSupport from "@/components/Industries/IndustriesWeSupport";
import IndustriesHero from "@/components/Industries/IndustriesHero";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema, type JsonLdSchema } from "@/lib/seo";
import { industriesHubSeo } from "@/data/industries/seo";

export const metadata: Metadata = {
  title: industriesHubSeo.title,
  description: industriesHubSeo.description,
};

const schemas: JsonLdSchema[] = [organizationSchema, industriesHubSeo.schema];
if (industriesHubSeo.faqSchema) schemas.push(industriesHubSeo.faqSchema);

export default function Industries(){
    return(
        <>
       <JsonLd schemas={schemas} />
       <IndustriesHero/>
       <IndustriesWeSupport/>
       <IndustriesWhyChoose/>
       <IndustriesCTA/>
       <IndustriesFAQ/>
        </>
    );
}