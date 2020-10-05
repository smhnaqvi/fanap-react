import React from "react";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";

import moment from "moment";

const useStyles = makeStyles((theme) => ({
        card: {
            width: 800
        },
        avatar: {
            backgroundColor: red[500],
        },
        media: {
            width: 800,
            height: 300,
            objectFit: 'cover',
        }
    }))
;


function Post(props) {
    const item = props.data;
    const classes = useStyles();

    const goToBack = () => {
        props.onClickBack();
    }
    let created_at = moment(item.created).format("llll");

    return (
        <Grid item>
            <div className={classes.card}>
                <Typography variant="h6" gutterBottom>
                    {item.title}
                </Typography>
                <Typography variant="caption" color="textSecondary" display="block" gutterBottom>
                    by: {item.author}
                </Typography>
                <Typography variant="caption" color="textSecondary" display="block" gutterBottom>
                    date: {created_at}
                </Typography>
                <img className={classes.media} src={require(`../images/${item.cover}`)} alt={item.author}/>
                <Typography align="left" variant="body2" gutterBottom component="p">
                    {item.description}
                </Typography>
                <Typography align="left" variant="caption" color="textSecondary" gutterBottom component="p">
                    {item.body}
                </Typography>
                <div>
                    <Button size="small" variant="contained" color="primary" onClick={goToBack}>
                        Back To List
                    </Button>
                </div>
            </div>
        </Grid>
    );
}

export default Post;