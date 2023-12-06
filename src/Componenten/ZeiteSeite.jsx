import { useState } from "react";
import "./App.css";

function ErsteSEite() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Link><button onclick=""> 0-3Monaten</button></Link>
        <Link><button onclick=""> 6-3Monaten</button></Link>
        <Link><button onclick=""> 6-9Monaten</button></Link>
        <Link><button onclick=""> 9-12Monaten</button></Link>
      </div>
      <div className="allekategorie">
        <Link><button>Gesund Reciepie</button></Link>
        <Link><button>Fertig Essen</button></Link>
      </div>
      <div className="allergitig">
        <button>allergitig</button>
      </div>
    </>
  );
}

export default ErsteSEite;
