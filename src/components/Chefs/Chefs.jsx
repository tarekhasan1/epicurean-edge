import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./Chefs.css";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const Chefs = (props) => {
  console.log("card", props.chef);
  const { name, image, bio, likes, numRecipes, experience, id } = props.chef;
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  return (
    <div className="chef-card-height col-sm-12 col-md-6 col-lg-4 p-2">
      <div className="p-4 padding-for-phone">
        <div className="mb-4 card-bg rounded-3">
          <div className="card-img-container">
            <LazyLoadImage className="chef-photo" src={image} alt="" />
          </div>
          <div className="p-3">
            <h2 className="chef-name">{name}</h2>
            <p className="chef-experience">
              <small>{experience} Years Of Experience</small>
            </p>
            <p className="chef-bio">{bio}</p>
            <p className="recipe-number">Number of recipes: {numRecipes}</p>
            <p className="text-secondary">
              <i className="fa-sharp fa-solid text-danger fa-heart"> </i>{" "}
              {likes}
            </p>
          </div>
          <div className="mx-auto text-center">
            <button
              onClick={() => {
                setLoading(true);
                navigate(`/recipes/${id}`);
              }}
              className="btn btn-success mx-auto w-75 py-2 rounded-3 m-3"
            >
              {loading && <Spinner />}
              {!loading && "View Recipes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
