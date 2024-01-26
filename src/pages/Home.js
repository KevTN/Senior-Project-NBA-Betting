import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import axios from 'axios';
import GamesTable from '../components/GamesTable';

const Games = () => {
  // State for storing NBA games data
  const [gamesData, setGamesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const parseGameData = (rawData) => {
    try {
      return rawData.map((game) => JSON.parse(JSON.stringify(game))).filter((game) => game !== null);
    } catch (error) {
      console.error('Error parsing NBA Games data:', error);
      return [];
    }
  };

  // Fetch NBA games data on component mount
  useEffect(() => {
    const fetchNBAGames = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/nba-games');

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

    fetchNBAGames();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      <Navbar />
      <GamesTable gamesData={gamesData} />
      <Footer />
    </div>
  );
};

export default Games;

