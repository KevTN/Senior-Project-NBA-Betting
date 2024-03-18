import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//import './TeamStatsTable.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
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

const recordColumns = ['Away ', 'Home ', 'West', 'East', 'Division', 'Opp Ov.500', 'Opp U.500','Rank'];
const offenseColumns = ['PPG  ', 'FG%  ', '3PT%', 'FT%', 'Off Reb PG', '3pt PG', 'Ast PG','T.O PG','Off. Rank'];
const defenseColumns = ['Def Rebs','Steals', 'Blocks', 'Pnt. Allow. PG.', 'Def. 3%', 'Def. FG%', 'Defense Eff.'];

function createData(...values) {
  const data = {};
  recordColumns.forEach((column, index) => {
    data[column] = values[index];
  });
  offenseColumns.forEach((column, index) => {
    data[column] = values[recordColumns.length + index];
  });
  defenseColumns.forEach((column, index) => {
    data[column] = values[recordColumns.length + offenseColumns.length + index];
  });
  return data;
}

const rows = [
  createData('0-0', '0-0', '0-0', '0-0', '0-0', '0-0', '0-0', '0-0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0'),
];

const title = 'Team Statistics';

export default function CustomizedTables() {
  return (
    <React.Fragment>
      {/* Header for the entire table */}
      <div className="table-title">{title}</div>

      {/* Record Table */}
      <TableContainer component={Paper} className="table-container record-table">
        <Table sx={{ minWidth: 700 }} aria-label="record table" className="record-table">
          <TableHead>
            <TableRow>
            <StyledTableCell className="record-cell">Team Record</StyledTableCell>
              {recordColumns.map((column) => (
                <StyledTableCell key={column} align="right" className="record-cell">{column}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <StyledTableRow key={rowIndex}>
                <StyledTableCell component="th" scope="row" className="record-cell">0-0</StyledTableCell>
                {recordColumns.map((column) => (
                  <StyledTableCell key={column} align="right" className="record-cell">{row[column]}</StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      

      {/* Offense Table */}
      <TableContainer component={Paper} className="table-container offense-table">
        <Table sx={{ minWidth: 700 }} aria-label="offense table">
          <TableHead>
            <TableRow>
              <StyledTableCell className="offense-cell">Offense Rank</StyledTableCell>
              {offenseColumns.map((column) => (
                <StyledTableCell key={column} align="right" className="offense-cell">{column}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <StyledTableRow key={rowIndex}>
                <StyledTableCell component="th" scope="row" className="offense-cell">1st</StyledTableCell>
                {offenseColumns.map((column) => (
                  <StyledTableCell key={column} align="right" className="offense-cell">{row[column]}</StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Defense Table */}
      <TableContainer component={Paper} className="table-container defense-table">
        <Table sx={{ minWidth: 700 }} aria-label="defense table">
          <TableHead>
            <TableRow>
              <StyledTableCell className="defense-cell">Defense Rank</StyledTableCell>
              {defenseColumns.map((column) => (
                <StyledTableCell key={column} align="right" className="defense-cell">{column}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <StyledTableRow key={rowIndex}>
                <StyledTableCell component="th" scope="row" className="defense-cell">1st</StyledTableCell>
                {defenseColumns.map((column) => (
                  <StyledTableCell key={column} align="right" className="defense-cell">{row[column]}</StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}