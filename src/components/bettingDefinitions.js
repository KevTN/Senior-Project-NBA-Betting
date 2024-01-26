// BettingDefinitions.js

import React from 'react';

function BettingDefinitions() {
  return (
    <div className="definitions-container">
      <h2>Moneyline</h2>
      <p>
        The moneyline is a type of sports betting where you bet on which team will win a game outright.
        Positive and negative numbers indicate the odds of the underdog and favorite, respectively.
      </p>
      <table className='betting-table'>
        <thead>
          <tr>
            <th>Matchup</th>
            <th>Moneyline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lakers</td>
            <td>-140</td>
          </tr>
          <tr>
            <td>Celtics</td>
            <td>+110</td>
          </tr>
        </tbody>
      </table>
      <p>
        In the above example, the Lakers are favorites. You would need to bet $140 on the Lakers to win $100. Conversley, if you
        bet $100 on the Celtics you would win $110.
      </p>

      <h2>Spread (Point Spread)</h2>
      <p>
        The point spread is a handicap given to the underdog to make the two teams more evenly matched.
        Bettors can wager on whether the favorite will win by more than the set margin or if the underdog will lose by less.
      </p>
      <table className='betting-table'>
        <thead>
          <tr>
            <th>Matchup</th>
            <th>Spread</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lakers</td>
            <td>-3.5 (-105)</td>
          </tr>
          <tr>
            <td>Celtics</td>
            <td>+3.5 (-105)</td>
          </tr>
        </tbody>
      </table>
      <p>
        The favorited team will be indicated with a negative value. The underdog will be indicated with a positive value. 
        The value indicates how many points a team is favored to win/lose by. The odds are indicated in parenthesis.
      </p>
      <p>
        In this example the Lakers are favorites by 3.5 points.  If you bet on the Lakers to win the spread, they
        must win by at least 4 points ("cover the spread") in order for you to win. If the Lakers win by 3 points or
        less, the Celtics win the spread. 
      </p>

      <h2>Total (Over/Under)</h2>
      <p>
        The total is the combined score of both teams in a game. Bettors can wager on whether the actual total
        will be over or under the sportsbook's prediction.
      </p>
      <table className='betting-table'>
        <thead>
          <tr>
            <th>Matchup</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lakers</td>
            <td>o212.5 (-125)</td>
          </tr>
          <tr>
            <td>Celtics</td>
            <td>u212.5 (-105)</td>
          </tr>
        </tbody>
      </table>
      <p>
        The point total will be given in the far right column and has no association with the individual team (the rows the 
        numbers are in are arbitrary). The preceding "o" and "u" represent "over" and "under" the prediction respectively. The
        odds are again represented in parenthesis.
      </p>
      <p>
        In this example the Total is 212.5. If the two teams combine for at least 213 points and you make a bet on the 'over',
        you win! Conversley, if they combine for 212 or less the 'under' wins.
      </p>
    </div>
  );
}

export default BettingDefinitions;