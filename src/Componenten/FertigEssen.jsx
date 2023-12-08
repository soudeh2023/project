import React from "react";
import { Link } from "react-router-dom";
import "./FertigEssen.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect, useState } from "react";
import axios from "axios";

function FertigEssen() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/data")
      .then((res) => {
        // Daten im State speichern
        setData(res.data);
      })
      .catch((error) => {
        console.error("Fehler beim Abrufen der Daten:", error);
      });
  }, []);

  return (
    <div>
      FertigEssen
      <p>
        <h1>Fertig Essen sind GEsund oder.....</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit
        maiores corporis animi, alias quos atque cumque aliquam deleniti est
        quia veritatis debitis voluptatibus sit possimus nam, tempore ducimus .
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        tenetur molestiae quia labore a fugit quibusdam maxime aliquam minima
        perspiciatis dicta rem cum blanditiis impedit provident atque vero quod
        aspernatur.
      </p>
      <div>
        <h1>Producten</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <div className="Container-einkaufDb">
          <div>
            <img className="Product-picture" src="./images/logo3.jpg" alt="" />
            <p></p>
            <bottun onClick>
              <ShoppingCartIcon />
            </bottun>
          </div>
        </div>
        <Link to="/EndePage">Gehe zur and Seite</Link>
        <Link to="/PageReciept">back</Link>
      </div>
    </div>
  );
}

export default FertigEssen;
