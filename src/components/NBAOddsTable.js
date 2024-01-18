/* NBAOddsTable.js is the component for a
table displaying the NBA betting odds. This is
called in Odds.js*/


//Sometimes the odds for moneyline are not on the right team
//need to add a way we know who is home who is away

/*
import React from 'react';
import './NBAOddsTable.css';

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

const NBAOddsTable = ({ oddsData }) => {
  return (
    <div className="odds-container">
      {oddsData.map((game, index) => (
        <div key={index} className="game-container">
          <h2>{}</h2>
          <p className="game-info">{`${getMonthName(new Date(game.commence_time).getMonth() + 1)} ${new Date(game.commence_time).getDate()} - ${new Date(game.commence_time).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`}</p>
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
            */  {/* Away Team */}
             /* <tr>
                <td className="team-name">{displayNA(game.away_team)}</td>
                <td className="moneyline">{displayNA(game.bookmakers?.[0]?.markets?.[0]?.outcomes?.[0]?.price > 0 ? `+${game.bookmakers[0].markets[0].outcomes[0].price}` : game.bookmakers[0].markets[0].outcomes[0].price)}</td>
                <td className="spread">{`${displayNA(game.bookmakers?.[0]?.markets?.[1]?.outcomes?.[0]?.point > 0 ? `+${game.bookmakers[0].markets[1].outcomes[0].point}` : game.bookmakers[0].markets[1].outcomes[0].point)} (${displayNA(game.bookmakers?.[0]?.markets?.[1]?.outcomes?.[0]?.price > 0 ? `+${game.bookmakers[0].markets[1].outcomes[0].price}` : game.bookmakers[0].markets[1].outcomes[0].price)})`}</td>
                <td className="total">{`o${displayNA(game.bookmakers?.[0]?.markets?.[2]?.outcomes?.[0]?.point)} (${displayNA(game.bookmakers?.[0]?.markets?.[2]?.outcomes?.[0]?.price > 0 ? `+${game.bookmakers[0].markets[2].outcomes[0].price}` : game.bookmakers[0].markets[2].outcomes[0].price)})`}</td>
              </tr>*/
              {/* Home Team */}
              /*<tr>
                <td className="team-name">{displayNA(game.home_team)}</td>
                <td className="moneyline">{displayNA(game.bookmakers?.[0]?.markets?.[0]?.outcomes?.[1]?.price > 0 ? `+${game.bookmakers[0].markets[0].outcomes[1].price}` : game.bookmakers[0].markets[0].outcomes[1].price)}</td>
                <td className="spread">{`${displayNA(game.bookmakers?.[0]?.markets?.[1]?.outcomes?.[1]?.point > 0 ? `+${game.bookmakers[0].markets[1].outcomes[1].point}` : game.bookmakers[0].markets[1].outcomes[1].point)} (${displayNA(game.bookmakers?.[0]?.markets?.[1]?.outcomes?.[1]?.price > 0 ? `+${game.bookmakers[0].markets[1].outcomes[1].price}` : game.bookmakers[0].markets[1].outcomes[1].price)})`}</td>
                <td className="total">{`u${displayNA(game.bookmakers?.[0]?.markets?.[2]?.outcomes?.[1]?.point)} (${displayNA(game.bookmakers?.[0]?.markets?.[2]?.outcomes?.[1]?.price > 0 ? `+${game.bookmakers[0].markets[2].outcomes[1].price}` : game.bookmakers[0].markets[2].outcomes[1].price)})`}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default NBAOddsTable;
*/