import React from "react";
import moment from "moment-jalaali";
import { useQuery } from "react-query";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { TableLoading, Toolbar } from "components/ui";
import { Category } from "components/Categories";

export type Entry = {
  id: number;
  title: string;
  date: number;
  amount: number;
  category: Category;
};

export function Entries() {
  const { isLoading, data: entries = [] } = useQuery<Entry[]>("/api/entries");
  const [selected, setSelected] = React.useState<Entry>();

  const handleClick = (user: Entry) => () => {
    user !== selected ? setSelected(user) : setSelected(undefined);
  };

  const renderEntry = (entry: Entry) => {
    return (
      <TableRow
        key={entry.id}
        hover
        onClick={handleClick(entry)}
        selected={entry === selected}
      >
        <TableCell>{entry.id}</TableCell>
        <TableCell>{entry.title}</TableCell>
        <TableCell>{moment(entry.date).format("jYYYY/jMM/jDD")}</TableCell>
        <TableCell>{entry.amount}</TableCell>
        <TableCell>{entry.category.name}</TableCell>
        <TableCell align="right">
          <IconButton edge="end" color="secondary" size="small">
            <DeleteForeverIcon fontSize="small" />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Paper>
      <Toolbar title="هزینه ها" onAdd={() => console.log("add")} />
      <TableContainer style={{ height: 316, overflow: "auto" }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>شناسه</TableCell>
              <TableCell>عنوان</TableCell>
              <TableCell>تاریخ</TableCell>
              <TableCell>مقدار</TableCell>
              <TableCell>دسته</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <TableLoading rows={5} cols={6} />
            ) : (
              entries.map(renderEntry)
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
