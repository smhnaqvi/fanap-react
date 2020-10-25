import React from "react";
import {TextField} from "@material-ui/core"
import {makeStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid'
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    actionBtns: {
        justifyContent: 'space-between',
    },
    inputStyle: {
        width: '100%',
        margin: '15px 0 0 0',
    }
}));


export default function RegisterUser(props) {
    const classes = useStyles();
    const [gender, setGender] = React.useState('female');
    const [checked, setChecked] = React.useState(false);

    const handleFormValue = (event) => {
        if (event.target.name === "isEmailVisible") {
            setChecked((prev) => !prev);
        } else if (event.target.name === "gender") {
            setGender(event.target.value);
        } else if (event.target.name === "birthDate") {

        } else if (event.target.name === "email") {

        } else if (event.target.name === "phone") {

        }
    };

    const submitForm = (event) => {
        event.preventDefault();

        props.onSubmit({
            avatar: null,
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            phone: event.target.phone.value,
            email: event.target.email.value,
            birthDate: event.target.birthDate.value,
            title: event.target.title.value,
            isEmailVisible: event.target.isEmailVisible.checked,
            gender: event.target.gender.value,
            address: event.target.address.value
        })
    };

    return (<form onSubmit={submitForm} className={classes.root} noValidate autoComplete="off">
        <Grid container className={classes.actionBtns}>
            <Button variant="contained" color="primary">Change Picture</Button>
            <Button variant="contained" color="secondary" type={"submit"}>Submit</Button>
        </Grid>
        <Grid container>
            <Grid item xs>
                <TextField required className={classes.inputStyle} id="outlined-basic" name={"firstName"}
                           label="First Name"
                           variant="outlined"/>
            </Grid>
            <Grid item xs>
                <TextField required className={classes.inputStyle} id="outlined-basic" name={'lastName'}
                           label="Last Name"
                           variant="outlined"/>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs>
                <TextField className={classes.inputStyle} id="outlined-basic"
                           name={'phone'} label="Phone"
                           variant="outlined"/>
            </Grid>
            <Grid item xs>
                <TextField className={classes.inputStyle} id="outlined-basic"
                           name={'email'} label="Email Address"
                           variant="outlined"/>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs>
                <TextField className={classes.inputStyle} id="outlined-basic"
                           name={'birthDate'} label="Birth Date"
                           variant="outlined"/>
            </Grid>
            <Grid item xs>
                <TextField className={classes.inputStyle} id="outlined-basic"
                           name={'title'} label="Title"
                           variant="outlined"/>
            </Grid>
        </Grid>
        <Grid container>
            <Grid style={{marginTop: '15px'}} container>
                <Grid item xs>
                    <FormLabel component="legend">Display Email</FormLabel>
                    <Switch
                        checked={checked}
                        onChange={handleFormValue}
                        name="isEmailVisible"
                        inputProps={{'aria-label': 'secondary checkbox'}}
                    />
                </Grid>
                <Grid item xs>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup style={{flexDirection: "row"}} aria-label="gender"
                                    name="gender" value={gender} onChange={handleFormValue}>
                            <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                            <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                            <FormControlLabel value="other" control={<Radio/>} label="Other"/>
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid item xs>
                <TextField className={classes.inputStyle} id="outlined-basic"
                           name={"address"}
                           label="Address" variant="outlined"/>
            </Grid>
        </Grid>
    </form>)
}