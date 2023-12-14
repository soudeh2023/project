import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function RecipesPage() {
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        console.log(res.data.categories);
        setCategories(res.data.categories[0].strCategory);
        setCategories(res.data.categories[0].strCategoryDescription);
      });
  }, []);

  return (
    <div>
      <div>OnlineReciept</div>
      <h1>hello</h1>
      <div>
        <Link to="/OnlineReciept">Zurück</Link>
        <Link to="/EndePage">Nächst</Link>
      </div>
    </div>
  );
}

export default RecipesPage;
