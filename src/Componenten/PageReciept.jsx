import React from "react";
import { Link } from "react-router-dom";

function PageReciept() {
  return (
    <div>
      <h1>PageReciept</h1>
      <Link to="/ErnährungsPlanPage">back</Link>
      <Link to="/FertigEssen">Gehe zur and Seite</Link>
    </div>
  );
}

export default PageReciept;
