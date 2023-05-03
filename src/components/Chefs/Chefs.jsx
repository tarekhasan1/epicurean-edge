import React from 'react';
import './Chefs.css'

const Chefs = () => {
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 p-2'>
        <div className='mb-4 border bg-dark rounded-3'>
        <img className='chef-photo rounded-3' src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?w=2000" alt="" />
        <div className='p-3'>
        <h2>Chef Name</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis laboriosam, culpa, porro, necessitatibus excepturi ex et quaerat qui natus veniam perferendis hic iusto?</p>
        <p>Years Of Experience:</p>
        <p>Number of recipes:</p>
        </div>
        <div className='mx-auto text-center'>
        <button className='btn btn-secondary mx-auto mb-2 w-50 py-2'>View Recipes</button>
        </div>
        </div>
        </div>
    );
};

export default Chefs;