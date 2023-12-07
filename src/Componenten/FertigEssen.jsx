import React from "react";
import { Link } from "react-router-dom";

function FertigEssen() {
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
      <Link to="/EndePage">Gehe zur and Seite</Link>
      <Link to="/PageReciept">back</Link>
    </div>
  );
}

export default FertigEssen;
