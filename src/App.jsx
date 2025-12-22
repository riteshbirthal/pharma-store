import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Contact from './pages/Contact';
import { SearchProvider } from './context/SearchContext';
import './App.css';

export default function App() {
  return (
    <SearchProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </SearchProvider>
  );
}
