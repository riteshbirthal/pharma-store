import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';
import useTilt from '../hooks/useTilt';
import ImageWithFallback from './ImageWithFallback';

export default function ProductCard({ product }) {
    const tiltRef = useTilt({ maxRotate: 10, tz: 18 });
    return (
        <Col sm={6} md={4} lg={3} key={product.id} className="mb-4">
            <Card ref={tiltRef} className="tilt h-100">
                <div className="img-container">
                    <ImageWithFallback src={process.env.PUBLIC_URL + product.image} alt={product.name} className="card-img-top" />
                </div>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.desc}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <strong>₹{product.price}</strong>
                        <Link to={`/product/${product.id}`} className="btn btn-primary">Details</Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}