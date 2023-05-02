import React from 'react';
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
        <Container>
        <Row xs={1} md={2} lg={3}>
        <Col>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quis!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, fugit!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, fugit!</p>
        </Col>
        </Row>
        </Container>
        </div>
    );
};

export default Footer;