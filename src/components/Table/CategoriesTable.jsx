import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Toolbar,Typography,List,ListItem,ListItemText,Radio,RadioGroup } from '@material-ui/core';
import {ListItemIcon,AddIcon,IconButton} from '@material-ui/icons';




const useToolbarStyles = makeStyles((theme) => ({
  container:{
    maxHeight:290,
    overflowY:"scroll"
  },
  pageTitle:{
    width: "100%",
    textAlign: "right",
    display: "inline-block",
    padding: "20px 25px 0px 0px",
    fontSize: 22,
    color: "black",
  }
}));


export function CategoriesTable({response}){
  const classes = useToolbarStyles();
  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const chnageState = (event) => {
    console.log(event.target);
    // event.target.value = null
  }


  const handelAddNewCategory = () => {
    console.log("handelAddNewCategory");
  }

  return (
    <>
      <Toolbar className={classes.root}>
        <Typography className={classes.title} variant="h6" component="div">دسته بندی</Typography>
        <IconButton onClick={handelAddNewCategory}>
          <AddIcon />
        </IconButton>
      </Toolbar>
      <List className={classes.container}>
          <RadioGroup aria-label="gender" name="gender1">
            {response.data.map((item) => {
              return (
                <ListItem key={item.id} role={undefined} dense button >
                  <ListItemIcon>
                    <Radio value={item.name} onClick={chnageState} />
                  </ListItemIcon>
                  <ListItemText id={item.id} primary={item.name} />
                </ListItem>
              );
            })}
          </RadioGroup>
      </List>
    </>
  );
}

