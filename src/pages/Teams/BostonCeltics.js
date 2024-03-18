import React, { useState, useEffect  } from 'react';
import './BostonCeltics.css';
import Navbar from '../../components/Navbar';
import '../../App.css';
import logo from '../../images/Boston-Celtics-Logo.jpg';
import TeamStatsTable from '../../components/TeamStatsTable'
import PlayerRoster from '../../components/PlayerRoster'
import PlayerStats from '../../components/PlayerStats'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

function BostonCeltics() {
  const [teamStatsData, setTeamStatsData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOption, setSelectedOption] = useState('Team Statistics');
  //const [selectedOption, setSelectedOption] = useState('Team Roster'); // State to manage the selected option
  
  useEffect(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyC3MH-sM-GWN_v3pH9DCdEcweWLCHzYbqI',
      authDomain: "bestbucketbets.firebaseapp.com",
      projectId: "bestbucketbets",
      storageBucket: "bestbucketbets.appspot.com",
      messagingSenderId: "671250228071",
      appId: "1:671250228071:web:96a9ad993e767c44cbc5c2",
      measurementId: "G-9X2PE7B4LS",
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
      const teamStatsCollection = collection(db, "nbaTeamStats", 'Boston Celtics', 'stats');

      getDocs(teamStatsCollection)
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
        setTeamStatsData(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError("Error fetching NBA odds. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


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
          <TeamStatsTable teamStatsData = {teamStatsData} /> 
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