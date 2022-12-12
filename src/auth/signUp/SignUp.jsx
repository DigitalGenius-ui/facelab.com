import FitbitIcon from "@mui/icons-material/Fitbit";
import "./SignUp.scss";
import { Button, FormControl, TextField } from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import auth from "../../firbase/firebase";
import { Link, useNavigate } from "react-router-dom";
import { FaceLabContext } from "../../context/Context";

const SignUp = () => {
  const [upEmail, setUpEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const { setAlert, loading, setLoading } = FaceLabContext();
  const navigate = useNavigate();

  const signUp = async () => {
    setLoading(true);
    if (password !== rePassword) {
      setAlert({
        type : "error", 
        message : "Passwords do not Matches",
        open : true
      });
      setLoading(false);
      return;
    }
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        upEmail,
        password,
        );
        localStorage.setItem("isAuth", true)
        navigate("/");
        setLoading(false);
        setAlert({
          type : "success", 
          message : "Welcome to Facelab " + result.user.email,
          open : true
        })
    } catch (error) {
      setLoading(false);
      setAlert({
        type : "error", 
        message : error.message,
        open : true
      })
    }
  };
  return (
    <div className="auth__container">
      <h1 className="title">Sign Up</h1>
      <FormControl className="form" fullWidth>
        <TextField
          onChange={(e) => setUpEmail(e.target.value)}
          value={upEmail}
          type="email"
          id="outlined-basic"
          label="Email"
          size="small"
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          id="outlined-basic"
          label="Password"
          size="small"
        />
        <TextField
          onChange={(e) => setRePassword(e.target.value)}
          value={rePassword}
          type="password"
          id="outlined-basic"
          label="Re-Password"
          size="small"
        />
        <Button
          onClick={signUp}
          className={`btn ${loading ? "load" : ""}`}
          variant="outlined"
          color="primary"
        >
          {loading && <span className="loading"></span>} Sign Up
        </Button>
      </FormControl>
      <Button
        style={{ marginTop: "0.7rem" }}
        variant="outlined"
        color="secondary"
        fullWidth
        startIcon={<GoogleIcon />}
      >
        Sign Up With Google
      </Button>
      <div className="signIn">
        <Link to='/signIn'>Sign In Here</Link> <span>if you already have an account.</span>
      </div>
    </div>
  );
};

export default SignUp;
