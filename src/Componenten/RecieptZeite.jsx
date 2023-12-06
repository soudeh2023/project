import React, { useEffect, useState } from "react";
import axios from "axios";

function RecieptZeite() {
  const [reciept, setRecipt] = useState();

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => {
        console.log(res.data.meals[0].strInstructions);
        // debugger;
        // setRecipt(res.data.meals[0].strMeal);
      });
  }, []);
  return <div>{reciept}</div>;
}

export default RecieptZeite;
