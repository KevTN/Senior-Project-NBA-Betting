// Navbar.jsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import Sidebar from './Sidebar';
//import logo from '../../../../public/media/logo.png';
;

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
          <img src="%PUBLIC_URL%/images/logo.png" alt="Logo" />
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
