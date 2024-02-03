import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
/*import TodayGames from '../components/TodaysGames';
import TomorrowGames from '../components/TomorrowsGames';*/
import YesterdayGames from '../components/YesterdayGames';
import axios from 'axios';
import './Home.css';


const Games = () => {
  const [gamesData, setGamesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOption, setSelectedOption] = useState('Today');

  const parseGameData = (rawData) => {
    try {
      return rawData.map((game) => JSON.parse(JSON.stringify(game))).filter((game) => game !== null);
    } catch (error) {
      console.error('Error parsing NBA Games data:', error);
      return [];
    }
  };

  const fetchNBAGames = async (date) => {
    try {
      const response = await axios.get(`http://localhost:3002/api/nba-games?date=${date}`);

      if (response && response.data && response.data.response) {
        const parsedData = parseGameData(response.data.response);
        setGamesData(parsedData);
      } else {
        console.error('Invalid response format:', response);
        setError('Error fetching NBA Games. Please try again later.');
      }
    } catch (error) {
      console.error('Error fetching NBA Games:', error);
      console.error('Response data:', error.response ? error.response.data : undefined);
      setError('Error fetching NBA Games. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch NBA games data for the initially selected option (Today)
    fetchNBAGames(selectedOption.toLowerCase());
  }, [selectedOption]);


  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
    <Navbar />
    <h1 className="main-header">NBA Scoreboard</h1>
    <div className="toggle-buttons-container">
        <button className={`y-button ${selectedOption === 'Yesterday' ? 'active' : ''}`} onClick={() => setSelectedOption('Yesterday')}>Yesterday</button>
        <button className={`tod-button ${selectedOption === 'Today' ? 'active' : ''}`} onClick={() => setSelectedOption('Today')}>Today</button>
        <button className={`tom-button ${selectedOption === 'Tomorrow' ? 'active' : ''}`} onClick={() => setSelectedOption('Tomorrow')}>Tomorrow</button>
      </div>
    {selectedOption === 'Yesterday' ? (
      <div>
        <YesterdayGames gamesData={gamesData} />
      </div>
    ) : selectedOption === 'Today' ? (
      <div>
        {/* Content for 'Today' */}
      </div>
    ) : (
      <div>
        {/* Content for 'Tomorrow' */}
      </div>
    )}
    <Footer />
  </div>
  
);
};

export default Games;


