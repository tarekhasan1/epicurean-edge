import React from 'react';
import { NavDropdown, Container, Nav, Navbar, Button } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Epicurean-Edge</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/chefs">Chefs</Nav.Link>
            <Nav.Link href="/recipes">Recipes</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#memes">
            <Button variant="secondary">Register</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default NavigationBar;