import React from 'react';
import products from '../data/products';
import { Container, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

export default function Products() {
  return (
    <Container>
      <div className="my-4">
        <h2>All Products</h2>
        <p className="text-muted">Browse our catalog</p>
      </div>

      <Row>
        {products.map(p => (
          <ProductCard product={p} key={p.id} />
        ))}
      </Row>
    </Container>
  );
}
