import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import FaceTwoToneIcon from "@mui/icons-material/FaceTwoTone";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";

function Navbar() {
  const [user, setUser] = useState({ isLoggedIn: false });

  function login() {
    const updatedUser = { ...user, isLoggedIn: true };

    setUser(JSON.parse(JSON.stringify(updatedUser)));

    localStorage.setItem("localUser", JSON.stringify(updatedUser));
  }

  function logout() {
    const updatedUser = { ...user, isLoggedIn: false };
    setUser(JSON.parse(JSON.stringify(updatedUser)));

    localStorage.setItem("localUser", JSON.stringify({ isLoggedIn: false }));
    np;
  }
  useEffect(() => {
    const localUser = localStorage.getItem("localUser");

    if (localUser) {
      setUser(JSON.parse(localUser));
    }
  }, []);

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

      <ul className="NavLinks">
        <li>
          <Link to="/PageHome">
            <button>
              {/* <CottageRoundedIcon /> */}
              <p> Home</p>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/ErnährungsPlanPage">
            <button>
              {/* <PointOfSaleIcon /> */}
              <p>Plan</p>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/FertigEssen">
            <button>
              {/* <ShoppingCartIcon /> */}
              <p>FertigEssen</p>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/Login" className="LogInButton">
            {!user.isLoggedIn && (
              <button onClick={login}>
                <AccountCircleTwoToneIcon />
              </button>
            )}
            {user.isLoggedIn && (
              <>
                <button onClick={logout} className="LogoutBt">
                  Logout
                </button>
              </>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
