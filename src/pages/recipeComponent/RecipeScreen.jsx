import { Link } from "react-router-dom";
import { Formik } from "formik";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function RecipeScreen() {

  const notify = () => toast("");

  const [ingredients, setIngredient] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [name, setName] = useState("");
  const url = "https://recipes.devmountain.com";

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const onSubmit = (values) => {
    values.ingredients = ingredients;
    console.log(values);
    axios.post(`https://recipes.devmountain.com/recipes`, values)
  };

  const addIngredient = () => {
    setIngredient([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };
  console.log("RecipeScreen");

  return (
    <div className="recipeScreen">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form className="form" onSubmit={handleSubmit}>
            <h1 className="text-size">Tell us about your Recipe!</h1>

            <div className="nameURL">
              <input
                className="nameInput"
                placeholder="Name"
                value={values.name}
                onChange={(e) => setName(e.target.value)}
                name="name"
              />
              <input
                className="urlInput"
                placeholder="Image URL"
                value={values.imageURL}
                onChange={(e) => setName(e.target.value)}
                name="imageURL"
              />
            </div>

            <div className="radioBtn">
              <input 
              className="cook"
              placeholder="Cook" 
              type="radio" 
              value="Cook"
              onChange={handleChange}
              />
         
              <h3>Cook</h3>
              <input placeholder="Bake"
              className="bake" 
              type="radio"
              value="Bake"
              onChange={handleChange}
               />

              <h3>Bake</h3>
              <input placeholder="Drink" 
              className="drink"
              type="radio" 
              value="Drink"
              onChange={handleChange}
              />
              
              <h3>Drink</h3>
            </div>

            <section className="timedEvents">
              <input
                className="prepTime"
                placeholder="Prep Time"
                value={values.prepTime}
                onChange={(e) => setName(e.target.value)}
                name="prepTime"
              />

              <input
                className="cookTime"
                placeholder="Cook Time"
                value={values.cookTime}
                onChange={(e) => setName(e.target.value)}
                name="cookTime"
              />

              <input
                className="serveTime"
                placeholder="Serves"
                value={values.serveTime}
                onChange={(e) => setName(e.target.value)}
                name="serves"
              />
            </section>

          <section className="inputSection">
          <div className="ingredients">
              <input
                placeholder="Ingredient_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <ul className="list">
                <li>4 eggs</li>
                <li>1 box of cake</li>
              </ul>
            </div>

            <div className="quantity">
              <input
                className="inputIngredients"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <ul>
                
              </ul>
            </div>
          </section>
          

            <button
                type="button"
                placeholder="Add More"
                className="orange-btn"
                onClick={addIngredient}
              >
                Add Another</button>

            <div className="instructions">
            <textarea 
              className="inputInstructions"
              placeholder="What are your instructions"
              rows={5}
              value={values.instructions}
              onChange={handleChange}
              name="instructions"
            />
            <button onClick={notify} type="submit" className="blue-btn">
              Submit
            </button>
            </div>

          </form>
        )}
      </Formik>
    </div>
  );
}
export default RecipeScreen;
