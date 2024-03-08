import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import './OddsFirebase.css'; // Import the CSS file for styling

const OddsFirebase = () => {
  const [oddsData, setOddsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
    const db = getFirestore(app);
    const oddsCollection = collection(db, "nbaOdds", "03", "08");

    getDocs(oddsCollection)
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
        setOddsData(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError("Error fetching NBA odds. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Function to display 'na' for null or undefined values
  const displayNA = (value) => (value !== null && value !== undefined ? value : 'na');

  // Function to get the month name from numeric month
  const getMonthName = (numericMonth) => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[numericMonth - 1] || 'na';
  };

  return (
    <div>
      <Navbar className='Navbar'/>
      <Sidebar/>
      <div className="Betting-Odds-Header">
        <h1 className="header-title">NBA Betting Odds</h1>
      </div>
      <div className="odds-container">
        {oddsData.map((game, index) => (
          <div key={index} className="game-container">
            <h2>{}</h2>
            <table key={index} className="odds-table">
              <thead>
                <tr>
                  <th className="matchup">Matchup</th>
                  <th className="moneyline">Moneyline</th>
                  <th className="spread">Spread</th>
                  <th className="total">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={`team-name ${index % 2 === 0 ? 'cells-background_1' : ''}`}>{displayNA(game?.away_team)}</td>
                  <td className={`moneyline_cell_1 ${index % 2 === 0 ? 'cells-background_1' : ''}`}>{displayNA(
                    game?.bookmakers?.[0]?.markets?.[0]?.outcomes?.[0]?.price > 0
                      ? `+${game?.bookmakers?.[0]?.markets?.[0]?.outcomes?.[0]?.price}`
                      : game?.bookmakers?.[0]?.markets?.[0]?.outcomes?.[0]?.price
                  )}</td>
                  <td className={`spread_cell_1 ${index % 2 === 0 ? 'cells-background_1' : ''}`}>{`${displayNA(
                    game?.bookmakers?.[0]?.markets?.[1]?.outcomes?.[0]?.point > 0
                      ? `+${game?.bookmakers?.[0]?.markets?.[1]?.outcomes?.[0]?.point}`
                      : game?.bookmakers?.[0]?.markets?.[1]?.outcomes?.[0]?.point
                  )} (${displayNA(
                    game?.bookmakers?.[0]?.markets?.[1]?.outcomes?.[0]?.price > 0
                      ? `+${game?.bookmakers?.[0]?.markets?.[1]?.outcomes?.[0]?.price}`
                      : game?.bookmakers?.[0]?.markets?.[1]?.outcomes?.[0]?.price
                  )})`}</td>
                  <td className={`total_cell_1 ${index % 2 === 0 ? 'cells-background_1' : ''}`}>{`o${displayNA(game?.bookmakers?.[0]?.markets?.[2]?.outcomes?.[0]?.point)}
                   (${displayNA(
                    game?.bookmakers?.[0]?.markets?.[2]?.outcomes?.[0]?.price > 0
                      ? `+${game?.bookmakers?.[0]?.markets?.[2]?.outcomes?.[0]?.price}`
                      : game?.bookmakers?.[0]?.markets?.[2]?.outcomes?.[0]?.price
                  )})`}</td>
                </tr>
                <tr>
                  <td className={`team-name ${index % 2 === 0 ? 'cells-background' : ''}`}>{displayNA(game?.home_team)}</td>
                  <td className={`moneyline_cell ${index % 2 === 0 ? 'cells-background' : ''}`}>{displayNA(
                    game?.bookmakers?.[0]?.markets?.[0]?.outcomes?.[1]?.price > 0
                      ? `+${game?.bookmakers?.[0]?.markets?.[0]?.outcomes?.[1]?.price}`
                      : game?.bookmakers?.[0]?.markets?.[0]?.outcomes?.[1]?.price
                  )}</td>
                  <td className={`spread_cell ${index % 2 === 0 ? 'cells-background' : ''}`}>{`${displayNA(
                    game?.bookmakers?.[0]?.markets?.[1]?.outcomes?.[1]?.point > 0
                      ? `+${game?.bookmakers?.[0]?.markets?.[1]?.outcomes?.[1]?.point}`
                      : game?.bookmakers?.[0]?.markets?.[1]?.outcomes?.[1]?.point
                  )} (${displayNA(
                    game?.bookmakers?.[0]?.markets?.[1]?.outcomes?.[1]?.price > 0
                      ? `+${game?.bookmakers?.[0]?.markets?.[1]?.outcomes?.[1]?.price}`
                      : game?.bookmakers?.[0]?.markets?.[1]?.outcomes?.[1]?.price
                  )})`}</td>
                  <td className={`total_cell ${index % 2 === 0 ? 'cells-background' : ''}`}>{`u${displayNA(game?.bookmakers?.[0]?.markets?.[2]?.outcomes?.[1]?.point)}
                   (${displayNA(
                    game?.bookmakers?.[0]?.markets?.[2]?.outcomes?.[1]?.price > 0
                      ? `+${game?.bookmakers?.[0]?.markets?.[2]?.outcomes?.[1]?.price}`
                      : game?.bookmakers?.[0]?.markets?.[2]?.outcomes?.[1]?.price
                  )})`}</td>
                </tr>
              </tbody>
            </table>
            <p className="game-info">{`${getMonthName(new Date(game.commence_time).getMonth() + 1)}
             ${new Date(game.commence_time).getDate()} - ${new Date(game.commence_time).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OddsFirebase;

