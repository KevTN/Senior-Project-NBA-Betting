const axios = require('axios');
const { db, collection, addDoc, setDoc, Timestamp } = require("./FirebaseConfig");

// Define an async function to fetch NBA games
const getNBAGames = async () => {
const apiKey = '7c5906e5bdmshd4040afab063c22p159dbbjsn6a28437aaf5e';
const games = [];

const dates = [];
for (let i = -1; i < 2; i++) {
  const today = new Date();
  today.setDate(today.getDate() + i);
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const date = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  dates.push(date);

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

      // Push formatted data into games array
      games.push(...formattedData);
    } else {
      console.error('Unexpected response format:', response.data);
      throw new Error('Unexpected response format');
    }
  } catch (error) {
    console.error('Error fetching NBA games:', error);
    throw error;
  }
}
return games;
};

const saveToFirestore = async () => {
  try {
      const gamesData = await getNBAGames();
      const date = new Date();
      const month = date.getMonth() + 1; // Month is zero-based, so add 1
      const today = date.getDate()
      const days = [String(today - 1), String(today), String(today + 1)]; // Corrected spelling of 'tomorrow'

      for (let i = 0; i < days.length; i++) {
        const gamesRef = collection(db, 'nbaGames', String(month), days[i]); // Use square brackets
          await Promise.all(gamesData.map(async gameData => {
              try {
                  const docRef = await addDoc(gamesRef, gameData);
                  console.log('Game saved to Firebase with ID:', docRef.id);
              } catch (error) {
                  console.error('Error saving game to Firebase:', error);
              }
          }));
      }
  } catch (error) {
      console.error('Error saving to Firestore:', error);
  }
};

saveToFirestore();

