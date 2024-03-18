import React, { useState } from 'react';
import './LosAngelesLakers.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/LosAngeles-Lakers-Logo.png';
import TeamStatsTable from '../../components/TeamStatsTable';
import PlayerRoster from '../../components/PlayerRoster';
import PlayerStats from '../../components/PlayerStats';

function LosAngelesLakers() {
  const [selectedOption, setSelectedOption] = useState('Team Roster'); // State to manage the selected option

  const handleOptionChange = (option) => {
    setSelectedOption(option); // Set the selected option
  };

  return (
    <div>
       <Navbar />
        <Sidebar />

      <header className="lakers-header">
      <img src={logo} alt="Los Angeles Lakers Logo" className="lakers-logo" />
        <h1 className="lakers-name">Los Angeles Lakers</h1>
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

export default LosAngelesLakers;