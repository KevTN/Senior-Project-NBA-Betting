import React from 'react'
import './BrooklynNets.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/Brooklyn-Nets-Logo.png';
import TeamStatsTable from '../../components/TeamStatsTable'
import PlayerRoster from '../../components/PlayerRoster'
import PlayerStats from '../../components/PlayerStats'

function BrooklynNets() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="nets-header">
      <img src={logo} alt="Brooklyn Nets Logo" className="nets-logo" />
        <h1 className="nets-name">Brooklyn Nets</h1>
      </header>
      <TeamStatsTable />
      
      <PlayerStats />

      <PlayerRoster />
    </div>
  );
}

export default BrooklynNets;
