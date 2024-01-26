import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./NBAGamesTable.css"; // Assuming you have a stylesheet for this component

const NBAGamesTable = ({ gamesData }) => {
  return (
    <div className="games-container">
      <h2 className="tableName">NBA Games Today</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Home</TableCell>
              <TableCell align="center">Away</TableCell>
              <TableCell align="center">Time</TableCell>
              <TableCell align="center">Vote</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {gamesData.map((game, index) => (
              <TableRow key={index}>
                <TableCell align="center">{game.teams.home?.nickname}</TableCell>
                <TableCell align="center">{game.teams.visitors?.nickname}</TableCell>
                <TableCell align="center">{new Date(game.date.start).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</TableCell>
                <TableCell align="center">
                  {/* Replace Poll with your actual component */}
                  <span>Voting/Poll Component</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default NBAGamesTable;

