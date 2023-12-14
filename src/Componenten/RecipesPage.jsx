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
        setCategories(res.data.categories);
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
        <div>
          {categories.map((category) => (
            <div key={category.idCategory}>
              <p>{category.strCategory}</p>
              <p>{category.strCategoryDescription}</p>
            </div>
          ))}
        </div>
      )}

      <div>
        <Link to="/OnlineReciept">Zurück</Link>
        <Link to="/EndePage">Nächst</Link>
      </div>
    </div>
  );
}

export default OnlineReciept;
