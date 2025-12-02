// app/testimonials/page.tsx
'use client'

import React, { useEffect, useState } from 'react'

const metadata = {
  title: 'Testimonials — Shree Shyam Medicos',
  description: 'Customer reviews and testimonials for Shree Shyam Medicos — read what our customers say about our service.',
  openGraph: {
    title: 'Testimonials — Shree Shyam Medicos',
    description: 'Customer reviews and testimonials for Shree Shyam Medicos — read what our customers say about our service.',
    type: 'website'
  }
}

const REVIEWS = [
  {
    id: 1,
    name: 'Suman R.',
    text: 'Excellent service — they delivered medicine late at night when I needed it urgently. Very thankful!',
    rating: 5
  },
  {
    id: 2,
    name: 'Priya K.',
    text: 'Friendly staff and quick responses on WhatsApp. The pharmacist explained the medicines clearly.',
    rating: 5
  },
  {
    id: 3,
    name: 'Rahul P.',
    text: 'Good selection of diabetes supplies and helpful advice on usage and dosing.',
    rating: 4
  },
  {
    id: 4,
    name: 'Meera S.',
    text: 'Clean store and prompt home delivery. The loyalty discount was pleasant surprise.',
    rating: 5
  },
  {
    id: 5,
    name: 'Amit T.',
    text: 'I appreciate the privacy and care when handling prescriptions. Professional staff.',
    rating: 5
  }
]

export default function TestimonialsPage() {
  const [index, setIndex] = useState(0)

  // Auto-advance carousel every 5s
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % REVIEWS.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl md:text-3xl font-bold">What our customers say</h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Real feedback from customers who used our medicines, home delivery and consultation services.
        </p>
      </header>

      {/* Carousel */}
      <div className="relative bg-white rounded-2xl border p-6">
        <div className="flex items-start gap-6">
          <div className="flex-1">
            <div className="text-sm text-slate-500">Featured review</div>
            <div className="mt-3">
              <div className="text-lg font-semibold">{REVIEWS[index].name}</div>
              <div className="mt-2 text-slate-700">{REVIEWS[index].text}</div>
              <div className="mt-3 text-xs text-slate-500">Rating: {'★'.repeat(REVIEWS[index].rating)}</div>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            {REVIEWS.map((r, i) => (
              <button
                key={r.id}
                onClick={() => setIndex(i)}
                aria-label={`Show review ${i + 1}`}
                className={`h-3 w-3 rounded-full ${i === index ? 'bg-primary-500' : 'bg-slate-300'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Grid of reviews */}
      <div>
        <h2 className="text-lg font-semibold">All reviews</h2>
        <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <article key={r.id} className="bg-white rounded-2xl border p-4">
              <div className="flex items-center justify-between">
                <div className="font-medium">{r.name}</div>
                <div className="text-xs text-slate-500">{'★'.repeat(r.rating)}</div>
              </div>
              <p className="mt-3 text-sm text-slate-700">{r.text}</p>
            </article>
          ))}
        </div>
      </div>

      <p className="text-xs text-slate-500">
        Developer note: Replace the static `REVIEWS` array with a reviews API or integrate with a review provider (Google Reviews, Trustpilot). If you plan to accept new reviews on-site, add moderation before publishing.
      </p>
    </section>
  )
}
