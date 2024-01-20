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

function createData(player, GP, MIN, pts, FGM, fga, fg, pm, oreb, dreb, reb, ast, tov, stl, blk, pf, pminus) {
  return { player, GP, MIN, pts, FGM, fga, fg, pm, oreb, dreb, reb, ast, tov, stl, blk, pf, pminus };
}

const rows = [
  createData('Henri Drell', '3', '3.5', '2.7', '1.0', '1.0', '100', '0.0', '0.7', '1.3', '2.0', '2.5', '1.3', '1.3', '0.3', '5.2', '-4.3'),
  createData('Coby White', '3', '3.5', '2.7', '1.0', '1.0', '100', '0.0', '0.7', '1.3', '2.0', '2.5', '1.3', '1.3', '0.3', '5.2', '-4.3'),
  createData('Lonzo Ball', '3', '3.5', '2.7', '1.0', '1.0', '100', '0.0', '0.7', '1.3', '2.0', '2.5', '1.3', '1.3', '0.3', '5.2', '-4.3'),
  createData('Andre Drummond', '3', '3.5', '2.7', '1.0', '1.0', '100', '0.0', '0.7', '1.3', '2.0', '2.5', '1.3', '1.3', '0.3', '5.2', '-4.3'),
  createData('Jevon Carter', '3', '3.5', '2.7', '1.0', '1.0', '100', '0.0', '0.7', '1.3', '2.0', '2.5', '1.3', '1.3', '0.3', '5.2', '-4.3'),
];
const title = 'Player Statistics';

export default function CustomizedTables() {
  return (
    
    <div>
      <div className="table-title">{title}</div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>PLAYER</StyledTableCell>
              <StyledTableCell align="right">GP</StyledTableCell>
              <StyledTableCell align="right">MIN</StyledTableCell>
              <StyledTableCell align="right">PTS</StyledTableCell>
              <StyledTableCell align="right">FGM</StyledTableCell>
              <StyledTableCell align="right">FGA</StyledTableCell>
              <StyledTableCell align="right">FG%</StyledTableCell>
              <StyledTableCell align="right">3PM</StyledTableCell>
              <StyledTableCell align="right">OREB</StyledTableCell>
              <StyledTableCell align="right">DREB</StyledTableCell>
              <StyledTableCell align="right">REB</StyledTableCell>
              <StyledTableCell align="right">AST</StyledTableCell>
              <StyledTableCell align="right">TOV</StyledTableCell>
              <StyledTableCell align="right">STL</StyledTableCell>
              <StyledTableCell align="right">BLK</StyledTableCell>
              <StyledTableCell align="right">PF</StyledTableCell>
              <StyledTableCell align="right">+/-</StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.player}>
                <StyledTableCell component="th" scope="row">
                  {row.player}
                </StyledTableCell>
                <StyledTableCell align="right">{row.GP}</StyledTableCell>
                <StyledTableCell align="right">{row.MIN}</StyledTableCell>
                <StyledTableCell align="right">{row.pts}</StyledTableCell>
                <StyledTableCell align="right">{row.FGM}</StyledTableCell>
                <StyledTableCell align="right">{row.fga}</StyledTableCell>
                <StyledTableCell align="right">{row.fg}</StyledTableCell>
                <StyledTableCell align="right">{row.pm}</StyledTableCell>
                <StyledTableCell align="right">{row.oreb}</StyledTableCell>
                <StyledTableCell align="right">{row.dreb}</StyledTableCell>
                <StyledTableCell align="right">{row.reb}</StyledTableCell>
                <StyledTableCell align="right">{row.ast}</StyledTableCell>
                <StyledTableCell align="right">{row.tov}</StyledTableCell>
                <StyledTableCell align="right">{row.stl}</StyledTableCell>
                <StyledTableCell align="right">{row.blk}</StyledTableCell>
                <StyledTableCell align="right">{row.pf}</StyledTableCell>
                <StyledTableCell align="right">{row.pminus}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
