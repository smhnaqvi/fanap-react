import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import { useAuth } from "providers/auth";

import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const useStyles = makeStyles(theme => ({
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  icons:{
    display: 'flex',
  },
  nav:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userDisplayName:{
    fontSize:15,
    display:"flex",
    marginLeft:10
  }
}));

export default function TopBar() {
  const classes = useStyles();
  const { user, signOut } = useAuth();
  return (
    <AppBar position="relative" color="primary">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle} >
        </Typography>
        <nav className={classes.nav}>
          <Link variant="button" color="textPrimary" component={RouterLink} to="/" className={classes.link} >
            <HomeIcon  className={classes.icons}/>
          </Link>
          {!!user && (
            <Link
              variant="button"
              color="textPrimary"
              component={RouterLink}
              to="/profile"
              className={classes.link} >
              <AssignmentIndIcon className={classes.icons} />
            </Link>
          )}
          {!!user ? (
          <React.Fragment>
            <span className={classes.userDisplayName}>{user.name}</span>
            <ExitToAppIcon  className={classes.icons}  onClick={signOut}/>
          </React.Fragment>
        ) : (
          <Button variant="contained" component={RouterLink} to="/signin">Sign In</Button>
        )}
        </nav>
        
      </Toolbar>
    </AppBar>
  );
}
