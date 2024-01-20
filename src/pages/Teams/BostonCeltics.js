import React from 'react'
import './BostonCeltics.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/Boston-Celtics-Logo.jpg';
import TeamStatsTable from '../../components/TeamStatsTable'
import PlayerRoster from '../../components/PlayerRoster'
import PlayerStats from '../../components/PlayerStats'

function BostonCeltics() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="celtics-header">
      <img src={logo} alt="Boston Celtics Logo" className="celtics-logo" />
        <h1 className="celtics-name">Boston Celtics</h1>
      </header>
      <TeamStatsTable />
      
      <PlayerStats />

      <PlayerRoster />
    </div>
  );
}

export default BostonCeltics;