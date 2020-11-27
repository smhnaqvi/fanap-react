import React, { PropsWithChildren } from "react";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import { Scrollbar } from "..";
import AppBar from "./AppBar";
import Drawer from "./Drawer";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    width: "100%",
    height: "100vh"
  },
  content: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    width: "100%",
    padding: theme.spacing(1, 2)
  }
}));

export default function Layout({ children }: PropsWithChildren<unknown>) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar />
      <Drawer
        items={[
          [
            {
              text: "خانه",
              path: "/",
              icon: <HomeIcon />
            }
          ]
        ]}
      />
      <main className={classes.content}>
        <Scrollbar>
          <div className={classes.container}>
            <div className={classes.appBarSpacer} />
            {children}
          </div>
        </Scrollbar>
      </main>
    </div>
  );
}
