import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="Navbar-logo">
        <img className="Navbar-picture" src="./images/logo3.jpg" alt="" />

        <h6 className="Navbar-logo-text">Kleine Kinder</h6>
        <h6 className="Navbar-logo-text">Gesund Essen</h6>
      </div>
      <ul>
        <li>
          <Link to="/">Haus</Link>
        </li>
        <li>
          <Link to="/ÜberUns">Über Uns</Link>
        </li>
        <li>
          <Link to="/LogIn">login</Link>
        </li>
        <li>
          <Link to="/Warenkorb">Warenkorb</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
