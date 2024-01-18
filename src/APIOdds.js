/*APIOdds is being used to fetch NBA betting odds from the external API 'the-odds-api'
it also is being used to process the data and provide a simplified and filtered version
of the odds through custom API endpoints, then the server listens for requests on port 3001. 

Features
-Express server setup
-Cors configuration
-NBA odds API Request
-Data Processing
-Express Route for NBA odds
-ServerStart*/

/*
//Required Modules
const express = require('express');
const cors = require('cors');
const axios = require('axios');

//creates an express application
const app = express();
const port = 3001;

// Enables CORS allows cross-origin requests
app.use(cors());

//fetchs nba odds data
//holds the oddsAPI key and parameters 
const getNBAOdds = async () => {
    try {
        const apiKey = '0a7555ac68bd116b9b234245c2f3a2a2';
        const sportKey = 'basketball_nba';
        const regions = 'us';
        const markets = 'h2h,spreads,totals';
        const oddsFormat = 'american';
        const dateFormat = 'iso';

        //This is the API Request to get the NBA odds data. In defeault format
        const response = await axios.get(`https://api.the-odds-api.com/v4/sports/${sportKey}/odds`, {
            params: {
                apiKey,
                regions,
                markets,
                oddsFormat,
                dateFormat,
            },
        });

        // Checks if response.data.data is defined and is an array
        if (Array.isArray(response.data)) {
            // Extract and formats relevant data
            const formattedData = response.data.map(game => {
                const { commence_time, home_team, away_team, bookmakers } = game;
                
                //bookmaker can be changed to Ceasars, fanduel, etc, or multiple can be added with a comma
                //I found it easier to look at with just one sportsbook
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

            // Filter out null values (games with no data for the specified bookmakers)
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

// Define the route handler for Get requests to /api/nba-odds
app.get('/api/nba-odds', async (req, res) => {
    try {
        // Fetch NBA odds data using defined function
        const oddsData = await getNBAOdds();
        res.json({ odds: oddsData });
    } catch (error) {
        console.error('Error handling /api/nba-odds request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server and listens to the specificed port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

*/


