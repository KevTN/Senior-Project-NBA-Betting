import React from 'react'
import './LosAngelesLakers.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/LosAngeles-Lakers-Logo.png';
import TeamStatsTable from '../../components/TeamStatsTable'

function LosAngelesLakers() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="lakers-header">
      <img src={logo} alt="Los Angeles Lakers Logo" className="lakers-logo" />
        <h1 className="lakers-name">Los Angeles Lakers</h1>
      </header>
      <TeamStatsTable />

    </div>
  );
}

export default LosAngelesLakers
