import React from "react";
import "./login.css";

function login() {
  return (
  
    <form className="LoginForm">
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit" className="SubmitLoginPage">Submit</button>
      </div>
    </form>
    //wenn submit kommt ein pop up fenster ,dass Hrzlichwillkommen sagt un geht zu kiner  BabyCategorie Seite*/

  )
}
    
 
export default login;