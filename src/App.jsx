import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageHome from "./Componenten/PageHome";
// import GesundEssenPageInfo from "./Componenten/GesundEssenPageInfo";
import FertigEssen from "./Componenten/FertigEssen";
import PageProduct from "./Componenten/PageProduct ";
import BabyCategorie from "./Componenten/BabyCategorie";
import PageÜberuns from "./Componenten/PageÜberUns";
import Navbar from "./Componenten/Navbar";
import login from "./Componenten/login";
import ErnährungsPlanPage from "./Componenten/ErnährungsPlanPage";
import EndePage from "./Componenten/EndePage";
import WarenKorbPage from "./Componenten/WarenKorbPage";

import "./App.css";
import OnlineReciept from "./Componenten/OnlineReciept";
import RecipesPage from "./Componenten/RecipesPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={PageHome} />
          <Route path="/PageHome" Component={PageHome} />
          {/* <Route path="/GesundEssenPageInfo" Component={GesundEssenPageInfo} /> */}
          <Route path="PageÜberUns" Component={PageÜberuns} />
          <Route path="/BabyCategorie" Component={BabyCategorie} />
          <Route path="/fertigessen" Component={FertigEssen} />
          <Route path="/WarenKorb" Component={WarenKorbPage} />
          <Route path="/product/:id" Component={PageProduct} />
          <Route path="/login/" Component={login} />
          <Route path="/EndePage/" Component={EndePage} />
          <Route path="/ErnährungsPlanPage/" Component={ErnährungsPlanPage} />
          <Route path="/OnlineReciept/" Component={OnlineReciept} />
          <Route path="/OnlineReciept/" Component={OnlineReciept} />
          <Route path="/RecipesPage/" Component={RecipesPage} />
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
