import React from "react";
import { Link } from "react-router-dom";
import Data from "../../eplan.json";
import "./ErnährungsPlanPage.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Reciept from "../../AlleRezept.json";
import React, { useState } from 'react';

function ErnährungsPlanPage() {
  const eplan = Data.plan;
  console.log(eplan);
  const AlleRezept = Reciept.Reciept;
  console.log(AlleRezept);

  return (
    <div>
      <h1 className="ProductenTitle">ErnährungsPlan</h1>
      <div className="Plan-Container">
        {eplan.map((item) => (
          <div className="Karte" key={item.id}>
            <li>{item.description}</li>
            <img className="Product-picture" src={item.image_url} alt="" />
            <li>{item.name}</li>
          </div>
        ))}
      </div>
      <h1 className="AlleReciept">Alle Rezept</h1>
      <div className="Rezept-Container">
        {AlleRezept.map((item) => (
          <div className="Karte" key={item.id}>
            <li>{item.category}</li>
            <img className="Product-picture" src={item.image_url} alt="" />
            <li>{item.name}</li>
            <li>{item.ingredients}</li>
            <li>{item.instructions}</li>

            <button className="pageFavorite">
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
