import { useState } from "react";
import "./App.css";

function ErsteSEite() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <button onclick=""> 0-3Monaten</button>
        <button onclick=""> 6-3Monaten</button>
        <button onclick=""> 6-9Monaten</button>
        <button onclick=""> 9-12Monaten</button>
      </div>
      <div className="allekategorie">
        <button>Gesund Reciepie</button>
        <button>Fertig Essen</button>
      </div>
      <div className="allergitig">
        <button>allergitig</button>
      </div>
    </>
  );
}

export default ErsteSEite;
