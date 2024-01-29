// Navbar.jsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import Sidebar from './Sidebar';
import logo from '../images/logo.png';

const Navbar = () => {
  const location = useLocation();

  const tabRoutes = [
    { path: '/', label: 'Home' },
    { path: '/Odds', label: 'Odds' },
    { path: '/BettingGuide', label: 'Betting Guide' },
    // Adjust the paths accordingly based on your project structure
  ];

  return (
    <div className="navbar">
      <div className="centeredContent">
        <h1 className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="logosize" />
          </Link>
        </h1>
        <Sidebar />
        <div className="tab-bar">
          {tabRoutes.map((tab) => (
            <Link
              to={tab.path}
              key={tab.path}
              className={`tab ${location.pathname === tab.path ? 'active' : ''}`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
