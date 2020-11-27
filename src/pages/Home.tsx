import React from "react";
import { Grid } from "@material-ui/core";
import { Users } from "components/Users";
import { Categories } from "components/Categories";
import { MyCalendar } from "components/Calendar";

export default function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Users />
      </Grid>
      <Grid item xs={3}>
        <Categories />
      </Grid>
      <Grid item xs={3}>
        <MyCalendar />
      </Grid>
    </Grid>
  );
}
