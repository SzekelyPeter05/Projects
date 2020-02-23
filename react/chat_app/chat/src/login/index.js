import React, {useState} from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useSelector, useDispatch, connect } from 'react-redux';
import AirplayIcon from '@material-ui/icons/Airplay';
import {changeRegisterScreenn,closeRegisterMessage,logIn} from '../store/actions';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';




const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  avatar2: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.dark,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  
}));



const LoginScreen = () => {
  
  const loginState = useSelector(state => state.login);
  
  return (
         loginState.registerScreen ? <SignUp />  :  <LogInd />
  );
}

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        szekelypeter.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


function LogInd() {
  const classes = useStyles();
  const dispach = useDispatch();
  const [openBadEmail, setBadEmail] = useState(false);
  const [openBadPassword, setBadPassword] = useState(false);
  const [form_values, setValues] = React.useState({
    email: '',
    password : ''
  });
  const open = useSelector(state => state.login.openSuccesRegisterMessage);
  const handleChangeForm = ( event ) => {
    setValues({ ...form_values, [event.target.name]: event.target.value });
  };
  
  const logInUser = async (e)=>
  {
    e.preventDefault();
    
    await axios.post(
     'http://localhost:5000/login',
     {  email: form_values.email, password: form_values.password}
   ).then(resp =>  { 
                      if(resp.data ==="Succes")
                        { 
                          dispach(logIn())
                        }
                      else if(resp.data ==="BadEmail"){
                        setBadEmail(true);
                      }
                      else{
                        setBadPassword(true);
                      }
                    }
           );
   
   

  }
  
  const ChangeSignIn = () => {
    dispach(changeRegisterScreenn());
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispach(closeRegisterMessage());
    setBadEmail(false);
    setBadPassword(false);
   /* setOpen(false);*/
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar2}>
            <AirplayIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          LogIn
        </Typography>
        <form className={classes.form} noValidate onSubmit={logInUser}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChangeForm}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChangeForm}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link style={{cursor: 'pointer'}}  onClick={ChangeSignIn}>
                Haven't you had account? Sign up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          You have registered! Have a nice day!
        </Alert>
      </Snackbar>
      <Snackbar open={openBadEmail} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
         Bad email address!
        </Alert>
      </Snackbar>
      <Snackbar open={openBadPassword} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Bad password!
        </Alert>
      </Snackbar>
    </Container>
  );
}



function SignUp() {
  const classes = useStyles();
  const dispach = useDispatch();
  const [open, setOpen] = useState(false);
  
  const [form_values, setValues] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password : ''
  });
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
   /* setOpen(false);*/
  };
  const handleChangeForm = ( event ) => {
    setValues({ ...form_values, [event.target.name]: event.target.value });
  };

 
  const ChangeSignIn = () => {
    dispach(changeRegisterScreenn());
  } 

  const signUp = async ()=>{
    
    let response =
     await axios.post(
      'http://localhost:5000/register',
      { firstName : form_values.firstName, lastName: form_values.lastName, email: form_values.email, password: form_values.password}
    )
    return response;
  }
  const signUpForm = (e) => {
    e.preventDefault();
     signUp().then(resp => 
                      { 
                        if(resp.data === 'Succes')
                        { 
                          dispach(changeRegisterScreenn(resp.data));
                        }
                        else{
                          setOpen(true);
                        }
                      }
      );
    
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form}   onSubmit={signUpForm} >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={handleChangeForm}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
               
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={handleChangeForm}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
               
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChangeForm}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
               
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChangeForm}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link variant="body2" style={{cursor: 'pointer'}}  onClick={ChangeSignIn}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          This email address is exist!
        </Alert>
      </Snackbar>
    </Container>
  );
}



export default connect(changeRegisterScreenn)(LoginScreen);