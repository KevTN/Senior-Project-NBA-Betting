import React from 'react';
import './Header.css'; // Assuming you have a stylesheet for this component

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">Logo</div>
      <div className="sidebar">Sidebar</div>
      <div className="tab-bar">
        <div className="tab">Home</div>
        <div className="tab">Odds</div>
        <div className="tab">Betting Odds</div>
      </div>
    </div>
  );
};

export default Header;
