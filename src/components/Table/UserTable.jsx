import React from 'react';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Radio from '@material-ui/core/Radio'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

export function UserTable({response}){
  const classes = useToolbarStyles();

  const [selected, setSelected] = React.useState();

  const handleOnClickRow = (user) => () => {
    user !== selected ? setSelected(user) : setSelected(undefined);
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
            <TableRow hover key={index} hover onClick={handleOnClickRow(user)} selected={user === selected} >
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

