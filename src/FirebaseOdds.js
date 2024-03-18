const axios = require('axios');
const { db, collection, addDoc, setDoc, Timestamp } = require("./FirebaseConfig");

const getNBAOdds = async () => {
    try {
        const apiKey = '0a7555ac68bd116b9b234245c2f3a2a2';
        const sportKey = 'basketball_nba';
        const regions = 'us';
        const markets = 'h2h,spreads,totals';
        const oddsFormat = 'american';
        const dateFormat = 'iso';

        const response = await axios.get(`https://api.the-odds-api.com/v4/sports/${sportKey}/odds`, {
            params: {
                apiKey,
                regions,
                markets,
                oddsFormat,
                dateFormat,
            },
        });

        if (Array.isArray(response.data)) {
            const formattedData = response.data.map(game => {
                const { commence_time, home_team, away_team, bookmakers } = game;
                
                const gameData = {
                    home_team,
                    away_team,
                    commence_time,
                    bookmakers: bookmakers
                        .filter(bookmaker => ['DraftKings'].includes(bookmaker.title))
                        .map(bookmaker => ({
                            title: bookmaker.title,
                            markets: bookmaker.markets.map(market => ({
                                key: market.key.toUpperCase(),
                                outcomes: market.outcomes.map(outcome => ({
                                    name: outcome.name || 'na',
                                    price: outcome.price || 'na',
                                    point: outcome.point || 'na',
                                })),
                            })),
                        })),
                };

                return gameData;
            });

            const filteredData = formattedData.filter(data => data !== null);

            return filteredData;
        } else {
            console.error('Unexpected response format:', response.data);
            throw new Error('Unexpected response format');
        }
    } catch (error) {
        console.error('Error fetching NBA odds:', error);
        throw error;
    }
};

const saveToFirestore = async () => {
    try {
        const oddsData = await getNBAOdds();

        await Promise.all(oddsData.map(async gameData => {
            try {
                const currentDate = new Date(gameData.commence_time).toISOString().split('T')[0];
                const [_, month, day] = currentDate.split('-');

                const oddsRef = collection(db, 'nbaOdds', month, day);
                const docRef = await addDoc(oddsRef, gameData);
                console.log('Game saved to Firebase for date', currentDate, 'with ID:', docRef.id);
            } catch (error) {
                console.error('Error saving game to Firebase:', error);
            }
        }));
    } catch (error) {
        console.error('Error saving to Firestore:', error);
    }
};

saveToFirestore();




/* Define the route handler for Get requests to /api/nba-odds
app.get('/api/nba-odds', async (req, res) => {
    try {
        // Fetch NBA odds data using defined function
        const oddsData = await getNBAOdds();
        res.json({ odds: oddsData });
    } catch (error) {
        console.error('Error handling /api/nba-odds request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});*/

/* Start the server and listens to the specificed port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});*/
