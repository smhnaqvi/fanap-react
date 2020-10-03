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

import "./Card.css"

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 280,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function CardItem(props) {
    const item = props.data;
    const classes = useStyles();
    const avatar = <Avatar aria-label="recipe"
                           className={classes.avatar}> {item.author.charAt(0).toUpperCase()}</Avatar>
    return (<Card key={`card${item.id}`} className={classes.root} style={{}}>
        <CardHeader avatar={avatar} title={item.title} subheader="September 14, 2016"/>
        <CardMedia className={classes.media} image={require(`../images/${item.cover}`)} title={item.author}/>
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p"
                        style={{
                            overflow: "hidden", textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                        }}>
                {item.description}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <Button size="small" variant="contained" color="primary">
                Read More
            </Button>
        </CardActions>
    </Card>);
}