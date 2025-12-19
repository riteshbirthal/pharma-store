import React from 'react'
import { Link } from 'react-router-dom'
import products from '../data/products'

export default function Home(){
  return (
    <div>
      <section className="hero-inner">
        <div>
          <h1>Shree Shyam Medicos</h1>
          <p className="tag">Trusted care. Real people. Practical solutions.</p>
          <div className="hero-ctas">
            <a className="btn primary" href="tel:+919876543210">Call Now</a>
            <Link to="/products" className="btn outline">View Products</Link>
          </div>
        </div>
        <img src="/images/shop.svg" alt="Shop" className="hero-photo" />
      </section>

      <section className="section">
        <div className="cards-row">
          <aside className="owner-card">
            <img src="/images/owner.svg" alt="Owner" className="owner-photo" />
            <div className="owner-info">
              <h3>Dr. Rakesh Kumar</h3>
              <p>Committed to quality and timely service. Ask us about alternatives and availability.</p>
            </div>
          </aside>

          <div className="products">
            <div className="section-head">
              <h2>Popular Items</h2>
              <small className="muted">Reliable brands, affordable prices</small>
            </div>

            <div className="product-grid">
              {products.slice(0,4).map(p => (
                <article key={p.id} className="product-card">
                  <div className="product-thumb" aria-hidden></div>
                  <div className="product-body">
                    <h4>{p.name}</h4>
                    <p className="muted">{p.desc}</p>
                    <div className="product-foot">
                      <div className="price">₹{p.price}</div>
                      <Link to={`/product/${p.id}`} className="btn">Details</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="about">
          <h2>About Shree Shyam Medicos</h2>
          <p>
            We provide essential medicines and wellness products. Our staff helps you find what you need quickly.
          </p>
        </div>
      </section>
    </div>
  )
}
