import React from 'react';
import './ErrorPage.css'
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div
            className="vh-100 d-flex justify-content-center align-items-center"
            id="error-page">
            <div>
                <div>
                <img className='img-fluid' src="https://cdn.dribbble.com/users/1818132/screenshots/4264991/media/d625b6be8b5ae2a1aa080d1bbc560e0a.gif" alt="" />
                </div>
                    <div className='rounded text-center'>
                    <i className="fw-bold fs-3">
                        {error.statusText || error.message}
                    </i>
                    <p>Back to<Link className='error-to-home' to='/'>Home</Link></p>
                    </div>
            </div>
        </div>
    );
};

export default ErrorPage;