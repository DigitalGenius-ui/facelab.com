import React from 'react'
import Profile from "./Profile/Profile";
import Feed from "./Feed/Feed";
import Chat from './Chat/Chat';
import "./Home.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

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
    </div>
  )
}

export default Home