import React from 'react'
import './HoustonRockets.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/Houston2.png';
import TeamStatsTable from '../../components/TeamStatsTable'

function HoustonRockets() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="houston-header">
      <img src={logo} alt="houston Logo" className="houston-logo" />
        <h1 className="houston-name">Houston Rockets</h1>
      </header>
      <TeamStatsTable />

    </div>
  );
}

export default HoustonRockets;
