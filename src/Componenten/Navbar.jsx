import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import FaceTwoToneIcon from "@mui/icons-material/FaceTwoTone";
// import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function Navbar() {
  const [isShown, setIsShown] = useState(false);

  // Define MobileMenu component
  const MobileMenu = () => {
    return (
      <div className={"mobile-menu"}>
        <p>
          <Link to="/PageHome">
            <button className="bt" onClick={toggleMobileMenu}>
              Home
            </button>
          </Link>
        </p>
        <p>
          <Link to="/ErnährungsPlanPage">
            <button className="bt" onClick={toggleMobileMenu}>
              Plan
            </button>
          </Link>
        </p>
        <p>
          <Link to="/FertigEssen">
            <button className="bt" onClick={toggleMobileMenu}>
              FertigEssen
            </button>
          </Link>
        </p>
        <p>
          <Link to="/OnlineReciept">
            <button className="bt" onClick={toggleMobileMenu}>
              Reciept
            </button>
          </Link>
        </p>
      </div>
    );
  };

  const toggleMobileMenu = () => {
    setIsShown(!isShown);
  };

  return (
    <>
      <div className="topnav">
        {/* Your Logo/Brand here */}
        <div className="Navbar-logo">
          <Link to="/BabyCategorie">
            <img className="Navbar-picture" src="./images/logo3.jpg" alt="" />
          </Link>
        </div>

        <div className="navbar-inner">
          <Link to="/PageHome" className="Navbar-logo">
            <FaceTwoToneIcon />
          </Link>
          <p className="Navbarpar">Kleine Kinder && Gesund Essen</p>
        </div>

        {/* Desktop Menu, which only appears on large screens */}

        <div className="menu">
          <p>
            <Link to="/PageHome">
              <button className="bt">Home</button>
            </Link>
          </p>
          <p>
            <Link to="/ErnährungsPlanPage">
              <button className="bt">Plan</button>
            </Link>
          </p>
          <p>
            <Link to="/FertigEssen">
              <button className="bt">FertigEssen</button>
            </Link>
          </p>
          <p>
            <Link to="/OnlineReciept">
              <button className="bt">Reciept</button>
            </Link>
          </p>
        </div>

        {/* This button only shows up on small screens. It is used to open the mobile menu */}
        <button className="show-mobile-menu-button" onClick={toggleMobileMenu}>
          &#8801;
        </button>
      </div>

      {/* The mobile menu and the close button */}
      {isShown && <MobileMenu />}
      {isShown && (
        <button className="close-mobile-menu-button" onClick={toggleMobileMenu}>
          &times;
          {/* <CloseRoundedIcon/> */}
        </button>
      )}
    </>
  );
}

export default Navbar;
