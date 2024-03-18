import React, { useState, useEffect } from 'react';
import './AtlantaHawks.css';
import Navbar from '../../components/Navbar';
import '../../App.css';
import logo from '../../images/Atlanta-Hawks-Logo.jpg';
import PlayerRoster from '../../components/RosterTable/PlayerRoster-ATL'
import PlayerStats from '../../components/PlayerStatsTables/PlayerStats-ATL'

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const AtlantaHawks = () => {
  const [data, setData] = useState({
    teamStats: [],
    teamRoster: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOption, setSelectedOption] = useState('TeamStats');
  //const [selectedOption, setSelectedOption] = useState('Team Roster'); // State to manage the selected option
  
  useEffect(() => {
    const fetchData = async () => {
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
      const date = new Date();
      const teamStats = collection(db, "nbaGames", String(date.getMonth() + 1),'ATL');
      const teamRoster = collection(db, "nbaRoster", String(date.getMonth() + 1),'ATL');
      //const playerStats = collection(db, "nbaRoster", String(tomorrow.getMonth() + 1), String(tomorrow.getDate()));
      
      try {
        const [statsData, rosterData] = await Promise.all([
          getDocs(teamStats),
          getDocs(teamRoster)
        ]);

        const data = {
          stats: [],
          roster: []
        };

        rosterData.forEach(doc => data.roster.push(doc.data()));
        statsData.forEach(doc => data.stats.push(doc.data()));

        setData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setError("Error fetching NBA odds. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);


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