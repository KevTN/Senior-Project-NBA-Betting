import React from 'react'
import './PhoenixSuns.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/Phoenix-Suns-Logo.png';
import TeamStatsTable from '../../components/TeamStatsTable'

function PhoenixSuns() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="suns-header">
      <img src={logo} alt= "Phoenix Suns Logo" className="suns-logo" />
        <h1 className="suns-name">Phoenix Suns</h1>
      </header>
      <TeamStatsTable />

    </div>
  );
}

export default PhoenixSuns
