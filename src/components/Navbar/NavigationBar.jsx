import React, { useContext } from "react";
import { NavDropdown, Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./NavigationBar.css";
import { AuthContext } from "../../providers/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="background-color"
        variant="dark"
      >
        <Container>
          <Navbar.Brand className="text-success" href="/">Epicurean-Edge</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <NavLink
                className={({ isActive }) => (isActive ? "active-route" : "")}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active-route" : "")}
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active-route" : "")}
              >
                Contact Us
              </NavLink>
            </Nav>
            <Nav>
              {user ? (
                <>
                  <img
                    className="img-control me-2"
                    src={user.photoURL}
                    alt=""
                    title={user.displayName}
                  />
                  <Link className="d-flex align-items-center text-decoration-none">
                    <Button onClick={handleLogout} variant="secondary">
                      Log Out
                    </Button>
                  </Link>
                </>
              ) : (
                <Link to="/login">
                  <Button variant="secondary">Log In</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
