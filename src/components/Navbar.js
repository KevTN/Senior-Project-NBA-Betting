import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
function Navbar() {
  return (
    <div className="navbar">

    <div className="leftSide">
      <a href="/">
        <img src={logo} alt="Logo" className="logosize" />
      </a>
    </div>
      

      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to ="/About"> About</Link>
      </div>
      
    </div>
  )
}

export default Navbar

