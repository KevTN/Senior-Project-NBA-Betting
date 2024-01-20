import React from 'react'
import './NewYorkKnicks.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/NewYork-Knicks-Logo.png';
import TeamStatsTable from '../../components/TeamStatsTable'
import PlayerRoster from '../../components/PlayerRoster'
import PlayerStats from '../../components/PlayerStats'


function NewYorkKnicks() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="knicks-header">
      <img src={logo} alt="Knicks Logo" className="knicks-logo" />
        <h1 className="knicks-name">NewYork-Knicks</h1>
      </header>
      <TeamStatsTable />
      
      <PlayerStats />

      <PlayerRoster />

    </div>
  );
}

export default NewYorkKnicks
