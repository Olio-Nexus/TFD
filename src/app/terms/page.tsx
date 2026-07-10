import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import TableOfContents, {
  type TocItem,
} from "@/components/legal/TableOfContents";
import { renderParagraph, slugify } from "@/components/legal/legalText";

export const metadata: Metadata = {
  title: "Terms & Conditions | TerraForma Drilling",
  description:
    "Terms and Conditions of Use for the TerraForma Drilling Pty Ltd website.",
};

const LAST_UPDATED = "July 10, 2025";

type Section = {
  heading: string;
  paragraphs: string[];
};

const sections: Section[] = [
  {
    heading: "Introduction",
    paragraphs: [
      "By using the TerraForma Drilling site, you signify your agreement to these Terms and Conditions of Use. If you do not agree to these Terms and Conditions of Use, you may elect not to use the TerraForma Drilling site.",
    ],
  },
  {
    heading: "About the Site",
    paragraphs: [
      "TerraForma Drilling is a specialist geotechnical drilling contractor based in Sydney, NSW. The site contains information about TerraForma Drilling and its services. It also contains a page on which you can submit enquiries and apply for positions at TerraForma Drilling. TerraForma Drilling will manage any personal information we collect on this site according to our Privacy Policy.",
    ],
  },
  {
    heading: "Intellectual Property",
    paragraphs: [
      "All text and other materials found within this site are the property of TerraForma Drilling Pty Ltd, its affiliates, or other parties who have licensed material to TerraForma Drilling. All text and other materials found within this site are protected by copyrights and other proprietary intellectual property rights that are owned or controlled by TerraForma Drilling or by other parties that have licensed their rights to TerraForma Drilling. You may not modify or make any commercial use of any material on this site. You may make copies of the materials on this site for your own use as long as you keep intact any copyright and other proprietary notices on the materials, and you may not modify the materials in any way.",
    ],
  },
  {
    heading: "Trademarks",
    paragraphs: [
      "“TerraForma Drilling” is the trademark of TerraForma Drilling Pty Ltd. All other trademarks, service marks and logos used on this site, with or without attribution, are the trademarks, service marks or logos of their respective owners (including affiliates). You may not use the materials on this site in any way that suggests that you are associated with TerraForma Drilling or its licensors.",
    ],
  },
  {
    heading: "Linking to Other Sites and Transactions on Other Sites",
    paragraphs: [
      "This site contains links to third-party websites, and those websites may offer products and/or services for sale. Other than the sites of TerraForma Drilling's affiliates and our employment enquiry page, TerraForma Drilling does not author, edit, or monitor these other sites. You acknowledge and agree that TerraForma Drilling has no responsibility for the protection of personal information on other sites, for the accuracy or availability of information provided on other sites, that TerraForma Drilling does not control or endorse the content, products, advertising, or other materials presented on these other sites, and that you release TerraForma Drilling and its affiliates from any claims arising out of or in any way connected with any dispute you may have with another site.",
    ],
  },
  {
    heading: "User Conduct",
    paragraphs: [
      "You agree that you will comply with all of these Terms and Conditions of Use and that you will not use TerraForma Drilling's or its affiliates' names, URLs, trademarks, server, or other materials in connection with, or to transmit, any unsolicited communications or “spam.”",
      "In addition, you may not transmit to TerraForma Drilling in any way any communications, text, graphics or other information that: (a) is fraudulent, or that defames; (b) contains any viruses, Trojan horses, worms, time bombs, cancelbots, or other disabling devices or other harmful components intended to or that may damage, detrimentally interfere with, surreptitiously intercept, or expropriate any system, data, or personal information; (c) advocates or encourages any illegal activity; (d) infringes on the copyright, patent, trademark, trade secret, right of publicity, or other intellectual property or proprietary right of any third party; (e) violates the privacy of individuals, including, but not limited to, other users of this site; or (f) violates any applicable local, state, national or international law.",
    ],
  },
  {
    heading: "No Warranties",
    paragraphs: [
      "THIS SITE AND ANY CONTENT OR INFORMATION CONTAINED WITHIN THE SITE ARE FOR GENERAL INFORMATION ONLY AND ARE PROVIDED “AS IS” WITH NO REPRESENTATIONS OR WARRANTIES OF ANY KIND.",
      "IN ADDITION, TERRAFORMA DRILLING DOES NOT WARRANT THAT THE FUNCTIONS ON THE SITE WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS IN OR ON THE SITE WILL BE CORRECTED, OR THAT THE SITE OR THE SERVER THAT MAKES THE SITE AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. YOU (AND NOT TERRAFORMA DRILLING) ASSUME THE ENTIRE RISK OF ANY RELIANCE ON THESE MATERIALS.",
      "Under no circumstances will TerraForma Drilling be liable in any way for any content, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of any content posted, emailed or otherwise transmitted via this site.",
    ],
  },
  {
    heading: "Limitation of Liability",
    paragraphs: [
      "UNDER NO CIRCUMSTANCES SHALL TERRAFORMA DRILLING, ITS AFFILIATES OR ITS SUBSIDIARIES, OR THE RESPECTIVE OFFICERS, DIRECTORS, AGENTS, EMPLOYEES, SPONSORS, AND OTHER PARTNERS OF EACH BE RESPONSIBLE OR LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY, PUNITIVE OR OTHER DAMAGES ARISING OUT OF OR RELATING IN ANY WAY TO THE SITE, THE SERVICES AVAILABLE ON THE SITE OR INFORMATION CONTAINED WITHIN THE SITE, EVEN IF IT HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. FURTHER, TERRAFORMA DRILLING'S ENTIRE LIABILITY UNDER THESE TERMS AND CONDITIONS OF USE SHALL BE LIMITED TO THE AMOUNT PAID FOR USE OF THE SITE, IF ANY. YOUR SOLE REMEDY FOR DISSATISFACTION WITH THIS SITE AND/OR SITE-RELATED SERVICES IS TO STOP USING THE SITE AND/OR THOSE SERVICES.",
    ],
  },
  {
    heading: "Indemnity",
    paragraphs: [
      "If you violate any of these Terms and Conditions of Use or if you misuse this website, you agree to defend, indemnify and hold harmless TerraForma Drilling, its officers, directors, employees, agents and licensees from any and all liability including costs, expenses and legal fees that arise out of or are related to your violation or misuse.",
    ],
  },
  {
    heading: "Termination of Use of Site",
    paragraphs: [
      "TerraForma Drilling may, in its sole discretion and in addition to any other remedies available to TerraForma Drilling, with or without cause, withdraw, suspend or discontinue at any time any materials or services available on this site, your username and password, and any functionality or features in or on this site, with or without notice.",
    ],
  },
  {
    heading: "Modifications",
    paragraphs: [
      "TerraForma Drilling reserves the right to change or modify the Terms and Conditions of Use at any time. Any questions regarding the Terms and Conditions of Use should be sent to sales@tfdrilling.com.au. The Terms and Conditions of Use shall not be modified except in writing, as posted on this site by TerraForma Drilling. Any change or modification made by TerraForma Drilling will be effective immediately upon posting on this site and your continued use of this site means that you have agreed to accept any changes or modifications made by TerraForma Drilling.",
    ],
  },
];

