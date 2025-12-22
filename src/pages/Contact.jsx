import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const onChange = e => setForm(s => ({ ...s, [e.target.name]: e.target.value }));

  function submit(e) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      setError('Please fill all fields');
      return;
    }
    setError('');
    // mock submit
    setTimeout(() => setSent(true), 600);
  }

  if (sent) {
    return (
      <Container>
        <Alert variant="success" className="my-5 text-center">
          <h3>Thanks — we'll get back to you shortly.</h3>
          <p>Expect a call within one business day.</p>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Row>
        <Col md={6} className="mb-4 mb-md-0">
          <Card className="shadow-sm">
            <Card.Body className="p-4">
              <Card.Title>Contact Us</Card.Title>
              <Card.Text className="text-muted">
                Have a question about a product or need help? Send us a message or call directly.
              </Card.Text>
              <Form onSubmit={submit}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="name" value={form.name} onChange={onChange} placeholder="Your full name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="text" name="phone" value={form.phone} onChange={onChange} placeholder="+91 9XXXXXXXXX" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" name="message" value={form.message} onChange={onChange} rows={5} placeholder="How can we help?" />
                </Form.Group>
                {error && <Alert variant="danger">{error}</Alert>}
                <Button variant="primary" type="submit" className="me-2">Send Message</Button>
                <a className="btn btn-outline-secondary" href="tel:+917056737974">Call</a>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Reach Us</Card.Title>
              <p><strong>Phone:</strong> +91 70567-37974</p>
              <p><strong>Address:</strong> Main Road, Near Bus Stand Devrala, Bhiwani</p>
              <p><strong>Hours:</strong> Mon — Sun: 8:00 AM — 9:00 PM</p>
            </Card.Body>
          </Card>
          <Card className="mt-4 shadow-sm">
            <Card.Body>
              <Card.Title>Location</Card.Title>
              <div className="map-embed">
                {(() => {
                  const lat = 28.685255956054675;
                  const lng = 75.80858290966765;
                  const q = `${lat},${lng}`;
                  return (
                    <>
                      <iframe
                        title="Shree Shyam Medicos location"
                        src={`https://www.google.com/maps?q=${q}&z=18&output=embed`}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        style={{ border: 0, width: '100%', height: '240px', borderRadius: '8px' }}
                      />
                      <div className="mt-2">
                        <a className="btn btn-outline-primary me-2" href={`https://www.google.com/maps/search/?api=1&query=${q}`} target="_blank" rel="noreferrer">Open in Google Maps</a>
                        <a className="btn btn-primary" href={`https://www.google.com/maps/dir/?api=1&destination=${q}`} target="_blank" rel="noreferrer">Get directions</a>
                      </div>
                    </>
                  );
                })()}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
