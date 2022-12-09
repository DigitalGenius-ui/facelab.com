import React from 'react';
import FitbitIcon from '@mui/icons-material/Fitbit';
import "./SignIn.scss"
import { Button, FormControl, TextField } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="auth__container">
        <h1 className="title">Sign In</h1>
        <FormControl className="form" fullWidth>
            <TextField type="email" id="outlined-basic" label="Email" size='small'/>
            <TextField type="password" id="outlined-basic" label="Password" size='small'/>
            <Button variant='contained' color='primary'>Submit</Button>
        </FormControl>
        <Button 
          style={{marginTop:"0.7rem"}}
          variant='contained' color='info' fullWidth
          startIcon={<GoogleIcon/>}>Sign In With Google</Button>
        <div className="signUp">
            <Link to="/signUp">Click Here</Link> <span>if you don't have an account yet.</span>
        </div>
    </div>
  )
}

export default SignIn