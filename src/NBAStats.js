import React, { useState, useEffect } from 'react';

const NBAStats = () => {
  const [playerStats, setPlayerStats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.balldontlie.io/api/v1/stats');
        const data = await response.json();
        setPlayerStats(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>NBA Player Stats</h1>
      <ul>
        {playerStats.map((player) => (
          <li key={player.id}>
            {player.player.first_name} {player.player.last_name}: {player.pts} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NBAStats;
