import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout(){
  return (
    <div className="app">
      <div className="site-bg" aria-hidden></div>
      <Header />
      <main className="container">
        <div style={{width:'100%'}}>
          <Outlet />
        </div>
        <aside className="sidebar">
          <div className="gallery">
            <h3>Gallery</h3>
            <div className="gallery-grid">
              <ImageWithFallback src={process.env.PUBLIC_URL + '/images/shop.jpg'} alt="Shop view"/>
              <ImageWithFallback src={process.env.PUBLIC_URL + '/images/owner.jpg'} alt="Owner"/>
            </div>
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  )
}
