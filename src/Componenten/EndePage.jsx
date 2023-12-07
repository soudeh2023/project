import React from "react";
import { Link } from "react-router-dom";

function EndePage() {
  return (
    <div>
      EndePage
      <Link to="/FertigEssen ">back</Link>
      <Link to="/PageHome ">Home</Link>
    </div>
  );
}

export default EndePage;
