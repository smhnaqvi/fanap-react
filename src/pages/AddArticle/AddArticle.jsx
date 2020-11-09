import React from 'react';
import {TextField,Grid,Button} from "@material-ui/core"
import { ArticleService } from "components/Article"
export default function AddArticle() {
const [article,setArticle] = React.useState({title:"",body:""})

  const handelChange = (e) => {
    const {name,value} = e.target;
    setArticle(state => ({ ...state, [name]: value}));
  }

  const handelSubmit = () => {
    ArticleService.create(article).then(()=>{
      console.log("article is added");
    }).catch(error => console.log(error));
  }

  return (
    <Grid container spacing={2} style={{marginTop:16}}>
      <Grid item xs={12}>
        <TextField name="title" fullWidth variant="outlined" label="Title" onChange={handelChange} />
      </Grid>
      <Grid item xs={12}>
        <TextField name="title" fullWidth variant="outlined" label="Title" onChange={handelChange} />
      </Grid>
        <Grid item xs={12}>
        <TextField name="body" fullWidth variant="outlined" label="Body" multiline  onChange={handelChange}/>
      </Grid>
      <Grid item xs>
        <Button variant="contained" color="primary" onClick={handelSubmit}>Submit</Button>
      </Grid>
    </Grid>
    );
}