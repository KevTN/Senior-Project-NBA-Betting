import React from 'react'
import './MinnesotaTimberwolves.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/Minnesota-Timberwolves-Logo.png';
import TeamStatsTable from '../../components/TeamStatsTable'
import PlayerRoster from '../../components/PlayerRoster'
import PlayerStats from '../../components/PlayerStats'


function MinnesotaTimberwolves() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="timberwolves-header">
      <img src={logo} alt="Minnesota Timberwolves Logo" className="timberwolves-logo" />
        <h1 className="timberwolves-name">Minnesota Timberwolves</h1>
      </header>
      <TeamStatsTable />
      
      <PlayerStats />

      <PlayerRoster />
    </div>
  );
}

export default MinnesotaTimberwolves
