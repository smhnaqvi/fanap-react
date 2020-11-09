import React from "react"
import { Toolbar,Typography,AppBar,Button} from "@material-ui/core"
import {Link as RouterLink} from "react-router-dom"
export default function TopBar(){
    return (
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Menu
            </Typography>
          <Button variant="text" component={RouterLink} to="/add">add article</Button>
          <Button variant="text" component={RouterLink} to="/articles">articles</Button>
          </Toolbar>
        </AppBar>
        )
}