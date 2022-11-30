import React from 'react'
import Nav from './Nav/Nav';
import "./Profile.scss";

const Profile = () => {
  return (
    <>
      <div className="user__profile">
        <div className="banner">
          <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg" alt="banner" />
        </div>
        <div className="user__image">
          <img src="https://res.cloudinary.com/ghazni/image/upload/v1646637426/m_jvhkfn.jpg" alt="user" />
        </div>
        <div className="user__details">
          <h1>Milad Amiri</h1>
          <p>@miladamiri</p>
        </div>
      </div>
    <Nav/>
    </>
  )
}

export default Profile;