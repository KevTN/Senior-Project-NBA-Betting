import React from 'react'
import './AtlantaHawks.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/Atlanta-Hawks-Logo.jpg';
import TeamStatsTable from '../../components/TeamStatsTable'

function AtlantaHawks() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="team-header">
      <img src={logo} alt="Atlanta Hawks Logo" className="team-logo" />
        <h1 className="team-name">Atlanta Hawks</h1>
      </header>
      <TeamStatsTable />

    </div>
  );
}

export default AtlantaHawks;
