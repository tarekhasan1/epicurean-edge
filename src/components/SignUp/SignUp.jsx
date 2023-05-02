import React from 'react';
import './SignUp.css'
import NavigationBar from '../Navbar/NavigationBar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const SignUp = () => {
    return (
        <div>
        <div className='container'>
        <h2 className='text-center mt-3'>Sign Up</h2>
        <Form className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPhoto">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control type="text" placeholder="Upload will take place" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <input className="btn btn-secondary px-5 mb-3" type="submit" name="submit" id="submit" />
        <p>already have an account? <Link to='/login'>Login</Link></p>
        <p className='text-error'>error message</p>
      </Form>
    </div>
        </div>
    );
};

export default SignUp;