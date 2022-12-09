import React from 'react';
import "./Header.scss";
import FitbitIcon from '@mui/icons-material/Fitbit';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className='header'>
        <div className="content">
            <div className="logo">
                <FitbitIcon className='logo__icon'/>
                <h1>facelab</h1>
            </div>
            <div className="search">
                <input type="text" placeholder='search..'/>
                <span><SearchIcon/></span>
            </div>
        </div>
    </div>
  )
}

export default Header