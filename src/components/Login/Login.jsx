import React, { useContext } from "react";
import "./Login.css";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext);



  return (
    <Container className="mx-auto w-50">
      <h2 className="text-center">Please Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required/>
        </Form.Group>
        <p>Hide Password</p>
        <input className="btn btn-secondary px-5 mb-3" type="submit" name="submit" id="submit" /><br />
        <Form.Text className="text-danger">
        error message
        </Form.Text>
        <div className="text-center">
        <Button className="px-5 mb-3" variant="outline-secondary">Sign in with Google</Button>
        <br />
        <Button className="px-5 mb-3" variant="outline-secondary">Sign in with Github</Button>
        </div>
        <p>Don't have an Account? <Link to='/signup'>Register</Link></p>
      </Form>
    </Container>
  );
};

export default Login;
