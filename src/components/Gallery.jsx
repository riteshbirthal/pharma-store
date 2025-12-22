import React, { useState } from 'react';
import { Row, Col, Modal } from 'react-bootstrap';
import ImageWithFallback from './ImageWithFallback';

export default function Gallery({ images }) {
  const [showAll, setShowAll] = useState(false);
  const [showImage, setShowImage] = useState(null);

  const handleShowAll = () => setShowAll(true);
  const handleCloseAll = () => setShowAll(false);

  const handleShowImage = (image) => setShowImage(image);
  const handleCloseImage = () => setShowImage(null);

  return (
    <>
      <Row>
        {images.slice(0, 3).map((image, index) => (
          <Col xs={4} key={index} className="mb-3">
            <ImageWithFallback
              src={image.src}
              alt={image.alt}
              className="img-fluid rounded"
              onClick={() => handleShowImage(image)}
              style={{ cursor: 'pointer' }}
            />
          </Col>
        ))}
        {images.length > 3 && (
          <Col xs={4} className="mb-3">
            <div
              className="d-flex justify-content-center align-items-center h-100 bg-light rounded"
              onClick={handleShowAll}
              style={{ cursor: 'pointer' }}
            >
              <span className="fs-3">+</span>
            </div>
          </Col>
        )}
      </Row>

      <Modal show={showAll} onHide={handleCloseAll} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Gallery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {images.map((image, index) => (
              <Col xs={4} key={index} className="mb-3">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="img-fluid rounded"
                  onClick={() => handleShowImage(image)}
                  style={{ cursor: 'pointer' }}
                />
              </Col>
            ))}
          </Row>
        </Modal.Body>
      </Modal>

      <Modal show={!!showImage} onHide={handleCloseImage} centered size="xl">
        {showImage && (
          <ImageWithFallback
            src={showImage.src}
            alt={showImage.alt}
            className="img-fluid"
          />
        )}
      </Modal>
    </>
  );
}