import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="brand">Shree Shyam Medicos</div>

      <nav className={`nav-main ${open? 'open':''}`} aria-label="Main navigation">
        <Link to="/" onClick={()=>setOpen(false)}>Home</Link>
        <Link to="/products" onClick={()=>setOpen(false)}>Products</Link>
        <Link to="/contact" onClick={()=>setOpen(false)}>Contact</Link>
      </nav>

      <div className="nav-actions">
        <input className="search" placeholder="Search" aria-label="Search" />
        <Link to="/contact" className="btn primary" onClick={()=>setOpen(false)}>Contact</Link>
        <button className="mobile-toggle" onClick={()=>setOpen(s=>!s)} aria-label="Toggle menu" aria-expanded={open}>{open? '✕' : '☰'}</button>
      </div>
    </header>
  )
}
