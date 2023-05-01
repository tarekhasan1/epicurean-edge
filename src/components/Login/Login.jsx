import React from "react";
import "./Login.css";
import NavigationBar from "../Navbar/NavigationBar";
import Footer from "../Footer/Footer";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <h2 className="text-center">Please Login</h2>
      <Form className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <p>Hide Password</p>
        <input className="btn btn-secondary px-5" type="submit" name="submit" id="submit" />
        <p>New to Here? <Link to='/signup'>Register</Link></p>
      </Form>
      <Footer></Footer>
    </div>
  );
};

export default Login;
