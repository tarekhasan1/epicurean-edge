import React from 'react';
import { NavDropdown, Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationBar.css'

const NavigationBar = () => {
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" className='background-color' variant='dark'>
      <Container>
        <Navbar.Brand href="/">Epicurean-Edge</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
          <Nav>
            <Link to="/signup">
            <Button variant="secondary">Sign Up</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default NavigationBar;