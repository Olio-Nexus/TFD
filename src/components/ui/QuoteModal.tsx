"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type SyntheticEvent,
} from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

/* =========================================================
   Context — lets any button on the page open the pop-up
   ========================================================= */

type QuoteModalContextValue = {
  openQuoteModal: () => void;
  closeQuoteModal: () => void;
};

const QuoteModalContext = createContext<QuoteModalContextValue | null>(null);

export function useQuoteModal() {
  const ctx = useContext(QuoteModalContext);
  if (!ctx) {
    throw new Error("useQuoteModal must be used within a <QuoteModalProvider>");
  }
  return ctx;
}

/* =========================================================
   Provider — renders the modal once, shares open/close
   ========================================================= */

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openQuoteModal = useCallback(() => setOpen(true), []);
  const closeQuoteModal = useCallback(() => setOpen(false), []);

  return (
    <QuoteModalContext.Provider value={{ openQuoteModal, closeQuoteModal }}>
      {children}
      <QuoteModal open={open} onClose={closeQuoteModal} />
    </QuoteModalContext.Provider>
  );
}

/* =========================================================
   Modal + form
   ========================================================= */

const TEXT_FIELDS = [
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
    id: "scope",
    label: "Scope of Work",
    type: "text",
    placeholder: "Let us know your scope of work",
    required: false,
    autoComplete: "off",
  },
] as const;

const labelClasses =
  "text-[14px] font-medium leading-[130%] text-white/80";

const inputClasses =
  "w-full rounded-[4px] border border-[rgba(213,215,218,0.2)] bg-white px-4 text-[16px] leading-[140%] text-[#1A1917] shadow-[0px_1px_2px_rgba(10,13,18,0.05)] placeholder:text-[rgba(86,85,79,0.8)] outline-none transition-colors focus:border-[var(--accent)]";

function QuoteModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  // Portals need the DOM to exist first.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- portal must wait for client mount before rendering
    setMounted(true);
  }, []);

  // Escape to close + lock background scroll while open.
  useEffect(() => {
    if (!open) return;

    previousFocus.current = document.activeElement as HTMLElement | null;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    // Focus the first field once the dialog paints.
    const focusTimer = window.setTimeout(() => firstFieldRef.current?.focus(), 0);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = overflow;
      window.clearTimeout(focusTimer);
      previousFocus.current?.focus?.();
    };
  }, [open, onClose]);

  // Reset the "thank you" state whenever the modal is reopened.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reset thank-you state when the modal is reopened
    if (open) setSubmitted(false);
  }, [open]);

  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (!mounted || !open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#2B2B2BCC] p-4 backdrop-blur-[6px] sm:p-6"
      onMouseDown={(event) => {
        // Close only when the backdrop itself is clicked.
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
        className="relative my-auto flex w-full max-w-[402px] flex-col gap-5 rounded-[4px] bg-[#1A1917] p-5 lg:max-w-[960px] lg:p-6"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-5">
          <h2
            id="quote-modal-title"
            className="font-heading text-[24px] font-semibold leading-[30px] tracking-[-1px] text-white lg:text-[40px] lg:leading-[48px]"
          >
            Start Your Site Investigation Today
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close enquiry form"
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/70 text-white transition-colors hover:bg-white/10 lg:h-9 lg:w-9"
          >
            <X size={16} strokeWidth={2} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            {TEXT_FIELDS.map((field) => (
              <div key={field.id} className="flex flex-col gap-[6px]">
                <label htmlFor={`quote-${field.id}`} className={labelClasses}>
                  {field.label}
                  {field.required && <span className="text-[var(--accent)]">*</span>}
                </label>
                <input
                  ref={field.id === "fullName" ? firstFieldRef : undefined}
                  id={`quote-${field.id}`}
                  name={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                  autoComplete={field.autoComplete}
                  className={`${inputClasses} h-12`}
                />
              </div>
            ))}
          </div>

          {/* Site Location — full width */}
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="quote-siteLocation" className={`${labelClasses} capitalize`}>
              Site Location (Suburb Or Region)
            </label>
            <textarea
              id="quote-siteLocation"
              name="siteLocation"
              rows={3}
              placeholder="Tell us specifically about your site location"
              className={`${inputClasses} min-h-[102px] resize-none py-3`}
            />
          </div>

          <div className="mt-3 flex flex-col gap-3">
            <button
              type="submit"
              className="flex h-11 w-full items-center justify-center gap-3 rounded-[2px] bg-[var(--accent)] font-mono text-[16px] font-medium uppercase leading-6 tracking-[0.4px] text-[#F3F1ED] transition-opacity hover:opacity-90"
            >
              {submitted ? "Thank You" : "Request a Quote"}
            </button>

            <p className="text-center text-[12px] font-light leading-[18px] text-[#B2B2B2]">
              We use your details only to respond to your enquiry and never share your
              information with third parties.
            </p>
          </div>
        </form>
      </div>
    </div>,
    document.body,
  );
}
