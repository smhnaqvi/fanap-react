import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

export type DrawerItemProps = {
  text: string;
  visible?: boolean;
  path?: string;
  icon?: JSX.Element;
  items?: Omit<DrawerItemProps, "items">[];
  activeOnExact?: boolean;
};

const DrawerItem = (props: DrawerItemProps) => {
  const { text, path, icon, activeOnExact: exact = true } = props;
  const match = useRouteMatch({ path, exact });

  return (
    <ListItem button component={Link} to={path ?? "/"} selected={!!match}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default DrawerItem;
