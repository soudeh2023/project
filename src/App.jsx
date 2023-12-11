import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageHome from "./Componenten/PageHome";
import GesundEssenPageInfo from "./Componenten/GesundEssenPageInfo";
import FertigEssen from "./Componenten/FertigEssen";
import PageProduct from "./Componenten/PageProduct ";
import BabyCategorie from "./Componenten/BabyCategorie";
import PageÜberuns from "./Componenten/PageÜberUns";
import Navbar from "./Componenten/Navbar";
import login from "./Componenten/login";
import PageContact from "./Componenten/PageContact";
import RecieptCategory from "./Componenten/RecieptCategory";
import EndePage from "./Componenten/EndePage";
import WarenKorbPage from "./Componenten/WarenKorbPage";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={PageHome} />
          <Route path="/PageHome" Component={PageHome} />
          <Route path="/GesundEssenPageInfo" Component={GesundEssenPageInfo} />
          <Route path="PageÜberUns" Component={PageÜberuns} />
          <Route path="/BabyCategorie" Component={BabyCategorie} />
          <Route path="/fertigessen" Component={FertigEssen} />
          <Route path="/WarenKorb" Component={WarenKorbPage} />
          <Route path="/product/:id" Component={PageProduct} />
          <Route path="/login/" Component={login} />
          <Route path="/Contact/" Component={PageContact} />
          <Route path="/RecieptCategory/" Component={RecieptCategory} />
          <Route path="/EndePage/" Component={EndePage} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
