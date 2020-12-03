import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Radio,
  IconButton } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

export function CategoriesTable({response}) {
  const [isSelected, setSelected] = React.useState();

  const handleClick = (cat) => () => {
    cat !== isSelected ? setSelected(cat) : setSelected(undefined);
  };

  return (
    <List disablePadding dense>
      {response.data.map((item) => (
        <div key={item.id}>
          <ListItem dense button selected={isSelected === item} onClick={handleClick(item)} >
            <ListItemIcon>
              <Radio edge="start" checked={isSelected === item} tabIndex={-1} disableRipple size="small" />
            </ListItemIcon>
            <ListItemText style={{textAlign:'right'}} primary={item.name} />
            <IconButton color="secondary" aria-label="delete" >
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
          </ListItem>
        </div>
      ))}
    </List>
  );
}
