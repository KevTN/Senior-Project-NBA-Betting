import React from 'react'
import './OrlandoMagic.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/Orlando-Magic-Logo.jpg';
import TeamStatsTable from '../../components/TeamStatsTable'
import PlayerRoster from '../../components/PlayerRoster'
import PlayerStats from '../../components/PlayerStats'


function OrlandoMagic() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="magic-header">
      <img src={logo} alt="Magic Logo" className="magic-logo" />
        <h1 className="magic-name">Orlando Magic</h1>
      </header>
      <TeamStatsTable />
      
      <PlayerStats />

      <PlayerRoster />
    </div>
  );
}

export default OrlandoMagic
