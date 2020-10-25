import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),

    },
    cardStyle: {justifyContent: "center", display: "grid", textAlign: "center"}
}));

export default function DisplayUser(props) {
    const classes = useStyles();
    return (<div className={classes.cardStyle} style={{}}>
        <Avatar alt={props.data.email} style={{alignItems: "center"}} src={props.data.avatar}
                className={classes.large}/>
        {(props.data.firstName && props.data.lastName) ? <h3>{props.data.firstName +" "+ props.data.lastName}</h3> : ""}
        <div>{props.data.email}</div>
        <div>{props.data.phone}</div>
        <div>{props.data.birthDate}</div>
        <div>{props.data.title}</div>
    </div>);
}