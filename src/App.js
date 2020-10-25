import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import DisplayUser from "./components/DisplayUser";
import RegisterUser from "./components/RegisterUser";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
}));

export default function App() {
    const classes = useStyles();
    const [state, setState] = useState({
        avatar: null,
        firstName: null,
        lastName: null,
        phone: null,
        email: null,
        birthDate: null,
        title: null,
        isEmailVisible: false,
        gender: null,
        address: null
    })


    const handleRegisterForm = (data) => {
        setState({
            avatar: data.avatar,
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            email: data.email,
            birthDate: data.birthDate,
            title: data.title,
            isEmailVisible: data.isEmailVisible,
            gender: data.gender,
            address: data.address
        })
    }

    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <DisplayUser data={state}/>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <RegisterUser data={state} onSubmit={handleRegisterForm}/>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
