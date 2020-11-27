import React from "react";
import clsx from "clsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { makeStyles } from "@material-ui/core/styles";
import { DrawerVariant, drawerWidth } from ".";
import { isIOS } from "helpers";

const IOS = isIOS();

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    height: "100vh",
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      position: "relative"
    },
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperOpen: {
    height: "100vh",
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    height: "100vh",
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(1) * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(1) * 7.75
    }
  },
  border: {
    [theme.direction === "rtl"
      ? "borderLeftColor"
      : "borderRightColor"]: "#00000026"
  },
  hide: { display: "none" }
}));

type DrawerProps = {
  smDown: boolean;
  open: boolean;
  minified: boolean;
  variant: DrawerVariant;
  onDrawerToggle: () => void;
};

const ResponsiveDrawer = (props: React.PropsWithChildren<DrawerProps>) => {
  const classes = useStyles();
  const { smDown, open, minified, variant, onDrawerToggle, children } = props;

  return (
    <div style={{ boxSizing: "content-box" }}>
      <SwipeableDrawer
        disableBackdropTransition={!IOS}
        disableDiscovery={IOS}
        variant={smDown ? "temporary" : variant}
        classes={{
          paperAnchorDockedLeft: classes.border,
          paperAnchorDockedRight: classes.border,
          paper: smDown
            ? classes.drawerPaper
            : clsx(
                classes.drawerPaperOpen,
                !open && classes.drawerPaperClose,
                !minified && !open && classes.hide
              )
        }}
        open={open}
        onOpen={onDrawerToggle}
        onClose={onDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {children}
      </SwipeableDrawer>
    </div>
  );
};

export default ResponsiveDrawer;
