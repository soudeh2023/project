import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageHome from "./Componenten/PageHome";
import GesundEssenPageInfo from "./Componenten/GesundEssenPageInfo";
import PageWarenkorb from "./Componenten/PageWarenkorb";
import FertigEssen from "./Componenten/FertigEssen";
import PageProduct from "./Componenten/PageProduct ";
import BabyÄlter from "./Componenten/BabyÄlter";
import PageReciept from "./Componenten/PageReciept";
import PageÜberuns from "./Componenten/PageÜberUns";
import Navbar from "./Componenten/Navbar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={PageHome} />
          <Route path="/GesundEssenPageInfo" Component={GesundEssenPageInfo} />
          <Route path="PageÜberUns" Component={PageÜberuns} />
          <Route path="/BabyÄlter" Component={BabyÄlter} />
          <Route path="/Reciept" Component={PageReciept} />
          <Route path="/FertigEssen" Component={FertigEssen} />
          <Route path="/warenkorb" Component={PageWarenkorb} />
          <Route path="/product/:id" Component={PageProduct} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
