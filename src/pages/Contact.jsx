import React, { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({name:'', phone:'', message:''})
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const onChange = e => setForm(s => ({...s, [e.target.name]: e.target.value}))

  function submit(e){
    e.preventDefault()
    if(!form.name || !form.phone || !form.message){ setError('Please fill all fields'); return }
    setError('')
    // mock submit
    setTimeout(()=> setSent(true), 600)
  }

  if(sent) return (
    <div className="card success">
      <h3>Thanks — we'll get back to you shortly.</h3>
      <p>Expect a call within one business day.</p>
    </div>
  )

  return (
    <div className="contact-page">
      <div className="contact-grid">
        <div className="contact-left">
          <div className="card contact-card">
            <h2>Contact Us</h2>
            <p className="muted">Have a question about a product or need help? Send us a message or call directly.</p>
            <form onSubmit={submit} className="contact-form">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" value={form.name} onChange={onChange} placeholder="Your full name" />

              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" value={form.phone} onChange={onChange} placeholder="+91 9XXXXXXXXX" />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={form.message} onChange={onChange} rows={5} placeholder="How can we help?" />

              {error && <div className="error">{error}</div>}

              <div className="form-actions">
                <button className="btn primary" type="submit">Send Message</button>
                <a className="btn outline" href="tel:+917056737974" style={{marginLeft:8}}>Call</a>
              </div>
            </form>
          </div>
        </div>

        <aside className="contact-info card">
          <h3>Reach Us</h3>
          <div className="info-item">
            <strong>Phone</strong>
            <div className="muted">+91 70567-37974</div>
          </div>
          <div className="info-item">
            <strong>Address</strong>
            <div className="muted">Main Road, Near Bus Stand Devrala, Bhiwani</div>
          </div>
          <div className="info-item">
            <strong>Hours</strong>
            <div className="muted">Mon — Sun: 8:00 AM — 9:00 PM</div>
          </div>

          <div className="info-item location">
            <strong>Location</strong>
            {/* Show friendly address and map */}
            {/* <div className="muted">Main Road, Near Bus Stand Devrala, Bhiwani</div> */}

            {/* lat / lng used for embeds & links */}
            {/* eslint-disable-next-line no-unused-vars */}
            {/* define inline so they are easy to change */}
            <div style={{display:'none'}}>{/* placeholder to satisfy linter if needed */}</div>
            <div className="map-embed">
              {(() => {
                const lat = 28.685255956054675
                const lng = 75.80858290966765
                const q = `${lat},${lng}`
                return (
                  <>
                    <iframe
                      title="Shree Shyam Medicos location"
                      src={`https://www.google.com/maps?q=${q}&z=18&output=embed`}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />

                    <div className="map-actions">
                      <a className="btn outline" href={`https://www.google.com/maps/search/?api=1&query=${q}`} target="_blank" rel="noreferrer">Open in Google Maps</a>
                      <a className="btn" href={`https://www.google.com/maps/dir/?api=1&destination=${q}`} target="_blank" rel="noreferrer" style={{marginLeft:8}}>Get directions</a>
                    </div>
                  </>
                )
              })()}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
