import React from 'react';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import TableContainer from '@material-ui/core/TableContainer';

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    // paddingLeft: theme.spacing(2),
    // paddingRight: theme.spacing(1),
  },
  sizeSmall:{
    padding:"0 15px"
  },
  title: {
    flex: '1 1 100%',
  },
  container:{
    maxHeight: 300,
  },
  MuiTableCell:{

  }
}));


export function EntriesTable({response}){
  const classes = useToolbarStyles();
  return (
    <TableContainer className={classes.container}>
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            <TableCell align="right">شناسه</TableCell>
            <TableCell align="right">عنوان</TableCell>
            <TableCell align="right">تاریخ</TableCell>
            <TableCell align="right">مقدار</TableCell>
            <TableCell align="right">دسته</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {response.data.map((row, index) => (
            <TableRow hover role="checkbox" tabIndex={-1} key={index}>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.category.name}</TableCell>
              <TableCell align="right">
                <IconButton
                  color="secondary"
                  aria-label="delete"
                  className={classes.margin}
                >
                  <DeleteForeverIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}