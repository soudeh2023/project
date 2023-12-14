
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FertigEssen.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { useEffect, useState } from "react";
// import axios from "axios";
import Data from "../../db.json";

function FertigEssen() {
  const data2 = Data.data;
const filterData=()=> {
  setCart([...cart,item.id] )

//  data2= data2.filter((item) =>item.category.includes(cart));


}

  // console.log(data2);


  const[cart,setCart]=useState([]);
  console.log(cart);

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/data")
  //     .then((res) => {
  //       // Daten im State speichern
  //       setData(res.data);
  //     })
  //     .catch((error) => {
  //       console.error("Fehler beim Abrufen der Daten:", error);
  //     });
  // }, []);

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
            <div
              className="Karte"
              key={item.id}
              onClick={filterData}
            >
              <li>{item.name}</li>
              
              <img className="Product-pictureFer" src={item.image_url} alt="" />
              <li>{item.description}</li>

              <button className="WarenkorbIconFertigEssen">
                <ShoppingCartIcon />
              </button>
            </div>
            // <img src={item.image_url} alt="picture" srcset="" />
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
