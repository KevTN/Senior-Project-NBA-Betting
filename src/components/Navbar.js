import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import Sidebar from './Sidebar'

function Navbar() {
  return (
    <div className="navbar">
      <div className="centeredContent">
        <a href="/">
          <img src={logo} alt="Logo" className="logosize" />
        </a>
      </div>
      <Sidebar />
      <div className="rightLinks">
        <Link to="/">Home</Link>
        <Link to="/Odds">Odds</Link>
        <Link to="/BettingGuide">Betting Guide</Link>
      </div>
    </div>
  )
}

export default Navbar

