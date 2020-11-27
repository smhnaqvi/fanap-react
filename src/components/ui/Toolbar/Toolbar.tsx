import React from "react";
import {
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Toolbar as MuiToolbar,
  Typography
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1)
    },
    title: {
      flex: "1 1 100%"
    }
  })
);

export interface ToolbarProps {
  title: string;
  onAdd: () => void;
}

export function Toolbar(props: ToolbarProps) {
  const classes = useStyles();
  const { title, onAdd } = props;

  return (
    <MuiToolbar className={classes.root}>
      <Typography className={classes.title} variant="h6" component="div">
        {title}
      </Typography>
      <IconButton onClick={onAdd}>
        <AddIcon />
      </IconButton>
    </MuiToolbar>
  );
}
