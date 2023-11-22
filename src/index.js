import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Hawks from './pages/Teams/AtlantaHawks';
import Celtics from './pages/Teams/BostonCeltics';
import Nets from './pages/Teams/BrooklynNets';
import Hornets from './pages/Teams/CharlotteHornets';
import Bulls from './pages/Teams/ChicagoBulls';
import Cavaliers from './pages/Teams/ClevelandCavaliers';
import Mavericks from './pages/Teams/DallasMavericks';
import Nuggets from './pages/Teams/DenverNuggets';
import Pistons from './pages/Teams/DetroitPistons';
import Warriors from './pages/Teams/GoldenStateWarriors';
import Rockets from './pages/Teams/HoustonRockets';
import Pacers from './pages/Teams/IndianaPacers';
import Clippers from './pages/Teams/LAClippers';
import Lakers from './pages/Teams/LosAngelesLakers';
import Grizzlies from './pages/Teams/MemphisGrizzlies';
import Heat from './pages/Teams/MiamiHeat';
import Bucks from './pages/Teams/MilwaukeeBucks';
import Timberwolves from './pages/Teams/MinnesotaTimberwolves';
import Pelicans from './pages/Teams/NewOrleansPelicans';
import Knicks from './pages/Teams/NewYorkKnicks';
import Thunder from './pages/Teams/OklahomaCityThunder';
import Magic from './pages/Teams/OrlandoMagic';
import Sixers from './pages/Teams/Philadelphia76ers';
import Suns from './pages/Teams/PhoenixSuns';
import TrailBlazers from './pages/Teams/PortlandTrailBlazers';
import Kings from './pages/Teams/SacramentoKings';
import Spurs from './pages/Teams/SanAntonioSpurs';
import Raptors from './pages/Teams/TorontoRaptors';
import Jazz from './pages/Teams/UtahJazz';
import Wizards from './pages/Teams/WashingtonWizards';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },

  {
    path: "/AtlantaHawks",
    element: <Hawks />,
  },
  {
    path: "/BostonCeltics",
    element: <Celtics />,
  },
  {
    path: "/BrooklynNets",
    element: <Nets />,
  },
  {
    path: "/CharlotteHornets",
    element: <Hornets />,
  },
  {
    path: "/ChicagoBulls",
    element: <Bulls />,
  },
  {
    path: "/ClevelandCavaliers",
    element: <Cavaliers />,
  },
  {
    path: "/DallasMavericks",
    element: <Mavericks />,
  },
  {
    path: "/DenverNuggets",
    element: <Nuggets />,
  },
  {
    path: "/DetroitPistons",
    element: <Pistons />,
  },
  {
    path: "/GoldenStateWarriors",
    element: <Warriors />,
  },
  {
    path: "/HoustonRockets",
    element: <Rockets />,
  },
  {
    path: "/IndianaPacers",
    element: <Pacers />,
  },
  {
    path: "/LAClippers",
    element: <Clippers />,
  },
  {
    path: "/LosAngelesLakers",
    element: <Lakers />,
  },
  {
    path: "/MemphisGrizzlies",
    element: <Grizzlies />,
  },
  {
    path: "/MiamiHeat",
    element: <Heat />,
  },
  {
    path: "/MilwaukeeBucks",
    element: <Bucks />,
  },
  {
    path: "/MinnesotaTimberwolves",
    element: <Timberwolves />,
  },
  {
    path: "/NewOrleansPelicans",
    element: <Pelicans />,
  },
  {
    path: "/NewYorkKnicks",
    element: <Knicks />,
  },
  {
    path: "/OklahomaCityThunder",
    element: <Thunder />,
  },
  {
    path: "/OrlandoMagic",
    element: <Magic />,
  },
  {
    path: "/Philadelphia76ers",
    element: <Sixers />,
  },
  {
    path: "/PhoenixSuns",
    element: <Suns />,
  },
  {
    path: "/PortlandTrailBlazers",
    element: <TrailBlazers />,
  },
  {
    path: "/SacramentoKings",
    element: <Kings />,
  },
  {
    path: "/SanAntonioSpurs",
    element: <Spurs />,
  },
  {
    path: "/TorontoRaptors",
    element: <Raptors />,
  },
  {
    path: "/UtahJazz",
    element: <Jazz />,
  },
  {
    path: "/WashingtonWizards",
    element: <Wizards />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
