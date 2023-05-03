import React from 'react';
import './Chefs.css'

const Chefs = (props) => {
    console.log('card', props.chef);
    const {name, image, bio, description, numRecipes, rating, experience } = props.chef;

    return (
        <div className='col-sm-12 col-md-6 col-lg-4 p-2'>
        <div className='mb-4 border bg-dark rounded-3'>
        <div className="card-img-container">
        <img className='chef-photo' src={image} alt="" />
        </div>
        <div className='p-3'>
        <h2>{name}</h2>
        <p>{bio}</p>
        <p>Number of recipes:{numRecipes}</p>
        <p>Experience: {experience}</p>
        <p>Rating: {rating}</p>
        </div>
        <div className='mx-auto text-center'>
        <button className='btn btn-success mx-auto w-75 py-3 rounded-3 m-2'>View Recipes</button>
        </div>
        </div>
        </div>
    );
};

export default Chefs;