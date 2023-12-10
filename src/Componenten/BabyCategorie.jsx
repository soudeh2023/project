import React from "react";
import { Link } from "react-router-dom";
import "./BabyCategorie.css";

function BabyCategorie() {
  return (
    <div className="BabyCategorieContainer">
      <h1 className="BabyCategorieH1">BabyCategorie</h1>
      <div className="BabyCategorieDiv">
        <p className="BabyCategorieH1">
          {/* Verstanden. Hier sind die Schlüsselpunkte zur Ernährung von Säuglingen
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
          entsprechend den individuellen Bedürfnissen des Kindes anzupassen. */}
          Selbstverständlich, hier ist die Aufteilung nach Altersgruppen und
          einige Ernährungsempfehlungen für Babys:
          <br />
          0 bis 3 Monate: <br />
          In den ersten 3 Monaten ist die Hauptquelle der Ernährung Muttermilch
          oder Säuglingsnahrung. Babys in dieser Altersgruppe benötigen
          ausschließlich Milch als Hauptnahrungsquelle. Die Muttermilch oder
          Säuglingsnahrung bietet alle notwendigen Nährstoffe für das Wachstum
          und die Entwicklung.
          <br />
          3 bis 6 Monate:
          <br /> Ab dem Alter von 3 Monaten kann schrittweise mit der Einführung
          von Beikost begonnen werden. Hierbei können pürierte Gemüse und Obst
          wie Karotten, Süßkartoffeln, Bananen und Äpfel eingeführt werden. Die
          Menge und Konsistenz sollten dem Alter und den individuellen
          Bedürfnissen des Babys angepasst werden.
          <br /> 6 bis 9 Monate:
          <br />
          In dieser Phase kann die Vielfalt der Beikost weiter ausgebaut werden.
          Zusätzlich zu Gemüse und Obst können nun auch weiche Getreideprodukte
          wie Reis, Haferflocken oder Quinoa eingeführt werden. Eiweißquellen
          wie püriertes Hühnerfleisch oder Fisch können ebenfalls schrittweise
          integriert werden.
          <br />
          9 bis 12 Monate:
          <br /> Mit 9 bis 12 Monaten können Sie die Nahrungsvielfalt weiter
          steigern. Neben den bisherigen Lebensmitteln können auch kleine Stücke
          von weichen Lebensmitteln eingeführt werden, um die Kaumuskulatur zu
          fördern. Kuhmilch oder geeignete Milchersatzprodukte können ab dem 1.
          Geburtstag in Absprache mit dem Kinderarzt eingeführt werden. Während
          dieser Phasen ist es wichtig, die individuellen Bedürfnisse des Babys
          zu berücksichtigen und schrittweise neue Lebensmittel einzuführen, um
          mögliche allergische Reaktionen zu beobachten. Zusätzlich sollten Sie
          regelmäßige Vorsorgeuntersuchungen beim Kinderarzt durchführen, um
          sicherzustellen, dass das Kind sich gesund entwickelt.
        </p>
      </div>
      <div className="LinkNächst">
        <Link to="/PageHome">back</Link>
        <Link to="/ErnährungsPlanPage ">Nächst</Link>
      </div>
    </div>
  );
}

export default BabyCategorie;
