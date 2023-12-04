import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function DetailScreen() {
  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`).then((res) => {
      setRecipe(res.data);
      console.log(res.data);
    });
  });

  return (
    <div className="detailScreen">
      {recipe.ingredients &&
        recipe.ingredients.map((ing, index) => {
          return (
            <h4 id="para">
              {ing.quantity} {ing.ingredients}
            </h4>
          );
        })}

      <p  className="para" style={{ whiteSpace: "pre-wrap" }}>
        {recipe.instructions && JSON.parse(recipe.instructions)}
      </p>
    </div>
  );
}

export default DetailScreen;
