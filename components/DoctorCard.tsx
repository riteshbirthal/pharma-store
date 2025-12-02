// components/DoctorCard.tsx
import Image from "next/image";
import React from "react";

export default function DoctorCard() {
  return (
    <div className="bg-white rounded-2xl border shadow-sm p-5 flex flex-col items-center text-center">
      <div className="relative h-28 w-28 rounded-full overflow-hidden border shadow-sm">
        <Image
          src="/doctor-placeholder.jpg" // Replace with your actual doctor image
          alt="Doctor profile"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <h3 className="mt-4 text-lg font-semibold text-slate-900">Dr. Anita Sharma</h3>
      <p className="text-sm text-slate-600">MBBS, MD (General Medicine)</p>

      <p className="text-xs text-slate-500 mt-2 max-w-xs">
        12+ years experience in internal medicine, chronic disease management,
        and outpatient care.
      </p>

      <div className="mt-4 text-left w-full text-sm text-slate-700">
        <p>
          <span className="font-medium">OPD Timings:</span> 10:00 AM – 1:00 PM (Mon–Sat)
        </p>
        <p className="text-xs text-slate-500 mt-1">
          Emergency consultation available only for registered patients.
        </p>
      </div>
    </div>
  );
}
