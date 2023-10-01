import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux'
import { deleteRow } from './../redux/table';

export default function BasicTable() {
  const { rows } = useSelector((state) => state.tableData);
  const dispatch = useDispatch();

  return (
    <TableContainer sx={{ width: '80%' }} component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow
              key={row.todo}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ fontSize: '24px', color: '#777777'}} >
                {row.todo}
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => { dispatch(deleteRow(rowIndex)) }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}