import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import moment from 'moment';

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 280,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
    content: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    }
}));

export default function CardItem(props) {

    const item = props.data;
    const classes = useStyles();

    const showPost = () => {
        props.onClickShowPost(item)
    }

    const avatar = <Avatar aria-label="recipe"
                           className={classes.avatar}> {item.author.charAt(0).toUpperCase()}</Avatar>
    let created_at = moment(item.created).format("llll");
    return (
        <Grid item>
            <Card key={`card${item.id}`} className={classes.root}>
                <CardHeader classes={{content: classes.content}} avatar={avatar} title={item.title}
                            subheader={created_at}/>
                <CardMedia className={classes.media} image={require(`../images/${item.cover}`)} title={item.author}/>
                <CardContent>
                    <Typography noWrap variant="body2" color="textSecondary" component="p">
                        {item.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Button size="small" variant="contained" color="primary" onClick={showPost}>
                        Read More
                    </Button>
                </CardActions>
            </Card>
        </Grid>);
}