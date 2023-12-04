import "./RecipeCard.css";
import React from "react";
import { useNavigate, Link } from "react-router-dom";

/* global navigate */

const RecipeCard = (props) => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detailScreen/${recipe.recipe_id}`);
  };

  const { recipe } = props;
  console.log(recipe);
  return (
    <div className="card">
      <img className="recipeImg" src={recipe.image_url} />
      <figcaption>{recipe.recipe_name}</figcaption>
      <button onClick={handleClick} className="recipeBtn">
        See More
      </button>
    </div>
  );
};

export default RecipeCard;
