import React from "react";
import { api } from "helpers";
import { toast } from "react-toastify";
import { Link as RouterLink, RouteComponentProps } from "react-router-dom";
import Zoom from "@material-ui/core/Zoom";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useForm } from "react-hook-form";
import { LoadingButton as Button } from "components/ui";
import { useAuth, Login, User } from "components/Auth";
import { valueFromQS } from "helpers";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3)
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

export default function LoginPage(props: RouteComponentProps<never>) {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm<Login>();
  const { login } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState<User>();

  React.useEffect(() => {
    api.get("/api/users/1").then(res => setUser(res));
  }, []);

  const onSubmit = (data: Login) => {
    setLoading(true);
    login(data)
      .then(() => {
        setLoading(false);
        props.history.replace(valueFromQS("from") ?? "");
      })
      .catch(e => {
        setLoading(false);
        toast.error("نام کاربری یا رمز ورود اشتباه است");
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Zoom in={true}>
        <Paper className={classes.paper} elevation={5}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <form
            className={classes.form}
            noValidate
            autoComplete="new-password"
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              name="userName"
              label="نام کاربری"
              defaultValue=""
              variant="outlined"
              margin="normal"
              autoComplete="new-password"
              fullWidth
              autoFocus
              inputRef={register({
                required: "نام کاربری را وارد کنید"
              })}
              error={!!errors.userName}
              helperText={
                !!errors.userName ? errors.userName.message : user?.userName
              }
            />
            <TextField
              name="password"
              label="گذرواژه"
              defaultValue=""
              variant="outlined"
              margin="normal"
              type="password"
              autoComplete="new-password"
              fullWidth
              inputRef={register({
                required: "گذرواژه را وارد کنید"
              })}
              error={!!errors.password}
              helperText={
                !!errors.password ? errors.password.message : "123456"
              }
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              loading={loading}
            >
              ورود
            </Button>
            <Grid container>
              <Grid item>
                <Link component={RouterLink} to="/register">
                  ثبت نام
                </Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Zoom>
    </Container>
  );
}
