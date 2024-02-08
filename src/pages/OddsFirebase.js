import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import NBAOddsTable from '../components/NBAOddsTable';
import { collection, getDocs } from 'firebase/firestore';
import { dbInstance } from '../FirebaseConfig'; // Assuming you have exported dbInstance from FirebaseConfig.js
import './Odds.css';
import Sidebar from '../components/Sidebar';

const Odds = () => {
  const [oddsData, setOddsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNBAOdds = async () => {
      try {
        const oddsCollection = collection(dbInstance, 'nbaOdds');
        const oddsSnapshot = await getDocs(oddsCollection);
        const data = oddsSnapshot.docs.map(doc => doc.data());
        setOddsData(data);
      } catch (error) {
        console.error('Error fetching NBA odds:', error);
        setError('Error fetching NBA odds. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchNBAOdds();
  }, []);

  return (
    <div>
      <Navbar className='Navbar' />
      <Sidebar />
      <div className="Betting-Odds-Header">
        <h1 className="header-title">NBA Betting Odds</h1>
      </div>
      {loading && <p>Loading NBA odds...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && <NBAOddsTable oddsData={oddsData} />}
    </div>
  );
};

export default Odds;
