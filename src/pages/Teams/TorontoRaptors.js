import React from 'react'
import './TorontoRaptors.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/Toronto-Raptors-Logo.jpg';
import TeamStatsTable from '../../components/TeamStatsTable'
import PlayerRoster from '../../components/PlayerRoster'
import PlayerStats from '../../components/PlayerStats'


function TorontoRaptors() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="raptors-header">
      <img src={logo} alt="Raptors Logo" className="raptors-logo" />
        <h1 className="raptors-name">Toronto Raptors</h1>
      </header>
      <TeamStatsTable />
      
      <PlayerStats />

      <PlayerRoster />

    </div>
  );
}


export default TorontoRaptors
