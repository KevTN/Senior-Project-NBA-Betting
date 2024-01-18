import React from 'react'
import './OklahomaCityThunder.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/OklahomaCity-Thunder-Logo.png';
import TeamStatsTable from '../../components/TeamStatsTable'

function OklahomaCityThunder() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="thunder-header">
      <img src={logo} alt="Oklahoma City Thunder Logo" className="thunder-logo" />
        <h1 className="thunder-name">Oklahoma City Thunder</h1>
      </header>
      <TeamStatsTable />

    </div>
  );
}

export default OklahomaCityThunder
