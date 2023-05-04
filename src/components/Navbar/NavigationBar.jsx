import React, { useContext } from 'react';
import { NavDropdown, Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationBar.css'
import { AuthContext } from '../../providers/AuthProvider';

const NavigationBar = () => {

  const {user, logOut } = useContext(AuthContext);

  const handleLogout = () =>{
    logOut()
    .then()
    .catch(error =>{
      console.log(error);
    })
  }

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
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
          <Nav>
          {
            user ? <Nav.Link><i className="fa-solid fa-circle-user fs-2"></i></Nav.Link> : <Nav.Link href="#"><img className='img-control' src={user} alt="" /></Nav.Link>
          }
            {user ? <Link  className='d-flex align-items-center text-decoration-none'>
            <Button onClick={handleLogout} variant="secondary">Log Out</Button>
            </Link>:
            <Link to="/login">
            <Button variant="secondary">Log In</Button>
            </Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default NavigationBar;