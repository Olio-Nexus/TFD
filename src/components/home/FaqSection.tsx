"use client";

import { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "Where is TerraForma Drilling based, and where do they operate?",
    answer:
      "TerraForma Drilling is a geotechnical drilling contractor based in Sydney, NSW. We work across Greater Sydney and regional NSW, including Newcastle, Wollongong, the Central West, New England, the Riverina, the North Coast, and the Southern Tablelands. We do not currently operate outside New South Wales.",
  },
  {
    question: "How quickly can TerraForma Drilling mobilise to the site?",
    answer:
      "We can be on site in Greater Sydney within 24 hours after your booking is confirmed. For regional NSW, we’ll confirm the mobilisation window when we provide your quote and schedule it to fit your investigation program.",
  },
  {
    question: "Is TerraForma Drilling ISO certified?",
    answer:
      "Yes, TerraForma Drilling holds three active ISO certifications, all issued by TQCSI International: ISO 9001:2015 — Quality Management Systems, ISO 14001:2015 — Environmental Management Systems, and ISO 45001:2018 — Occupational Health and Safety Management Systems.",
  },
  {
    question:
      "Does TerraForma Drilling work directly with geotechnical and environmental consultants?",
    answer:
      "Yes, consulting firms are our main clients. We work as the drilling subcontractor, following your bore plan and investigation program. We do not compete with consultants for reporting, interpretation, or client relationships. When each job is finished, we hand the field data directly to your nominated contact.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col gap-4 md:gap-5">
          <div className="flex items-center gap-3 md:gap-4">
            <span className="h-px w-3 md:w-5 bg-[#E53935]" />

            <span className="font-mono text-[12px] md:text-[14px] font-medium uppercase tracking-[1.4px] text-[#E53935]">
              FAQs
            </span>
          </div>

          <h2 className="font-heading text-[24px] leading-[30px] tracking-[-1px] font-semibold text-[#1A1917] md:text-[48px] md:leading-[56px] md:tracking-[-2px]">
            Common <span className="text-[#E53935]">Questions</span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="mt-4 md:mt-14">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={`${faq.question}-${index}`}
                className={`border-b border-[#D1D1D1] ${
                  index === 0 ? "border-t" : ""
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="
                    flex w-full items-start justify-between
                    gap-3 py-4 md:py-8
                    text-left
                  "
                >
                  <span
                    className="
                      flex-1
                      font-heading
                      font-semibold
                      text-[#1A1917]
                      text-[18px]
                      leading-[24px]
                      tracking-[-0.1px]
                      md:text-[20px]
                      md:leading-[28px]
                      md:tracking-[0.6px]
                    "
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`
                      flex shrink-0 items-center justify-center
                      transition-all duration-300
                      h-6 w-6 rounded-full
                      md:h-[42px] md:w-[42px]
                      md:rounded-full
                      ${
                        isOpen
                          ? "bg-[#E53935] border border-[#E53935]"
                          : "border border-[rgba(26,25,23,0.2)] md:border-[rgba(86,85,79,0.8)]"
                      }
                    `}
                  >
                    {isOpen ? (
                      <ArrowUp
                        className="h-3.5 w-3.5 md:h-5 md:w-5 text-white"
                        strokeWidth={2}
                      />
                    ) : (
                      <ArrowDown
                        className="h-3.5 w-3.5 md:h-5 md:w-5 text-[#5F5E5D]"
                        strokeWidth={2}
                      />
                    )}
                  </span>
                </button>

                <div
                  className={`
                    overflow-hidden transition-all duration-300
                    ${
                      isOpen
                        ? "max-h-[500px] opacity-100 pb-4 md:pb-8"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <p
                    className="
                      max-w-[974px]
                      font-body
                      whitespace-pre-line
                      text-[#56554F]
                      text-[16px]
                      leading-[26px]
                    "
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
