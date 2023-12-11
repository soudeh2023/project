import React from "react";
import { Link } from "react-router-dom";
import "./EndePage.css";

function EndePage() {
  return (
    <div>
      <h1>contact us</h1>
      <div className="ContactContainer">
        <label>Vornane:</label>
        <input placeholder="Vornane"></input>
        <label>Nachnane:</label>
        <input placeholder="Nachnane"></input>
        <label>E-Mail:</label>
        <input placeholder="E-Mail"></input>
        <label>Tel Nummer:</label>
        <input placeholder="Tel Nummer"></input>
        <submit></submit>
      </div>

      <div className="LinkNächst">
        <Link to="/FertigEssen">back</Link>
      </div>
    </div>
  );
}

export default EndePage;
