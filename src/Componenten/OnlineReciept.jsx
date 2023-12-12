import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function OnlineReciept() {
  const [news, setNews] = useState();
  const [img, setImg] = useState();
  const [url, setUrl] = useState();

  useEffect(() => {
    axios
      .get("https://www.tagesschau.de/api2u/search/?searchText=rezept")
      .then((res) => {
        console.log(res.data);
        setNews(res.data.searchResults[0].title);
        setImg(res.data.searchResults[0].images[0].imageVariants["16x9-512"]);
        setUrl(res.data.seachResults.shreUrl);
      });
  }, []);
  return (
    <div>
      <div>OnlineReciept</div>
      <h1>Online Informationen</h1>
      <img src={img} />
      <p>{news}</p>
      <a herf={url} target="_blank">
        Weitere Informatonen
      </a>

      <div>
        <Link to="/FertigEssen">back</Link>
        <Link to="/EndePage">Nächst</Link>
      </div>
    </div>
  );
}

export default OnlineReciept;
