"use client";

import { useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import clsx from "clsx";

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

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-5 bg-[var(--accent)]" />
            <span className="tag">FAQs</span>
          </div>

          <h2 className="font-heading text-4xl font-semibold tracking-[-0.04em] text-[var(--text)] md:text-5xl">
            Common{" "}
            <span className="text-[var(--accent)]">Questions</span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="w-full">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-[#D1D1D1]"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-start justify-between gap-4 py-6 md:py-8 text-left"
                >
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-semibold leading-7 tracking-[0.6px] text-[var(--text)] md:text-[20px]">
                      {faq.question}
                    </h3>

                    <div
                      className={clsx(
                        "grid overflow-hidden transition-all duration-300 ease-in-out",
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-3"
                          : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-[974px] text-sm leading-6 text-[var(--muted)] md:text-base md:leading-[25px]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Icon */}
                  <div
                    className={clsx(
                      "flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full border transition-all duration-300 md:h-[42px] md:w-[42px]",
                      isOpen
                        ? "border-[var(--accent)] bg-[var(--accent)]"
                        : "border-[rgba(86,85,79,0.8)] bg-transparent"
                    )}
                  >
                    {isOpen ? (
                      <ArrowUp size={18} className="text-white" />
                    ) : (
                      <ArrowDown size={18} className="text-[var(--text)]" />
                    )}
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}