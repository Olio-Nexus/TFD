// AUTO-GENERATED from "Terraforma Drilling SEO - Metas & Schemas.csv".
// Holds per-page meta + JSON-LD (page-specific & FAQ) for industry pages.
// The sitewide Organization schema is injected separately via lib/seo.
import type { JsonLdSchema } from "@/lib/seo";

export interface IndustrySeo {
  title: string;
  description: string;
  schema: JsonLdSchema;
  faqSchema?: JsonLdSchema;
}

export const industriesHubSeo: IndustrySeo = {
  "title": "Industries We Serve | TerraForma Drilling",
  "description": "Select your industry below to find out how TerraForma Drilling supports your investigation programmes.",
  "schema": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://tfdrilling.com.au/industries",
    "name": "Industries We Serve | TerraForma Drilling",
    "url": "https://tfdrilling.com.au/industries",
    "description": "Select your industry below to find out how TerraForma Drilling supports your investigation programmes.",
    "isPartOf": {
      "@id": "https://tfdrilling.com.au/#website"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://tfdrilling.com.au"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Industries",
          "item": "https://tfdrilling.com.au/industries"
        }
      ]
    }
  },
  "faqSchema": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What industries does TerraForma Drilling support across NSW?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TerraForma Drilling supports commercial developments, geotechnical consultants, environmental consultants, government agencies, utilities, civil infrastructure projects, and mining and resource sector operations. Geotechnical drilling, environmental drilling, testing, and monitoring bore installation services are provided across Sydney and regional NSW."
        }
      },
      {
        "@type": "Question",
        "name": "What types of projects require geotechnical drilling and site investigations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Geotechnical drilling is commonly required for commercial developments, infrastructure projects, environmental assessments, government works, utility upgrades, and mining operations. Site investigations provide the ground information engineers need for design, construction, and environmental management."
        }
      },
      {
        "@type": "Question",
        "name": "How early should drilling be arranged during project planning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Drilling is best planned as early as possible to avoid delays during design, approvals, or construction. Early site investigations provide ground information needed for engineering assessments, environmental studies, and informed project decision making."
        }
      }
    ]
  }
};

