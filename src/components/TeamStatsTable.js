import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography } from '@mui/material';
import './TeamStatsTable.css'; // Import the CSS file

const TeamStatsTable = ({ teamStatsData }) => {
  console.log("teamStatsData:", teamStatsData); // Log the teamStatsData to console

  const renderOffenseTable = (data) => {
    if (!data || data.length === 0) {
      return (
        <Typography variant="body1" gutterBottom>
          NA
        </Typography>
      );
    }
  
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>PTS</TableCell>
              <TableCell>FG%</TableCell>
              <TableCell>FG</TableCell>
              <TableCell>FGA</TableCell>
              <TableCell>3PA</TableCell>
              <TableCell>3P</TableCell>
              <TableCell>3P%</TableCell>
              <TableCell>AST</TableCell>
              <TableCell>ORB</TableCell>
              <TableCell>FTA</TableCell>
              <TableCell>FT%</TableCell>
              <TableCell>FT</TableCell>
              <TableCell>TO</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((game, index) => (
              <TableRow key={index} className="table-row">
                <TableCell >{game['Per Game']['PTS']}</TableCell>
                <TableCell >{game['Per Game']['FG%']}</TableCell>
                <TableCell >{game['Per Game']['FG']}</TableCell>
                <TableCell >{game['Per Game']['FGA']}</TableCell>
                <TableCell >{game['Per Game']['3PA']}</TableCell>
                <TableCell >{game['Per Game']['3P']}</TableCell>
                <TableCell >{game['Per Game']['3P%']}</TableCell>
                <TableCell >{game['Per Game']['AST']}</TableCell>
                <TableCell >{game['Per Game']['ORB']}</TableCell>
                <TableCell >{game['Per Game']['FTA']}</TableCell>
                <TableCell >{game['Per Game']['FT%']}</TableCell>
                <TableCell >{game['Per Game']['FT']}</TableCell>
                <TableCell >{game['Per Game']['TOV']}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const renderDefenseTable = (data) => {
    if (!data || data.length === 0) {
      return (
        <Typography variant="body1" gutterBottom>
          NA
        </Typography>
      );
    }
  
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Opp. PPG</TableCell>
              <TableCell>STL</TableCell>
              <TableCell>BLK</TableCell>
              <TableCell>DRB</TableCell>
              <TableCell>FG%</TableCell>
              <TableCell>3P%</TableCell>
              <TableCell>FTA</TableCell>
              <TableCell>TO</TableCell>
              <TableCell>Fouls</TableCell>
              <TableCell>Arena</TableCell>
              <TableCell>Avg Attendence</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((game, index) => (
              <TableRow key={index} className="table-row">
                <TableCell >{game['Per Game Opponent']['PTS']}</TableCell>
                <TableCell >{game['Per Game']['STL']}</TableCell>
                <TableCell >{game['Per Game']['BLK']}</TableCell>
                <TableCell >{game['Per Game']['DRB']}</TableCell>
                <TableCell >{game['Per Game Opponent']['FG%']}</TableCell>
                <TableCell >{game['Per Game Opponent']['3P%']}</TableCell>
                <TableCell >{game['Per Game Opponent']['FTA']}</TableCell>
                <TableCell >{game['Per Game Opponent']['TOV']}</TableCell>
                <TableCell >{game['Per Game']['PF']}</TableCell>
                <TableCell>{game['Advanced']['Arena']}</TableCell>
                <TableCell>{game['Advanced']['Attend./G']}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <div className="team-stats-container">
      <h1 className="mainHeader">2022-23 Team Stats</h1>
      {teamStatsData.map((game, index) => (
        <div key={index} className="record">
          Record: {game['Advanced']?.['W']}-{game['Advanced']?.['L']}
        </div>
      ))}
      <div className="subHeader">Offense</div>
      <div className="table-container">
        {renderOffenseTable(teamStatsData)}
      </div>
      {/* Subheader for defense */}
      <div className="subHeader">Defense</div>
      {/* Defense table */}
      <div className="table-container">
        {renderDefenseTable(teamStatsData)}
      </div>
    </div>
  );
};

export default TeamStatsTable;

 





