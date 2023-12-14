import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import FaceTwoToneIcon from "@mui/icons-material/FaceTwoTone";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div className="Navbar-logo">
        <img className="Navbar-picture" src="./images/logo3.jpg" alt="" />
      </div>

      <div className="navbar-inner">
        <Link to="/Home" className="Navbar-logo">
          <FaceTwoToneIcon />
        </Link>
        <p className="Navbarpar">
          Kleine Kinder && Gesund Essen<sup>".de"</sup>
        </p>
      </div>

      <div className="burger-menu" onClick={toggleMenu}>
        &#9776; {/* Hamburger Icon */}
      </div>

      <ul className={`NavLinks ${showMenu ? "show" : ""}`}>
        <li>
          <Link to="/PageHome">
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link to="/ErnährungsPlanPage">
            <button>Plan</button>
          </Link>
        </li>
        <li>
          <Link to="/FertigEssen">
            <button>FertigEssen</button>
          </Link>
        </li>
        <li className="LogInButton">
          <button onClick={toggleMenu}>
            {!showMenu ? <AccountCircleTwoToneIcon /> : <CloseRoundedIcon/>}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
