import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
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
      <Route exact path="/" component={Home} />
      <Route path="/Odds" component={OddsFirebase} />
      <Route path="/BettingGuide" component={BettingGuide} />
      <Route path="/AtlantaHawks" component={AtlantaHawks} />
      <Route path="/BostonCeltics" component={BostonCeltics} />
      <Route path="/BrooklynNets" component={BrooklynNets} />
      <Route path="/CharlotteHornets" component={CharlotteHornets} />
      <Route path="/ChicagoBulls" component={ChicagoBulls} />
      <Route path="/ClevelandCavaliers" component={ClevelandCavaliers} />
      <Route path="/DallasMavericks" component={DallasMavericks} />
      <Route path="/DenverNuggets" component={DenverNuggets} />
      <Route path="/DetroitPistons" component={DetroitPistons} />
      <Route path="/GoldenStateWarriors" component={GoldenStateWarriors} />
      <Route path="/HoustonRockets" component={HoustonRockets} />
      <Route path="/IndianaPacers" component={IndianaPacers} />
      <Route path="/LAClippers" component={LAClippers} />
      <Route path="/LosAngelesLakers" component={LosAngelesLakers} />
      <Route path="/MemphisGrizzlies" component={MemphisGrizzlies} />
      <Route path="/MiamiHeat" component={MiamiHeat} />
      <Route path="/MilwaukeeBucks" component={MilwaukeeBucks} />
      <Route path="/MinnesotaTimberwolves" component={MinnesotaTimberwolves} />
      <Route path="/NewOrleansPelicans" component={NewOrleansPelicans} />
      <Route path="/NewYorkKnicks" component={NewYorkKnicks} />
      <Route path="/OklahomaCityThunder" component={OklahomaCityThunder} />
      <Route path="/OrlandoMagic" component={OrlandoMagic} />
      <Route path="/Philadelphia76ers" component={Philadelphia76ers} />
      <Route path="/PhoenixSuns" component={PhoenixSuns} />
      <Route path="/PortlandTrailBlazers" component={PortlandTrailBlazers} />
      <Route path="/SacramentoKings" component={SacramentoKings} />
      <Route path="/SanAntonioSpurs" component={SanAntonioSpurs} />
      <Route path="/TorontoRaptors" component={TorontoRaptors} />
      <Route path="/UtahJazz" component={UtahJazz} />
      <Route path="/WashingtonWizards" component={WashingtonWizards} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();




