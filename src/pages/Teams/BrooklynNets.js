import React, { useState } from 'react';
import './BrooklynNets.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/Brooklyn-Nets-Logo.png';
import TeamStatsTable from '../../components/TeamStatsTable';
import PlayerRoster from '../../components/PlayerRoster';
import PlayerStats from '../../components/PlayerStats';

function BrooklynNets() {
  const [selectedOption, setSelectedOption] = useState('Team Roster'); // State to manage the selected option

  const handleOptionChange = (option) => {
    setSelectedOption(option); // Set the selected option
  };

  return (
    <div>
      <Navbar />
      <Sidebar />

      <header className="nets-header">
        <img src={logo} alt="Brooklyn Nets Logo" className="nets-logo" />
        <h1 className="nets-name">Brooklyn Nets</h1>
      </header>
      <div className="toggle-buttons">
        <button 
          className={selectedOption === 'Team Roster' ? 'active' : ''}
          onClick={() => handleOptionChange('Team Roster')}
        >
          Team Roster
        </button>
        <button 
          className={selectedOption === 'Team Statistics' ? 'active' : ''}
          onClick={() => handleOptionChange('Team Statistics')}
        >
          Team Statistics
        </button>
        <button 
          className={selectedOption === 'Player Statistics' ? 'active' : ''}
          onClick={() => handleOptionChange('Player Statistics')}
        >
          Player Statistics
        </button>
      </div>
      {selectedOption === 'Team Roster' ? (
        <div>
          <PlayerRoster /> {/* Display player roster when selected option is 'Team Roster' */}
        </div>
      ) : selectedOption === 'Team Statistics' ? (
        <div>
          <TeamStatsTable /> {/* Display team statistics table when selected option is 'Team Statistics' */}
        </div>
      ) : (
        <div>
          <PlayerStats /> {/* Display player statistics when selected option is 'Player Statistics' */}
        </div>
      )}
    </div>
  );
}

export default BrooklynNets;