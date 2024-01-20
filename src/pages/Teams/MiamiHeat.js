import React from 'react'
import './MiamiHeat.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/Miami-Heat-Logo.jpg';
import TeamStatsTable from '../../components/TeamStatsTable'
import PlayerRoster from '../../components/PlayerRoster'
import PlayerStats from '../../components/PlayerStats'


function MiamiHeat() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="heat-header">
      <img src={logo} alt="Heat Logo" className="heat-logo" />
        <h1 className="heat-name">Miami Heat</h1>
      </header>
      <TeamStatsTable />
      
      <PlayerStats />

      <PlayerRoster />
    </div>
  );
}


export default MiamiHeat
