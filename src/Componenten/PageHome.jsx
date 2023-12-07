import { Link } from "react-router-dom";
import "./PageHome.css";

function PageHome() {
  return (
    <>
      <section>
        <h1 className="PageHomeh1">Klein Kinder && Gesund Essen</h1>
        <p className="PageHomepar">
          Die Ernährung von Kindern unter einem Jahr ist von entscheidender
          Bedeutung, da sie in dieser Phase rapide wachsen und sich entwickeln.
          Hier sind einige allgemeine Richtlinien für die Ernährung von Kindern
          unter einem Jahr: Ernährungskategorien: Kinder bis zu einem Jahr
          können in die folgenden Ernährungskategorien eingeteilt werden:
          Muttermilch oder Säuglingsnahrung: In den ersten 6 Monaten wird
          empfohlen, Babys ausschließlich zu stillen oder Säuglingsnahrung zu
          geben. Muttermilch oder Formeln bieten alle notwendigen Nährstoffe und
          Antikörper für die Gesundheit und Entwicklung des Babys. Einführung
          von Beikost: Ab etwa 6 Monaten kann mit der schrittweisen Einführung
          von Beikost begonnen werden. Beikost umfasst weiche, pürierte oder
          zerkleinerte Lebensmittel wie Gemüse, Obst, Getreide und Fleisch.
          Gesunde Ernährung: Eine gesunde Ernährung für Kinder unter einem Jahr
          sollte Folgendes umfassen: Muttermilch oder Säuglingsnahrung:
          Muttermilch oder eine geeignete Säuglingsnahrung sollte die
          Hauptquelle der Ernährung für die ersten 6 Monate sein. Enthält alle
          notwendigen Nährstoffe und fördert die Immunität. Einführung von
          Beikost: Gemüse: Karotten, Süßkartoffeln, Erbsen. Obst: Bananen,
          Avocados, Apfelmus. Getreide: Reis, Haferflocken, Quinoa. Fleisch oder
          alternative Proteinquellen: Gekochtes Hühnerfleisch, pürierter Fisch,
          rote Linsen. Vermeiden von Honig und bestimmten Lebensmitteln:
          Vermeiden Sie Honig vor dem ersten Geburtstag, da er das
          Botulismusrisiko birgt. Vermeiden Sie allergene Lebensmittel wie
          Erdnüsse, Eiweiß, Fisch und Meeresfrüchte, bis Ihr Arzt grünes Licht
          gibt. Stillen und Übergang zu anderen Milchsorten: Die
          Weltgesundheitsorganisation (WHO) empfiehlt das ausschließliche
          Stillen für die ersten 6 Monate. Nach den ersten 6 Monaten können Sie
          schrittweise mit der Einführung von Beikost beginnen, während das
          Stillen fortgesetzt wird. Vollständiges Stillen kann bis zu 1 Jahr
          oder länger fortgesetzt werden, solange es sowohl für die Mutter als
          auch für das Kind passend ist. Ab dem Alter von 1 Jahr können Sie auf
          Kuhmilch oder geeignete Milchersatzprodukte umsteigen, jedoch in
          Absprache mit dem Kinderarzt. Es ist wichtig zu beachten, dass
          individuelle Bedürfnisse und Gesundheitszustände variieren können.
          Daher ist es ratsam, mit einem Kinderarzt oder Ernährungsspezialisten
          zusammenzuarbeiten, um sicherzustellen, dass die Ernährung Ihres
          Kindes den spezifischen Anforderungen entspricht.
        </p>
        <Link to="/BabyCategorie">Gehe zur and Seite</Link>
      </section>
    </>
  );
}

export default PageHome;
