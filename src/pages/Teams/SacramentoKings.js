import React from 'react'
import './SacramentoKings.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/Sacramento-Kings-Logo.png';
import TeamStatsTable from '../../components/TeamStatsTable'

function SacramentoKings() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="kings-header">
      <img src={logo} alt="Sacramento Kings Logo" className="kings-logo" />
        <h1 className="kings-name">Sacramento Kings</h1>
      </header>
      <TeamStatsTable />

    </div>
  );
}

export default SacramentoKings
