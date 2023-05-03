import React, { useContext, useState } from 'react';
import './SignUp.css'
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        console.log(name,email,photo,password,confirm);
        createUser(email, password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser);
        })
        .catch(error =>{
            console.log(error);
            setError(error);
        })
    }

    return (
        <div>
        <div className='container'>
        <h2 className='text-center mt-3'>Sign Up</h2>
        <Form onSubmit={handleRegister} className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPhoto">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control type="text" name="photo" placeholder="Upload will take place" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupRePassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" name="confirm" placeholder="Confirm Password" />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
        <Form.Check type='checkbox' name='accept' label="Accept Terms and Conditions"></Form.Check>
        </Form.Group>
        <input className="btn btn-secondary px-5 mb-3" type="submit" name="submit" id="submit" />
        <p>Already have an account? <Link to='/login'>Login</Link></p>
        <p className='text-error'>error message</p>
      </Form>
    </div>
        </div>
    );
};

export default SignUp;