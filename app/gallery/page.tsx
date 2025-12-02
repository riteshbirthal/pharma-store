// app/gallery/page.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const metadata = {
  title: 'Gallery — Shree Shyam Medicos',
  description: 'Photos of Shree Shyam Medicos — storefront, interior, staff and equipment.',
  openGraph: {
    title: 'Gallery — Shree Shyam Medicos',
    description: 'Photos of Shree Shyam Medicos — storefront, interior, staff and equipment.',
    type: 'website'
  }
}

// Replace these with your actual image files in /public (e.g., /gallery-1.jpg)
const IMAGES = [
  '/placeholder-store.jpg',
  '/placeholder-store.jpg',
  '/placeholder-store.jpg',
  '/placeholder-store.jpg',
  '/placeholder-store.jpg',
  '/placeholder-store.jpg'
]

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl md:text-3xl font-bold">Gallery</h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          A visual tour of Shree Shyam Medicos — the storefront, inside the store, our staff and equipment.
          Click any image to enlarge.
        </p>
      </header>

      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {IMAGES.map((src, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className="group rounded-lg overflow-hidden relative h-40 focus:outline-none"
            aria-label={`Open image ${i + 1}`}
          >
            <Image
              src={src}
              alt={`gallery-${i + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              className="transform group-hover:scale-105 transition-transform duration-200"
            />
          </button>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveIndex(null)}
              className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 shadow"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="relative h-[60vh] sm:h-[70vh]">
              <Image
                src={IMAGES[activeIndex]}
                alt={`Gallery large ${activeIndex + 1}`}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>

            <div className="bg-white p-3 text-sm text-slate-600 flex items-center justify-between">
              <div>Image {activeIndex + 1} of {IMAGES.length}</div>
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setActiveIndex((prev) => (prev === null ? 0 : (prev - 1 + IMAGES.length) % IMAGES.length))
                  }
                  className="inline-flex items-center px-3 py-1 rounded border"
                >
                  Prev
                </button>
                <button
                  onClick={() =>
                    setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % IMAGES.length))
                  }
                  className="inline-flex items-center px-3 py-1 rounded border"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
