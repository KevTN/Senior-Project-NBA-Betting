import React, { useState } from 'react';
import './BostonCeltics.css';
import Navbar from '../../components/Navbar';
import '../../App.css';
import logo from '../../images/Boston-Celtics-Logo.jpg';
import TeamStatsTable from '../../components/TeamStatsTable'
import PlayerRoster from '../../components/PlayerRoster'
import PlayerStats from '../../components/PlayerStats'

function BostonCeltics() {
  const [selectedOption, setSelectedOption] = useState('Team Roster'); // State to manage the selected option

  const handleOptionChange = (option) => {
    setSelectedOption(option); // Set the selected option
  };
  return (
    <div>
       <Navbar />
        

      <header className="celtics-header">
      <img src={logo} alt="Boston Celtics Logo" className="celtics-logo" />
        <h1 className="celtics-name">Boston Celtics</h1>
      </header>
<div className="toggle-buttons">
        <button onClick={() => handleOptionChange('Team Roster')}>Team Roster</button>
        <button onClick={() => handleOptionChange('Team Statistics')}>Team Statistics</button>
        <button onClick={() => handleOptionChange('Player Statistics')}>Player Statistics</button>
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

export default BostonCeltics;