
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function RecipesPage() {
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        console.log(res.categories);
        setCategories(res.categories[0].strCategory);
        setDescription(res.categories[0].strCategoryDescription);
      });
  }, []);
  return (
    <div>
    <div>
      <h1>Hallo</h1>
      <p>{categories}</p>
      <p>{description}</p>
    </div>
    
    <div>
    <Link to="/FertigEssen">Zurück</Link>
    <Link to="/EndePage">Nächst</Link>
  </div>
  </div>
  );
}

export default RecipesPage;
