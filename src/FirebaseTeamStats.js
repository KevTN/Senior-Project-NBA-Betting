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

//This method takes all the provided data from API
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

    await Promise.all(teamStatsData.map(async teamData => {
      try {
        // Check if the 'advanced' field exists in teamData
        if (teamData.Advanced && teamData.Advanced.Team) {
          // Get the team name from the "Advanced" field within teamData
          const teamName = teamData.Advanced.Team;

          // Create a document reference for the specified team name and stats collection
          const teamDocRef = collection(db, 'nbaTeamStats', teamName,'stats');

          // Set the raw team data to Firestore document
          const docref = await addDoc(teamDocRef, teamData);
          console.log('Team stats saved to Firestore with ID:', docref.id);
        } else {
          console.error('Error: "Advanced" field or "Team" property not found in teamData:', teamData);
        }
      } catch (error) {
        console.error('Error saving team stats to Firestore:', error);
      }
    }));
  } catch (error) {
    console.error('Error saving to Firestore:', error);
  }
};

saveToFirestore();


