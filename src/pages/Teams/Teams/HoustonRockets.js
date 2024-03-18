import React from 'react'
import './HoustonRockets.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/Houston-Rockets-Logo.png';
import TeamStatsTable from '../../components/TeamStatsTable'

function HoustonRockets() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="rockets-header">
      <img src={logo} alt="Houston Rockets Logo" className="rockets-logo" />
        <h1 className="rockets-name">Houston Rockets</h1>
      </header>
      <TeamStatsTable />

    </div>
  );
}

export default HoustonRockets