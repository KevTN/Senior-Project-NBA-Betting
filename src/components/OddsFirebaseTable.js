import React from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC3MH-sM-GWN_v3pH9DCdEcweWLCHzYbqI',
  authDomain: "bestbucketbets.firebaseapp.com",
  projectId: "bestbucketbets",
  storageBucket: "bestbucketbets.appspot.com",
  messagingSenderId: "671250228071",
  appId: "1:671250228071:web:96a9ad993e767c44cbc5c2",
  measurementId: "G-9X2PE7B4LS",
};
const app = initializeApp(firebaseConfig);

// Firestore reference
const db = getFirestore(app);
const oddsCollection = collection(db, "nbaOdds", "03", "08");

// Function to display 'na' for null or undefined values
const displayNA = (value) => (value !== null && value !== undefined ? value : 'na');

// Fetch data from Firestore and populate the table
const fetchDataAndPopulateTable = (displayNA) => {
  getDocs(oddsCollection)
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const game = doc.data();
        // Assuming you have a tableBody reference in your component, otherwise, adjust accordingly
        const tableBody = document.getElementById("table-body");
        const row = `
          <tr>
            <td>${displayNA(game.home_team)}</td>
            <td>${displayNA(game.away_team)}</td>
            <td>${displayNA(new Date(game.commence_time).toLocaleString())}</td>
            <td>${displayNA(game.bookmakers[0]?.markets[0]?.outcomes[1]?.price)}</td>
            <td>${displayNA(game.bookmakers[0]?.markets[0]?.outcomes[0]?.price)}</td>
            <td>${displayNA(game.bookmakers[0]?.markets[1]?.outcomes[1]?.point)} (${displayNA(game.bookmakers[0]?.markets[1]?.outcomes[1]?.price)})</td>
            <td>${displayNA(game.bookmakers[0]?.markets[1]?.outcomes[0]?.point)} (${displayNA(game.bookmakers[0]?.markets[1]?.outcomes[0]?.price)})</td>
            <td>${displayNA(game.bookmakers[0]?.markets[2]?.outcomes[1]?.point)} (${displayNA(game.bookmakers[0]?.markets[2]?.outcomes[1]?.price)})</td>
            <td>${displayNA(game.bookmakers[0]?.markets[2]?.outcomes[0]?.point)} (${displayNA(game.bookmakers[0]?.markets[2]?.outcomes[0]?.price)})</td>
          </tr>
        `;
        tableBody.innerHTML += row;
      });
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
};

fetchDataAndPopulateTable(displayNA);

export default fetchDataAndPopulateTable;

