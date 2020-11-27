import React from "react";
import { useQuery } from "react-query";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Radio,
  IconButton,
  Paper,
  Typography,
  Divider
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

export type Category = {
  id: number;
  name: string;
};

export function Categories() {
  const { isLoading, data: categories = [] } = useQuery<Category[]>(
    "/api/categories"
  );
  const [selected, setSelected] = React.useState<Category>();

  const handleClick = (cat: Category) => () => {
    cat !== selected ? setSelected(cat) : setSelected(undefined);
  };

  const renderCategory = (cat: Category) => {
    return (
      <>
        <ListItem
          key={cat.id}
          dense
          button
          selected={selected === cat}
          onClick={handleClick(cat)}
        >
          <ListItemIcon>
            <Radio
              edge="start"
              checked={selected === cat}
              tabIndex={-1}
              disableRipple
              size="small"
            />
          </ListItemIcon>
          <ListItemText primary={cat.name} />
          <ListItemSecondaryAction>
            <IconButton edge="end" color="secondary" size="small">
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider variant="fullWidth" component="li" />
      </>
    );
  };

  return (
    <Paper>
      <Typography variant="h6" style={{ padding: 16 }}>
        لیست دسته بندی ها
      </Typography>
      <List disablePadding dense style={{ height: 316, overflow: "auto" }}>
        {categories.map(renderCategory)}
      </List>
    </Paper>
  );
}
