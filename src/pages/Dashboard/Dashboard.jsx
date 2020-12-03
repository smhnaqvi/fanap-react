import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "providers/auth";
import axios from "axios";
import { UserTable, EntriesTable, CategoriesTable } from "./../../components/Table";
import TopBar from "./../../components/TopBar";
import WithLoading from "./../../components/Loading";

import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import {Calendar} from 'react-modern-calendar-datepicker';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  const { user, token } = useAuth();

  const instance = axios.create({
    baseURL: "api/",
    headers: { token: token },
  });

  const TableUsers = WithLoading(UserTable, instance.get("users"));

  const TableEntries = WithLoading(EntriesTable, instance.get("entries"));

  const TableCategories = WithLoading(CategoriesTable, instance.get("categories"));

  return (
    <>
      <TopBar />
        <Grid container spacing={2}>
          <Grid item xs={6}>
          <Paper className={classes.paper}>
              <TableUsers />
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <TableCategories />
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Calendar locale="fa"/>
          </Grid>
         

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <TableEntries />
            </Paper>
          </Grid>
        </Grid>
    </>
  );
}
