// app/page.tsx
import React from "react";
import Hero from "../components/Hero";
import QuickLinkCard from "../components/QuickLinkCard";
import USPCard from "../components/USPCard";

export const metadata = {
  title: "Shree Shyam Medicos — 24x7 Pharmacy & Medical Store",
  description:
    "Shree Shyam Medicos — 24×7 pharmacy with home delivery, doctor on call, prescription uploads via WhatsApp, and trusted pharmacists.",
  openGraph: {
    title: "Shree Shyam Medicos — 24x7 Pharmacy & Medical Store",
    description:
      "Shree Shyam Medicos — 24×7 pharmacy with home delivery, doctor on call, prescription uploads via WhatsApp, and trusted pharmacists.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Quick Access</h2>
        </div>

        <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <QuickLinkCard
            href="/medicines"
            title="Medicines & Categories"
            text="Browse major medicine categories (OTC, Prescription, Diabetes Care)."
          />
          <QuickLinkCard
            href="/services"
            title="Services"
            text="Home delivery, BP/Sugar checks, loyalty program & refill reminders."
          />
          <QuickLinkCard
            href="/doctor"
            title="Our Doctor"
            text="View doctor profile, qualifications and OPD timings."
          />
          <QuickLinkCard
            href="/contact"
            title="Contact & Location"
            text="Address, phone, WhatsApp and Google Maps location."
          />
        </div>
      </section>
      
      <section className="mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Why choose Shree Shyam Medicos</h2>
        </div>

        <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <USPCard
            title="Trusted & Licensed"
            subtitle="Licensed pharmacists, genuine medicines and transparent billing."
          />
          <USPCard
            title="Fast Home Delivery"
            subtitle="Same-day delivery within the local area — secure package handling."
          />
          <USPCard
            title="Convenient Prescription Upload"
            subtitle="Send prescriptions via WhatsApp and get fast processing."
          />
        </div>
      </section>
    </>
  );
}
