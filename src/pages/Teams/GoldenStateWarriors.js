import React from 'react'
import './GoldenStateWarriors.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/GoldenState-Warriors-Logo.png';
import TeamStatsTable from '../../components/TeamStatsTable'

function GoldenStateWarriors() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="warriors-header">
      <img src={logo} alt="Golden State Warriors" className="warriors-logo" />
        <h1 className="warriors-name">Golden State Warriors</h1>
      </header>
      <TeamStatsTable />

    </div>
  );
}

export default GoldenStateWarriors