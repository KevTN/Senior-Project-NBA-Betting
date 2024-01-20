import React from 'react'
import './CharlotteHornets.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/Charlotte-Hornets-Logo.jpg';
import TeamStatsTable from '../../components/TeamStatsTable'
import PlayerRoster from '../../components/PlayerRoster'
import PlayerStats from '../../components/PlayerStats'


function CharlotteHornets() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="hornets-header">
      <img src={logo} alt="Charlotte Hornets Logo" className="hornets-logo" />
        <h1 className="hornets-name">Charlotte Hornets</h1>
      </header>
      <TeamStatsTable />
      
      <PlayerStats />

      <PlayerRoster />
    </div>
  );
}

export default CharlotteHornets;
