import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import closeButton from './../images/icons8-close-64.png';


const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
      {!sidebarOpen && (
        <button className="toggle-btn" onClick={toggleSidebar}>
           Teams
        </button>
      )}
      {sidebarOpen && (
        <div>
          <button className="close-btn" onClick={closeSidebar}>
          <img src={closeButton} alt="Close" className="closeButton" />
          </button>
          <span className="sidebar-title">Teams</span>
        </div>
      )}
      <ul>
      <li><Link to="/AtlantaHawks">Atlanta Hawks</Link></li>
      <li><Link to="/BostonCeltics">Boston Celtics</Link></li>
      <li><Link to="/BrooklynNets">Brooklyn Nets</Link></li>
      <li><Link to="/CharlotteHornets">Charlotte Hornets</Link></li>
      <li><Link to="/ChicagoBulls">Chicago Bulls</Link></li>
      <li><Link to="/ClevelandCavaliers">Cleveland Cavaliers</Link></li>
      <li><Link to="/DallasMavericks">Dallas Mavericks</Link></li>
      <li><Link to="/DenverNuggets">Denver Nuggets</Link></li>
      <li><Link to="/DetroitPistons">Detroit Pistons</Link></li>
      <li><Link to="/GoldenStateWarriors">Golden State Warriors</Link></li>
      <li><Link to="/HoustonRockets">Houston Rockets</Link></li>
      <li><Link to="/IndianaPacers">Indiana Pacers</Link></li>
      <li><Link to="/LAClippers">LA Clippers</Link></li>
      <li><Link to="/LosAngelesLakers">Los Angeles Lakers</Link></li>
      <li><Link to="/MemphisGrizzlies">Memphis Grizzlies</Link></li>
      <li><Link to="/MiamiHeat">Miami Heat</Link></li>
      <li><Link to="/MilwaukeeBucks">Milwaukee Bucks</Link></li>
      <li><Link to="/MinnesotaTimberwolves">Minnesota Timberwolves</Link></li>
      <li><Link to="/NewOrleansPelicans">New Orleans Pelicans</Link></li>
      <li><Link to="/NewYorkKnicks">New York Knicks</Link></li>
      <li><Link to="/OklahomaCityThunder">Oklahoma City Thunder</Link></li>
      <li><Link to="/OrlandoMagic">Orlando Magic</Link></li>
      <li><Link to="/Philadelphia76ers">Philadelphia 76ers</Link></li>
      <li><Link to="/PhoenixSuns">Phoenix Suns</Link></li>
      <li><Link to="/PortlandTrailBlazers">Portland Trail Blazers</Link></li>
      <li><Link to="/SacramentoKings">Sacramento Kings</Link></li>
      <li><Link to="/SanAntonioSpurs">San Antonio Spurs</Link></li>
      <li><Link to="/TorontoRaptors">Toronto Raptors</Link></li>
      <li><Link to="/UtahJazz">Utah Jazz</Link></li>
      <li><Link to="/WashingtonWizards">Washington Wizards</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;