import React from 'react'
import products from '../data/products'
import { Link } from 'react-router-dom'

export default function Products(){
  return (
    <div>
      <div className="section-head">
        <h2>All Products</h2>
        <small className="muted">Browse our catalog</small>
      </div>

      <div className="product-grid" style={{marginTop:12}}>
        {products.map(p => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.name} className="product-thumb-image"/>
            <div className="product-body">
              <h4>{p.name}</h4>
              <p className="muted">{p.desc}</p>
              <div className="product-foot">
                <div className="price">₹{p.price}</div>
                <Link to={`/product/${p.id}`} className="btn">Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
