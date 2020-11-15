import React, { useEffect, useState } from "react";
import {Grid} from "@material-ui/core";
import Container from '@material-ui/core/Container';
import CircularProgress from "@material-ui/core/CircularProgress";
import {  useParams} from "react-router-dom";
import {ArticleService} from "components/Article" 
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import ReactHtmlParser from "react-html-parser"
const useStyles = makeStyles(theme => ({
    root:{
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    image:{
        width:500,
        height:300,
        objectFit:"cover",
        borderRadius:5,
    },
    h5:{
        marginTop:15,
        textAlign:"center"
    },
    caption:{
        textAlign:"right",
        lineHeight:1.7,
        fontSize:16,
    }
 }));
  

export default function DisplayArticle(props) {
    const classes = useStyles();
    let { id } = useParams();
    let [loading,setLoading] = useState(false)
    let [article,setArticle] = useState({});

    useEffect(() => {
        setLoading(true);
        let article = ArticleService.getSingle(id);
        article.once('value').then(function(snapshot) {
            setLoading(false);
            if(!!snapshot.val()){
                setLoading(false);
                setArticle(snapshot.val());
            }else{
                console.log("article not found");
                props.history.push("/articles");
            }
        });
    },[])

    return (
        <Container style={{ marginTop: 50, marginBottom: 50, maxWidth:700 }}>
            <Grid container justify="center" spacing={3}>
                {loading ? <CircularProgress size={24} /> : <ShowArticle item={article} />}
            </Grid>
        </Container>
    );
};


function ShowArticle(props){
    const classes = useStyles();
    console.log(props.item);
    return (
        <Grid className={classes.root}>
            <img className={classes.image} src={props.item.imageUrl}  />
            <Typography color="primary" className={classes.h5} variant="h5" >{props.item.title}</Typography>
            <Typography className={classes.caption} variant="caption" >{ReactHtmlParser(props.item.body)}</Typography>
        </Grid>
    )
}