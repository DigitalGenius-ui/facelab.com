import React from 'react';
import FitbitIcon from '@mui/icons-material/Fitbit';
import "./SignIn.scss"
import { Button, FormControl, TextField } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firbase/firebase";
import { FaceLabContext } from '../../context/Context';


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {loading, setLoading, setAlert} = FaceLabContext();
  const navigate = useNavigate();

  const signIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
      console.log(result.user.email);
      localStorage.setItem("isAuth", true);
      setLoading(false);
      setAlert({
        type : "success",
        message : result.user.email + " has logged in successfully",
        open : true,
      })
    } catch (error) {
      setAlert({
        type : "error",
        message : error.message,
        open : true,
      })
      setLoading(false);
    }
  }

  return (
    <div className="auth__container">
        <h1 className="title">Sign In</h1>
        <FormControl className="form" fullWidth>
            <TextField 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email" id="outlined-basic" label="Email" size='small'/>
            <TextField 
             value={password}
             onChange={(e) => setPassword(e.target.value)}
            type="password" id="outlined-basic" label="Password" size='small'/>
            <Button 
            onClick={signIn}
            className={`btn ${loading ? "load" : ""}`} 
            variant='outlined' color='primary'>{loading && <span className='loading'></span>} Login</Button>
        </FormControl>
        <Button 
          style={{marginTop:"0.7rem"}}
          variant='outlined' color='secondary' fullWidth
          startIcon={<GoogleIcon/>}>Sign In With Google</Button>
        <div className="signUp">
            <Link to="/signUp">Click Here</Link> <span>if you don't have an account yet.</span>
        </div>
    </div>
  )
}

export default SignIn