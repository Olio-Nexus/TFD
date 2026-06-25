
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowDown,
  Menu,
  X,
  ArrowUp,
} from "lucide-react";

import MegaDropdown from "./MegaDropdown";
import { navigation } from "./navigation";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState("");

  const sections = [
    "Services",
    "Industries",
    "Area We Serve",
    "Company",
    "Contact",
  ];

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? "" : section);
  };
  
  const pathname = usePathname();
  return (
    <>
      {/* Desktop Header */}
      <header className="fixed top-0 z-50 hidden h-[72px] w-full bg-[rgba(26,25,23,0.9)] backdrop-blur-sm lg:block">
        <div className="mx-auto flex h-full max-w-full items-center justify-between px-20">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <img
              src="/logo-dark.svg"
              alt="Terraforma Drilling"
              className="h-[42px] w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-10">
            <Link
              href="/"
              className={`group relative pb-1 text-[14px] font-medium uppercase tracking-[0.5px] transition-colors ${
                pathname === "/"
                  ? "text-[#F3F1ED]"
                  : "text-[rgba(243,241,237,0.6)] hover:text-[#F3F1ED]"
              }`}
            >
              Home

              <span
                className={`absolute bottom-0 left-0 h-[1px] bg-[#E53935] transition-all duration-300 ${
                  pathname === "/"
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>

            <MegaDropdown
              title="Services"
              href={navigation.Services.href}
              items={navigation.Services.items}
              showImage={navigation.Services.showImage}
            />

            <MegaDropdown
              title="Industries"
              href={navigation.Industries.href}
              items={navigation.Industries.items}
              showImage={navigation.Industries.showImage}
            />

            <MegaDropdown
              title="Area We Serve"
              href={navigation.AreaWeServe.href}
              items={navigation.AreaWeServe.items}
              showImage={navigation.AreaWeServe.showImage}
            />

            <MegaDropdown
              title="Company"
              href={navigation.Company.href}
              items={navigation.Company.items}
              showImage={navigation.Company.showImage}
            />

            <Link
              href="/contact"
              className="flex h-10 items-center rounded-[2px] bg-[#E53935] px-6 font-mono text-[14px] font-medium uppercase tracking-[0.4px] text-[#F3F1ED]"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="fixed top-0 z-50 flex h-[56px] w-full items-center justify-between border-b border-white/20 bg-[#1A1917] px-5 lg:hidden">
        <Link href="/">
          <img
            src="/logo-dark.svg"
            alt="Terraforma Drilling"
            className="h-9 w-auto"
          />
        </Link>

        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={24} color="white" />
        </button>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed right-0 top-0 z-[70] h-screen w-full max-w-[402px] bg-[#1A1917] transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex h-14 items-center justify-between border-b border-white/20 px-5">
          <Link href="/">
            <img
              src="/logo-dark.svg"
              alt="Terraforma Drilling"
              className="h-9 w-auto"
            />
          </Link>

          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close Menu"
          >
            <X size={24} color="white" />
          </button>
        </div>

        <div className="flex h-[calc(100%-56px)] flex-col justify-between overflow-y-auto">
          <div>
            {sections.map((section) => {
              const isOpen = openSection === section;

              return (
                <div
                  key={section}
                  className={`border-b ${
                    isOpen
                      ? "border-white/10 bg-white/20"
                      : "border-white/10"
                  }`}
                >
                  <button
                    onClick={() => toggleSection(section)}
                    className="flex h-16 w-full items-center justify-between px-5"
                  >
                    <span className="font-heading text-[20px] font-medium text-[#E5E5E5]">
                      {section}
                    </span>

                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full border transition-all ${
                        isOpen
                          ? "border-[#E53935] bg-[#E53935]"
                          : "border-[#D3D3D366]"
                      }`}
                    >
                      {isOpen ? (
                        <ArrowUp
                          size={12}
                          className="text-white"
                        />
                      ) : (
                        <ArrowDown
                          size={12}
                          className="text-[#A3A3A3]"
                        />
                      )}
                    </span>
                  </button>

                  {/* SERVICES */}
                  {section === "Services" && isOpen && (
                    <div className="space-y-3 px-5 pb-4">
                      {navigation.Services.items.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="block text-[16px] leading-[26px] text-[#E5E5E5CC]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* INDUSTRIES */}
                  {section === "Industries" && isOpen && (
                    <div className="space-y-3 px-5 pb-4">
                      {navigation.Industries.items.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="block text-[16px] leading-[26px] text-[#E5E5E5CC]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* AREA WE SERVE */}
                  {section === "Area We Serve" && isOpen && (
                    <div className="space-y-3 px-5 pb-4">
                      {navigation.AreaWeServe.items.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="block text-[16px] leading-[26px] text-[#E5E5E5CC]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* COMPANY */}
                  {section === "Company" && isOpen && (
                    <div className="space-y-3 px-5 pb-4">
                      {navigation.Company.items.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="block text-[16px] leading-[26px] text-[#E5E5E5CC]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* CONTACT */}
                  {section === "Contact" && isOpen && (
                    <div className="px-5 pb-4">
                      <Link
                        href="/contact"
                        className="block text-[16px] leading-[26px] text-[#E5E5E5CC]"
                        onClick={() => setMobileOpen(false)}
                      >
                        Contact Us
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="pb-8">
            <div className="px-5">
              <Link
                href="/contact"
                className="flex h-11 w-full items-center justify-center rounded-[2px] bg-[#E53935] font-mono text-[16px] font-medium uppercase tracking-[0.4px] text-[#F3F1ED]"
              >
                Request A Quote
              </Link>
            </div>

            <div className="mt-8 flex justify-between px-5">
              <div>
                <p className="font-mono text-[12px] uppercase tracking-[1.4px] text-[#E5E5E5CC]">
                  Email
                </p>

                <p className="mt-1 text-[12px] font-medium text-[#F3F1ED]">
                  sales@tfdrilling.com.au
                </p>
              </div>

              <div>
                <p className="font-mono text-[12px] uppercase tracking-[1.4px] text-[#E5E5E5CC]">
                  Phone
                </p>

                <p className="mt-1 text-[12px] font-medium text-[#F3F1ED]">
                  (02) 7239 8878
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center">
              <p className="font-mono text-[12px] uppercase tracking-[1.4px] text-[#E5E5E5CC]">
                Location
              </p>

              <p className="mt-1 text-center text-[12px] font-medium text-[#F3F1ED]">
                Sydney, NSW, Australia
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

