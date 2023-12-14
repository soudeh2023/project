

import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Warenkorb.css";

const Warenkorb = () => {
  const [cart, setCart] = useState([]);
  
  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="warenkorb-container">
      <h2>Warenkorb</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Der Warenkorb ist leer.</p>
      )}
      <button className="warenkorb-btn">
        <ShoppingCartIcon />
        <span className="cart-count">{cart.length}</span>
      </button>
      <div className="product-list">
        <h2>Produkte</h2>
        <ul>
          {/* Hier sollte die Produktliste stehen, z.B. aus einer API-Anfrage */}
          {/* Für diese Beispielcode fügen Sie statische Produkte hinzu */}
          
          <li>
            Produkt 1{" "}
            <button onClick={() => handleAddToCart({ name: "Produkt 1" })}>
              In den Warenkorb
            </button>
          </li>
          <li>
            Produkt 2{" "}
            <button onClick={() => handleAddToCart({ name: "Produkt 2" })}>
              In den Warenkorb
            </button>
          </li>
          {/* ... weitere Produkte */}
        </ul>
      </div>
    </div>
  );
};

export default Warenkorb;
