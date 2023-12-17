import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import FaceTwoToneIcon from "@mui/icons-material/FaceTwoTone";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav>
      <div className="Navbar-logo">
        <Link to="/BabyCategorie">
          <img className="Navbar-picture" src="./images/logo3.jpg" alt="" />
        </Link>
      </div>

      <div className="navbar-inner">
        <Link to="/PageHome" className="Navbar-logo">
          <FaceTwoToneIcon />
        </Link>
        <p className="Navbarpar">
          Kleine Kinder && Gesund Essen
        </p>
      </div>

      <div className="burger-menu" onClick={toggleMenu}>
        &#9776;
      </div>

      <div className={`NavLinks ${showMenu ? "show" : ""}`}>
        <p>
          <Link to="/PageHome">
            <button className="bt">
              Home
            </button>
          </Link>
        </p>
        <p>
          <Link to="/ErnährungsPlanPage">
            <button className="bt">
              Plan
            </button>
          </Link>
        </p>
        <p>
          <Link to="/FertigEssen">
            <button className="bt">
              FertigEssen
            </button>
          </Link>
        </p>
        <p>
          <Link to="/OnlineReciept">
            <button className="bt" >
              Reciept
            </button>
          </Link>
        </p>

        {/* Close button conditionally rendered */}
        {showMenu && (
          <p>
            <button className="btClose" onClick={closeMenu}>
              <CloseRoundedIcon />
            </button>
          </p>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
