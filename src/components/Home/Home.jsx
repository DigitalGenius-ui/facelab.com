import React from 'react'
import Profile from "./Profile/Profile";
import Feed from "./Feed/Feed";
import Chat from './Chat/Chat';
import MailIcon from '@mui/icons-material/Mail';
import "./Home.scss";

const Home = () => {
  return (
    <div className='home'>
      <div className="left">
        <Profile/>
      </div>
      <div className="center">
        <Feed/>
      </div>
      <div className="right">
        <Chat/>
      </div>
      <span className="msg__span"><MailIcon className='message__icon'/></span>
    </div>
  )
}

export default Home