//This adds all the player information and stats by team to the database
//if you try and run this rename the document on line 46 to correlate with how you want to save
//in the database or you will get duplicates. 

const axios = require('axios');
const { db, collection, addDoc } = require("./FirebaseConfig");

// Define an async function to fetch NBA rosters
const getNBARosters = async () => {
  const apiKey = '7c5906e5bdmshd4040afab063c22p159dbbjsn6a28437aaf5e';
  const statsToGet = 'averages';
  const rosters = [];

  for (let i = 1; i <= 30; i++) {
    const teamID = String(i);
    const options = {
      method: 'GET',
      url: 'https://tank01-fantasy-stats.p.rapidapi.com/getNBATeamRoster',
      params: { teamID, statsToGet },
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'tank01-fantasy-stats.p.rapidapi.com'
      },
    };

    try {
      const response = await axios.request(options);
      if (response.status === 200) {
        rosters.push(...response.data.body.roster);
      } else {
        throw new Error(`Failed to fetch NBA rosters. Status code: ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching NBA rosters:', error);
      throw error;
    }
  }
  return rosters;
};

const saveToFirestore = async () => {
  try {
    const rostersData = await getNBARosters();
    const teams = ['ATL', 'BOS', 'BKN', 'CHA', 'CHI', 'CLE', 'DAL', 'DEN', 'DET', 'GSW', 'HOU', 'IND', 'LAC', 'LAL', 'MEM', 'MIA', 'MIL', 'MIN', 'NOP', 'NYK', 'OKC', 'ORL', 'PHI', 'PHX', 'POR', 'SAC', 'SAS', 'TOR', 'UTA', 'WAS'];

    for (let i = 0; i < teams.length; i++) {
      const rostersRef = collection(db, 'nbaRosters', teams[i],'players');
      await Promise.all(rostersData.map(async rosterData => {
        try {
          const docRef = await addDoc(rostersRef, rosterData);
          console.log('Player saved to Firebase with ID:', docRef.id);
        } catch (error) {
          console.error('Error saving player to Firebase:', error);
        }
      }));
    }
  } catch (error) {
    console.error('Error saving to Firestore:', error);
  }
};

saveToFirestore();
