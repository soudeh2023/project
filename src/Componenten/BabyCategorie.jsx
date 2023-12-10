import React from "react";
import { Link } from "react-router-dom";

function BabyCategorie() {
  return (
    <div>
      BabyCategorie
      <div>
        <p>
          Verstanden. Hier sind die Schlüsselpunkte zur Ernährung von Säuglingen
          im Alter von 0 bis 1 Jahr: Muttermilch oder spezielle
          Säuglingsnahrung:<br/>
           In den ersten 6 Monaten sollte Muttermilch oder
          spezielle Säuglingsnahrung die Hauptnahrungsquelle sein.<br/>
           Muttermilch
          enthält alle notwendigen Nährstoffe und stärkt das Immunsystem und das
          Zellwachstum.<br/>
           Einführung von festen Nahrungsmitteln:<br/>

           Ab etwa 6 Monaten
          kann mit der schrittweisen Einführung fester Nahrungsmittel
          (einschließlich pürierter Früchte und Gemüse) begonnen werden.<br/>

          Verschiedene Lebensmittelgruppen wie Getreide, Fleisch, und Fisch
          können allmählich in die Ernährung eingeführt werden.<br/>
           Vermeidung
          bestimmter Lebensmittel:<br/>
           In diesem Alter sollten Lebensmittel wie
          Schokolade, Honig, Salz und zuckerhaltige Lebensmittel vermieden
          werden, um das Risiko von Allergien oder Verdauungsproblemen zu
          minimieren.<br/>
           Überwachung von Allergien:<br/>
            Die Überwachung von
          Nahrungsmittelallergien ist wichtig.
           Wenn das Kind auf bestimmte
          Lebensmittel empfindlich reagiert, sollten diese aus der Ernährung
          entfernt werden.<br/>
           Ärztliche Überwachung:<br/>
            Regelmäßige Beratung und die
          Meinung von Ärzten oder Ernährungsspezialisten sind entscheidend, um
          eine optimale Ernährung und gesundes Wachstum des Kindes
          sicherzustellen. <br/><br/>
          Es wird immer empfohlen, in jeder Entwicklungsphase
          Rücksprache mit einem Kinderarzt zu halten und die Ernährung
          entsprechend den individuellen Bedürfnissen des Kindes anzupassen.
        </p>
      </div>
      <div></div>
      <div></div>
      <Link to="/PageHome">back</Link>
      <Link to="/ErnährungsPlanPage ">Gehe zur and Seite</Link>
    </div>
  );
}

export default BabyCategorie;
