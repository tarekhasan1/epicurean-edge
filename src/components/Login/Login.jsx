import React, { useContext, useState } from "react";
import "./Login.css";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const [error, setError] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || '/';


    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        setError("");
        signIn(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace: true});
        })
        .catch(err =>{
            console.log(err);
            setError("Login Failed! Try Again");
        })
    }


  return (
    <div className="d-flex align-items-center justify-content-center height-control">
    <Container className="mx-auto w-50">
      <h2 className="text-center">Please Login</h2>
      <Form onSubmit={handleLogin}>
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
        {
            error && <Form.Text className="text-danger">
            {error}
            </Form.Text>
        }
        <div className="text-center">
        <Button className="px-5 mb-3" variant="outline-secondary"><i className="fa-brands fa-google"></i> Sign in with Google</Button>
        <br />
        <Button className="px-5 mb-3" variant="outline-secondary"><i className="fa-brands fa-github"></i> Sign in with Github</Button>
        </div>
        <p>Don't have an Account? <Link className="fs-3 register-btn" to='/signup'> Register</Link></p>
      </Form>
    </Container>
    </div>
  );
};

export default Login;
