import React from 'react'
import { useParams, Link } from 'react-router-dom'
import products from '../data/products'

export default function Product(){
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  if(!product) return (
    <div>
      <p>Product not found</p>
      <Link to="/products" className="btn">Back to products</Link>
    </div>
  )

  return (
    <div className="product-detail">
      <div className="product-detail-main">
        <img src={product.image} alt={product.name} className="product-image"/>
        <div>
          <h1>{product.name}</h1>
          <p className="muted">{product.desc}</p>
          <p className="price">₹{product.price}</p>
          <p>Stock: {product.stock}</p>
          <div style={{marginTop:12}}>
            <button className="btn primary">Add to cart</button>
            <Link to="/contact" className="btn outline" style={{marginLeft:8}}>Contact</Link>
          </div>
        </div>
      </div>

      <div className="about">
        <h3>Usage & details</h3>
        <p>For general use only. Read instructions and consult a doctor if needed.</p>
      </div>
    </div>
  )
}
