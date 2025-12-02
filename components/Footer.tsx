// components/Footer.tsx
import React from "react";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  const license = "XX-XXXX-XXXX";
  const gst = "12ABCDE3456F7Z8";
  const address = "123 Main Street, Riverside, State, 400001";
  const phone = "+91 12345 67890";
  const whatsapp = "+911234567890";

  return (
    <footer className="border-t bg-white mt-12">
      <div className="max-w-[1100px] mx-auto px-4 py-8 text-sm text-slate-700">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Brand & short */}
          <div>
            <div className="text-lg font-semibold text-slate-900">Shree Shyam Medicos</div>
            <div className="mt-2 text-slate-600">Trusted neighborhood pharmacy — genuine medicines & caring staff.</div>

            <div className="mt-4 text-xs text-slate-500">
              <div>Address: {address}</div>
              <div>Phone: <a className="text-primary-500" href={`tel:${phone}`}>{phone}</a></div>
            </div>
          </div>

          {/* Licenses */}
          <div>
            <div className="font-medium">Licenses & Registration</div>
            <ul className="mt-2 text-xs text-slate-600 space-y-1">
              <li>Drug License: <span className="font-medium">{license}</span></li>
              <li>GSTIN: <span className="font-medium">{gst}</span></li>
              <li>Pharmacist Reg: <span className="font-medium">PHRM-123456</span></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <div className="font-medium">Contact & Hours</div>

            <div className="mt-2 text-xs text-slate-600">
              <div>WhatsApp: <a className="text-green-600" href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer">{whatsapp}</a></div>
              <div className="mt-2">Hours: <span className="font-medium">Open 24×7</span></div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <a aria-label="WhatsApp" href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer" className="text-sm inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.78 11.78 0 0012 .25C5.73.25.98 5 1 11.26c.02 2 .6 3.95 1.7 5.63L1 23l6.27-1.63c1.61.9 3.36 1.35 5.06 1.35 6.3 0 11.05-4.74 11.07-11.01 0-3.04-1.2-5.88-3.88-7.83zM12 21.5c-1.47 0-2.92-.37-4.18-1.07l-.3-.17-3.72.96.99-3.63-.19-.33A8.21 8.21 0 013.8 11.3c0-4.56 3.7-8.26 8.26-8.26 4.56 0 8.26 3.7 8.26 8.26 0 4.56-3.7 8.26-8.26 8.26z"/></svg>
                WhatsApp
              </a>

              <Link href="#" className="text-sm inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22 2.01L2 2c0 0-1 .01-1 1v20c0 .55.45 1 1 1h20c.55 0 1-.45 1-1V3.01c0-.55-.45-1-1-1zM7.5 20H5V9h2.5v11zm-1.25-12.6C5.19 7.4 4 6.21 4 4.75 4 3.29 5.19 2.1 6.75 2.1s2.75 1.19 2.75 2.65c0 1.46-1.19 2.65-2.75 2.65zM20 20h-2.5v-5.5c0-1.33-.5-2.25-1.75-2.25-1.04 0-1.66.7-1.94 1.38-.1.26-.12.62-.12.98V20H11v-11h2.4v1.6c.6-.9 1.9-2 3.9-2 2.92 0 4.6 1.92 4.6 6.07V20z"/></svg>
                LinkedIn
              </Link>

              <Link href="#" className="text-sm inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22 2H2v20h11v-7h-3v-3h3V9.5C13 6.46 14.79 5 17.93 5c1.59 0 2.97.12 3.37.17V9h-1.96c-1.54 0-1.84.73-1.84 1.8V10h3.72l-.49 3h-3.23v7H22z"/></svg>
                Facebook
              </Link>
            </div>
          </div>
        </div>

        {/* small disclaimer + copyright */}
        <div className="mt-6 text-xs text-slate-500">
          <div className="mb-2">
            <strong>Disclaimer:</strong> Schedule X drugs and other controlled substances are dispensed only against a valid prescription. Prescription verification and record-keeping policies are followed as per regulation.
          </div>
          <div>© {year} Shree Shyam Medicos. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
