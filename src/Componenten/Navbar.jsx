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
          <Link to="/BabyCategorie">
            <img className="Navbar-picture" src="./images/logo3.jpg" alt="" />
          </Link>
    
        {/* <img className="Navbar-picture" src="./images/logo3.jpg" alt="" /> */}
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
        &#9776; {/* Hamburger Icon */}
      </div>


<div  className={`NavLinks ${showMenu ? "show" : ""}` }>
{/* <p className="LogInButton">
          <button  className="btClose" onClick={toggleMenu}>
            {!showMenu ? <AccountCircleTwoToneIcon /> : <CloseRoundedIcon/>}
          </button>
        </p> */}
 
        <p>
          <Link to="/PageHome" >
            <button className="bt" >Home</button>
          </Link>
        </p>
        <p>
          <Link to="/ErnährungsPlanPage">
            <button className="bt" >Plan</button>
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
        
        <p>
          <Link to="/Online Rieciept" >
            <button className="bt" ></button>
          </Link>
        </p>
        

      </div>
    </nav>
  );
}

export default Navbar;
