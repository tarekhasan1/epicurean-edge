import React from 'react';
import './RecipeCard.css'
import { Button, Col, Row } from 'react-bootstrap';

const RecipeCard = (props) => {
    const {name, image, description, rating, ingredients, instructions } = props.recipe;

    return (
        <div>
        <Row className="m-5 recipe-card-container align-items-center">
        <Col className="img-container" sm={4}>
        <img className="food-img" src={image} alt="" />
        </Col>
        <Col sm={8}>
        <Row className="m-2 p-4">
        <Col>
        <h2>{name}</h2>
        <p>{description}</p>
        <h5>Ingredients:</h5>
        <p>
        {
            ingredients.map((item, idx) =>(<span key={idx}>{item  + `${idx == ingredients.length-1? ".": ", "}`}</span>))
        }
        </p>
        <h5>Instruction:</h5>
        <ol>
            {
                instructions.map((step, idx) =>( <li key={idx}>{step}</li>))
            }
        </ol>
        <p>ratings: {rating}/5</p>
        <Button className='mb-3 w-50' variant="outline-secondary">Add to Favourite</Button>
        </Col>
        </Row>
        </Col>
        </Row>
        </div>
    );
};

export default RecipeCard;