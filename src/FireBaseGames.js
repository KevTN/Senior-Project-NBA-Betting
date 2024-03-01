const axios = require('axios');
const { db, collection, addDoc, setDoc, Timestamp } = require("./FirebaseConfig");

// Define an async function to fetch NBA games
const getNBAGames = async () => {

const apiKey = '7c5906e5bdmshd4040afab063c22p159dbbjsn6a28437aaf5e';
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

const saveToFirestore = async () => {
    try {
      const gamesData = await getNBAGames();
      const today = new Date();
      const month = today.getMonth() + 1; // Month is zero-based, so add 1
      const day = today.getDate();
  
      await Promise.all(gamesData.map(async gameData => {
        try {
            const gamesRef = collection(db, 'nbaGames', String(month), String(day));
          const docRef = await addDoc(gamesRef, gameData);
          console.log('Game saved to Firebase with ID:', docRef.id);
        } catch (error) {
          console.error('Error saving game to Firebase:', error);
        }
      }));
    } catch (error) {
      console.error('Error saving to Firestore:', error);
    }
  };
  
  saveToFirestore();
