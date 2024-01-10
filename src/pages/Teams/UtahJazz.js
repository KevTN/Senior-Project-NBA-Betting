import React from 'react'
import './UtahJazz.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/Utah-Jazz-Logo.png';
import TeamStatsTable from '../../components/TeamStatsTable'

function UtahJazz() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="jazz-header">
      <img src={logo} alt="Utah Jazz Logo" className="jazz-logo" />
        <h1 className="jazz-name">Utah Jazz</h1>
      </header>
      <TeamStatsTable />

    </div>
  );
}

export default UtahJazz
