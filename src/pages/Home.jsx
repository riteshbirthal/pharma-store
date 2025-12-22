import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products.js';
import galleryImages from '../data/gallery.js';
import ImageWithFallback from '../components/ImageWithFallback';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import Gallery from '../components/Gallery';

export default function Home() {
  return (
    <Container>
      <Row className="my-5 p-5 bg-light rounded-3">
        <Col md={8}>
          <h1>Shree Shyam Medicos</h1>
          <p className="lead">Trusted care. Real people. Practical solutions.</p>
          <p>
            <a className="btn btn-primary me-2" href="tel:+917056737974">Call Now</a>
            <Link to="/products" className="btn btn-outline-secondary">View Products</Link>
          </p>
        </Col>
        <Col md={4}>
          <ImageWithFallback src={process.env.PUBLIC_URL + '/images/shop.jpg'} alt="Shop" className="img-fluid rounded" />
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <ImageWithFallback src={process.env.PUBLIC_URL + '/images/owner.jpg'} alt="Owner" className="card-img-top" />
            <Card.Body>
              <Card.Title>Dr. Rakesh Kumar</Card.Title>
              <Card.Text>
                Committed to quality and timely service. Ask us about alternatives and availability.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Gallery</Card.Title>
              <Gallery images={galleryImages} />
            </Card.Body>
          </Card>
        </Col>

        <Col md={8}>
          <div className="p-3 bg-white rounded-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2>Popular Items</h2>
              <Link to="/products" className="btn btn-primary">View All</Link>
            </div>
            <p className="text-muted">Reliable brands, affordable prices</p>
            <Row>
              {products.slice(0, 3).map(p => (
                <ProductCard product={p} key={p.id} />
              ))}
            </Row>
          </div>
        </Col>
      </Row>

      <Row className="my-5">
        <Col>
          <div className="p-5 bg-light rounded-3">
            <h2>About Shree Shyam Medicos</h2>
            <p>
              We provide essential medicines and wellness products. Our staff helps you find what you need quickly.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
