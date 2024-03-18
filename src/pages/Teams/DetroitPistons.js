import React, { useState, useEffect } from 'react';
import './DetroitPistons.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../../App.css';
import logo from '../../images/Detroit-Pistons-Logo.png';
// import TeamStatsTable from '../../components/TeamStatsTable';
// import PlayerRoster from '../../components/PlayerRoster';
// import PlayerStats from '../../components/PlayerStats';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

function DetroitPistons() {
  const [data, setData] = useState({
    teamStats: [],
    teamRoster: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOption, setSelectedOption] = useState('Team Roster');

  useEffect(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyC3MH-sM-GWN_v3pH9DCdEcweWLCHzYbqI',
      authDomain: 'bestbucketbets.firebaseapp.com',
      projectId: 'bestbucketbets',
      storageBucket: 'bestbucketbets.appspot.com',
      messagingSenderId: '671250228071',
      appId: '1:671250228071:web:96a9ad993e767c44cbc5c2',
      measurementId: 'G-9X2PE7B4LS',
    };

    const fetchData = async () => {
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      const date = new Date();
      const teamStats = collection(db, 'nbaGames', String(date.getMonth() + 1), 'DET');
      const teamRoster = collection(db, 'nbaRoster', String(date.getMonth() + 1), 'DET');
      
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
        console.error('Error fetching data: ', error);
        setError('Error fetching NBA odds. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  const handleOptionChange = (option) => {
    setSelectedOption(option); 
  };
  return (
    <div>
      <Navbar />
      <header className="pistons-header">
        <img src={logo} alt="Detroit Pistons Logo" className="pistons-logo" />
        <h1 className="pistons-name">Detroit Pistons</h1>
      </header>
      <Sidebar />
      <div className="toggle-buttons">
        <button onClick={() => handleOptionChange('Team Roster')}>Team Roster</button>
        <button onClick={() => handleOptionChange('Team Statistics')}>Team Statistics</button>
        <button onClick={() => handleOptionChange('Player Statistics')}>Player Statistics</button>
      </div>
      {selectedOption === 'Team Roster' ? (
        <div>
          {/* <PlayerRoster /> */}
        </div>
      ) : selectedOption === 'Team Statistics' ? (
        <div>
          {/* <TeamStatsTable /> */}
        </div>
      ) : (
        <div>
          {/* <PlayerStats /> */}
        </div>
      )}
    </div>
  );
}

export default DetroitPistons;
