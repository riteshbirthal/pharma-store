// components/USPCard.tsx
import React from "react";

type USPCardProps = {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode; // optional icon node if you want to pass an SVG
};

export default function USPCard({ title, subtitle, icon }: USPCardProps) {
  return (
    <div className="bg-white border rounded-2xl p-4 shadow-sm flex items-start gap-3">
      <div className="flex-none h-10 w-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600">
        {icon ?? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5l5-5-1.4-1.4L13 13.7l-1.6-1.6L10 13l3 3.5z" />
          </svg>
        )}
      </div>

      <div>
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        {subtitle && <div className="text-xs text-slate-500 mt-1">{subtitle}</div>}
      </div>
    </div>
  );
}
