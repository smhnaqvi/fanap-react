import React from "react";
import { useQuery } from "react-query";
import {
  IconButton,
  Paper,
  Radio,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { User } from "components/Auth";
import { TableLoading, Toolbar } from "components/ui";

export function Users() {
  const { isLoading, data: users = [] } = useQuery<User[]>("/api/users");
  const [selected, setSelected] = React.useState<User>();

  const handleClick = (user: User) => () => {
    user !== selected ? setSelected(user) : setSelected(undefined);
  };

  const renderUser = (user: User) => {
    return (
      <TableRow
        key={user.id}
        hover
        onClick={handleClick(user)}
        selected={user === selected}
      >
        <TableCell padding="none">
          <Radio checked={selected === user} disableRipple size="small" />
        </TableCell>
        <TableCell>{user.id}</TableCell>
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.userName}</TableCell>
        <TableCell align="right">
          <IconButton
            edge="end"
            color="secondary"
            size="small"
            onClick={e => e.stopPropagation()}
          >
            <DeleteForeverIcon fontSize="small" />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Paper>
      <Toolbar title="کاربران" onAdd={() => console.log("add")} />
      <TableContainer style={{ height: 316, overflow: "auto" }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell padding="none"></TableCell>
              <TableCell>شناسه</TableCell>
              <TableCell>نام</TableCell>
              <TableCell>نام کاربری</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <TableLoading rows={5} cols={5} />
            ) : (
              users.map(renderUser)
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
