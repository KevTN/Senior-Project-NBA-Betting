import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Table.css"
import Poll from './Poll';

function createData(home, away, time ) {
  return { home, away, time};
}

const rows = [
  createData('Lakers', 'Golden State Warriors', 5),
  createData('Heat', 'Cavaliers', 5),

];

export default function BasicTable() {
  return (
    <div className="todaygame">
      <h2 class="tableName">NBA Games Today</h2>
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
          {rows.map((row) => (
            <TableRow
              key={row.name}
              // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.home}</TableCell>
              <TableCell align="center">{row.away}</TableCell>
              <TableCell align="center">{row.time}</TableCell>
              <TableCell align="center">
                <Poll / >
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
    </div>
  );
}
