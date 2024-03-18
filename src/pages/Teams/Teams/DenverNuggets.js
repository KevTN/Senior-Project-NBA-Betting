import React from 'react'
import './DenverNuggets.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/Denver-Nuggets-Logo.png';
import TeamStatsTable from '../../components/TeamStatsTable'

function DenverNuggets() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="nuggets-header">
      <img src={logo} alt="Denver Nuggets Logo" className="nuggets-logo" />
        <h1 className="nuggets-name">Denver Nuggets</h1>
      </header>
      <TeamStatsTable />

    </div>
  );
}

export default DenverNuggets
