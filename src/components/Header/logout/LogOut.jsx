import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import "./LogOut.scss"
import { Link, useNavigate } from 'react-router-dom';
import { FaceLabContext } from '../../../context/Context';
import { signOut } from "firebase/auth";
import auth from "../../../firbase/firebase";

const LogOut = () => {
  const { setIsAuth, setShow, setAlert } = FaceLabContext();
  const navigate = useNavigate();

  const logOut = () => {
    signOut(auth).then(() => {
      navigate("/login");
      localStorage.clear();
      setShow(false)
      setIsAuth(false);
      setAlert({
        type : "success", 
        message : "Logged Out Successfully",
        open : true, 
      })
    })
  }
  return (
    <div className="user__menu">
        <Link to="/profile">
            <div className="submenu">
              <span><PersonIcon className='icon'/></span>
              <p>Profile</p>
            </div>
        </Link>
        <div className="submenu"
        onClick={logOut}
        >
          <span><LogoutIcon className='icon'/></span>
          <p>Log Out</p>
        </div>
    </div>
  )
}

export default LogOut