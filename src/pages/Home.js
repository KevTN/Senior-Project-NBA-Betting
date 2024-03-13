import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import YesterdayGames from '../components/YesterdayGames'; // Import YesterdayGames component
import Today from '../components/TodayGames';
import Tomorrow from '../components/TomorrowGames';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  const [data, setData] = useState({
    yesterday: [],
    today: [],
    tomorrow: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOption, setSelectedOption] = useState('Today');
  
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
      const today = new Date();

// Extract year, month, and day
const month = today.getMonth() + 1;
const day = today.getDate();
const tomorrow = today.getDate() + 1;
const yesterday = today.getDate() -1;

      
      
      const yesterdayCollection = collection(db, "nbaGames", String(month), String(yesterday));
      const todayCollection = collection(db, "nbaGames", String(month), String(day));
      const tomorrowCollection = collection(db, "nbaGames", String(month), String(tomorrow));
      
      try {
        const [yesterdayData, todayData, tomorrowData] = await Promise.all([
          getDocs(yesterdayCollection),
          getDocs(todayCollection),
          getDocs(tomorrowCollection)
        ]);

        const data = {
          yesterday: [],
          today: [],
          tomorrow: []
        };

        yesterdayData.forEach(doc => data.yesterday.push(doc.data()));
        todayData.forEach(doc => data.today.push(doc.data()));
        tomorrowData.forEach(doc => data.tomorrow.push(doc.data()));

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
    setSelectedOption(option);
  };

  return (
    <div>
      <Navbar className='Navbar' />
      <Sidebar />
      <h1 className="main-header">NBA Scoreboard</h1>
      <div className="toggle-buttons-container">
        <button className={`y-button ${selectedOption === 'Yesterday' ? 'active' : ''}`} onClick={() => setSelectedOption('Yesterday')}>Yesterday</button>
        <button className={`tod-button ${selectedOption === 'Today' ? 'active' : ''}`} onClick={() => setSelectedOption('Today')}>Today</button>
        <button className={`tom-button ${selectedOption === 'Tomorrow' ? 'active' : ''}`} onClick={() => setSelectedOption('Tomorrow')}>Tomorrow</button>
      </div>
      {selectedOption === 'Yesterday' && <YesterdayGames gamesData={data.yesterday} />}
      {selectedOption === 'Today' && <Today gamesData={data.today} />}
      {selectedOption === 'Tomorrow' && <Tomorrow gamesData={data.tomorrow} />}
    </div>
  );
};

export default Home;

