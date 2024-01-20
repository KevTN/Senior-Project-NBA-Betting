import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(player, number, pos, height, weight) {
  return { player, number, pos, height, weight };
}

const rows = [
  createData('Henri Drell', '#', 'F', '6-9', '220 lbs'),
  createData('Coby White', '#0', 'G', '6-5', '195 lbs'),
  createData('Lonzo Ball', '#2', 'G', '6-6', '190 lbs'),
  createData('Andre Drummond', '#3', 'C', '6-11', '279 lbs'),
  createData('Jevon Carter', '#5', 'G', '6-1', '279 lbs'),
];

const title = 'Team Roster';

export default function CustomizedTables() {
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
          {rows.map((row) => (
            <StyledTableRow key={row.player}>
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