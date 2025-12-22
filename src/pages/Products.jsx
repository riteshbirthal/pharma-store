import React, { useContext } from 'react';
import products from '../data/products.js';
import { Container, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { SearchContext } from '../context/SearchContext';

export default function Products() {
  const { searchQuery } = useContext(SearchContext);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <div className="my-4">
        <h2>All Products</h2>
        <p className="text-muted">Browse our catalog</p>
      </div>

      <Row>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(p => (
            <ProductCard product={p} key={p.id} />
          ))
        ) : (
          <p>No products found matching your search.</p>
        )}
      </Row>
    </Container>
  );
}
