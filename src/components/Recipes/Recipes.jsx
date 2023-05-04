import React from "react";
import "./Recipes.css";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";

const Recipes = () => {
    const data = useLoaderData();
    console.log(data.recipeData);

    const {chefData, recipeData } = data;
  return (
    <div className="recipe-card-font-color">
      <Container className="p-4 my-4 mx-auto">
        <div className="chefs-banner chefs-bg">
        <Row className="p-2 mb-5">
          <Col sm={6} className="p-5">
          <img src={chefData.image} alt="" />
          </Col>
          <Col className="p-4 d-flex align-items-center" sm={6}>
          <div>
          <h1>{chefData.name}</h1>
          <p>{chefData.description}</p>
          <p>Total recipes: {chefData.numRecipes}</p>
          <p>{chefData.experience} Years Of Experience</p>
          <p>Likes: {chefData.likes}</p>
          </div>
          </Col>
        </Row>
        </div>
        <h1 className="text-center my-3">Most Popular recipes of {chefData.name}</h1>
        {
            recipeData.map(recipe => <RecipeCard recipe={recipe} key={recipe.id}></RecipeCard>)
        }
      </Container>
    </div>
  );
};

export default Recipes;
