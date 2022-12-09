import FitbitIcon from '@mui/icons-material/Fitbit';
import "./SignUp.scss"
import { Button, FormControl, TextField } from '@mui/material';
import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';

const SignUp = () => {
    return (
      <div className="auth__container">
          <h1 className="title">Sign Up</h1>
          <FormControl className="form" fullWidth>
              <div className="user">
                 <TextField type="text" id="outlined-basic" label="FirstName" size='small'/>
                 <TextField type="text" id="outlined-basic" label="LastName" size='small'/>
              </div>
              <div className="user">
                 <TextField type="text" id="outlined-basic" label="UserName" size='small'/>
                 <TextField type="email" id="outlined-basic" label="Email" size='small'/>
              </div>
              <TextField type="password" id="outlined-basic" label="Password" size='small'/>
              <TextField type="password" id="outlined-basic" label="Re-Password" size='small'/>
              <Button variant='contained' color='primary'>Submit</Button>
          </FormControl>
          <Button 
          style={{marginTop:"0.7rem"}}
          variant='contained' color='info' fullWidth
          startIcon={<GoogleIcon/>}>Sign Up With Google</Button>
      </div>
  )
}

export default SignUp
