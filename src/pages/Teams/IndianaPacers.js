import React from 'react'
import './IndianaPacers.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/Indiana-Pacers-Logo.jpg';
import TeamStatsTable from '../../components/TeamStatsTable'
import PlayerRoster from '../../components/PlayerRoster'
import PlayerStats from '../../components/PlayerStats'


function IndianaPacers() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="pacers-header">
      <img src={logo} alt="Pacers Logo" className="pacers-logo" />
        <h1 className="pacers-name">Indiana Pacers</h1>
      </header>
      <TeamStatsTable />
      
      <PlayerStats />

      <PlayerRoster />
    </div>
  );
}

export default IndianaPacers
