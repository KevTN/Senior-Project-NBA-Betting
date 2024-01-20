import React from 'react'
import './MilwaukeeBucks.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/Milwaukee-Bucks-Logo.jpg';
import TeamStatsTable from '../../components/TeamStatsTable'
import PlayerRoster from '../../components/PlayerRoster'
import PlayerStats from '../../components/PlayerStats'


function MilwaukeeBucks() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="bucks-header">
      <img src={logo} alt="Bucks Logo" className="bucks-logo" />
        <h1 className="bucks-name">Milwaukee Bucks</h1>
      </header>
      <TeamStatsTable />
      
      <PlayerStats />

      <PlayerRoster />
    </div>
  );
}

export default MilwaukeeBucks
