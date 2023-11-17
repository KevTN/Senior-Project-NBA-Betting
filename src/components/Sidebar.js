import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        TEAMS
      </button>
      <ul>
        <li>Atlanta Hawks</li>
        <li>Boston Celtics</li>
        <li>Brooklyn Nets</li>
        {/* Add more NBA teams */}
      </ul>
    </div>
  );
};

export default Sidebar;