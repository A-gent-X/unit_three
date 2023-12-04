import { Link } from "react-router-dom";
import RecipeCard from "../RecipeCard";
import AdBanner from "./AdBanner";
import { BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function HomeScreen() {
  const getRecipes = () => {
    axios 
      .get("https://recipes.devmountain.com/recipes")
      .then((res) => {
        setRecipes(res.data)
        console.log(res.data)
      })
  }

  useEffect(() => {
    getRecipes()
  }, [])

  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  const recipeDisplay = recipes
    .filter((recipe, index) => {
      let title = recipe.recipe_name.toLowerCase();
      let searchParams = search.toLowerCase();
      return title.includes(searchParams);
    })
    .map((recipe, index) => {
      return <RecipeCard recipe={recipe} />;
    });

  return (
    <section className="homeContainer">
     
      <div className="homeScreen">
      <AdBanner />
        <span>
          <BiSearchAlt2 size="2em" color="#DA7635" />
          <input
            className="searchBar"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a Recipe"
          />
        </span>

        {/* <RecipeCard /> */}
        <div className="recipe-card">
          <div className="card-container">
          {recipeDisplay}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeScreen;
