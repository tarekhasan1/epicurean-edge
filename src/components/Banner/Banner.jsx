import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner" loading="lazy">
      <Container>
        <Row>
          <Col md={6}>
            <h1 className='text-success'>Epicurean Edge</h1>
            <h1>Authentic Thai Cuisine</h1>
            <p>Discover the delicious flavors of Thailand</p>
            <button className="btn btn-warning">View Offer</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
