import type { Service } from "@/types/service";

import { sfaSections } from "./solid-flight-auger-drilling";
import { sptSections } from "./standard-penetration-testing";
import { environmentalDrillingSections } from "./environmental-drilling";
import { groundwaterWellInstallationSections } from "./groundwater-well-installation";

export const services: Service[] = [
  {
    slug: "solid-flight-auger-drilling",
    seo: {
      title: "Solid Flight Auger Drilling Sydney | TerraForma Drilling",
      description:
        "Professional Solid Flight Auger drilling services across Sydney and NSW. Geotechnical investigations, sampling and testing.",
    },
    sections: sfaSections,
  },

  {
    slug: "standard-penetration-testing",
    seo: {
      title: "Standard Penetration Testing Sydney | TerraForma Drilling",
      description:
        "SPT testing services for geotechnical investigations and foundation design across Sydney and NSW.",
    },
    sections: sptSections,
  },

  {
    slug: "environmental-drilling",
    seo: {
      title: "Environmental Drilling Sydney | TerraForma Drilling",
      description:
        "Environmental drilling and contamination assessment services across Sydney and NSW.",
    },
    sections: environmentalDrillingSections,
  },

  {
    slug: "groundwater-well-installation",
    seo: {
      title: "Groundwater Well Installation Sydney | TerraForma Drilling",
      description:
        "Monitoring bores, piezometers and groundwater well installation services across NSW.",
    },
    sections: groundwaterWellInstallationSections,
  },
];