import React from 'react'
import './MemphisGrizzlies.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/Memphis-Grizzlies-Logo.png';
import TeamStatsTable from '../../components/TeamStatsTable'

function MemphisGrizzlies() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="grizzlies-header">
      <img src={logo} alt="Memphis Grizzlies Logo" className="grizzlies-logo" />
        <h1 className="grizzlies-name">Memphis Grizzliess</h1>
      </header>
      <TeamStatsTable />

    </div>
  );
}

export default MemphisGrizzlies
