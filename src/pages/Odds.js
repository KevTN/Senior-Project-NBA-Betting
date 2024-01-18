/* Odds.js this is the main page for the Sports Betting page
this calls the component NBAOddsTable.js to create a table
showing all the odds.*//*

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import NBAOddsTable from '../components/NBAOddsTable';
import axios from 'axios';
import './Odds.css';
import Sidebar from '../components/Sidebar';

const Odds = () => {
  //state for storing nba odds data
  const [oddsData, setOddsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //function to parse nba odds data
  const parseOddsData = (rawData) => {
    try {
      return rawData.map(game => JSON.parse(JSON.stringify(game))).filter(game => game !== null);
    } catch (error) {
      console.error('Error parsing NBA odds data:', error);
      return [];
    }
  };

  //fetch nba odds data on component mount
  useEffect(() => {
    const fetchNBAOdds = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/nba-odds');
    
        if (response && response.data && response.data.odds) {
          const parsedData = parseOddsData(response.data.odds);
          setOddsData(parsedData);
        } else {
          console.error('Invalid response format:', response);
          setError('Error fetching NBA odds. Please try again later.');
        }
      } catch (error) {
        console.error('Error fetching NBA odds:', error);
        console.error('Response data:', error.response ? error.response.data : undefined);
        setError('Error fetching NBA odds. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchNBAOdds();
  }, []); //empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      <Navbar className = 'Navbar'/>
      <Sidebar/>
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
*/