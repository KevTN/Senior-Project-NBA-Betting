import React from 'react'
import './GoldenStateWarriors.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/Golden_State_Warriors_logo.png';
import TeamStatsTable from '../../components/TeamStatsTable'

function GoldenStateWarriors() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="goldens-header">
      <img src={logo} alt="goldens Logo" className="goldens-logo" />
        <h1 className="goldens-name">Golden State Warriors</h1>
      </header>
      <TeamStatsTable />

    </div>
  );
}

export default GoldenStateWarriors;
