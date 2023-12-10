import React from "react";
import { Link } from "react-router-dom";
import Data from "../../eplan.json";
import "./ErnährungsPlanPage.css";

function ErnährungsPlan() {
  const eplan = Data.plan;
  console.log(eplan);

  return (
    <div>
      <h1 className="ProductenTitle">ErnährungsPlan</h1>
      <div className="Plan-Container">
        {/* <ul className="alleFertigEssen"> */}
        {eplan.map((item) => (
          <div
            className="Karte"
            key={item.id}
            onClick={() => alert(`Du hast Essen Nr. ${item.id} gewählt.`)}
          >
            <li>{item.description}</li>
            <img className="Product-picture" src={item.image_url} alt="" />
            <li>{item.name}</li>

            {/* <button className="WarenkorbIconFertigEssen">
              <ShoppingCartIcon />
            </button> */}
          </div>
          // <img src={item.image_url} alt="picture" srcset="" />
        ))}
        {/* </ul> */}
      </div>
      <div className="LinkNächst">
        <Link to="/BabyCategorie">back</Link>
        <Link to="/PageReciept">nächst</Link>
      </div>
    </div>
  );
}

export default ErnährungsPlan;
