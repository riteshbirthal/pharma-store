// app/services/page.tsx
'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const metadata = {
  title: 'Services — Shree Shyam Medicos',
  description:
    'Services at Shree Shyam Medicos: home delivery, prescription upload via WhatsApp, BP/sugar checks, loyalty program and monthly refill reminders.',
  openGraph: {
    title: 'Services — Shree Shyam Medicos',
    description:
      'Services at Shree Shyam Medicos: home delivery, prescription upload via WhatsApp, BP/sugar checks, loyalty program and monthly refill reminders.',
    type: 'website'
  }
}

const WHATSAPP_NUMBER = '+911234567890' // replace with your store WhatsApp

function openWhatsApp(prefill: string) {
  const number = WHATSAPP_NUMBER.replace(/[^0-9]/g, '')
  const encoded = encodeURIComponent(prefill)
  const url = `https://wa.me/${number}?text=${encoded}`
  window.open(url, '_blank', 'noopener,noreferrer')
}

export default function ServicesPage() {
  const [address, setAddress] = useState('')
  const [refillName, setRefillName] = useState('')
  const [refillPhone, setRefillPhone] = useState('')
  const [reminderDate, setReminderDate] = useState('')

  return (
    <section className="space-y-8">
      <header>
        <h1 className="text-2xl md:text-3xl font-bold">Our Services</h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Shree Shyam Medicos offers a range of services to make healthcare simple — from fast home delivery to free BP/sugar checks.
          Below are quick actions you can use right now; forms are lightweight and can be connected to your backend later.
        </p>
      </header>

      {/* Services grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Home Delivery */}
        <div className="bg-white rounded-2xl p-5 border">
          <h2 className="font-semibold">Home Delivery</h2>
          <p className="mt-2 text-slate-600 text-sm">
            Place an order and get medicines delivered to your door. We support same-day delivery within our coverage area.
          </p>

          <div className="mt-4 space-y-3">
            <label className="block text-sm">
              <span className="sr-only">Delivery address</span>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter delivery address"
                className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
              />
            </label>

            <div className="flex gap-2">
              <button
                onClick={() =>
                  openWhatsApp(
                    `Hello Shree Shyam Medicos, I'd like to request home delivery. Address: ${address || '—'}. Please guide me with order and payment options.`
                  )
                }
                className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold bg-primary-500 text-white"
              >
                Request via WhatsApp
              </button>
              <Link href="/contact" className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold border">
                Delivery Areas & Charges
              </Link>
            </div>

            <p className="text-xs text-slate-500">
              Note: For urgent medicine requests outside working hours, message on WhatsApp or call the store directly.
            </p>
          </div>
        </div>

        {/* Prescription via WhatsApp */}
        <div className="bg-white rounded-2xl p-5 border">
          <h2 className="font-semibold">Prescription Upload (via WhatsApp)</h2>
          <p className="mt-2 text-slate-600 text-sm">
            Send a photo of your prescription on WhatsApp and our team will confirm availability and prepare your order.
          </p>

          <div className="mt-4 space-y-3">
            <div className="text-sm text-slate-700">How to send</div>
            <ol className="list-decimal list-inside text-sm text-slate-600">
              <li>Open WhatsApp and start a chat with our store number.</li>
              <li>Attach the prescription photo and include patient name & delivery address.</li>
              <li>Wait for confirmation — we’ll reply with availability and estimated delivery time.</li>
            </ol>

            <button
              onClick={() => openWhatsApp('Hello, I want to upload a prescription.')}
              className="mt-3 inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold bg-green-500 text-white"
            >
              Send Prescription on WhatsApp
            </button>

            <p className="mt-2 text-xs text-slate-500">
              We never dispense Schedule X drugs without a valid prescription. Please ensure images are clear and prescriptions legible.
            </p>
          </div>
        </div>

        {/* BP / Sugar Check */}
        <div className="bg-white rounded-2xl p-5 border">
          <h2 className="font-semibold">BP / Sugar Check</h2>
          <p className="mt-2 text-slate-600 text-sm">
            Get free baseline BP and random blood sugar checks at our store. No appointment required — drop in during OPD hours.
          </p>

          <div className="mt-4">
            <div className="text-sm font-medium">Quick tips</div>
            <ul className="mt-2 text-sm text-slate-600 list-disc list-inside">
              <li>Bring your medication list for accurate counselling.</li>
              <li>For sugar testing, fast for 8 hours if you require fasting glucose.</li>
            </ul>

            <div className="mt-4 flex gap-2">
              <Link href="/contact" className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold border">
                Visit Us
              </Link>
              <a
                onClick={(e) => {
                  e.preventDefault()
                  openWhatsApp('Hello, I would like to check BP/sugar. Is it available now?')
                }}
                className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold bg-primary-500 text-white cursor-pointer"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Loyalty Program */}
        <div className="bg-white rounded-2xl p-5 border">
          <h2 className="font-semibold">Loyalty Program</h2>
          <p className="mt-2 text-slate-600 text-sm">
            Earn points for purchases and redeem them for discounts. Points are tracked on your phone number — no separate card needed.
          </p>

          <div className="mt-4">
            <div className="text-sm font-medium">Register for loyalty</div>
            <p className="mt-2 text-sm text-slate-600">Register by providing your name and phone number. We'll assign points on eligible purchases.</p>

            <div className="mt-3">
              <button
                onClick={() => openWhatsApp('Hello, I want to register for the Shree Shyam Medicos loyalty program.')}
                className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold bg-green-500 text-white"
              >
                Register via WhatsApp
              </button>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Developer note: connect registration to a backend to store member details and points. We can later show member points in a customer portal.
            </p>
          </div>
        </div>

        {/* Monthly Refill Reminder */}
        <div className="bg-white rounded-2xl p-5 border md:col-span-2">
          <h2 className="font-semibold">Monthly Refill Reminder</h2>
          <p className="mt-2 text-slate-600 text-sm">
            Sign up to receive monthly reminders for recurring medications. We'll send a WhatsApp reminder and prepare your refill.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              // Lightweight client-side reminder: open WhatsApp with details (replace with API later)
              openWhatsApp(
                `Hello, please set a monthly refill reminder. Name: ${refillName || '—'}, Phone: ${refillPhone ||
                  '—'}, Start date: ${reminderDate || '—'}.`
              )
            }}
            className="mt-4 grid gap-3 grid-cols-1 md:grid-cols-3"
          >
            <input
              value={refillName}
              onChange={(e) => setRefillName(e.target.value)}
              placeholder="Full name"
              className="rounded-md border px-3 py-2 text-sm col-span-1 md:col-span-1"
            />
            <input
              value={refillPhone}
              onChange={(e) => setRefillPhone(e.target.value)}
              placeholder="Phone number"
              className="rounded-md border px-3 py-2 text-sm col-span-1 md:col-span-1"
            />
            <input
              value={reminderDate}
              onChange={(e) => setReminderDate(e.target.value)}
              placeholder="First reminder date (YYYY-MM-DD)"
              className="rounded-md border px-3 py-2 text-sm col-span-1 md:col-span-1"
            />

            <div className="md:col-span-3 mt-2 flex gap-2">
              <button type="submit" className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold bg-primary-500 text-white">
                Set Reminder (via WhatsApp)
              </button>
              <Link href="/contact" className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold border">
                Contact for Help
              </Link>
            </div>

            <p className="text-xs text-slate-500 md:col-span-3">
              Note: This form currently opens WhatsApp to create a reminder message. To persist reminders, connect this form to your backend (FastAPI or similar) and schedule server-side notifications.
            </p>
          </form>
        </div>
      </div>

      {/* Developer notes for future backend integration */}
      <aside className="mt-4 text-sm text-slate-500">
        <strong>Developer notes:</strong>
        <ul className="list-disc list-inside mt-2">
          <li>Implement file uploads (prescription photos) with a secure storage service (S3, Cloud Storage) and a server endpoint to validate uploads.</li>
          <li>Use authenticated API for loyalty program and refill reminders to associate data with a phone number or customer account.</li>
          <li>For home delivery, integrate a small order-management API that accepts order items, address and payment method.</li>
        </ul>
      </aside>
    </section>
  )
}
