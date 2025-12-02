// app/medicines/page.tsx
'use client'

import React, { useMemo, useState } from 'react'
import Link from 'next/link'

const metadata = {
  title: 'Medicines & Categories — Shree Shyam Medicos',
  description:
    'Browse medicine categories at Shree Shyam Medicos — OTC, Prescription, Diabetes Care, Baby Care, Ayurvedic, and more.',
  openGraph: {
    title: 'Medicines & Categories — Shree Shyam Medicos',
    description:
      'Browse medicine categories at Shree Shyam Medicos — OTC, Prescription, Diabetes Care, Baby Care, Ayurvedic, and more.',
    type: 'website'
  }
}

// Static category list for the demo. Later, replace with API call to fetch categories/inventory.
const CATEGORIES = [
  {
    id: 'otc',
    title: 'OTC (Over the Counter)',
    subtitle: 'Pain relief, cold & flu, digestive, allergy, first aid'
  },
  {
    id: 'prescription',
    title: 'Prescription Medicines',
    subtitle: 'Antibiotics, chronic meds — dispensed against valid prescription'
  },
  {
    id: 'diabetes',
    title: 'Diabetes Care',
    subtitle: 'Glucometers, strips, insulin accessories, dietary support'
  },
  {
    id: 'baby',
    title: 'Baby Care',
    subtitle: 'Baby formula, diapers, skincare, baby medicines'
  },
  {
    id: 'ayurvedic',
    title: 'Ayurvedic & Herbal',
    subtitle: 'Herbal remedies, natural supplements and churna'
  },
  {
    id: 'supplements',
    title: 'Supplements & Nutraceuticals',
    subtitle: 'Vitamins, minerals, protein and wellness supplements'
  },
  {
    id: 'personal-care',
    title: 'Personal Care & Hygiene',
    subtitle: 'Soaps, sanitizers, wound care and daily essentials'
  },
  {
    id: 'medical-devices',
    title: 'Medical Devices & Aids',
    subtitle: 'BP monitors, nebulizers, walkers, braces'
  }
]

export default function MedicinesPage() {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return CATEGORIES
    return CATEGORIES.filter(
      (c) =>
        c.title.toLowerCase().includes(q) || c.subtitle.toLowerCase().includes(q) || c.id.includes(q)
    )
  }, [query])

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl md:text-3xl font-bold">Medicines & Categories</h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Explore major product categories. Click a category to see items (placeholder links). When you connect a
          backend, replace the static list with live categories and product listings.
        </p>
      </header>

      {/* Search + quick filters */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <label className="relative block">
            <span className="sr-only">Search categories</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search categories or keywords (e.g., insulin, baby, otc)..."
              className="w-full rounded-lg border px-4 py-2 text-sm placeholder:text-slate-400"
            />
          </label>
        </div>

        <div className="mt-3 md:mt-0 md:ml-4 flex items-center gap-2">
          <button
            onClick={() => {
              setQuery('')
              setSelected(null)
            }}
            className="text-sm inline-flex items-center rounded-full px-3 py-2 border"
          >
            Reset
          </button>

          <div className="hidden sm:flex items-center gap-2 text-sm text-slate-600">
            <span className="text-xs text-slate-400">Quick:</span>
            <button
              onClick={() => {
                setQuery('diabetes')
                setSelected('diabetes')
              }}
              className="inline-flex items-center rounded-full px-3 py-2 border"
            >
              Diabetes
            </button>
            <button
              onClick={() => {
                setQuery('baby')
                setSelected('baby')
              }}
              className="inline-flex items-center rounded-full px-3 py-2 border"
            >
              Baby Care
            </button>
            <button
              onClick={() => {
                setQuery('prescription')
                setSelected('prescription')
              }}
              className="inline-flex items-center rounded-full px-3 py-2 border"
            >
              Prescription
            </button>
          </div>
        </div>
      </div>

      {/* Categories grid */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((cat) => (
          <article
            key={cat.id}
            onClick={() => setSelected(cat.id === selected ? null : cat.id)}
            className={`group cursor-pointer rounded-2xl border bg-white p-4 transition-shadow hover:shadow-md ${
              selected === cat.id ? 'ring-2 ring-primary-500/30' : ''
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold">{cat.title}</h3>
                <p className="text-xs text-slate-500 mt-1">{cat.subtitle}</p>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href={`/medicines/${cat.id}`}
                  className="inline-flex items-center rounded-full px-3 py-1 text-xs border"
                  onClick={(e) => e.stopPropagation()}
                >
                  View
                </Link>
              </div>
            </div>

            {/* Expandable area to show guidance / sample products */}
            {selected === cat.id && (
              <div className="mt-3 border-t pt-3 text-xs text-slate-600">
                <p className="mb-2">Sample subcategories / items you can add:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Brand A — 10mg tablets</li>
                  <li>Generic — 250ml syrup</li>
                  <li>Accessories — glucometer strips, syringes</li>
                </ul>

                <p className="mt-3 text-xs text-slate-500">
                  Tip: Connect this page to your inventory API to show live stock, prices and add-to-cart buttons.
                </p>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Fallback when no categories match */}
      {filtered.length === 0 && (
        <div className="mt-6 rounded-md border bg-white p-4 text-slate-600">
          No categories found for <strong>{query}</strong>. Try a different keyword or reset filters.
        </div>
      )}

      {/* Future integration notes */}
      <aside className="mt-6 text-sm text-slate-500">
        <strong>Developer note:</strong> To make this production-ready:
        <ul className="list-disc list-inside mt-2">
          <li>Replace the static <code>CATEGORIES</code> with a server-side or client-side API call.</li>
          <li>Add paginated product lists and product pages at <code>/medicines/[categoryId]</code>.</li>
          <li>Secure prescription-only product pages and add upload flow for prescriptions.</li>
        </ul>
      </aside>
    </section>
  )
}
