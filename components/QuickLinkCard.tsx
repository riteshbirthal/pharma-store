// components/QuickLinkCard.tsx
import React from "react";
import Link from "next/link";

type QuickLinkCardProps = {
  href: string;
  title: string;
  text: string;
  icon?: React.ReactNode;
};

export default function QuickLinkCard({ href, title, text, icon }: QuickLinkCardProps) {
  return (
    <Link
      href={href}
      className="group bg-white border rounded-2xl p-4 shadow-sm hover:shadow-md transition flex flex-col gap-2"
    >
      {/* Optional icon */}
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center">
          {icon ?? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5l5-5-1.4-1.4L13 13.7l-1.6-1.6L10 13l3 3.5z" />
            </svg>
          )}
        </div>

        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      </div>

      <p className="text-xs text-slate-500 leading-snug">{text}</p>

      <span className="text-xs font-medium text-primary-600 mt-1 group-hover:underline">
        View →
      </span>
    </Link>
  );
}
