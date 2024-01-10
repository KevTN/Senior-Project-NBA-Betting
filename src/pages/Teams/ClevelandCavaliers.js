import React from 'react'
import './ClevelandCavaliers.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/Cleveland-Cavaliers-Logo.jpg';
import TeamStatsTable from '../../components/TeamStatsTable'

function ClevelandCavaliers() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="cavs-header">
      <img src={logo} alt="Cavs Logo" className="cavs-logo" />
        <h1 className="cavs-name">Cleveland Cavaliers</h1>
      </header>
      <TeamStatsTable />

    </div>
  );
}

export default ClevelandCavaliers;