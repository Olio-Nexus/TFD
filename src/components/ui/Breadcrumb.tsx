import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BreadcrumbItem } from "@/types/breadcrumb";

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({
  items,
  className = "",
}: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center gap-[10px] ${className}`}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div
            key={`${item.label}-${index}`}
            className="flex items-center gap-[10px]"
          >
            {index > 0 && (
              <ChevronRight
                size={12}
                className="text-white/70"
              />
            )}

            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="
                  font-mono
                  text-[14px]
                  font-medium
                  uppercase
                  tracking-[1.4px]
                  text-white/70
                  transition-colors
                  hover:text-white
                "
              >
                {item.label}
              </Link>
            ) : (
              <span
                className="
                  font-mono
                  text-[14px]
                  font-medium
                  uppercase
                  tracking-[1.4px]
                  text-white
                "
              >
                {item.label}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}