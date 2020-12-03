import React,{useEffect} from "react";
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "components/Button";
import { useAuth } from "providers/auth";
import axios from 'axios'


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = React.useState({ username: "", password: "" });
  const [user,setUserInfo] = React.useState({userName:null,password:"123456"});
  const [loading, setLoading] = React.useState(false);
  const { signIn,setToken, setUser } = useAuth();

  const handleChange = e => {
    const { name, value } = e.target;
    setState(st => ({ ...st, [name]: value }));
  };


  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    const { username, password } = state;
    signIn(username, password).then((response) => {
        setToken(response.data.token)
        setUser(response.data.user)
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("user", JSON.stringify(response.data.user))
        history.replace("/")
      })
      .catch(error => {
        setLoading(false);
        toast.error(error.message);
      });
  };


  if (user.userName === null){
    axios.get("/api/users/1").then(function (response) {
        // handle success
        setUserInfo(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }
 
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="UserName"
            name="username"
            autoComplete="username"
            autoFocus
            value={state.username}
            onChange={handleChange}
          /> {user.userName}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={state.password}
            onChange={handleChange}
          /> 123456
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            loading={loading}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
