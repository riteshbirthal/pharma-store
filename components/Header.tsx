// components/Header.tsx
'use client'

import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="w-full border-b bg-white/90 backdrop-blur-sm">
      <div className="max-w-[1100px] mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <div
              aria-hidden
              className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-500 to-medgreen-500 flex items-center justify-center text-white font-bold shadow"
            >
              R
            </div>

            <div className="flex flex-col leading-none">
              <span className="text-lg font-semibold text-slate-900">Shree Shyam Medicos</span>
              <span className="text-xs text-slate-500">Pharmacy & Medical Store</span>
            </div>
          </Link>

          {/* 24x7 badge */}
          <span className="ml-2 inline-flex items-center text-xs rounded-full px-3 py-1 bg-medgreen-50 text-medgreen-700 border border-medgreen-100">
            ● Open 24×7
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          <Link href="/" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            About
          </Link>
          <Link href="/doctor" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Doctor
          </Link>
          <Link href="/medicines" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Medicines
          </Link>
          <Link href="/services" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Services
          </Link>
          <Link href="/gallery" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Gallery
          </Link>
          <Link href="/testimonials" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Testimonials
          </Link>
          <Link href="/contact" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Contact
          </Link>
        </nav>

        {/* Right-side CTA / Mobile fallback */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+911234567890"
            className="hidden md:inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold bg-primary-500 text-white shadow-sm"
          >
            Call Now
          </a>

          {/* Mobile: simple contact button */}
          <div className="md:hidden">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full px-3 py-2 text-sm font-semibold bg-primary-500 text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
