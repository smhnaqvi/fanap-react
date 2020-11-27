import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MuiAppBar, { AppBarProps } from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { AuthButton } from "components/Auth";
import { drawerWidth, useDrawer } from "./Drawer";

const useStyles = makeStyles(theme => ({
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  }
}));

export default function AppBar(props: AppBarProps) {
  const classes = useStyles();
  const { drawer, toggleDrawerOpen } = useDrawer();

  const handleDrawerOpen = () => {
    toggleDrawerOpen();
  };

  return (
    <MuiAppBar
      className={clsx(classes.appBar, drawer.open && classes.appBarShift)}
      {...props}
      color="default"
      position="absolute"
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, {
            [classes.menuButtonHidden]: drawer.open
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        ></Typography>
        <AuthButton />
      </Toolbar>
    </MuiAppBar>
  );
}
