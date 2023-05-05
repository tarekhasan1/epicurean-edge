import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import './ContactUs.css';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
      setName('');
      setEmail('');
      setMessage('');
      setShowAlert(true);
    };
  
    return (
      <div className='background-control height-control' loading="lazy">
      <Container className="mx-auto">
        <Row>
          <Col xs={12} md={8} lg={6} className="mx-auto">
            <div className="contact-form">
              <h1 className='text-center mb-3'>Contact Us</h1>
              {showAlert && (
                <Alert className='bg-secondary border-0 me-0 text-warning text-center'  onClose={() => setShowAlert(false)} dismissible>
                  Thank you for your message! We will get back to you soon.
                </Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3' controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>
  
                <Form.Group className='mb-3' controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
  
                <Form.Group className='mb-3' controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </Form.Group>
  
                <Button className='w-25 my-3' variant="secondary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
  );
};

export default ContactUs;
