import React from 'react'
import './Philadelphia76ers.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/Philadelphia-76ers-Logo.jpg';
import TeamStatsTable from '../../components/TeamStatsTable'

function Philadelphia76ers() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="sixers-header">
      <img src={logo} alt="Sixers Logo" className="sixers-logo" />
        <h1 className="sixers-name">Philadelphia 76ers</h1>
      </header>
      <TeamStatsTable />

    </div>
  );
}


export default Philadelphia76ers
