// components/FloatingWhatsapp.tsx
"use client";

import React from "react";

const WHATSAPP_NUMBER = "+911234567890"; // <-- replace with your number

export default function FloatingWhatsapp() {
  const message = "Hello, I want to order medicine.";

  const openWhatsapp = () => {
    const num = WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
    const url = `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={openWhatsapp}
      className="
        fixed z-50 bottom-5 right-5
        h-14 w-14 rounded-full shadow-lg
        bg-green-500 hover:bg-green-600
        flex items-center justify-center
        transition transform hover:scale-110
      "
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        className="h-8 w-8"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.78 11.78 0 00112 .25C5.73.25.98 5 1 11.26c.02 2 .6 3.95 1.7 5.63L1 23l6.27-1.63c1.61.9 3.36 1.35 5.06 1.35 6.3 0 11.05-4.74 11.07-11.01 0-3.04-1.2-5.88-3.88-7.83zM12 21.5c-1.47 0-2.92-.37-4.18-1.07l-.3-.17-3.72.96.99-3.63-.19-.33A8.21 8.21 0 013.8 11.3c0-4.56 3.7-8.26 8.26-8.26 4.56 0 8.26 3.7 8.26 8.26 0 4.56-3.7 8.26-8.26 8.26z" />
      </svg>
    </button>
  );
}
