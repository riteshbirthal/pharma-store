// components/Hero.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="grid gap-10 md:grid-cols-2 items-center">
      {/* Left Section – Content */}
      <div>
        {/* Eyebrow intro */}
        <p className="text-sm font-semibold text-primary-500 uppercase tracking-wide">
          Your Neighborhood Pharmacy
        </p>

        {/* Headline */}
        <h1 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
          24×7 Pharmacy with Home Delivery <br className="hidden md:block" />
          & Doctor Support
        </h1>

        {/* Description */}
        <p className="mt-4 text-slate-600 text-sm md:text-base max-w-md">
          Trusted by families for genuine medicines, fast delivery, and on-call
          doctor consultation. Upload prescriptions via WhatsApp for quick
          processing — anytime, day or night.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          {/* Primary CTA */}
          <a
            href="https://wa.me/911234567890?text=Hello%2C%20I%20want%20to%20order%20medicine"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold bg-primary-500 text-white shadow-sm hover:bg-primary-600 transition"
          >
            Order on WhatsApp
          </a>

          {/* Secondary CTA */}
          <Link
            href="/medicines"
            className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold border border-slate-300 hover:bg-slate-50 transition"
          >
            Browse Medicines
          </Link>
        </div>

        {/* USP Cards Row */}
        <div className="mt-8 grid grid-cols-3 gap-3">
          <div className="bg-white border rounded-xl p-4 shadow-sm">
            <p className="text-sm font-semibold">Open 24×7</p>
            <p className="mt-1 text-xs text-slate-500">
              Medicines anytime, urgent or routine.
            </p>
          </div>

          <div className="bg-white border rounded-xl p-4 shadow-sm">
            <p className="text-sm font-semibold">Home Delivery</p>
            <p className="mt-1 text-xs text-slate-500">
              Fast, reliable doorstep service.
            </p>
          </div>

          <div className="bg-white border rounded-xl p-4 shadow-sm">
            <p className="text-sm font-semibold">Doctor On Call</p>
            <p className="mt-1 text-xs text-slate-500">
              Consult our doctor during OPD hours.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section – Hero Image */}
      <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border shadow-sm">
        <Image
          src="/placeholder-store.jpg"
          alt="Pharmacy storefront"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
}
