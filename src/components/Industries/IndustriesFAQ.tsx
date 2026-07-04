"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

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
    question:
      "What types of projects require geotechnical drilling and site investigations?",
    answer:
      "Geotechnical drilling is commonly required for commercial developments, infrastructure projects, environmental assessments, government works, utility upgrades, and mining operations. Site investigations help engineers and project teams understand subsurface conditions before design, construction, or environmental management decisions are made.",
  },
  {
    question: "How early should drilling be arranged during project planning?",
    answer:
      "Drilling is best planned as early as possible to avoid delays during design, approvals, or construction. Early site investigations provide the ground information needed for engineering assessments, environmental studies, risk management, and more informed project decision making.",
  },
];

export default function IndustriesFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-white">
      <div className="container-custom py-[80px] md:py-[100px]">
        {/* Eyebrow */}
        <div className="mb-8 flex items-center gap-[10px]">
          <div className="h-[1px] w-[20px] bg-[#E53935]" />

          <span className="font-mono text-[12px] font-medium uppercase tracking-[1.4px] text-[#E53935] md:text-[14px]">
            FAQs
          </span>
        </div>

        {/* Heading */}

        <h2
          className="
            font-heading
            font-semibold
            tracking-[-1px]
            text-[#1A1917]
            text-[24px]
            leading-[30px]
            md:text-[64px]
            md:leading-[76px]
          "
        >
          Common{" "}
          <span className="text-[#E53935]">
            Questions
          </span>
        </h2>

        {/* FAQ Wrapper */}

        <div className="mt-6 md:mt-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`
                  border-b border-[#D1D1D1]
                  ${index === 0 ? "border-t border-[#D1D1D1]" : ""}
                `}
              >
                {/* OPEN STATE */}
                {isOpen ? (
                  <div
                    className="
                      py-4
                      md:py-10
                    "
                  >
                    {/* Question Row */}

                    <button
                      onClick={() => toggleFAQ(index)}
                      className="
                        flex
                        w-full
                        items-start
                        justify-between
                        gap-3
                        text-left
                      "
                    >
                      <h3
                        className="
                          font-heading
                          font-semibold
                          text-[#1A1917]
                          tracking-[-0.1px]
                          text-[18px]
                          leading-[24px]
                          md:text-[20px]
                          md:leading-[32px]
                        "
                      >
                        {faq.question}
                      </h3>

                      {/* Mobile Icon */}
                      <div
                        className="
                          flex
                          h-6
                          w-6
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#E53935]
                          text-white
                          md:hidden
                        "
                      >
                        <ChevronUp size={12} strokeWidth={2.5} />
                      </div>

                      {/* Desktop Icon */}
                      <div
                        className="
                          hidden
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#E53935]
                          text-white
                          md:flex
                        "
                      >
                        <ChevronUp size={18} strokeWidth={2} />
                      </div>
                    </button>

                    {/* Answer */}

                    <div
                      className="
                        mt-4
                        md:mt-5
                      "
                    >
                      <p
                        className="
                          max-w-[980px]
                          text-[#56554F]
                          font-body
                          text-[16px]
                          leading-[26px]
                        "
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ) : (
                  /* CLOSED STATE */
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="
                      flex
                      w-full
                      items-start
                      justify-between
                      gap-3
                      py-4
                      text-left
                      md:py-8
                    "
                  >
                    <h3
                      className="
                        font-heading
                        font-semibold
                        text-[#1A1917]
                        tracking-[-0.1px]
                        text-[18px]
                        leading-[24px]
                        md:text-[20px]
                        md:leading-[32px]
                      "
                    >
                      {faq.question}
                    </h3>

                    {/* Mobile */}
                    <div
                      className="
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[rgba(26,25,23,0.2)]
                        text-[#5F5E5D]
                        md:hidden
                      "
                    >
                      <ChevronDown size={12} strokeWidth={2.5} />
                    </div>

                    {/* Desktop */}
                    <div
                      className="
                        hidden
                        h-[42px]
                        w-[42px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[rgba(26,25,23,0.2)]
                        text-[#5F5E5D]
                        md:flex
                      "
                    >
                      <ChevronDown size={18} strokeWidth={2} />
                    </div>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}