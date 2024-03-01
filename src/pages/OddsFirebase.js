import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import NBAOddsTable from '../components/NBAOddsTable';
import './Odds.css';
import Sidebar from '../components/Sidebar';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC3MH-sM-GWN_v3pH9DCdEcweWLCHzYbqI',
  authDomain: "bestbucketbets.firebaseapp.com",
  projectId: "bestbucketbets",
  storageBucket: "bestbucketbets.appspot.com",
  messagingSenderId: "671250228071",
  appId: "1:671250228071:web:96a9ad993e767c44cbc5c2",
  measurementId: "G-9X2PE7B4LS",
};

const OddsFirebase = () => {
  const [oddsData, setOddsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const oddsCollection = collection(db, 'nbaOdds');
        const snapshot = await getDocs(oddsCollection);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setOddsData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching NBA odds:', error);
        setError('Error fetching NBA odds. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
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

export default OddsFirebase;


