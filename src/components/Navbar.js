import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">Best Baller Bets</div>

      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to ="/About"> About</Link>
      </div>
      
    </div>
  )
}

export default Navbar

