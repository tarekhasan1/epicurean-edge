import React, { useContext, useState } from "react";
import "./SignUp.css";
import Footer from "../Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    console.log(name, email, photo, password, confirm);

    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please add at least one uppercase");
      return;
    } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setError("Please add at least two digits");
      return;
    } else if (password.length < 6) {
      setError("Please add at least 6 character in your password");
      return;
    } else if (!(password === confirm)) {
      setError("Password Not Matched! Please Check!");
      return;
    }

    try {
      await createUser(email, password, name, photo);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <div className="signup-background-control">
    <div>
      <div className="container-fluid mx-auto">
        <h2 className="text-center mt-3">Sign Up</h2>
        <Form onSubmit={handleRegister} className="w-50 mx-auto">
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPhoto">
            <Form.Label>Photo Url</Form.Label>
            <Form.Control
              type="text"
              name="photo"
              placeholder="Paste Your Photo Url"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupRePassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirm"
              placeholder="Confirm Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onClick={handleAccepted}
              type="checkbox"
              name="accept"
              label="Accept Terms and Conditions"
            ></Form.Check>
          </Form.Group>
          <input
            disabled={!accepted}
            className="btn btn-secondary px-5 mb-3"
            type="submit"
            name="submit"
            id="submit"
          />
          <p className="text-error text-danger">{error}</p>
          <p>
            Already have an account? <Link className="fs-3 login-btn" to="/login">Login</Link>
          </p>
        </Form>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
