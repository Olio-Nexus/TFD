"use client";

import { PhoneCall } from "lucide-react";
import { useState, type SyntheticEvent } from "react";

const FIELDS = [
  {
    id: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "Full Name",
    required: true,
    autoComplete: "name",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "you@company.com",
    required: true,
    autoComplete: "email",
  },
  {
    id: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "+91 9167883256",
    required: true,
    autoComplete: "tel",
  },
  {
    id: "siteLocation",
    label: "Site Location",
    type: "text",
    placeholder: "Project address, suburb, or region within NSW",
    required: false,
    autoComplete: "off",
  },
] as const;

const CONTACT_DETAILS: { label: string; value: string; href?: string }[] = [
  { label: "Phone", value: "(02) 7239 8878", href: "tel:+61272398878" },
  { label: "Email", value: "sales@tfdrilling.com.au", href: "mailto:sales@tfdrilling.com.au" },
  { label: "Based In", value: "Wetherill Park, Sydney NSW 2164" },
];

const inputClasses =
  "w-full rounded-[4px] border border-[#D1D1D1] bg-white px-3 text-[16px] leading-[140%] text-[#1A1917] placeholder:text-[rgba(86,85,79,0.8)] outline-none transition-colors focus:border-[var(--accent)]";

export default function EnquirySection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* ── Left: Enquiry form ─────────────────────────── */}
          <div className="flex-1">
            <h2 className="font-heading text-[24px] font-semibold leading-[30px] tracking-[-1px] text-[#1A1917] md:text-[48px] md:leading-[56px]">
              Send Us Your <span className="text-[var(--accent)]">Enquiry</span>
            </h2>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5" noValidate>
              {FIELDS.map((field) => (
                <div key={field.id} className="flex flex-col gap-[6px]">
                  <label
                    htmlFor={field.id}
                    className="text-[14px] font-medium leading-[130%] text-[rgba(26,25,23,0.8)]"
                  >
                    {field.label}
                    {field.required && <span className="text-[var(--accent)]">*</span>}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    autoComplete={field.autoComplete}
                    className={`${inputClasses} h-[52px]`}
                  />
                </div>
              ))}

              <div className="flex flex-col gap-[6px]">
                <label
                  htmlFor="scope"
                  className="text-[14px] font-medium capitalize leading-[130%] text-[rgba(26,25,23,0.8)]"
                >
                  Scope Of Work
                </label>
                <textarea
                  id="scope"
                  name="scope"
                  rows={3}
                  placeholder="Tell us about your Drilling requirements, Numbers of Boreholes, depth if SPT testing is required"
                  className={`${inputClasses} h-[120px] resize-none py-3`}
                />
              </div>

              <button
                type="submit"
                className="mt-2 flex h-[44px] w-full items-center justify-center gap-3 rounded-[4px] bg-[var(--accent)] font-mono text-[16px] font-medium uppercase leading-[24px] tracking-[0.4px] text-[#F3F1ED] transition-opacity hover:opacity-90"
              >
                {submitted ? "Thank You" : "Request a Quote"}
              </button>

              <p className="text-center text-[12px] font-light leading-[18px] text-[#56554F]">
                We respond to all enquiries within 24 hours. Your details are used only to
                reply and are never shared with third parties.
              </p>
            </form>
          </div>

          {/* ── Right: Speak With Our Team (sticky on desktop) ── */}
          <aside className="w-full lg:sticky lg:top-24 lg:w-[400px] xl:w-[440px]">
            <div className="overflow-hidden rounded-[6px] border border-[#D1D1D1] shadow-[11px_46px_28px_rgba(0,0,0,0.04),5px_20px_21px_rgba(0,0,0,0.05),1px_5px_12px_rgba(0,0,0,0.04)]">
              {/* Header */}
              <div className="flex items-center gap-4 bg-[var(--accent)] p-3">
                <PhoneCall size={24} className="shrink-0 text-white" aria-hidden="true" />
                <h3 className="font-heading text-[20px] font-medium leading-[28px] tracking-[0.6px] text-white">
                  Speak With Our Team
                </h3>
              </div>

              {/* Body */}
              <div className="flex flex-col gap-3 bg-white p-3">
                {CONTACT_DETAILS.map((detail) => (
                  <div key={detail.label} className="flex flex-col gap-3 border-b border-[#D1D1D1] pb-3">
                    <span className="text-[16px] font-medium leading-[26px] text-[var(--accent)]">
                      {detail.label}
                    </span>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="font-heading text-[16px] font-medium leading-[24px] tracking-[0.6px] text-[rgba(16,16,16,0.8)] transition-colors hover:text-[var(--accent)]"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <span className="font-heading text-[16px] font-medium leading-[24px] tracking-[0.6px] text-[rgba(16,16,16,0.8)]">
                        {detail.value}
                      </span>
                    )}
                  </div>
                ))}

                {/* Trading hours */}
                <div className="flex flex-col gap-3">
                  <span className="text-[16px] font-medium leading-[26px] text-[var(--accent)]">
                    Trading Hours
                  </span>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-1">
                      <span className="font-heading text-[16px] font-medium leading-[24px] tracking-[0.6px] text-[rgba(16,16,16,0.8)]">
                        Monday &ndash; Friday
                      </span>
                      <span className="font-heading text-[16px] font-medium leading-[24px] tracking-[0.6px] text-[rgba(16,16,16,0.8)]">
                        7:00 AM &ndash; 5:00 PM
                      </span>
                    </div>
                    <div className="flex items-start justify-between gap-1">
                      <span className="font-heading text-[16px] font-medium leading-[24px] tracking-[0.6px] text-[#56554F]">
                        Saturday &ndash; Sunday
                      </span>
                      <span className="font-heading text-[16px] font-medium leading-[24px] tracking-[0.6px] text-[#56554F]">
                        Closed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
