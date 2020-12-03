import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Radio from '@material-ui/core/Radio'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';
import {useEntries} from "./../../providers/entries"
import Axios from 'axios';
const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  title: {
    flex: '1 1 100%',
  },
}));

export function UserTable({response,filter,setFilter}){
  const classes = useToolbarStyles();
  const {setEntries} = useEntries();

  const [selected, setSelected] = React.useState();

  const handleOnClickRow = (user) => () => {
    user !== selected ? setSelected(user) : setSelected(undefined);
    setEntries(user.entries);
    // Axios.get("",{
    //   baseURL: "api/",
    //   headers: { token: token }}
    // ).then((response) => {
    //   console.log(response)
    // }).catch(error => console.log(error));
  };

  return (
    <TableContainer className={classes.container}>
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            <TableCell align="right"></TableCell>
            <TableCell align="right">شناسه</TableCell>
            <TableCell align="right">نام</TableCell>
            <TableCell align="right">نام کاربری</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {response.data.map((user, index) => (
            <TableRow hover key={index} onClick={handleOnClickRow(user)} selected={user === selected} >
              <TableCell padding="none" align="right">
                <Radio checked={selected === user} disableRipple size="small" />
              </TableCell>
              <TableCell padding="none" align="right">{user.id}</TableCell>
              <TableCell padding="none" align="right">{user.userName}</TableCell>
              <TableCell padding="none" align="right">{user.name}</TableCell>
              <TableCell padding="none" align="right">
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
  )
}

