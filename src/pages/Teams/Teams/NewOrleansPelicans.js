import React from 'react'
import './NewOrleansPelicans.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/NewOrleans-Pelicans-Logo.png';
import TeamStatsTable from '../../components/TeamStatsTable'

function NewOrleansPelicans() {
  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="pelicans-header">
      <img src={logo} alt="New Orleans Pelicans Logo" className="pelicans-logo" />
        <h1 className="pelicans-name">New Orleans Pelicans</h1>
      </header>
      <TeamStatsTable />

    </div>
  );
}

export default NewOrleansPelicans