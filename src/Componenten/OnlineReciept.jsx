import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function OnlineReciept() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        const first20Categories = res.data.categories.slice(0, 20);
        setCategories(first20Categories);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div>OnlineReciept</div>
      <h1>Online Informationen</h1>
      {loading ? (
        <p>Lade Daten...</p>
      ) : (
        // <div>
        //   {categories.map((category) => (
        //     <div key={category.idCategory}>
        //       <img src={category.strCategoryThumb} alt={category.strCategory} />
        //       <p>{category.strCategory}</p>
        //       <a href={category.strCategoryDescription} target="_blank" rel="noopener noreferrer">
        //         Weitere Informationen
        //       </a>
        //     </div>
       

<div>
  {categories.map((category) => (
    <div key={category.idCategory}>
      <img src={category.strCategoryThumb} alt={category.strCategory} />
      <p>{category.strCategory}</p>
      <Link to={`/recipes/${category.strCategory}`}>
        Weitere Informationen
      </Link>
    </div>
  ))}
</div>

      )}

      <div>
        <Link to="/FertigEssen">Zurück</Link>
        <Link to="/EndePage">Nächst</Link>
      </div>
    </div>
  );
}

export default OnlineReciept;
