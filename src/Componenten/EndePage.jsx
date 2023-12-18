import React from "react";
import { Link } from "react-router-dom";
import "./EndePage.css";

function EndePage() {
  return (
    <div  className="BodyContainer">
      
      <div className="BodyContainer">
    
      <div className="ContactContainer">
        <h1 className="ContactContainerH">contact us</h1>
        <div className="ContactContaineIn">
          <div>
            <label>Vornane:</label>
            <input placeholder="Vornane"></input>
          </div>
          <div>
            <label>Nachnane:</label>
            <input placeholder="Nachnane"></input>
          </div>
          <div>
            <label>E-Mail:</label>
            <input placeholder="E-Mail"></input>
          </div>
          <div>
            <label>Tel Nummer:</label>
            <input placeholder="Tel Nummer"></input>
          </div>
          <button className="Submit" type="submit">Submit</button>
        </div>
      </div>
      <p className="ContactPar">
        <h1>Hezlichen Dank</h1>, dass Sie meine Webseite besucht haben.
        Mein Ziel mit dieser Webseite ist es, Müttern, Kindern und schließlich
        allen Menschen auf spiritueller und physischer Ebene zu helfen. 
      </p>
      
      </div>
      <div className="LinkNächst">
        <Link  className= "EndeNächst"     to="/OnlineReciept">Zurük</Link>
      </div>
    </div>
  );
}

export default EndePage;
