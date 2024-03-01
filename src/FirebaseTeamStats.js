const axios = require('axios');
const { db, collection, addDoc } = require("./FirebaseConfig");

const getTeamStats = async () => {
  const apiKey = '7c5906e5bdmshd4040afab063c22p159dbbjsn6a28437aaf5e';
  const season = '2024';

  const options = {
    method: 'GET',
    url: 'https://nba-team-stats.p.rapidapi.com/teamStats',
    params: { season },
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'nba-team-stats.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);

    // Log the entire response object to understand its structure
    console.log('Response:', response.data);

    // Adjust data access based on the structure of the response
    // For example, if response.data.stats contains the data you need:
    const { leagueYear, lastUpdated, stats } = response.data;
    const formattedData = Object.values(stats).map(teamData => {
      // Process team data here
      return teamData;
    });

    return formattedData;
  } catch (error) {
    console.error('Error fetching NBA games:', error);
    throw error;
  }
};

const saveToFirestore = async () => {
  try {
    const teamStatsData = await getTeamStats();
    const today = new Date();
    const month = today.getMonth() + 1; // Month is zero-based, so add 1
    const day = today.getDate();

    await Promise.all(teamStatsData.map(async teamData => {
      try {
        const gamesRef = collection(db, 'nbaTeamStats', String(month), String(day));
        const docRef = await addDoc(gamesRef, teamData);
        console.log('Team stats saved to Firebase with ID:', docRef.id);
      } catch (error) {
        console.error('Error saving team stats to Firebase:', error);
      }
    }));
  } catch (error) {
    console.error('Error saving to Firestore:', error);
  }
};

saveToFirestore();
