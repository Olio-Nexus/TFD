import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import TableOfContents, {
  type TocItem,
} from "@/components/legal/TableOfContents";
import { renderParagraph, slugify } from "@/components/legal/legalText";

export const metadata: Metadata = {
  title: "Privacy Policy | TerraForma Drilling",
  description:
    "How TerraForma Drilling Pty Ltd collects, uses, and protects your personal information.",
};

const LAST_UPDATED = "July 10, 2025";

const LEAD =
  'TerraForma Drilling and its family of companies ("TerraForma Drilling," "we," or "us") recognise the importance of protecting the privacy of your information. This Privacy Policy governs the collection of your data received through your use or interaction with the website or other online service (collectively, the "Services") that links or refers to it. TerraForma Drilling will treat your personal information according to TerraForma Drilling\'s legal obligations.';

type DataGroup = {
  source: string;
  rows: { data: string; purpose: string }[];
};

type Block =
  | { type: "p"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "definitions"; items: { term: string; text: string }[] }
  | { type: "table"; groups: DataGroup[] };

type Section = {
  heading: string;
  blocks: Block[];
};

const RESPOND_PURPOSE =
  "Information is used to respond to website enquiries. Information is used to provide you with information, products or services that you request from us.";

const ANALYSE_PURPOSE =
  "Information is used to analyse how users use the Services and related analysis, research, reporting, and troubleshooting.";

