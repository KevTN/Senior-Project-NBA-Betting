import React from 'react'
import './PortlandTrailBlazers.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/Portland-TrailBlazers-Logo.png';
import TeamStatsTable from '../../components/TeamStatsTable'
import PlayerRoster from '../../components/PlayerRoster'
import PlayerStats from '../../components/PlayerStats'


function PortlandTrailBlazers() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="trailblazers-header">
      <img src={logo} alt="Portland TrailBlazers Logo" className="trailblazers-logo" />
        <h1 className="trailblazers-name">Portland TrailBlazers</h1>
      </header>
      <TeamStatsTable />
      
      <PlayerStats />

      <PlayerRoster />

    </div>
  );
}

export default PortlandTrailBlazers
