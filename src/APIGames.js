const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3002;

app.use(cors());

// Define an async function to fetch NBA games
const getNBAGames = async () => {
  const apiKey = '7c5906e5bdmshd4040afab063c22p159dbbjsn6a28437aaf5e'; // Replace with your API key
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  const date = `${year}-${month}-${day}`;

  const options = {
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/games',
    params: { date },
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);

    // Check if response.data.api.games is defined and is an array
    if (response.data && Array.isArray(response.data.response)) {
      // Process and format relevant data
      const formattedData = response.data.response.map(game => {
        const { id, league, season, date, status, teams, scores } = game;

        const gameData = {
          id,
          league,
          season,
          date,
          status,
          teams,
          scores,
        };

        return gameData;
      });

      return formattedData;
    } else {
      console.error('Unexpected response format:', response.data);
      throw new Error('Unexpected response format');
    }
  } catch (error) {
    console.error('Error fetching NBA games:', error);
    throw error;
  }
};

// Define the route handler for GET requests to /api/nba-games
app.get('/api/nba-games', async (req, res) => {
  try {
    // Fetch NBA games data using the defined function
    const gamesData = await getNBAGames();
    res.json({ response: gamesData });
  } catch (error) {
    console.error('Error handling /api/nba-games request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

