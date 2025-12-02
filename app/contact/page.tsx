// app/contact/page.tsx
'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const metadata = {
  title: 'Contact & Location — Shree Shyam Medicos',
  description:
    'Contact Shree Shyam Medicos — address, phone, WhatsApp, hours and Google Maps location. Home delivery and prescription upload via WhatsApp.',
  openGraph: {
    title: 'Contact & Location — Shree Shyam Medicos',
    description:
      'Contact Shree Shyam Medicos — address, phone, WhatsApp, hours and Google Maps location. Home delivery and prescription upload via WhatsApp.',
    type: 'website'
  }
}

const WHATSAPP_NUMBER = '+911234567890' // replace with your WhatsApp number

function openWhatsAppMessage(message: string) {
  const number = WHATSAPP_NUMBER.replace(/[^0-9]/g, '')
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank', 'noopener,noreferrer')
}

export default function ContactPage() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const storeAddress = '123 Main Street, Riverside, State, 400001'
  const storePhone = '+91 12345 67890'
  const storeWhatsapp = WHATSAPP_NUMBER

  return (
    <section className="space-y-8">
      <header>
        <h1 className="text-2xl md:text-3xl font-bold">Contact & Location</h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Reach Shree Shyam Medicos for orders, prescription uploads and queries. We are available 24×7 for emergency needs.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Left column: contact details + hours + CTAs */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-4 border">
            <h2 className="font-semibold">Address</h2>
            <div className="mt-2 text-slate-700">{storeAddress}</div>
            <div className="mt-2 text-sm text-slate-600">Landmark: Near Riverside Park</div>
          </div>

          <div className="bg-white rounded-2xl p-4 border">
            <h2 className="font-semibold">Contact</h2>
            <div className="mt-2 text-slate-700">Phone: <a className="text-primary-500" href={`tel:${storePhone}`}>{storePhone}</a></div>
            <div className="mt-1 text-slate-700">WhatsApp: <a className="text-green-600" href={`https://wa.me/${storeWhatsapp.replace(/[^0-9]/g,'')}`} target="_blank" rel="noreferrer">{storeWhatsapp}</a></div>

            <div className="mt-4 flex gap-3">
              <a href={`tel:${storePhone}`} className="inline-flex items-center px-4 py-2 rounded-full border text-sm">Call</a>
              <button
                onClick={() => openWhatsAppMessage('Hello Shree Shyam Medicos, I need assistance.')}
                className="inline-flex items-center px-4 py-2 rounded-full bg-green-500 text-white text-sm"
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border">
            <h2 className="font-semibold">Hours</h2>
            <table className="mt-3 w-full text-sm text-slate-700">
              <tbody>
                <tr className="border-b"><td className="py-2">Mon</td><td className="py-2">Open 24×7</td></tr>
                <tr className="border-b"><td className="py-2">Tue</td><td className="py-2">Open 24×7</td></tr>
                <tr className="border-b"><td className="py-2">Wed</td><td className="py-2">Open 24×7</td></tr>
                <tr className="border-b"><td className="py-2">Thu</td><td className="py-2">Open 24×7</td></tr>
                <tr className="border-b"><td className="py-2">Fri</td><td className="py-2">Open 24×7</td></tr>
                <tr className="border-b"><td className="py-2">Sat</td><td className="py-2">Open 24×7</td></tr>
                <tr><td className="py-2">Sun</td><td className="py-2">Open 24×7</td></tr>
              </tbody>
            </table>

            <p className="mt-3 text-xs text-slate-500">
              Note: While the store remains open 24×7 for urgent medicine needs, doctor consultations follow OPD timings. For emergencies, please call.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 border">
            <h2 className="font-semibold">Quick Links</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link href="/medicines" className="inline-flex items-center px-3 py-2 rounded-full border text-sm">Medicines</Link>
              <Link href="/services" className="inline-flex items-center px-3 py-2 rounded-full border text-sm">Services</Link>
              <Link href="/doctor" className="inline-flex items-center px-3 py-2 rounded-full border text-sm">Doctor</Link>
              <Link href="/gallery" className="inline-flex items-center px-3 py-2 rounded-full border text-sm">Gallery</Link>
            </div>
          </div>
        </div>

        {/* Right column: map + contact form */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl overflow-hidden border">
            <iframe
              title="Shree Shyam Medicos Location"
              className="w-full h-64"
              src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d372.2893737551299!2d75.80858290966765!3d28.685255956054675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1764624494031!5m2!1sen!2sin`}
            />
          </div>

          <div className="bg-white rounded-2xl p-4 border">
            <h2 className="font-semibold">Send us a message</h2>
            <p className="mt-2 text-sm text-slate-600">Fill this quick form and we will get back to you. (Currently this form opens WhatsApp for immediate contact — can be wired to a backend later.)</p>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                const text = `Contact request from website:%0AName: ${name || '-'}%0APhone: ${phone || '-'}%0AMessage: ${message || '-'}`
                openWhatsAppMessage(text)
              }}
              className="mt-3 grid gap-3"
            >
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="rounded-md border px-3 py-2 text-sm"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone number"
                className="rounded-md border px-3 py-2 text-sm"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message or delivery request"
                className="rounded-md border px-3 py-2 text-sm"
                rows={4}
              />

              <div className="flex gap-2">
                <button type="submit" className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500 text-white text-sm">
                  Send via WhatsApp
                </button>

                <a
                  href={`mailto:info@riversidepharmacy.example?subject=Website%20Contact&body=${encodeURIComponent(
                    `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`
                  )}`}
                  className="inline-flex items-center px-4 py-2 rounded-full border text-sm"
                >
                  Send Email
                </a>
              </div>

              <p className="mt-2 text-xs text-slate-500">
                For prescription uploads: please use WhatsApp to send a clear photo of your prescription. To store and manage uploads, we recommend adding a backend endpoint and secure file storage (S3/Cloud Storage) later.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
