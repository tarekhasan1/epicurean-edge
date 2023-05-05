import React, { useState } from "react";
import "./RecipeCard.css";
import { Button, Col, Row, Toast } from "react-bootstrap";

const RecipeCard = (props) => {
  const { name, image, description, rating, ingredients, instructions } =
    props.recipe;
  const [showToast, setShowToast] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleButton = () => {
    setShowToast(true);
    setButtonDisabled(true);
  };


  return (
    <div>
      <div className="my-toast-container">
        <Toast show={showToast} onClose={() => setShowToast(false)} position="static">
          <Toast.Header>
            <strong className="mr-auto"><i className="fa-solid fa-thumbs-up"></i> {name} added to Favourite food list.</strong>
          </Toast.Header>
          <Toast.Body className="bg-success">
          <h3>Congratulations!</h3>
          <p>You have successfully added {name} in your favourite recipe cart.</p>
          </Toast.Body>
        </Toast>
      </div>
      <Row className="m-5 recipe-card-container align-items-center margin-for-phone">
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
                {ingredients.map((item, idx) => (
                  <span key={idx}>
                    {item + `${idx == ingredients.length - 1 ? "." : ", "}`}
                  </span>
                ))}
              </p>
              <h5>Instruction:</h5>
              <ol>
                {instructions.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
              <p>ratings: {rating}/5</p>
              <Button
                onClick={handleButton}
                disabled={buttonDisabled}
                className="mb-3 btn-for-phone w-50"
                variant="outline-danger"
              >
                {
                    buttonDisabled ? 'Already Added' : 'Add to Favourite'
                }
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default RecipeCard;
