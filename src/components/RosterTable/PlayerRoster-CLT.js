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
    fontSize: 14,
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

const title = 'Charlotte Hornets Roster';

export default function CustomizedTables() {
  const [roster, setRoster] = useState([]);

  useEffect(() => {
    const fetchRosterData = async () => {
      try {
        const hornetsIDs = [56677848, 3547239, 44, 56677866, 666453, 62, 114, 17896036, 666748, 38017708, 4197029, 56677823, 3547271, 3547282, 56677846, 17957861, 666965, 38017698];
        const responses = await Promise.all(hornetsIDs.map(id =>
          axios.get(`https://api.balldontlie.io/v1/players?player_ids[]=${id}`, {
            headers: {
              Authorization: '49ea66ef-b246-4f04-9c73-ebde5f4c8a12'
            }
          })
        ));
        console.log('Responses:', responses);
        const rosterData = responses.map(response => {
            const player = response.data.data[0]; // Access the first player object in the array
            return {
              player: `${player.first_name} ${player.last_name}`,
              number: player.jersey_number,
              pos: player.position,
              height: player.height,
              weight: player.weight
            };
          });
        setRoster(rosterData);
      } catch (error) {
        console.error('Error fetching roster data:', error);
      }
    };

    fetchRosterData();
  }, []);

  return (
    <div>
      <div className="table-title">{title}</div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>PLAYER</StyledTableCell>
              <StyledTableCell align="right">NO.</StyledTableCell>
              <StyledTableCell align="right">POS</StyledTableCell>
              <StyledTableCell align="right">HEIGHT</StyledTableCell>
              <StyledTableCell align="right">WEIGHT</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roster.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row.player}
                </StyledTableCell>
                <StyledTableCell align="right">{row.number}</StyledTableCell>
                <StyledTableCell align="right">{row.pos}</StyledTableCell>
                <StyledTableCell align="right">{row.height}</StyledTableCell>
                <StyledTableCell align="right">{row.weight}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
