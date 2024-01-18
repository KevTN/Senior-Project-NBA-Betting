import React from 'react'
import './ChicagoBulls.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/Chicago-Bulls-Logo.jpg';
import TeamStatsTable from '../../components/TeamStatsTable'

function ChicagoBulls() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="bulls-header">
      <img src={logo} alt="Bulls Logo" className="bulls-logo" />
        <h1 className="bulls-name">Chicago Bulls</h1>
      </header>
      <TeamStatsTable />

    </div>
  );
}

export default ChicagoBulls;
