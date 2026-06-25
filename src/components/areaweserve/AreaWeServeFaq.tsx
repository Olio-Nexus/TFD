"use client";

import { useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [

  {
    question: "What industries does TerraForma Drilling support across NSW?",
    answer:
      "TerraForma Drilling supports commercial developments, geotechnical consultants, environmental consultants, government agencies, utilities, civil infrastructure projects, and mining and resource sector operations. We provide geotechnical drilling, environmental drilling, testing, and monitoring bore installation services across Sydney and regional New South Wales.",
  },
  {
    question: "What types of projects require geotechnical drilling and site investigations?",
    answer:
      "Geotechnical drilling is commonly required for commercial developments, infrastructure projects, environmental assessments, government works, utility upgrades, and mining operations. Site investigations help engineers and project teams understand subsurface conditions before design, construction, or environmental management decisions are made.",
  },
  {
    question: "How early should drilling be arranged during project planning?",
    answer:
      "Drilling is best planned as early as possible to avoid delays during design, approvals, or construction. Early site investigations provide the ground information needed for engineering assessments, environmental studies, risk management, and more informed project decision making.",
  },
];

export default function AreaWeServeFaq() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  const toggleItem = (index: number) => {
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
            Common{" "}
            <span className="text-[#E53935]">
              Questions
            </span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="mt-4 md:mt-14">
          {visibleFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`
                  border-b border-[#D1D1D1]
                  ${index === 0 ? "border-t" : ""}
                `}
              >
                <button
                  onClick={() => toggleItem(index)}
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
                      md:h-[42px] md:w-[42px]
                      md:rounded-full
                      h-6 w-6 rounded-full
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

        {/* CTA */}
        {faqs.length > 5 && (
          <div className="mt-5 md:mt-14 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="
                h-11
                w-full
                md:w-auto
                border
                border-[#56554F]
                px-6
                font-mono
                text-[14px]
                font-medium
                uppercase
                tracking-[0.4px]
                text-[#1A1917]
                transition-colors
                hover:bg-[#1A1917]
                hover:text-white
              "
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}