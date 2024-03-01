// Home.js
import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import { collection, getDocs } from "../FirebaseConfig"; // Import FirebaseConfig without db
import { db } from "../FirebaseConfig"; // Import db separately
import './Home.css';

const Games = () => {
  const [gamesData, setGamesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNbaGames = async () => {
      try {
        const nbaGamesRef = collection(db, "nbaGames");
        const querySnapshot = await getDocs(nbaGamesRef);
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
        setGamesData(data);
        setLoading(false);

      } catch (error) {
        console.error("Error fetching NBA games:", error);
        setError("Error fetching NBA games. Please try again later.");
        setLoading(false);
      }
    };

    fetchNbaGames();
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="main-header">NBA Scoreboard</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              {Object.keys(gamesData[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {gamesData.map((game, index) => (
              <tr key={index}>
                {Object.values(game).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Footer />
    </div>
  );
};

export default Games;