const sections: Section[] = [
  {
    heading: "Information We Collect",
    blocks: [
      { type: "subheading", text: "Information You Provide Directly" },
      {
        type: "p",
        text: 'We collect information that you provide us directly, including when you contact us using a "Contact Us" form on the site, send us an e-mail, or enter a search query on the Services.',
      },
      { type: "subheading", text: "Information from Third Parties" },
      {
        type: "p",
        text: "We may receive additional information about you from other publicly and commercially available sources, as permitted by law.",
      },
      {
        type: "p",
        text: "We may combine all of the information we collect or receive about you and use or disclose it in the manner described in this Privacy Policy.",
      },
      {
        type: "p",
        text: "The following data categories are generally collected by TerraForma Drilling when you request information through our Contact Us page or otherwise use the site or our Services.",
      },
      { type: "subheading", text: "What Data We Collect" },
      {
        type: "table",
        groups: [
          {
            source: "Information You Provide",
            rows: [
              { data: "First and Last Name", purpose: RESPOND_PURPOSE },
              { data: "Contact Number", purpose: RESPOND_PURPOSE },
              {
                data: "Email Address",
                purpose:
                  "Information is used to transmit responses to your website enquiries. Information is used to transmit business insights and email marketing communications based on your preferences. Information is used to transmit email alerts, event registrations and other notices concerning our products or services, or events or news, that may be of interest to you based on your preferences.",
              },
              { data: "Company Name/Address", purpose: RESPOND_PURPOSE },
              { data: "Comments", purpose: RESPOND_PURPOSE },
            ],
          },
          {
            source: "Information Automatically Collected",
            rows: [
              {
                data: "Device Data",
                purpose:
                  "Information helps personalise content and ads, and to analyse website traffic. For example, we may collect your IP address, the type of web browser and operating system used to access the Services, the time and duration of your visits, and information about the content and webpages you view and the features you access on the Services.",
              },
              { data: "Website Browsing Data", purpose: ANALYSE_PURPOSE },
              { data: "Application Data", purpose: ANALYSE_PURPOSE },
            ],
          },
          {
            source: "Information from Third Parties",
            rows: [
              {
                data: "Business-Related Data Publicly or Commercially Available",
                purpose:
                  "TerraForma Drilling may reference publicly available sources and information on the Internet or through social networks as part of its due diligence in ensuring we provide you the most appropriate answer possible.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    heading: "Use of Your Information",
    blocks: [
      {
        type: "p",
        text: "We collect and use personal information to manage your relationship with TerraForma Drilling and better serve you when you are using the Services by personalising and improving your experience. We also may use such information to analyse how users use the Services and related analysis, research, reporting, and troubleshooting and as we believe is necessary or appropriate to protect, enforce, or defend legal rights, privacy, safety or property, whether our own or that of our employees or agents or others, and to comply with applicable law.",
      },
    ],
  },
  {
    heading: "Sharing Your Information",
    blocks: [
      {
        type: "p",
        text: "To the extent consistent with applicable law, we may share your information in the following circumstances:",
      },
      {
        type: "list",
        items: [
          "with our subsidiaries and affiliates;",
          "with affiliated and third-party service providers, such as companies that provide us technical support, data hosting, and other services;",
          "with other parties when required by law or as necessary to provide or protect our services, products, and other offerings.",
        ],
      },
    ],
  },
  {
    heading: "Cookies, Web Beacons, and Similar Technologies",
    blocks: [
      {
        type: "p",
        text: "The Services — as well as certain third parties that provide content and other functionality on the Services — use a variety of technologies to learn more about how people use the Services and the Internet. This section provides more information about some of those technologies and how they work.",
      },
      {
        type: "definitions",
        items: [
          {
            term: "Cookies",
            text: "Cookies are small text files used to store information about users on the users' own computer. Cookies may be used to recognise you as the same user across different visits to the website. Knowing how a user is using the Services through cookies enables us to tailor our content and Services to meet visitors' needs more effectively. It also enables us to improve the quality of your visit by making sure that the Services are properly formatted for your computer and web browser.",
          },
          {
            term: "Other local storage",
            text: 'Local Shared Objects (also referred to as "Flash cookies") and HTML5 local storage are similar to cookies in that they are stored on your computer and can be used to store certain information about your activities and preferences.',
          },
          {
            term: "Web beacons",
            text: "Web beacons can be embedded in web pages, videos, or emails, and can allow a web server to read certain types of information from your browser, check whether you have viewed a particular web page or email message, and determine, among other things, the time and date on which you viewed the Web beacon, the IP address of your computer, and the URL of the web page from which the Web beacon was viewed.",
          },
        ],
      },
    ],
  },
  {
    heading: "Protection of Information",
    blocks: [
      {
        type: "p",
        text: "TerraForma Drilling uses industry-standard security measures to protect the information under our control, including firewalls and other security measures. Although the inherent dangers of the Internet mean we cannot guarantee the protection of your information against loss, misuse, or alteration, TerraForma Drilling takes steps to protect your personal information.",
      },
    ],
  },
  {
    heading: "Changes to this Privacy Policy",
    blocks: [
      {
        type: "p",
        text: "Due to changes in technology, legal requirements, and our Services, we may revise this Privacy Policy from time to time. We will notify you of changes by posting changes here, or by other appropriate means. We suggest that you bookmark this page so that you may check periodically to see if any changes have been made.",
      },
    ],
  },
  {
    heading: "Do Not Track Signal",
    blocks: [
      {
        type: "p",
        text: 'Some web browsers may transmit "do-not-track" signals to the websites with which the user communicates. We do not currently take action in response to those signals. If an industry standard on responding to such signals is established and accepted, we may reassess how to respond to those signals.',
      },
    ],
  },
  {
    heading: "Questions and Contact Information",
    blocks: [
      {
        type: "p",
        text: "If you have any questions about this statement or our handling of personal information, please email sales@tfdrilling.com.au.",
      },
    ],
  },
];

const tocItems: TocItem[] = sections.map((section) => ({
  id: slugify(section.heading),
  heading: section.heading,
}));

/* ---------------- BLOCK RENDERERS ---------------- */

const subheadingClass =
  "mt-8 mb-3 font-heading text-[17px] font-semibold leading-[24px] text-[#1A1917] lg:text-[18px]";
const paragraphClass =
  "mb-4 text-[15px] leading-[26px] text-[#5D5851] last:mb-0 lg:text-[16px] lg:leading-[28px]";

function DataTable({ groups }: { groups: DataGroup[] }) {
  return (
    <div className="my-6 overflow-x-auto rounded-[8px] border border-[#d8d2ca]">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <thead>
          <tr className="bg-[#EAE3D8]">
            <th className="border-b border-[#d8d2ca] px-4 py-3 font-heading text-[13px] font-semibold uppercase tracking-[0.5px] text-[#1A1917]">
              Source
            </th>
            <th className="border-b border-l border-[#d8d2ca] px-4 py-3 font-heading text-[13px] font-semibold uppercase tracking-[0.5px] text-[#1A1917]">
              Personal Data
            </th>
            <th className="border-b border-l border-[#d8d2ca] px-4 py-3 font-heading text-[13px] font-semibold uppercase tracking-[0.5px] text-[#1A1917]">
              Purpose for Collection
            </th>
          </tr>
        </thead>

        <tbody>
          {groups.map((group) =>
            group.rows.map((row, rowIndex) => (
              <tr key={`${group.source}-${row.data}`} className="align-top">
                {rowIndex === 0 && (
                  <th
                    scope="rowgroup"
                    rowSpan={group.rows.length}
                    className="border-t border-[#d8d2ca] bg-[#F7F3EC] px-4 py-3 text-left align-top text-[14px] font-medium text-[#1A1917]"
                  >
                    {group.source}
                  </th>
                )}

                <td className="border-t border-l border-[#d8d2ca] px-4 py-3 text-[14px] font-medium text-[#1A1917]">
                  {row.data}
                </td>

                <td className="border-t border-l border-[#d8d2ca] px-4 py-3 text-[14px] leading-[22px] text-[#5D5851]">
                  {row.purpose}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

function renderBlock(block: Block, index: number) {
  switch (block.type) {
    case "subheading":
      return (
        <h3 key={index} className={subheadingClass}>
          {block.text}
        </h3>
      );

    case "p":
      return (
        <p key={index} className={paragraphClass}>
          {renderParagraph(block.text)}
        </p>
      );

    case "list":
      return (
        <ul key={index} className="mb-4 flex flex-col gap-2 pl-5">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="list-disc text-[15px] leading-[26px] text-[#5D5851] lg:text-[16px] lg:leading-[28px]"
            >
              {item}
            </li>
          ))}
        </ul>
      );

    case "definitions":
      return (
        <div key={index} className="mb-4 flex flex-col gap-4">
          {block.items.map((item, i) => (
            <p key={i} className={paragraphClass}>
              <span className="font-medium text-[#1A1917]">{item.term}</span>
              {" — "}
              {item.text}
            </p>
          ))}
        </div>
      );

    case "table":
      return <DataTable key={index} groups={block.groups} />;
  }
}

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#1A1917] py-12 pt-[72px] md:py-[160px]">
        <div className="pointer-events-none absolute right-[-250px] top-[-180px] hidden h-[900px] w-[900px] rounded-full bg-white opacity-[0.06] blur-[140px] lg:block" />

        <div className="relative z-10 mx-auto flex max-w-[862px] flex-col items-start px-5 md:items-center md:px-8">
          {/* Breadcrumb */}
          <div className="mb-8 flex w-full items-center gap-[10px] font-mono text-[12px] uppercase tracking-[1px] text-white/70 md:justify-center md:text-[14px] md:tracking-[1.4px]">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>

            <ChevronRight size={12} className="text-white/70" />

            <span className="text-white">Privacy Policy</span>
          </div>

          {/* Title */}
          <h1 className="max-w-[862px] text-left font-heading text-[36px] font-semibold leading-[40px] tracking-[-1px] text-white md:text-center md:text-[56px] md:leading-[64px] md:tracking-[-2px]">
            Privacy <span className="text-[var(--accent)]">Policy</span>
          </h1>

          <p className="mt-4 text-left text-[15px] leading-[24px] text-[#B8B8B8] md:text-center">
            TerraForma Drilling Pty Ltd &middot; Last Updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="bg-[#F3EFE8] py-12 lg:py-24">
        <div className="container-custom">
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-16 xl:gap-20">
            {/* Sidebar — desktop only */}
            <aside className="hidden lg:block">
              <TableOfContents items={tocItems} ariaLabel="Privacy sections" />
            </aside>

            {/* Content column */}
            <div className="max-w-[820px]">
              {/* Lead */}
              <p className="mb-10 text-[16px] leading-[28px] text-[#5D5851] lg:text-[17px] lg:leading-[30px]">
                {LEAD}
              </p>

              {sections.map((section) => (
                <div
                  key={section.heading}
                  id={slugify(section.heading)}
                  className="mb-10 scroll-mt-[110px] last:mb-0"
                >
                  <h2 className="mb-3 font-heading text-[20px] font-semibold leading-[28px] tracking-[-0.5px] text-[#1A1917] lg:text-[24px] lg:leading-[32px]">
                    {section.heading}
                  </h2>

                  {section.blocks.map((block, i) => renderBlock(block, i))}
                </div>
              ))}

              {/* Footer note */}
              <div className="mt-12 border-t border-[#d8d2ca] pt-6 text-[14px] leading-[24px] text-[#5D5851]">
                <p>
                  &copy; 2026 TerraForma Drilling Pty Ltd. All rights reserved.{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-[#1A1917] underline underline-offset-2 transition-colors hover:text-[var(--accent)]"
                  >
                    Privacy Policy
                  </Link>{" "}
                  |{" "}
                  <Link
                    href="/terms"
                    className="text-[#1A1917] underline underline-offset-2 transition-colors hover:text-[var(--accent)]"
                  >
                    Terms &amp; Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
