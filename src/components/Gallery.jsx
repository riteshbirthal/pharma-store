import React, { useState } from 'react';
import { Row, Col, Modal } from 'react-bootstrap';
import ImageWithFallback from './ImageWithFallback';
import useWindowSize from '../hooks/useWindowSize';

export default function Gallery({ images }) {
  const [showAll, setShowAll] = useState(false);
  const [showImage, setShowImage] = useState(null);
  const { width } = useWindowSize();

  const handleShowAll = () => setShowAll(true);
  const handleCloseAll = () => setShowAll(false);

  const handleShowImage = (image) => setShowImage(image);
  const handleCloseImage = () => setShowImage(null);

  const imagesToShow = width < 768 ? 2 : 3;

  return (
    <>
      <Row>
        {images.slice(0, imagesToShow).map((image, index) => (
          <Col xs={4} key={index} className="mb-3 p-1">
            <div className="img-container gallery-image-wrapper rounded">
              <ImageWithFallback
                src={process.env.PUBLIC_URL + image.src}
                alt={image.alt}
                className="img-fluid"
                onClick={() => handleShowImage(image)}
                style={{ cursor: 'pointer' }}
              />
              {index === imagesToShow - 1 && images.length > imagesToShow && (
                <div className="gallery-image-overlay" onClick={handleShowAll}>
                  <span className="fs-3">+{images.length - imagesToShow}</span>
                </div>
              )}
            </div>
          </Col>
        ))}
      </Row>

      <Modal show={showAll} onHide={handleCloseAll} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Gallery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {images.map((image, index) => (
              <Col xs={4} key={index} className="mb-3 p-1">
                <div className="img-container rounded">
                    <ImageWithFallback
                    src={process.env.PUBLIC_URL + image.src}
                    alt={image.alt}
                    className="img-fluid"
                    onClick={() => handleShowImage(image)}
                    style={{ cursor: 'pointer' }}
                    />
                </div>
              </Col>
            ))}
          </Row>
        </Modal.Body>
      </Modal>

      <Modal show={!!showImage} onHide={handleCloseImage} centered fullscreen>
        {showImage && (
          <ImageWithFallback
            src={process.env.PUBLIC_URL + showImage.src}
            alt={showImage.alt}
            className="img-fluid"
          />
        )}
      </Modal>
    </>
  );
}