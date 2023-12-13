// RecipesPage.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";

const RecipesPage = ({ match }) => {
  const category = match.params.category;

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((res) => {
        setRecipes(res.data.meals || []);
      });
  }, [category]);

  return (
    <div>
      <h1>Rezepte für {category}</h1>
      {recipes.map((recipe) => (
        <div key={recipe.idMeal}>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <p>{recipe.strMeal}</p>
          <p>{recipe.strInstructions}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipesPage;