export const industrySeo: Record<string, IndustrySeo> = {
  "commercial": {
    "title": "Commercial Geotechnical Drilling Subcontractor Sydney & NSW | TerraForma Drilling",
    "description": "TerraForma Drilling provides commercial geotechnical drilling and site investigation services for developers and builders across Greater Sydney and NSW. Tight-access ute-mounted rig. ISO certified. Same-day quote.",
    "schema": {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://tfdrilling.com.au/industries/commercial",
      "name": "Commercial Geotechnical Drilling Subcontractor",
      "url": "https://tfdrilling.com.au/industries/commercial",
      "description": "TerraForma Drilling provides commercial geotechnical drilling and site investigation services for developers and builders across Greater Sydney and NSW. Tight-access ute-mounted rig. ISO certified.",
      "provider": {
        "@id": "https://tfdrilling.com.au/#organization"
      },
      "serviceType": "Commercial Site Investigation Drilling",
      "audience": {
        "@type": "Audience",
        "audienceType": "Commercial Developers and Builders"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Sydney",
          "containsPlace": [
            {
              "@type": "City",
              "name": "Parramatta"
            },
            {
              "@type": "City",
              "name": "Blacktown"
            },
            {
              "@type": "City",
              "name": "Penrith"
            },
            {
              "@type": "City",
              "name": "Liverpool"
            },
            {
              "@type": "City",
              "name": "Chatswood"
            }
          ]
        },
        {
          "@type": "State",
          "name": "New South Wales",
          "containsPlace": [
            {
              "@type": "City",
              "name": "Newcastle"
            },
            {
              "@type": "City",
              "name": "Wollongong"
            },
            {
              "@type": "City",
              "name": "Dubbo"
            },
            {
              "@type": "City",
              "name": "Wagga Wagga"
            }
          ]
        }
      ],
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://tfdrilling.com.au/contact",
        "servicePhone": "+61272398878"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://tfdrilling.com.au"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Industries",
            "item": "https://tfdrilling.com.au/industries"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Commercial",
            "item": "https://tfdrilling.com.au/industries/commercial"
          }
        ]
      }
    },
    "faqSchema": {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does TerraForma provide geotechnical drilling for commercial developments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. TerraForma provides commercial geotechnical drilling for warehouses, retail centres, office buildings, industrial facilities, and mixed-use developments across Sydney and NSW, including drilling, sampling, in-situ testing, and field support."
          }
        },
        {
          "@type": "Question",
          "name": "Can TerraForma complete drilling on restricted commercial sites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The ute-mounted SFA rig is designed for tight-access commercial sites including existing facilities, urban developments, and locations where conventional rigs have limited access or would cause unnecessary disruption."
          }
        },
        {
          "@type": "Question",
          "name": "What services are included in commercial site investigation drilling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Commercial site investigation drilling may include Solid Flight Auger drilling, Standard Penetration Testing (SPT), Dynamic Cone Penetrometer (DCP) testing, soil sampling, environmental drilling, and monitoring bore installation depending on project requirements."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can TerraForma mobilise for commercial site investigations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For many Greater Sydney projects, TerraForma can mobilise within 24 hours of confirmation. Regional NSW mobilisation timeframes are confirmed during quoting based on project location, access conditions, and investigation programme requirements."
          }
        }
      ]
    }
  },
  "geotechnical-consultants": {
    "title": "Geotechnical Consultants Drilling Subcontractor Sydney & NSW | TerraForma Drilling",
    "description": "TerraForma Drilling is the drilling subcontractor geotechnical consultants across Sydney and NSW rely on. We follow your bore plan, deliver clean field data, and stay out of your client relationship. SPT testing, auger drilling, Groundwater well installation. Same-day quote.",
    "schema": {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://tfdrilling.com.au/industries/geotechnical-consultants",
      "name": " Drilling Subcontractor for Geotechnical Consultants",
      "url": "https://tfdrilling.com.au/industries/geotechnical-consultants",
      "description": "TerraForma Drilling is the drilling subcontractor geotechnical consultants across Sydney and NSW rely on. Following your bore plan, delivering clean field data, staying out of your client relationship.",
      "provider": {
        "@id": "https://tfdrilling.com.au/#organization"
      },
      "serviceType": "Drilling Subcontractor Services",
      "audience": {
        "@type": "Audience",
        "audienceType": "Geotechnical Consultants"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Sydney",
          "containsPlace": [
            {
              "@type": "City",
              "name": "Parramatta"
            },
            {
              "@type": "City",
              "name": "Blacktown"
            },
            {
              "@type": "City",
              "name": "Marrickville"
            },
            {
              "@type": "City",
              "name": "Chatswood"
            },
            {
              "@type": "City",
              "name": "Randwick"
            }
          ]
        },
        {
          "@type": "State",
          "name": "New South Wales",
          "containsPlace": [
            {
              "@type": "City",
              "name": "Newcastle"
            },
            {
              "@type": "City",
              "name": "Wollongong"
            },
            {
              "@type": "City",
              "name": "Dubbo"
            },
            {
              "@type": "City",
              "name": "Wagga Wagga"
            }
          ]
        }
      ],
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://tfdrilling.com.au/contact",
        "servicePhone": "+61272398878"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://tfdrilling.com.au"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Industries",
            "item": "https://tfdrilling.com.au/industries"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Geotechnical Consultants",
            "item": "https://tfdrilling.com.au/industries/geotechnical-consultants"
          }
        ]
      }
    },
    "faqSchema": {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does TerraForma Drilling provide geotechnical reports or engineering recommendations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. TerraForma Drilling only acts as a geotechnical drilling subcontractor. Drilling, sampling, and testing are handled and field information is handed directly to the commissioning consultant for interpretation and reporting. TerraForma does not produce geotechnical reports and does not contact the end client directly."
          }
        },
        {
          "@type": "Question",
          "name": "Can TerraForma follow consultant-specific bore plans and investigation programmes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. TerraForma follows the bore plan, specified depths, testing intervals, and project requirements. The job is to deliver accurate fieldwork while the consultancy handles engineering interpretation and client communication."
          }
        },
        {
          "@type": "Question",
          "name": "What bore log format does TerraForma Drilling use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "TerraForma Drilling delivers field bore logs in PDF format on completion of each field programme. The bore log format is available for review prior to first engagement — contact sales@tfdrilling.com.au to request a sample log before committing to the first programme."
          }
        },
        {
          "@type": "Question",
          "name": "Does TerraForma complete a DBYD enquiry before mobilising?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A Dial Before You Dig enquiry is completed for every job site before any mobilisation without exception. This is a non-negotiable part of TerraForma Drilling's pre-mobilisation process on every programme regardless of project type or size."
          }
        },
        {
          "@type": "Question",
          "name": "Can TerraForma Drilling be added to a consulting firm's preferred subcontractor list?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. TerraForma Drilling holds ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certifications via TQCSI International, maintains current WHS documentation, and can provide SWMS, calibration records, and full service records for pre-qualification submissions."
          }
        }
      ]
    }
  },
  "environmental-consultant": {
    "title": "Drilling Subcontractor for Environmental Consultants Sydney & NSW | TerraForma Drilling",
    "description": "TerraForma Drilling is the environmental drilling subcontractor supporting environmental consultants across Sydney and NSW. Phase 2 DSI , contaminated land, groundwater investigations. We drill to your specs. Same-day quote.",
    "schema": {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://tfdrilling.com.au/industries/environmental-consultant",
      "name": "Drilling Subcontractor for Environmental Consultants",
      "url": "https://tfdrilling.com.au/industries/environmental-consultant",
      "description": "TerraForma Drilling is the environmental drilling subcontractor supporting environmental consultants across Sydney and NSW with Phase 2 ESA, contaminated land, and groundwater investigations. We drill to your specs — sampling, chain of custody, and reporting remain with your team.",
      "provider": {
        "@id": "https://tfdrilling.com.au/#organization"
      },
      "serviceType": "Environmental Drilling Subcontractor Services",
      "audience": {
        "@type": "Audience",
        "audienceType": "Environmental Consultants"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Sydney",
          "containsPlace": [
            {
              "@type": "City",
              "name": "Marrickville"
            },
            {
              "@type": "City",
              "name": "Botany"
            },
            {
              "@type": "City",
              "name": "Alexandria"
            },
            {
              "@type": "City",
              "name": "Silverwater"
            },
            {
              "@type": "City",
              "name": "Wetherill Park"
            }
          ]
        },
        {
          "@type": "State",
          "name": "New South Wales",
          "containsPlace": [
            {
              "@type": "City",
              "name": "Newcastle"
            },
            {
              "@type": "City",
              "name": "Wollongong"
            },
            {
              "@type": "City",
              "name": "Coffs Harbour"
            },
            {
              "@type": "City",
              "name": "Wagga Wagga"
            }
          ]
        }
      ],
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://tfdrilling.com.au/contact",
        "servicePhone": "+61272398878"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://tfdrilling.com.au"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Industries",
            "item": "https://tfdrilling.com.au/industries"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Environmental Consultants",
            "item": "https://tfdrilling.com.au/industries/environmental-consultant"
          }
        ]
      }
    },
    "faqSchema": {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does TerraForma provide environmental reports or contamination assessments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. TerraForma acts solely as an environmental drilling subcontractor. Drilling and field support activities are completed while environmental consultants remain responsible for sampling interpretation, contamination assessment, reporting, and recommendations."
          }
        },
        {
          "@type": "Question",
          "name": "Can TerraForma follow a Phase 2 DSI drilling programme?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Phase 2 DSI drilling is completed according to the investigation plan, required bore locations, depths, and environmental field requirements provided by the commissioning consultant."
          }
        },
        {
          "@type": "Question",
          "name": "Does TerraForma handle chain of custody for environmental investigations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Sampling protocols, chain of custody, laboratory coordination, interpretation, and reporting remain with the appointed environmental consultant. TerraForma provides the borehole only. Equipment is decontaminated between boreholes in accordance with site investigation requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Can TerraForma complete environmental drilling on tight-access sites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The ute-mounted drilling platform allows environmental drilling on constrained urban sites, operating industrial facilities, and locations where larger conventional rigs have access limitations."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can TerraForma mobilise for environmental investigations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For many Greater Sydney projects, TerraForma can mobilise within 24 hours. Regional NSW mobilisation schedules are confirmed based on project location, access requirements, and investigation programmes."
          }
        }
      ]
    }
  },
  "government-bodies-utilities": {
    "title": "Government & Utilities Drilling Subcontractor — Sydney & NSW | TerraForma Drilling",
    "description": "TerraForma Drilling supports government bodies and utility providers with geotechnical drilling, SPT testing, and environmental field services across Greater Sydney and regional NSW. Tier 1 ready. ISO certified. Same-day quote.",
    "schema": {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://tfdrilling.com.au/industries/government-bodies-utilities",
      "name": "Government and Utilities Drilling Subcontractor",
      "url": "https://tfdrilling.com.au/industries/government-bodies-utilities",
      "description": "TerraForma Drilling supports government bodies and utility providers with geotechnical drilling, SPT testing, and environmental field services across Greater Sydney and regional NSW. DBYD compliant. Tier 1 ready. ISO certified.",
      "provider": {
        "@id": "https://tfdrilling.com.au/#organization"
      },
      "serviceType": "Government Infrastructure Drilling",
      "audience": {
        "@type": "Audience",
        "audienceType": "Government Bodies and Utility Providers"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Sydney",
          "containsPlace": [
            {
              "@type": "City",
              "name": "Parramatta"
            },
            {
              "@type": "City",
              "name": "Penrith"
            },
            {
              "@type": "City",
              "name": "Liverpool"
            },
            {
              "@type": "City",
              "name": "Ryde"
            },
            {
              "@type": "City",
              "name": "Hurstville"
            }
          ]
        },
        {
          "@type": "State",
          "name": "New South Wales",
          "containsPlace": [
            {
              "@type": "City",
              "name": "Newcastle"
            },
            {
              "@type": "City",
              "name": "Wollongong"
            },
            {
              "@type": "City",
              "name": "Dubbo"
            },
            {
              "@type": "City",
              "name": "Wagga Wagga"
            }
          ]
        }
      ],
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://tfdrilling.com.au/contact",
        "servicePhone": "+61272398878"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://tfdrilling.com.au"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Industries",
            "item": "https://tfdrilling.com.au/industries"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Government and Utilities",
            "item": "https://tfdrilling.com.au/industries/government-bodies-utilities"
          }
        ]
      }
    },
    "faqSchema": {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does TerraForma work with government organisations and local councils?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. TerraForma supports councils, government agencies, and public infrastructure teams across NSW, delivering drilling, sampling, and testing services according to project specifications, safety requirements, and approved investigation programmes."
          }
        },
        {
          "@type": "Question",
          "name": "Can TerraForma meet government contractor compliance requirements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. TerraForma maintains ISO-certified management systems, documented maintenance records, SWMS, WHS documentation, and safety procedures needed for government and infrastructure contractor pre-qualification."
          }
        },
        {
          "@type": "Question",
          "name": "Can TerraForma complete drilling in active roads, public spaces, and utility corridors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The compact ute-mounted drilling platform is designed for constrained environments such as roadsides, public infrastructure areas, and utility easements where larger drilling rigs create access or operational challenges."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can TerraForma mobilise for government infrastructure projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For many Greater Sydney projects, TerraForma can mobilise within 24 hours after confirmation. Regional NSW mobilisation is scheduled based on location, site requirements, and investigation programme needs."
          }
        }
      ]
    }
  },
  "civil-infrastructure": {
    "title": "Civil & Infrastructure Drilling Subcontractor — Sydney & NSW | TerraForma Drilling",
    "description": "TerraForma Drilling provides geotechnical drilling and site investigation services for civil contractors and infrastructure teams across Greater Sydney and regional NSW. Tier 1 ready. ISO certified. 24-hour mobilisation.",
    "schema": {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://tfdrilling.com.au/industries/civil-infrastructure",
      "name": "Civil and Infrastructure Drilling Subcontractor",
      "url": "https://tfdrilling.com.au/industries/civil-infrastructure",
      "description": "TerraForma Drilling provides geotechnical drilling and site investigation services for civil contractors and infrastructure teams across Greater Sydney and regional NSW. Tier 1 ready. ISO certified. 24-hour mobilisation.",
      "provider": {
        "@id": "https://tfdrilling.com.au/#organization"
      },
      "serviceType": "Civil Infrastructure Drilling",
      "audience": {
        "@type": "Audience",
        "audienceType": "Civil Contractors and Infrastructure Teams"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Sydney",
          "containsPlace": [
            {
              "@type": "City",
              "name": "Parramatta"
            },
            {
              "@type": "City",
              "name": "Penrith"
            },
            {
              "@type": "City",
              "name": "Liverpool"
            },
            {
              "@type": "City",
              "name": "Blacktown"
            },
            {
              "@type": "City",
              "name": "Bankstown"
            }
          ]
        },
        {
          "@type": "State",
          "name": "New South Wales",
          "containsPlace": [
            {
              "@type": "City",
              "name": "Newcastle"
            },
            {
              "@type": "City",
              "name": "Wollongong"
            },
            {
              "@type": "City",
              "name": "Dubbo"
            },
            {
              "@type": "City",
              "name": "Wagga Wagga"
            }
          ]
        }
      ],
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://tfdrilling.com.au/contact",
        "servicePhone": "+61272398878"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://tfdrilling.com.au"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Industries",
            "item": "https://tfdrilling.com.au/industries"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Civil and Infrastructure",
            "item": "https://tfdrilling.com.au/industries/civil-infrastructure"
          }
        ]
      }
    },
    "faqSchema": {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can TerraForma support drilling on active civil construction sites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. TerraForma works on active construction sites, infrastructure corridors, and staged developments. The compact drilling platform, documented safety systems, and field approach allow efficient operation within controlled construction environments."
          }
        },
        {
          "@type": "Question",
          "name": "Does TerraForma provide drilling for road, rail, and infrastructure projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Geotechnical drilling is provided for infrastructure projects including road upgrades, rail corridors, bridges, utility works, and other civil construction programmes across Sydney and NSW."
          }
        },
        {
          "@type": "Question",
          "name": "Can TerraForma complete drilling in restricted-access infrastructure locations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The ute-mounted SFA rig is designed for tight-access environments including roadsides, confined urban sites, utility corridors, and locations where larger drilling equipment is impractical."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can TerraForma mobilise for infrastructure projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For many Greater Sydney projects, TerraForma can mobilise within 24 hours of confirmation. Regional NSW mobilisation is scheduled according to project location, access requirements, and the investigation programme."
          }
        }
      ]
    }
  },
  "mining-resources": {
    "title": "Mining Geotechnical Drilling Subcontractor — Regional NSW | TerraForma Drilling",
    "description": "TerraForma Drilling supports mining companies and resource operators with preliminary geotechnical and environmental site investigations across regional NSW — Hunter Valley, Mudgee, Dubbo, and beyond. ISO certified.",
    "schema": {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://tfdrilling.com.au/industries/mining-resources",
      "name": "Mining Geotechnical Drilling Subcontractor",
      "url": "https://tfdrilling.com.au/industries/mining-resources",
      "description": "TerraForma Drilling supports mining companies and resource operators with preliminary geotechnical and environmental site investigations across regional NSW — Hunter Valley, Mudgee, Dubbo, and beyond. ISO certified.",
      "provider": {
        "@id": "https://tfdrilling.com.au/#organization"
      },
      "serviceType": "Mining Geotechnical Drilling",
      "audience": {
        "@type": "Audience",
        "audienceType": "Mining Companies and Resource Operators"
      },
      "areaServed": {
        "@type": "State",
        "name": "New South Wales",
        "containsPlace": [
          {
            "@type": "AdministrativeArea",
            "name": "Hunter Valley"
          },
          {
            "@type": "City",
            "name": "Mudgee"
          },
          {
            "@type": "City",
            "name": "Dubbo"
          },
          {
            "@type": "City",
            "name": "Cobar"
          },
          {
            "@type": "City",
            "name": "Broken Hill"
          }
        ]
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://tfdrilling.com.au/contact",
        "servicePhone": "+61272398878"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://tfdrilling.com.au"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Industries",
            "item": "https://tfdrilling.com.au/industries"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Mining and Resources",
            "item": "https://tfdrilling.com.au/industries/mining-resources"
          }
        ]
      }
    },
    "faqSchema": {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does TerraForma provide mining exploration drilling across NSW?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "TerraForma supports mining and resource projects with preliminary geotechnical investigations, environmental drilling, testing, and site assessments across regional NSW. Services focus on early-stage investigations supporting resource development programmes."
          }
        },
        {
          "@type": "Question",
          "name": "Can TerraForma mobilise to regional mining locations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. TerraForma supports regional NSW mining and resource projects across the Hunter Valley, Mudgee, Dubbo, Cobar, and surrounding corridors with responsive mobilisation and practical field delivery for single-site and multi-location investigation programmes."
          }
        },
        {
          "@type": "Question",
          "name": "Can TerraForma support environmental investigations for mining projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Environmental drilling, groundwater monitoring bore installation, and field support are provided for environmental assessments, compliance investigations, and long-term site management programmes associated with resource sector projects."
          }
        }
      ]
    }
  }
};
