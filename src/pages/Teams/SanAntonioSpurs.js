import React from 'react'
import './SanAntonioSpurs.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/SanAntonio-Spurs-Logo.png';
import TeamStatsTable from '../../components/TeamStatsTable'
import PlayerRoster from '../../components/PlayerRoster'
import PlayerStats from '../../components/PlayerStats'


function SanAntonioSpurs() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="spurs-header">
      <img src={logo} alt="San Antonio Spurs Logo" className="spurs-logo" />
        <h1 className="spurs-name">San Antonio Spurs</h1>
      </header>
      <TeamStatsTable />
      
      <PlayerStats />

      <PlayerRoster />
    </div>
  );
}

export default SanAntonioSpurs
