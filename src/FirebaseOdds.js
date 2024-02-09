/*APIOdds is being used to fetch NBA betting odds from the external API 'the-odds-api'
it also is being used to process the data and provide a simplified and filtered version
of the odds through custom API endpoints, then the server listens for requests on port 3001. 

Features
-Express server setup
-Cors configuration
-NBA odds API Request
-Data ProcessingFz
-Express Route for NBA odds
-ServerStart*/

//const express = require('express');
//const cors = require('cors');
const axios = require('axios');
const { db, collection, addDoc } = require("./FirebaseConfig");
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
require('dotenv').config({ path: './dotenv.env' });


// Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "bestbucketbets.firebaseapp.com",
    projectId: "bestbucketbets",
    storageBucket: "bestbucketbets.appspot.com",
    messagingSenderId: "671250228071",
    appId: "1:671250228071:web:96a9ad993e767c44cbc5c2",
    measurementId: "G-9X2PE7B4LS",
};

// Initialize Firebase app with the config
const app = initializeApp(firebaseConfig);
const dbInstance = getFirestore(app);

const getNBAOdds = async () => {
    try {
        const apiKey = process.env.ODDS_API_KEY; // Retrieve API key from environment variable
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
        const oddsRef = collection(dbInstance, 'nbaOdds');
  
        oddsData.forEach(async gameData => {
            try {
                const docRef = await addDoc(oddsRef, gameData);
                console.log('Game saved to Firebase with ID:', docRef.id);
            } catch (error) {
                console.error('Error saving game to Firebase:', error);
            }
        });
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