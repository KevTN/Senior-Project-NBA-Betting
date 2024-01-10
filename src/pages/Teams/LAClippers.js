import React from 'react'
import './LAClippers.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/LA-Clippers-Logo.png';
import TeamStatsTable from '../../components/TeamStatsTable'

function LAClippers() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="clippers-header">
      <img src={logo} alt="LA Clippers Logo" className="clippers-logo" />
        <h1 className="clippers-name">LA Clippers </h1>
      </header>
      <TeamStatsTable />

    </div>
  );
}

export default LAClippers
