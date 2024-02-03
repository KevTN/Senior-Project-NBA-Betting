import React, { useState } from 'react';
import './AtlantaHawks.css';
import Navbar from '../../components/Navbar';
import '../../App.css';
import logo from '../../images/Atlanta-Hawks-Logo.jpg';
import TeamStatsTable from '../../components/TeamStatsTable';
import PlayerRoster from '../../components/PlayerRoster';
import PlayerStats from '../../components/PlayerStats';

function AtlantaHawks() {
  const [selectedOption, setSelectedOption] = useState('Team Roster'); // State to manage the selected option

  const handleOptionChange = (option) => {
    setSelectedOption(option); // Set the selected option
  };

  return (
    <div>
      <Navbar />
      <header className="hawks-header">
        <img src={logo} alt="Atlanta Hawks Logo" className="hawks-logo" />
        <h1 className="hawks-name">Atlanta Hawks</h1>
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

export default AtlantaHawks;