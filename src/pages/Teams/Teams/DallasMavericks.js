import React from 'react'
import './DallasMavericks.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/Dallas-Mavericks-Logo.png';
import TeamStatsTable from '../../components/TeamStatsTable'

function DallasMavericks() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="mavericks-header">
      <img src={logo} alt="Dallas Mavericks Logo" className="mavericks-logo" />
        <h1 className="mavericks-name">Dallas Mavericks</h1>
      </header>
      <TeamStatsTable />

    </div>
  );
}

export default DallasMavericks