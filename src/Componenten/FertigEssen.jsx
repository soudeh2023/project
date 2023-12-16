import React, { useState } from "react";
import { Link, json } from "react-router-dom";
import "./FertigEssen.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect } from "react";
import Data from "../../db.json";

function FertigEssen() {
  const data2 = Data.data;
  const [cart, setCart] = useState([]);
  
  
  const handleBuyIcon = (id) => {
    setCart([...cart, id]);
    console.log("Buy icon clicked!" + id);
    console.log(cart);
    localStorage.setItem("warenKorb", JSON.stringify(cart));
  };

  return (
    <div>
      <h1>Fertig Essen sind Gesund oder.....</h1>
      <p className="FertidEssenPar">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit
        maiores corporis animi, alias quos atque cumque aliquam deleniti est
        quia veritatis debitis voluptatibus sit possimus nam, tempore ducimus .
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        tenetur molestiae quia labore a fugit quibusdam maxime aliquam minima
        perspiciatis dicta rem cum blanditiis impedit provident atque vero quod
        aspernatur.
      </p>
      <div className="meinListFertigEssen">
        <h1 className="ProductenTitle">Producten</h1>
        <p>Waren Korb:{cart.length}</p>

        <ul className="alleFertigEssen">
          {data2.map((item) => (
            <div className="Karte" key={item.id} >
              <li>{item.name}</li>
              <img className="Product-pictureFer" src={item.image_url} alt="" />
              <li>{item.description}</li>

              <button
                className="WarenkorbIconFertigEssen" 
                onClick={() => handleBuyIcon(item.id)}
              >
                <ShoppingCartIcon />
              </button>
            </div>
            
          ))}
        </ul>
      </div>
      <div className="LinkNächst">
        <Link to="/ErnährungsPlanPage">back</Link>
        <Link to="/OnlineReciept">Nächst</Link>
      </div>
    </div>
  );
}

export default FertigEssen;
