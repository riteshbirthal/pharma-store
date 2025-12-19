import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout(){
  return (
    <div className="app">
      <Header />
      <main className="container">
        <div style={{width:'100%'}}>
          <Outlet />
        </div>
        <aside className="sidebar">
          <div className="gallery">
            <h3>Gallery</h3>
            <img src="/images/shop.svg" alt="Shop view"/>
            <img src="/images/owner.svg" alt="Owner"/>
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  )
}
