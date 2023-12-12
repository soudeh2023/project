import React from "react";
import { Link } from "react-router-dom";
import "./EndePage.css";

function EndePage() {
  return (
    <div>
      <div className="ContactContainer">
        <h1>contact us</h1>
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
          <submit className="submitbt">Submit</submit>
        </div>
      </div>
      <p>
        Wow, ich wollte mich bedanken, dass Sie meine Webseite besucht haben.
        Mein Ziel mit dieser Webseite ist es, Müttern, Kindern und schließlich
        allen Menschen auf spiritueller und physischer Ebene zu helfen. Die
        Webseite soll in der Zukunft als Plattform für umfassende Beratung
        dienen und dazu beitragen, dass Menschen ein gesundes und erfülltes
        Leben führen können. Ich hoffe, dass die Webseite in Zukunft einen
        positiven Einfluss haben wird. Wenn Sie weitere Unterstützung oder
        Informationen benötigen, stehe ich Ihnen gerne zur Verfügung. Ich
        wünsche Ihnen viel Erfolg mit Ihren Beratungsaktivitäten und hoffe, dass
        die Webseite dazu beiträgt, dass viele Menschen ein gesundes und
        glückliches Leben führen können.
      </p>
      <div className="LinkNächst">
        <Link to="/OnlineReciept">back</Link>
      </div>
    </div>
  );
}

export default EndePage;
