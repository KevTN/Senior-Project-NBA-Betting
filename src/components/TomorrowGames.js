// NBAGamesTable.jsx

import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./TomorrowGames.css"; // Assuming you have a stylesheet for this component

const TomorrowGames = ({ gamesData }) => {
  // Get the date from the first game (assuming gamesData is sorted by date)
  const tableDate = gamesData.length > 0 ? new Date(gamesData[0].date.start) : null;
  const formattedDate = tableDate ? `${tableDate.toLocaleString('default', { month: 'short' })} ${tableDate.getDate()}` : '';

  return (
    <div className="games-container">
      <h1 className="mainHeader">NBA Games</h1>
      <h2 className="subHeader">{formattedDate}</h2>
      <Table className="games-table" component={Paper}>
        <TableHead>
          <TableRow>
            <TableCell className="away-head" align="center">Away</TableCell>
            <TableCell className="home-head" align="center">Home</TableCell>
            <TableCell className="time-head" align="center">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {gamesData.map((game, index) => (
            <TableRow key={index} className="table-row">
              <TableCell className="away-team" align="center">{game.teams.visitors?.nickname}</TableCell>
              <TableCell className="home-cell" align="center">{game.teams.home?.nickname}</TableCell>
              <TableCell className="time-cell" align="center">{new Date(game.date.start).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TomorrowGames;



