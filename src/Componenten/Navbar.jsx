import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import FaceTwoToneIcon from "@mui/icons-material/FaceTwoTone";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
function Navbar() {
  return (
    <nav>
      <div className="Navbar-logo">
        <img className="Navbar-picture" src="./images/logo3.jpg" alt="" />

        <h4 className="Navbar-logo-text">Kleine Kinder && Gesund Essen</h4>
      </div>
      <div className="navbar-inner">
        <Link to="/Home" className="Navbar-logo">
          <FaceTwoToneIcon />
        </Link>
        <p className="Navbarpar">
          Kleine Kinder && Gesund Essen<sup>".de"</sup>
        </p>
      </div>

      <ul>
        <li>
          <Link to="/Warenkorb" >
            <ShoppingCartIcon />
          </Link>
        </li>

        <li>
          <Link to="/Home">
            <CottageRoundedIcon />
          </Link>
        </li>
        <li>
          <Link to="/Login">
            <AccountCircleTwoToneIcon />
          </Link>
        </li>
        <li>
          <Link to="/ContactUs">
            <PointOfSaleIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
