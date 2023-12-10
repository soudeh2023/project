import React from "react";
import { Link } from "react-router-dom";
import "./BabyCategorie.css";

function BabyCategorie() {
  return (
    <div className="BabyCategorieContainer">
      <h1 className="BabyCategorieH1">BabyCategorie</h1>
      <div className="BabyCategorieDiv">
        Selbstverständlich, hier ist die Aufteilung nach Altersgruppen und
        einige Ernährungsempfehlungen für Babys:
        <br />
        <di className="ContainerBt">
        <button className="MonateBt">
          <Link><h3>0 bis 3 Monate:</h3></Link>
          In den ersten 3 Monaten ist die Hauptquelle der Ernährung Muttermilch
          oder Säuglingsnahrung. Babys in dieser Altersgruppe benötigen
          ausschließlich Milch als Hauptnahrungsquelle. Die Muttermilch oder
          Säuglingsnahrung bietet alle notwendigen Nährstoffe für das Wachstum
          und die Entwicklung.
        </button>
        <button className="MonateBt">
        <Link><h3>3 bis 6 Monate:</h3></Link>
          Ab dem Alter von 3 Monaten kann schrittweise mit der Einführung von
          Beikost begonnen werden. Hierbei können pürierte Gemüse und Obst wie
          Karotten, Süßkartoffeln, Bananen und Äpfel eingeführt werden. Die
          Menge und Konsistenz sollten dem Alter und den individuellen
          Bedürfnissen des Babys angepasst werden.
        </button>
        <button className="MonateBt">
        <Link><h3>6 bis 9 Monate:</h3></Link>
          In dieser Phase kann die Vielfalt der Beikost weiter ausgebaut werden.
          Zusätzlich zu Gemüse und Obst können nun auch weiche Getreideprodukte
          wie Reis, Haferflocken oder Quinoa eingeführt werden. Eiweißquellen
          wie püriertes Hühnerfleisch oder Fisch können ebenfalls schrittweise
          integriert werden.
        </button>
        <button className="MonateBt">
        <Link><h3>9 bis 12 Monate:</h3></Link>
          Mit 9 bis 12 Monaten können Sie die Nahrungsvielfalt weiter steigern.
          Neben den bisherigen Lebensmitteln können auch kleine Stücke von
          weichen Lebensmitteln eingeführt werden, um die Kaumuskulatur zu
          fördern. Kuhmilch oder geeignete Milchersatzprodukte können ab dem 1.
          Geburtstag in Absprache mit dem Kinderarzt eingeführt werden. Während
          dieser Phasen ist es wichtig, die individuellen Bedürfnisse des Babys
          zu berücksichtigen und schrittweise neue Lebensmittel einzuführen, um
          mögliche allergische Reaktionen zu beobachten. Zusätzlich sollten Sie
          regelmäßige Vorsorgeuntersuchungen beim Kinderarzt durchführen, um
          sicherzustellen, dass das Kind sich gesund entwickelt.
        </button>
        </di>
      </div>
      <div className="LinkNächst">
        <Link to="/PageHome">back</Link>
        <Link to="/ErnährungsPlanPage ">Nächst</Link>
      </div>
    </div>
  );
}

export default BabyCategorie;
