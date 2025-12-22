import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products.js';
import ImageWithFallback from '../components/ImageWithFallback';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

export default function Product() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <Container className="text-center my-5">
        <p>Product not found</p>
        <Link to="/products" className="btn btn-primary">Back to products</Link>
      </Container>
    );
  }

  return (
    <Container>
      <Row className="my-5">
        <Col md={6} className="mb-4 mb-md-0">
          <div className="img-container">
            <ImageWithFallback src={process.env.PUBLIC_URL + product.image} alt={product.name} className="img-fluid rounded" />
          </div>
        </Col>
        <Col md={6} className="text-center text-md-start">
          <h1>{product.name}</h1>
          <p className="text-muted">{product.desc}</p>
          <h2>₹{product.price}</h2>
          <p>Stock: {product.stock}</p>
          <Button variant="primary" className="me-2">Add to cart</Button>
          <Link to="/contact" className="btn btn-outline-secondary">Contact</Link>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Usage & details</Card.Title>
              <Card.Text>
                {product.usage}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
