"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";


type Item = {
  title: string;
  href: string;
  image?: string;
};

interface MegaDropdownProps {
  title: string;
  href: string;
  items: Item[];
  showImage?: boolean;
}

export default function MegaDropdown({
  title,
  href,
  items,
  showImage,
}: MegaDropdownProps) {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevItems, setPrevItems] = useState(items);
  const hasImage = showImage === false ? false : items.some((item) => item.image);
  const isActive =
  pathname === href || pathname.startsWith(`${href}/`);

  // Reset the highlighted item when the menu items change. Done during render
  // (React's "adjust state on prop change" pattern) instead of in an effect,
  // so the reset happens before paint with no extra render or flash.
  if (items !== prevItems) {
    setPrevItems(items);
    setActiveIndex(0);
  }

  return (
    <div className="group relative">
      <Link
          href={href}
          className={`relative flex items-center gap-1.5 pb-1 text-[14px] font-medium uppercase tracking-[0.5px] transition-colors ${
            isActive
              ? "text-[#F3F1ED]"
              : "text-[rgba(243,241,237,0.6)] hover:text-[#F3F1ED]"
          }`}
        >
          {title}

          <ChevronDown
            size={16}
            className="transition-transform duration-300 group-hover:rotate-180"
          />

          <span
            className={`absolute bottom-0 left-0 h-[1px] bg-[#E53935] transition-all duration-300 ${
              isActive ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </Link>

      <div className="invisible absolute left-1/2 top-[56px] z-50 -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
        <div
            className={`relative inline-flex rounded-md border border-[#D1D1D1] bg-white pt-6 pr-6 pb-6 pl-7 shadow-[85px_175px_78px_rgba(0,0,0,0.01),48px_98px_66px_rgba(0,0,0,0.03),21px_44px_49px_rgba(0,0,0,0.04),5px_11px_27px_rgba(0,0,0,0.05)] ${
                hasImage ? "gap-6" : "gap-0"
            }`}
            >
          {/* LEFT */}
          <div className={`relative flex flex-col ${hasImage ? "min-w-[420px]" : "w-max"}`}>
            <p className="text-[20px] font-medium text-[rgba(26,25,23,0.6)]">
              {title}
            </p>

            <div className="mt-6 flex flex-col gap-5">
              {items.map((item, index) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="w-fit"
                >
                  <span
                    className={`relative text-[20px] font-semibold leading-7 tracking-[0.4px] ${
                      activeIndex === index
                        ? "text-[#1A1917]"
                        : "text-[rgba(26,25,23,0.8)]"
                    }`}
                  >
                    {item.title}

                    <span
                      className={`absolute left-0 top-[calc(100%+4px)] h-[1px] bg-[#E53935] transition-all duration-300 ${
                        activeIndex === index ? "w-full" : "w-0"
                      }`}
                    />
                  </span>
                </Link>
              ))}
            </div>

            {/* CORNER SHAPE (only for Services & Industries) */}
          {(title === "Services" || title === "Industries") && (
            <div className="mt-[56px]  opacity-80 pointer-events-none">
              <svg
                width="51"
                height="50"
                viewBox="0 0 51 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.8"
                  d="M50 9.96842V1H1V49H50V39.9474"
                  stroke="#E53935"
                  strokeWidth="2"
                />
              </svg>
            </div>
          )}

          </div>

          {/* IMAGE */}
          {hasImage && items[activeIndex]?.image && (
            <div className="w-[328px] overflow-hidden rounded-md">
              <img
                src={items[activeIndex].image}
                alt={items[activeIndex]?.title ?? ""}
                className="w-full h-full object-cover block"
              />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}