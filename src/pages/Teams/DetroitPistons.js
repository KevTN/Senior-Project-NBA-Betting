import React from 'react'
import './DetroitPistons.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/Detroit-Pistons-Logo.png';
import TeamStatsTable from '../../components/TeamStatsTable'

function DetroitPistons() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="pistons-header">
      <img src={logo} alt="Pistons Logo" className="pistons-logo" />
        <h1 className="pistons-name">Detroit Pistons</h1>
      </header>
      <TeamStatsTable />

    </div>
  );
}

export default DetroitPistons;