const tocItems: TocItem[] = sections.map((section) => ({
  id: slugify(section.heading),
  heading: section.heading,
}));

export default function TermsPage() {
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

            <span className="text-white">Terms &amp; Conditions</span>
          </div>

          {/* Title */}
          <h1 className="max-w-[862px] text-left font-heading text-[36px] font-semibold leading-[40px] tracking-[-1px] text-white md:text-center md:text-[56px] md:leading-[64px] md:tracking-[-2px]">
            Terms &amp; <span className="text-[var(--accent)]">Conditions</span>
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
              <TableOfContents items={tocItems} ariaLabel="Terms sections" />
            </aside>

            {/* Content column */}
            <div className="max-w-[820px]">
              {sections.map((section) => (
                <div
                  key={section.heading}
                  id={slugify(section.heading)}
                  className="mb-10 scroll-mt-[110px] last:mb-0"
                >
                  <h2 className="mb-3 font-heading text-[20px] font-semibold leading-[28px] tracking-[-0.5px] text-[#1A1917] lg:text-[24px] lg:leading-[32px]">
                    {section.heading}
                  </h2>

                  {section.paragraphs.map((paragraph, i) => (
                    <p
                      key={i}
                      className="mb-4 text-[15px] leading-[26px] text-[#5D5851] last:mb-0 lg:text-[16px] lg:leading-[28px]"
                    >
                      {renderParagraph(paragraph)}
                    </p>
                  ))}
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
