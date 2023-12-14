import React, { useState } from "react";
import { Link } from "react-router-dom";
import Data from "../../eplan.json";
import "./ErnährungsPlanPage.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Reciept from "../../AlleRezept.json";

function ErnährungsPlanPage() {
  const eplan = Data.plan;
  console.log(eplan);
  let AlleRezept = Reciept.Reciept;
  console.log(AlleRezept);
  const [filter, setFilter] = useState(["fruit", "Meer","Vegetable","Fleisch"]);

  AlleRezept = AlleRezept.filter((item) =>item.category.includes(filter));

  return (
    <div>
      <h1 className="ProductenTitle">ErnährungsPlan</h1>
      {/* <button onClick={()=>setFilter(["fruit"])}>Filter Fruit</button> */}
      <div className="Plan-Container">
        {eplan.map((item) => (
          <div className="Karte" key={item.id} onClick={()=>setFilter([item.category])}>
            <li>{item.description}</li>
            <img className="Product-picture" src={item.image_url} alt="" />
            <li>{item.name}</li>
          </div>
        ))}
      </div>
      <h1 className="AlleReciept">Alle Rezept</h1>
      <div className="Rezept-Container">
        {AlleRezept.map((item) => (
          <div className="KarteRezept" key={item.id}>
            <li>{item.category}</li>
            <img className="Product-picture" src={item.image_url} alt="" />
            <li>{item.name}</li>
            <li>{item.ingredients}</li>
            <li>{item.instructions}</li>

            <button className="Heartzbt">
              <FavoriteBorderOutlinedIcon />
            </button>
          </div>
        ))}
      </div>

      <div className="LinkNächst">
        <Link to="/BabyCategorie">back</Link>
        <Link to="/FertigEssen">nächst</Link>
      </div>
    </div>
  );
}

export default ErnährungsPlanPage;
