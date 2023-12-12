import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function OnlineReciept() {
  const [news, setNews] = useState();
  const [img, setImg] = useState();
  const [url, setUrl] = useState();

  useEffect(() => {
    axios
      .get("https://www.tagesschau.de/api2u/search/?searchText=fc bayern")
      .then((res) => {
        console.log(res.data);
        setNews(res.data.searchResults[0].title);
        setImg(res.data.searchResult[0].images[0].imageVariants["16x9-512"]);
        setUrl(res.data.seachResults);
      });
  }, []);
  return (
    <div>
      <div>OnlineReciept</div>
      <h1>On line Rezept </h1>
      <div>
        <Link to="/ErnährungsPlanPage">back</Link>
        <Link to="/FertigEssen">Nächst</Link>
      </div>
    </div>
  );
}

export default OnlineReciept;
