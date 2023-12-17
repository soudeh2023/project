import { Link } from "react-router-dom";
import React, { useState } from "react";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import CircleIcon from '@mui/icons-material/Circle';

import "./PageHome.css";
function PageHome() {
  const [imageSrc, setImageSrc] = useState("/images/fleich.jpg");
  // const changeImage = (newImageSrc) => {
  //   setImageSrc(newImageSrc);
  // };
  
  const changeImage = (newImageSrc) => {
    console.log("Changing image to:", newImageSrc);
    setImageSrc(newImageSrc);
  };
  
  return (
    <div className="HomepegeDiv">
      <section className="section1">
        <h1 className="PageHomeh1">Kleine Kinder && Gesund Essen</h1>
        <p className="PageHomepar">

          Die Ernährung von Kindern unter einem Jahr ist entscheidend, da sie in
          dieser Phase schnell wachsen und sich entwickeln. Empfohlene Maßnahmen
          sind: Muttermilch oder Säuglingsnahrung: In den ersten 6 Monaten wird
          ausschließliches Stillen oder die Verwendung von Säuglingsnahrung
          empfohlen. Einführung von Beikost: Ab etwa 6 Monaten können Sie
          schrittweise mit der Einführung von weichen Lebensmitteln wie Gemüse,
          Obst, Getreide und Fleisch beginnen. Gesunde Ernährung: Muttermilch
          oder Säuglingsnahrung sollte Hauptnahrung für die ersten 6 Monate
          sein. Danach können Sie schrittweise zu festen Lebensmitteln
          übergehen, darunter Gemüse, Obst, Getreide und Fleisch. Vermeiden von
          Allergenen: Vermeiden Sie allergene Lebensmittel wie Honig, Erdnüsse
          und bestimmte Fischsorten vor dem ersten Geburtstag. Stillen und
          Übergang zu Kuhmilch: Stillen wird bis zu 1 Jahr oder länger
          empfohlen. Nach einem Jahr können Sie auf Kuhmilch oder
          Milchersatzprodukte umsteigen, in Absprache mit dem Kinderarzt. Es ist
          ratsam, individuelle Bedürfnisse mit einem Kinderarzt oder
          Ernährungsspezialisten zu besprechen.
        </p>
        <br />
        
        <div className="weinAchten">
​
        {/* <img  src="./images/weinachten.jpg" className="winachtenImg" alt="" /> */}
        <img  src={imageSrc} className="winachtenImg" alt="" />
        
        <div className="imageButtons">
          <button onClick={() => changeImage("/images/weinaxhten2.jpg")} className="punktBt"><CircleIcon /></button>
          <button onClick={() => changeImage("/images/ariana.jpg")} className="punktBt"><CircleIcon /></button>
          <button onClick={() => changeImage("/images/arianamilchschake.jpg")} className="punktBt"><CircleIcon /></button>
        </div>
        
        
        </div>
        <Link to="/BabyCategorie" className="BabyCategorieLink">
          Nächst
        </Link>
      </section>
      <section className="aboutUs">
        <h1>Über Uns</h1>
        <p>
          Ich habe eine Website erstellt und hoffe, dass sie benutzerfreundlich
          ist. Ich hoffe, dass ich auf diese Weise dazu beitragen kann, dass
          Kinder gesund aufwachsen, indem ich leicht verständliche Informationen
          zur Verfügung stelle. Mein Ziel ist es, in der Zukunft dieses Projekt
          weiterzuentwickeln, um alle notwendigen Ressourcen für die körperliche
          und geistige Entwicklung von Kindern bereitzustellen. Dieses Projekt
          wird auch zukünftig Schulungen und Beratungen einschließen. Ich hoffe,
          dass ich einen kleinen Beitrag dazu leisten kann, die Gesundheit aller
          Kinder weltweit zu fördern.
        </p>
        <PointOfSaleIcon />

        <h5>017683354977</h5>
        <h5>089683354977</h5>
        <h5>soodeh.safahani@gmail.com</h5>
        <p>Soudeh Safahanizadeh</p>
      </section>
      ;
    </div>
  );
}

export default PageHome;
