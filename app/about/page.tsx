import Image from "next/image";
import React from "react";

const metadata = {
  title: "About Us — Shree Shyam Medicos",
  description:
    "About Shree Shyam Medicos — licensed neighborhood pharmacy providing 24x7 service, home delivery, and expert pharmacists.",
  openGraph: {
    title: "About Shree Shyam Medicos",
    description:
      "About Shree Shyam Medicos — licensed neighborhood pharmacy providing 24x7 service, home delivery, and expert pharmacists.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <section className="space-y-8">
      <header>
        <h1 className="text-2xl md:text-3xl font-bold">About Shree Shyam Medicos</h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Shree Shyam Medicos has proudly served the Riverside neighborhood since 1998.
          Our mission is to provide fast, reliable, and affordable access to medicines
          and health products. We focus on genuine medicines, licensed pharmacists, and
          friendly service — available 24×7 for emergencies and routine needs.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 items-start">
        {/* Left: Story & licenses */}
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold">Our Story</h2>
            <p className="mt-2 text-slate-600">
              Founded by Mr. Rajesh Kumar, Shree Shyam Medicos began as a small counter
              and has grown into a trusted neighborhood institution. We prioritize
              patient safety, clear counseling, and timely delivery.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Owner & Head Pharmacist</h3>
            <div className="mt-2 text-slate-600">
              <p className="font-medium">Mr. Rajesh Kumar</p>
              <p className="text-sm text-slate-500 mt-1">
                Proprietor & Registered Pharmacist — 18+ years of experience in
                community pharmacy, prescription handling and patient counseling.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Licenses & Certifications</h3>
            <ul className="mt-3 text-sm text-slate-600 list-disc list-inside space-y-1">
              <li>Drug License No: <span className="font-medium">XX-XXXX-XXXX</span></li>
              <li>GSTIN: <span className="font-medium">12ABCDE3456F7Z8</span></li>
              <li>Pharmacist Registration: <span className="font-medium">PHRM-123456</span></li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              Note: All licenses and certifications are displayed for transparency. Replace the
              above placeholders with your actual license numbers.
            </p>
          </div>
        </div>

        {/* Right: Images (store + owner) */}
        <div className="space-y-4">
          <div className="rounded-2xl overflow-hidden h-64 md:h-80 relative border">
            <Image
              src="/placeholder-store.jpg"
              alt="Shree Shyam Medicos storefront"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="h-20 w-20 rounded-full overflow-hidden relative border">
              <Image
                src="/placeholder-store.jpg"
                alt="Owner - Rajesh Kumar"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <div className="font-semibold">Mr. Rajesh Kumar</div>
              <div className="text-sm text-slate-500">Owner & Head Pharmacist</div>
              <div className="text-xs text-slate-500 mt-2">
                Licensed pharmacist skilled in prescription review, drug interactions,
                and patient counseling.
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white rounded-2xl p-4 border">
        <h3 className="font-semibold">Why trust us</h3>
        <ul className="mt-3 text-sm text-slate-600 list-disc list-inside space-y-2">
          <li>All medicines sourced from authorized distributors.</li>
          <li>Privacy-first handling of prescriptions and health data.</li>
          <li>Trained staff available to answer medicine and dosage questions.</li>
        </ul>
      </section>
    </section>
  );
}
