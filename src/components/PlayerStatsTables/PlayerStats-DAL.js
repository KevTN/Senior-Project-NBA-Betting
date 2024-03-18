import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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
  const [previous30DaysAverages, setPrevious30DaysAverages] = useState([]);
  const [playersInfo, setPlayersInfo] = useState([]);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  const toggleGlossary = () => {
    setIsGlossaryOpen(!isGlossaryOpen);
  };

  const updatePrevious30DaysAverages= (data) => {
    setPrevious30DaysAverages(data);
  };

  const fetchPlayersSeasonAverages = async () => {
    try {
      const playerIDs = [17896028, 132, 151, 56677867, 666577, 3547258, 191, 38017679, 228, 247, 257, 17554004, 56677840, 329, 379, 56677859, 666950, 24489167];
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
  
  const getPlayerName = (playerId) => {
    const playerInfo = playersInfo.find(info => info.id === playerId);
    return playerInfo ? playerInfo.name : "Unknown";
  };

  useEffect(() => {
    const fetchPlayersInfo = async () => {
      try {
        const playerIDs = [17896028, 132, 151, 56677867, 666577, 3547258, 191, 38017679, 228, 247, 257, 17554004, 56677840, 329, 379, 56677859, 666950, 24489167];
        const responses = await Promise.all(playerIDs.map(id =>
          axios.get(`https://api.balldontlie.io/v1/players?player_ids[]=${id}`, {
            headers: {
              Authorization: '49ea66ef-b246-4f04-9c73-ebde5f4c8a12'
            }
          })
        ));
        const playersData = responses.map(response => response.data.data[0]); // Extract data from responses
        const playersInfo = playersData.map(player => ({
          id: player.id,
          name: `${player.first_name} ${player.last_name}`
        }));
        setPlayersInfo(playersInfo);
      } catch (error) {
        console.error('Error fetching player info:', error);
      }
    };
  
    fetchPlayersInfo();
  }, []);
  

  useEffect(() => {
    if (tabValue === 0) {
      fetchPlayersSeasonAverages();
    } else if (tabValue === 1) {
      const fetchPrevious30DaysAverages = async () => {
        try {
          const playerIDs = [17896028, 132, 151, 56677867, 666577, 3547258, 191, 38017679, 228, 247, 257, 17554004, 56677840, 329, 379, 56677859, 666950, 24489167];
          const startDate = new Date();
          startDate.setDate(startDate.getDate() - 30); // Get the date 30 days ago
          const responses = await Promise.all(playerIDs.map(async (id) => {
            const response = await axios.get(
              `https://api.balldontlie.io/v1/stats?player_ids[]=${id}&start_date=${startDate.toISOString()}`,
              {
                headers: {
                  Authorization: '49ea66ef-b246-4f04-9c73-ebde5f4c8a12',
                },
              }
            );
            const playerInfoResponse = await axios.get(`https://api.balldontlie.io/v1/players?player_ids[]=${id}`, {
              headers: {
                Authorization: '49ea66ef-b246-4f04-9c73-ebde5f4c8a12',
              },
            });
            const playerInfo = playerInfoResponse.data.data[0];
            return {
              stats: response.data.data,
              playerInfo: {
                id: playerInfo.id,
                name: `${playerInfo.first_name} ${playerInfo.last_name}`
              }
            };
          }));
      
          console.log('Fetched data:', responses);
      
          const aggregatedData = responses.map(({ stats, playerInfo }) => {
            const totalStats = stats.reduce((accumulator, game) => {
              // Convert minutes to number
              accumulator.min += parseFloat(game.min); // Assuming game.min is a string representing minutes
          
              // Sum up other stats
              accumulator.pts += game.pts;
              accumulator.fgm += game.fgm;
              accumulator.fga += game.fga;
              accumulator.fg3m += game.fg3m;
              accumulator.fg3a += game.fg3a;
              accumulator.ftm += game.ftm;
              accumulator.fta += game.fta;
              accumulator.reb += game.reb;
              accumulator.ast += game.ast;
              accumulator.stl += game.stl;
              accumulator.blk += game.blk;
              accumulator.turnover += game.turnover;
              accumulator.pf += game.pf;
              return accumulator;
            }, {
              min: 0,
              pts: 0,
              fgm: 0,
              fga: 0,
              fg3m: 0,
              fg3a: 0,
              ftm: 0,
              fta: 0,
              reb: 0,
              ast: 0,
              stl: 0,
              blk: 0,
              turnover: 0,
              pf: 0,
            });
          
            // Calculate percentages
            const numGames = stats.length || 1; // Ensure no division by zero
      
             // Calculate total minutes and total seconds
            const totalMinutes = Math.floor(totalStats.min / numGames);
            const totalSeconds = Math.round((totalStats.min / numGames - totalMinutes) * 60);
      
            // Format minutes and seconds with leading zeros if necessary
            const formattedMinutes = totalMinutes < 10 ? `0${totalMinutes}` : `${totalMinutes}`;
            const formattedSeconds = totalSeconds < 10 ? `0${totalSeconds}` : `${totalSeconds}`;
      
            // Combine formatted minutes and seconds
            const formattedTime = `${formattedMinutes}:${formattedSeconds}`;
      
            return {
              ...totalStats,
              min: formattedTime,
              pts: +(totalStats.pts / numGames).toFixed(1),
              fgm: +(totalStats.fgm / numGames).toFixed(1),
              fga: +(totalStats.fga / numGames).toFixed(1),
              fg3m: +(totalStats.fg3m / numGames).toFixed(1),
              fg3a: +(totalStats.fg3a / numGames).toFixed(1),
              ftm: +(totalStats.ftm / numGames).toFixed(1),
              fta: +(totalStats.fta / numGames).toFixed(1),
              reb: +(totalStats.reb / numGames).toFixed(1),
              ast: +(totalStats.ast / numGames).toFixed(1),
              stl: +(totalStats.stl / numGames).toFixed(1),
              blk: +(totalStats.blk / numGames).toFixed(1),
              turnover: +(totalStats.turnover / numGames).toFixed(1),
              pf: +(totalStats.pf / numGames).toFixed(1),
              fg_pct: ((totalStats.fgm / numGames).toFixed(1) / (totalStats.fga / numGames).toFixed(1)), // Calculate field goal percentage
              fg3_pct: ((totalStats.fg3m / numGames).toFixed(1) / (totalStats.fg3a / numGames).toFixed(1)), // Calculate three-point percentage
              ft_pct: ((totalStats.ftm / numGames).toFixed(1) / (totalStats.fta / numGames).toFixed(1)), // Calculate free throw percentage
              player_id: playerInfo.id,
            };
          });
          console.log('Aggregated data:', aggregatedData);
      
          updatePrevious30DaysAverages(aggregatedData);

          
        } catch (error) {
          console.error('Error fetching previous 30 days averages:', error);
        }
      };

      fetchPrevious30DaysAverages();
    }
  }, [tabValue]);

  const getArrowDirection = (stat, value, playerId) => {
    if (tabValue === 1) {
      const seasonAverage = playersSeasonAverages.find(player => player.player_id === playerId)[stat];
      console.log(`Player ID: ${playerId}, Stat: ${stat}, Value: ${value}, Season Average: ${seasonAverage}`);
      if (!isNaN(seasonAverage)) {
        // Special case for turnovers (TO)
        if (stat === 'turnover') {
          if (value > seasonAverage) {
            console.log(`Comparison Result: ${value} > ${seasonAverage}, Returning Up Arrow`);
            return <span style={{ color: 'red' }}>▲</span>;
          } else if (value < seasonAverage) {
            console.log(`Comparison Result: ${value} < ${seasonAverage}, Returning Down Arrow`);
            return <span style={{ color: 'green' }}>▼</span>;
          }
        } else {
          // Compare other stats to the season average
          if (value > seasonAverage) {
            console.log(`Comparison Result: ${value} > ${seasonAverage}, Returning Up Arrow`);
            return <span style={{ color: 'green' }}>▲</span>;
          } else if (value < seasonAverage) {
            console.log(`Comparison Result: ${value} < ${seasonAverage}, Returning Down Arrow`);
            return <span style={{ color: 'red' }}>▼</span>;
          }
        }
      }
    }
    console.log(`No Comparison Made, Returning Null`);
    return null;
  }; 

  return (
    <div>
      <div className="table-title" style={{fontFamily: 'Arial, sans-serif'}}>{title}</div>
      <button
        onClick={toggleGlossary}
        style={{
          marginBottom: '10px',
          backgroundColor: '#0c394b', // Change to your desired color
          color: 'white', // Change to your desired color
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#03cafc')} // Change to your desired hover color
        onMouseOut={(e) => (e.target.style.backgroundColor = '#0c394b')} // Change to your desired default color
      >
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
      <Tabs
        value={tabValue}
        onChange={(event, newValue) => {
          setTabValue(newValue);
        }}
        variant="fullWidth"
        aria-label="player-stats-tabs"
      >
        <Tab label="Season Averages" style={{ color: 'white' }} />
        <Tab label="Previous 30 Days" style={{ color: 'white' }} />
      </Tabs>
      <Box>
        <Typography style={{ color: 'white' }}>
          {tabValue === 0 ? 'Season Averages' : 'Previous 30 Days Averages' }
        </Typography>
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
              {(tabValue === 0 ? playersSeasonAverages : previous30DaysAverages).map(player => (
                <StyledTableRow key={player.player_id}>
                  <StyledTableCell component="th" scope="row">
                    {getPlayerName(player.player_id)}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {player.min}
                    {getArrowDirection('min', player.min, player.player_id)}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {isNaN(player.pts) ? '-' : player.pts.toFixed(1)}
                    {getArrowDirection('pts', player.pts, player.player_id)}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {isNaN(player.fgm) ? '-' : player.fgm.toFixed(1)}
                    {getArrowDirection('fgm', player.fgm, player.player_id)}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {isNaN(player.fga) ? '-' : player.fga.toFixed(1)}
                    {getArrowDirection('fga', player.fga, player.player_id)}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {isNaN(player.fg_pct) ? '-' : (player.fg_pct * 100).toFixed(1)}%
                    {/*getArrowDirection('fg_pct', player.fg_pct * 100, player.player_id)*/}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {isNaN(player.fg3m) ? '-' : player.fg3m.toFixed(1)}
                    {getArrowDirection('fg3m', player.fg3m, player.player_id)}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {isNaN(player.fg3a) ? '-' : player.fg3a.toFixed(1)}
                    {getArrowDirection('fg3a', player.fg3a, player.player_id)}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {isNaN(player.fg3_pct) ? '-' : (player.fg3_pct * 100).toFixed(1)}%
                    {/*getArrowDirection('fg3_pct', player.fg3_pct * 100, player.player_id)*/}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {isNaN(player.ftm) ? '-' : player.ftm.toFixed(1)}
                    {getArrowDirection('ftm', player.ftm, player.player_id)}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {isNaN(player.fta) ? '-' : player.fta.toFixed(1)}
                    {getArrowDirection('fta', player.fta, player.player_id)}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {isNaN(player.ft_pct) ? '-' : (player.ft_pct * 100).toFixed(1)}%
                    {/*getArrowDirection('ft_pct', player.ft_pct * 100, player.player_id)*/}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {isNaN(player.reb) ? '-' : player.reb.toFixed(1)}
                    {getArrowDirection('reb', player.reb, player.player_id)}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {isNaN(player.ast) ? '-' : player.ast.toFixed(1)}
                    {getArrowDirection('ast', player.ast, player.player_id)}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {isNaN(player.stl) ? '-' : player.stl.toFixed(1)}
                    {getArrowDirection('stl', player.stl, player.player_id)}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {isNaN(player.blk) ? '-' : player.blk.toFixed(1)}
                    {getArrowDirection('blk', player.blk, player.player_id)}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {isNaN(player.turnover) ? '-' : player.turnover.toFixed(1)}
                    {getArrowDirection('turnover', player.turnover, player.player_id)}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {isNaN(player.pf) ? '-' : player.pf.toFixed(1)}
                    {getArrowDirection('pf', player.pf, player.player_id)}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}
