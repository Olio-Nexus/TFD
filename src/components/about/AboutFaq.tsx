"use client";

import { useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "Where is TerraForma Drilling based, and where do you operate?",
    answer:
      "TerraForma Drilling is based in Sydney, NSW, and provides geotechnical, environmental, and monitoring bore installation services throughout New South Wales. We work across Greater Sydney and regional areas, including Newcastle, Wollongong, the Central West, the North Coast, the Riverina, and the Southern Tablelands.",
  },
  {
    question: "How quickly can TerraForma Drilling mobilise to the site?",
    answer:
      "For most projects within Greater Sydney, TerraForma Drilling can mobilise within 24 hours of confirmation of the booking. For regional NSW locations, mobilisation timeframes depend on project location, scope, and scheduling requirements, which are confirmed during the quoting process.",
  },
  {
    question: "What services does TerraForma Drilling provide?",
    answer:
      "TerraForma Drilling provides geotechnical drilling, site investigation drilling, Solid Flight Auger (SFA) drilling, Standard Penetration Testing (SPT), Dynamic Cone Penetrometer (DCP) testing, environmental drilling, and monitoring bore and piezometer installation services across New South Wales.",
  },
  {
    question:
      "What makes TerraForma Drilling different from other drilling contractors?",
    answer:
      "TerraForma Drilling is built by engineers, for engineers. Our purpose-built Solid Flight Auger rig works like a Swiss army knife for geotechnical and environmental investigations—versatile, efficient, and designed to handle practical field conditions without unnecessary complexity.\n\nKey features include:\n• Purpose-Built SFA Rig — Designed specifically for geotechnical and environmental investigations, not adapted from a generic platform.\n• Tight Access Capability — Reaches constrained and difficult sites where standard rigs cannot operate.\n• Right-Sized for the Job — Efficient on small-to-medium investigations without over-mobilising unnecessary plant.\n• Third-Party Certified Quality System — Independently audited and certified, not self-assessed.\n• Experienced Operators — Well-trained drillers who get the job done without avoidable delays.\n• Calibrated Testing Equipment — Fully calibrated SPT and DCP equipment on every job.\n• Well-Maintained Rig — Documented service schedule with minimal downtime on site.\n• Reliable Service — A drilling subcontractor consultants can trust to keep their programme on track.",
  },
  {
    question:
      "Does TerraForma Drilling work with geotechnical and environmental consultants?",
    answer:
      "Yes. We regularly support geotechnical consultants, environmental consultants, developers, civil contractors, project managers, and government organisations. As the drilling subcontractor, we follow your investigation programme, bore plan, testing requirements, and installation specifications.",
  },
  {
    question: "Is TerraForma Drilling ISO certified?",
    answer:
      "Yes. TerraForma Drilling operates under JAS/ANZ-certified ISO 9001:2015 Quality Management, ISO 14001:2015 Environmental Management, and ISO 45001:2018 Occupational Health and Safety Management systems. These certifications demonstrate our commitment to quality, safety, and environmental responsibility.",
  },
  {
    question: "Can TerraForma Drilling handle tight-access sites?",
    answer:
      "Yes. Tight-access drilling is one of our core specialities. Our compact ute-mounted drilling rig is designed for narrow residential lots, low-clearance structures, sloping sites, infrastructure corridors, and other locations where conventional drilling rigs may have limited access.",
  },
  {
    question: "Do you operate outside New South Wales?",
    answer:
      "No. TerraForma Drilling currently operates exclusively within New South Wales. Our service coverage includes Sydney, Newcastle, Wollongong, the Hunter Region, the Central West, the North Coast, the Riverina, the Southern Tablelands, and other regional NSW locations.",
  },
];

export default function AboutFaq() {
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

        {/* view more */}
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