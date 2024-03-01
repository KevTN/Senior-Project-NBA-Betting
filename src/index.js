import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import OriginalHome from './pages/OriginalHome';
import OddsFirebase from './pages/OddsFirebase';
import BettingGuide from './pages/BettingGuide';
import AtlantaHawks from './pages/Teams/AtlantaHawks';
import BostonCeltics from './pages/Teams/BostonCeltics';
import BrooklynNets from './pages/Teams/BrooklynNets';
import CharlotteHornets from './pages/Teams/CharlotteHornets';
import ChicagoBulls from './pages/Teams/ChicagoBulls';
import ClevelandCavaliers from './pages/Teams/ClevelandCavaliers';
import DallasMavericks from './pages/Teams/DallasMavericks';
import DenverNuggets from './pages/Teams/DenverNuggets';
import DetroitPistons from './pages/Teams/DetroitPistons';
import GoldenStateWarriors from './pages/Teams/GoldenStateWarriors';
import HoustonRockets from './pages/Teams/HoustonRockets';
import IndianaPacers from './pages/Teams/IndianaPacers';
import LAClippers from './pages/Teams/LAClippers';
import LosAngelesLakers from './pages/Teams/LosAngelesLakers';
import MemphisGrizzlies from './pages/Teams/MemphisGrizzlies';
import MiamiHeat from './pages/Teams/MiamiHeat';
import MilwaukeeBucks from './pages/Teams/MilwaukeeBucks';
import MinnesotaTimberwolves from './pages/Teams/MinnesotaTimberwolves';
import NewOrleansPelicans from './pages/Teams/NewOrleansPelicans';
import NewYorkKnicks from './pages/Teams/NewYorkKnicks';
import OklahomaCityThunder from './pages/Teams/OklahomaCityThunder';
import OrlandoMagic from './pages/Teams/OrlandoMagic';
import Philadelphia76ers from './pages/Teams/Philadelphia76ers';
import PhoenixSuns from './pages/Teams/PhoenixSuns';
import PortlandTrailBlazers from './pages/Teams/PortlandTrailBlazers';
import SacramentoKings from './pages/Teams/SacramentoKings';
import SanAntonioSpurs from './pages/Teams/SanAntonioSpurs';
import TorontoRaptors from './pages/Teams/TorontoRaptors';
import UtahJazz from './pages/Teams/UtahJazz';
import WashingtonWizards from './pages/Teams/WashingtonWizards';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<OriginalHome />} />
        <Route path="/Odds" element={<OddsFirebase />} />
        <Route path="/BettingGuide" element={<BettingGuide />} />
        <Route path="/AtlantaHawks" element={<AtlantaHawks />} />
        <Route path="/BostonCeltics" element={<BostonCeltics />} />
        <Route path="/BrooklynNets" element={<BrooklynNets />} />
        <Route path="/CharlotteHornets" element={<CharlotteHornets />} />
        <Route path="/ChicagoBulls" element={<ChicagoBulls />} />
        <Route path="/ClevelandCavaliers" element={<ClevelandCavaliers />} />
        <Route path="/DallasMavericks" element={<DallasMavericks />} />
        <Route path="/DenverNuggets" element={<DenverNuggets />} />
        <Route path="/DetroitPistons" element={<DetroitPistons />} />
        <Route path="/GoldenStateWarriors" element={<GoldenStateWarriors />} />
        <Route path="/HoustonRockets" element={<HoustonRockets />} />
        <Route path="/IndianaPacers" element={<IndianaPacers />} />
        <Route path="/LAClippers" element={<LAClippers />} />
        <Route path="/LosAngelesLakers" element={<LosAngelesLakers />} />
        <Route path="/MemphisGrizzlies" element={<MemphisGrizzlies />} />
        <Route path="/MiamiHeat" element={<MiamiHeat />} />
        <Route path="/MilwaukeeBucks" element={<MilwaukeeBucks />} />
        <Route path="/MinnesotaTimberwolves" element={<MinnesotaTimberwolves />} />
        <Route path="/NewOrleansPelicans" element={<NewOrleansPelicans />} />
        <Route path="/NewYorkKnicks" element={<NewYorkKnicks />} />
        <Route path="/OklahomaCityThunder" element={<OklahomaCityThunder />} />
        <Route path="/OrlandoMagic" element={<OrlandoMagic />} />
        <Route path="/Philadelphia76ers" element={<Philadelphia76ers />} />
        <Route path="/PhoenixSuns" element={<PhoenixSuns />} />
        <Route path="/PortlandTrailBlazers" element={<PortlandTrailBlazers />} />
        <Route path="/SacramentoKings" element={<SacramentoKings />} />
        <Route path="/SanAntonioSpurs" element={<SanAntonioSpurs />} />
        <Route path="/TorontoRaptors" element={<TorontoRaptors />} />
        <Route path="/UtahJazz" element={<UtahJazz />} />
        <Route path="/WashingtonWizards" element={<WashingtonWizards />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();






