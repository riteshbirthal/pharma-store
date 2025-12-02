'use client'
import React, { useState } from 'react'
import DoctorCard from '../../components/DoctorCard'

const metadata = {
  title: 'Our Doctor — Shree Shyam Medicos',
  description:
    'Meet Dr. Anita Sharma — General Physician available for OPD consultations at Shree Shyam Medicos. See qualifications, experience and OPD timings.',
  openGraph: {
    title: 'Our Doctor — Dr. Anita Sharma — Shree Shyam Medicos',
    description:
      'Meet Dr. Anita Sharma — General Physician available for OPD consultations at Shree Shyam Medicos. See qualifications, experience and OPD timings.',
    type: 'profile'
  }
}

const WHATSAPP_NUMBER = '+911234567890' // replace with your store/doctors WhatsApp

function openWhatsAppWithMessage(message: string) {
  const encoded = encodeURIComponent(message)
  // strip non-digits for wa.me
  const number = WHATSAPP_NUMBER.replace(/[^0-9]/g, '')
  const url = `https://wa.me/${number}?text=${encoded}`
  window.open(url, '_blank', 'noopener,noreferrer')
}

export default function DoctorPage() {
  // form state (very light — only used to compose the WhatsApp message)
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [concern, setConcern] = useState('')
  const [preferredTime, setPreferredTime] = useState('Any')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const message = `Hello, I would like to request a consultation with Dr. Anita Sharma.%0AName: ${name || '-'}%0AAge: ${
      age || '-'
    }%0AConcern: ${concern || '-'}%0APreferred time: ${preferredTime}%0A- Sent from Shree Shyam Medicos website`
    openWhatsAppWithMessage(message)
  }

  return (
    <section className="space-y-8">
      <header>
        <h1 className="text-2xl md:text-3xl font-bold">Dr. Anita Sharma — General Physician</h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          MBBS, MD (General Medicine) — experienced in outpatient care, chronic disease management,
          and medication review. Available for OPD consultations at Shree Shyam Medicos.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 items-start">
        {/* Left - profile card + details */}
        <div className="space-y-6">
          <DoctorCard />

          <div className="bg-white rounded-2xl p-4 border">
            <h2 className="font-semibold">Qualifications</h2>
            <ul className="mt-2 text-sm text-slate-600 list-disc list-inside space-y-1">
              <li>MBBS — State Medical College</li>
              <li>MD (General Medicine) — National Medical Institute</li>
              <li>Certified in Diabetes Care and Hypertension Management</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-4 border">
            <h2 className="font-semibold">Experience</h2>
            <div className="mt-2 text-sm text-slate-600">
              <p>12+ years of clinical experience in outpatient and primary care settings. Skilled in:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Chronic disease management (diabetes, hypertension)</li>
                <li>Medication review & polypharmacy counselling</li>
                <li>Minor procedures and emergency first-response</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border">
            <h2 className="font-semibold">Consultation Modes</h2>
            <div className="mt-2 text-sm text-slate-600">
              <p>- In-person OPD at Shree Shyam Medicos</p>
              <p>- Phone/WhatsApp consultation for follow-ups (where appropriate)</p>
            </div>
          </div>
        </div>

        {/* Right - OPD timings, contact, consultation request form */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-4 border">
            <h2 className="font-semibold">OPD Timings</h2>
            <table className="mt-3 text-sm w-full text-slate-600">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 font-medium">Monday</td>
                  <td className="py-2">10:00 AM — 1:00 PM</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Tuesday</td>
                  <td className="py-2">10:00 AM — 1:00 PM</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Wednesday</td>
                  <td className="py-2">10:00 AM — 1:00 PM</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Thursday</td>
                  <td className="py-2">10:00 AM — 1:00 PM</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Friday</td>
                  <td className="py-2">10:00 AM — 1:00 PM</td>
                </tr>
                <tr className="">
                  <td className="py-2 font-medium">Saturday</td>
                  <td className="py-2">10:00 AM — 12:00 PM</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-3 text-xs text-slate-500">
              Note: Emergency consultation available outside hours — call the store for urgent needs.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 border">
            <h2 className="font-semibold">Contact</h2>
            <div className="mt-2 flex flex-col gap-2">
              <a
                href="tel:+911234567890"
                className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold border"
              >
                Call Clinic
              </a>

              <button
                onClick={() =>
                  openWhatsAppWithMessage('Hello, I want to consult Dr. Anita Sharma. Please help me book a slot.')
                }
                className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold bg-green-500 text-white"
              >
                Consult via WhatsApp
              </button>
            </div>
          </div>

          <form className="bg-white rounded-2xl p-4 border" onSubmit={handleSubmit}>
            <h3 className="font-semibold">Request Consultation (via WhatsApp)</h3>

            <label className="block mt-3 text-sm">
              <span className="text-xs text-slate-600">Your name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
                placeholder="Full name"
              />
            </label>

            <label className="block mt-3 text-sm">
              <span className="text-xs text-slate-600">Age</span>
              <input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
                placeholder="e.g., 34"
                inputMode="numeric"
              />
            </label>

            <label className="block mt-3 text-sm">
              <span className="text-xs text-slate-600">Brief concern</span>
              <textarea
                value={concern}
                onChange={(e) => setConcern(e.target.value)}
                className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
                placeholder="Short description (symptoms, medication, etc.)"
                rows={3}
              />
            </label>

            <label className="block mt-3 text-sm">
              <span className="text-xs text-slate-600">Preferred time</span>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
              >
                <option>Any</option>
                <option>Morning (9AM - 12PM)</option>
                <option>Afternoon (12PM - 4PM)</option>
                <option>Evening (4PM - 8PM)</option>
              </select>
            </label>

            <div className="mt-4 flex gap-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold bg-primary-500 text-white"
              >
                Send Request to WhatsApp
              </button>

              <button
                type="button"
                onClick={() =>
                  openWhatsAppWithMessage(
                    `Hi, this is ${name || '—'}. I want to consult Dr. Anita Sharma. Age: ${age || '—'}. Concern: ${
                      concern || '—'
                    }. Preferred time: ${preferredTime}.`
                  )
                }
                className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold border"
              >
                Quick WhatsApp
              </button>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              By sending this request you agree to share the above details with Shree Shyam Medicos staff for the
              purpose of booking and consultation. No medical advice will be provided through this form.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
