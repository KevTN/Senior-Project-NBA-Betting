import React from 'react'
import './WashingtonWizards.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/Washington-Wizards-Logo.jpg';
import TeamStatsTable from '../../components/TeamStatsTable'

function WashingtonWizards() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="wizards-header">
      <img src={logo} alt="Wizards Logo" className="wizards-logo" />
        <h1 className="wizards-name">Washington Wizards</h1>
      </header>
      <TeamStatsTable />

    </div>
  );
}


export default WashingtonWizards
