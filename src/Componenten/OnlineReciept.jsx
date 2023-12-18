import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./OnlineReciept.css";

function OnlineReciept() {
  const [categories, setCategories] = useState([]);
  const [description,  setDescriptoin] = useState([]);
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
    <div className=" OnlineRecieptBody">
      {/* <div>OnlineRecieption</div> */}
      <h1>Online Informationen</h1>
      {loading ? (
        <p>Lade Daten...</p>
      ) : (
        <div className="OnlineRecieptMap">
          {categories.map((category) => (
            <div className="OnlineRecieptMapIn" key={category.idCategory}>
              <img className="OnlineRecieptMapImg" src={category.strCategoryThumb} alt={category.strCategory} />
              <p>{category.strCategory}</p>
              <p>{category.strCategoryDescription}</p>

              {/* <Link to={`RecipesPage/${category.strCategory}`}>
                Weitere Informationen
              </Link> */}
            </div>
          ))}
        </div>
      )}

      <div className="LinkNächst">
        <Link to="/FertigEssen">Zurück</Link>
        <Link to="/EndePage">Nächst</Link>
      </div>
    </div>
  );
}

export default OnlineReciept;
