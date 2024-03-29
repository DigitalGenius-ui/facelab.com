import React from 'react';
import "./Header.scss";
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import FitbitIcon from '@mui/icons-material/Fitbit';
import SearchIcon from '@mui/icons-material/Search';
import LogOut from './logout/LogOut';
import { FaceLabContext } from '../../context/Context';

const Header = () => {
  const {show, setShow, isAuth} = FaceLabContext();
  return (
    <div className='header'>
        <div className="content">
            <Link to="/">
              <div className="logo">
                <FitbitIcon className='logo__icon'/>
                <h1>facelab</h1>
              </div>
            </Link>
            <div className="header__right">
              <div className="search">
                <input type="text" placeholder='search..'/>
                <span><SearchIcon/></span>
              </div>
              <div className="header__user">
                <Avatar 
                onClick={() => setShow(!show)}
                className='avatar'
                alt="this is the use image" 
                src={isAuth ? isAuth.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png" : "https://cdn-icons-png.flaticon.com/512/149/149071.png"}/>
                <div className="logOut">
                  {isAuth && show && <LogOut/>}
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header
