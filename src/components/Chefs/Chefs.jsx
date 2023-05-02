import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Chefs = () => {
    return (
        <div className='container'>
        <h2 className='my-5 text-center py-4'>Our Talented Food Crafters</h2>
        <Row xs={1} md={2} lg={3} className="g-4 d-flex">
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Chef 1</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <button className='btn btn-secondary'>View Recipes</button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Chef 1</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <button className='btn btn-secondary'>View Recipes</button>
              </Card.Body>
            </Card>
          </Col>
      </Row>
        </div>
    );
};

export default Chefs;