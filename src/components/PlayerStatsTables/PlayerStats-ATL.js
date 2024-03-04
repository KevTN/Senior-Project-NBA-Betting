import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const title = 'Player Statistics';

const glossaryItems = [
  { abbreviation: 'MIN', definition: 'Minutes Played' },
  { abbreviation: 'PTS', definition: 'Points Scored' },
  { abbreviation: 'FGM', definition: 'Field Goals Made' },
  { abbreviation: 'FGA', definition: 'Field Goals Attempted' },
  { abbreviation: 'FG%', definition: 'Field Goal Percentage' },
  { abbreviation: '3PM', definition: 'Three-Point Field Goals Made' },
  { abbreviation: '3PA', definition: 'Three-Point Field Goals Attempted' },
  { abbreviation: '3P%', definition: 'Three-Point Field Goal Percentage' },
  { abbreviation: 'FTM', definition: 'Free Throws Made' },
  { abbreviation: 'FTA', definition: 'Free Throws Attempted' },
  { abbreviation: 'FT%', definition: 'Free Throw Percentage' },
  { abbreviation: 'REB', definition: 'Rebounds' },
  { abbreviation: 'AST', definition: 'Assists' },
  { abbreviation: 'STL', definition: 'Steals' },
  { abbreviation: 'BLK', definition: 'Blocks' },
  { abbreviation: 'TO', definition: 'Turnovers' },
  { abbreviation: 'PF', definition: 'Personal Fouls' },
];

export default function PlayerSeasonAverages() {
  const [playersSeasonAverages, setPlayersSeasonAverages] = useState([]);
  const [playersInfo, setPlayersInfo] = useState([]);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);

  const toggleGlossary = () => {
    setIsGlossaryOpen(!isGlossaryOpen);
  };

  useEffect(() => {
    const fetchPlayersInfo = async () => {
      try {
        const playerIDs = [3547256, 53, 56677838, 83, 666564, 3547297, 56677806, 38017689, 666656, 17896040, 4197387, 56677855, 666754, 301, 319, 334, 3547244, 490];
        const responses = await Promise.all(playerIDs.map(id => axios.get(`https://api.balldontlie.io/v1/players/${id}`, {
          headers: {
            Authorization: '49ea66ef-b246-4f04-9c73-ebde5f4c8a12'
          }
        })));
        const data = responses.map(response => response.data);
        setPlayersInfo(data);
      } catch (error) {
        console.error('Error fetching player info:', error);
      }
    };

    fetchPlayersInfo();
  }, []);

  useEffect(() => {
    const fetchPlayersSeasonAverages = async () => {
      try {
        const playerIDs = [3547256, 53, 56677838, 83, 666564, 3547297, 56677806, 38017689, 666656, 17896040, 4197387, 56677855, 666754, 301, 319, 334, 3547244, 490];
        const responses = await Promise.all(playerIDs.map(id => axios.get(`https://api.balldontlie.io/v1/season_averages?player_ids[]=${id}&season=2023`, {
          headers: {
            Authorization: '49ea66ef-b246-4f04-9c73-ebde5f4c8a12'
          }
        })));
        const data = responses.map(response => response.data.data[0]);
        setPlayersSeasonAverages(data);
      } catch (error) {
        console.error('Error fetching player season averages:', error);
      }
    };    
        

    fetchPlayersSeasonAverages();
  }, []);

  return (
    <div>
      <div className="table-title">{title}</div>
      <button onClick={toggleGlossary} style={{ marginBottom: '10px' }}>
        {isGlossaryOpen ? 'Hide Glossary' : 'Show Glossary'}
      </button>
      {isGlossaryOpen && (
        <Paper style={{ padding: '10px', display: 'flex', flexWrap: 'wrap' }}>
          {glossaryItems.map((item, index) => (
            <div key={index} style={{ marginRight: '20px' }}>
              <strong>{item.abbreviation}:</strong> {item.definition}
            </div>
          ))}
        </Paper>
      )}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>PLAYER</StyledTableCell>
              <StyledTableCell align="right">MIN</StyledTableCell>
              <StyledTableCell align="right">PTS</StyledTableCell>
              <StyledTableCell align="right">FGM</StyledTableCell>
              <StyledTableCell align="right">FGA</StyledTableCell>
              <StyledTableCell align="right">FG%</StyledTableCell>
              <StyledTableCell align="right">3PM</StyledTableCell>
              <StyledTableCell align="right">3PA</StyledTableCell>
              <StyledTableCell align="right">3P%</StyledTableCell>
              <StyledTableCell align="right">FTM</StyledTableCell>
              <StyledTableCell align="right">FTA</StyledTableCell>
              <StyledTableCell align="right">FT%</StyledTableCell>
              <StyledTableCell align="right">REB</StyledTableCell>
              <StyledTableCell align="right">AST</StyledTableCell>
              <StyledTableCell align="right">STL</StyledTableCell>
              <StyledTableCell align="right">BLK</StyledTableCell>
              <StyledTableCell align="right">TO</StyledTableCell>
              <StyledTableCell align="right">PF</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {playersSeasonAverages.map(player => {
              const playerInfo = playersInfo.find(info => info.id === player.player_id);
              //const playerName = playerInfo ? `${playerInfo.first_name} ${playerInfo.last_name}` : "Unknown";
              return (
              <StyledTableRow key={player.player_id}>
                <StyledTableCell component="th" scope="row">
                  {[player.player_id]}
                </StyledTableCell>
                <StyledTableCell align="right">{player.min}</StyledTableCell>
                <StyledTableCell align="right">{player.pts.toFixed(1)}</StyledTableCell>
                <StyledTableCell align="right">{player.fgm.toFixed(1)}</StyledTableCell>
                <StyledTableCell align="right">{player.fga.toFixed(1)}</StyledTableCell>
                <StyledTableCell align="right">{(player.fg_pct * 100).toFixed(1)}%</StyledTableCell>
                <StyledTableCell align="right">{player.fg3m.toFixed(1)}</StyledTableCell>
                <StyledTableCell align="right">{player.fg3a.toFixed(1)}</StyledTableCell>
                <StyledTableCell align="right">{(player.fg3_pct * 100).toFixed(1)}%</StyledTableCell>
                <StyledTableCell align="right">{player.ftm.toFixed(1)}</StyledTableCell>
                <StyledTableCell align="right">{player.fta.toFixed(1)}</StyledTableCell>
                <StyledTableCell align="right">{(player.ft_pct * 100).toFixed(1)}%</StyledTableCell>
                <StyledTableCell align="right">{player.reb.toFixed(1)}</StyledTableCell>
                <StyledTableCell align="right">{player.ast.toFixed(1)}</StyledTableCell>
                <StyledTableCell align="right">{player.stl.toFixed(1)}</StyledTableCell>
                <StyledTableCell align="right">{player.blk.toFixed(1)}</StyledTableCell>
                <StyledTableCell align="right">{player.turnover.toFixed(1)}</StyledTableCell>
                <StyledTableCell align="right">{player.pf.toFixed(1)}</StyledTableCell>
              </StyledTableRow>
            );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
