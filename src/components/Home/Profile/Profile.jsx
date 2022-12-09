import React, { useState } from 'react'
import Nav from './Nav/Nav';
import "./Profile.scss";
import FoundationIcon from '@mui/icons-material/Foundation';
import WindowIcon from '@mui/icons-material/Window';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import CardMembershipIcon from '@mui/icons-material/CardMembership';

const Profile = () => {
  const [selected, setSelected] = useState("Home");
  return (
    <div className="container">
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
        <div className="navbar">
          <Nav 
            nav  = {<FoundationIcon/>}
            path = {"/"}
            name = {"Home"}
            selected = {selected}
            setSelected = {setSelected}
            />
          <Nav 
            nav  = {<WindowIcon/>}
            path = {"/"}
            name = {"Find Professionals"}
            selected = {selected}
            setSelected = {setSelected}
            />
          <Nav 
            nav  = {<NotificationsNoneIcon/>}
            path = {"/notification"}
            name = {"Notification"}
            selected = {selected}
            setSelected = {setSelected}
            />
          <Nav 
            nav  = {<MailOutlineIcon/>}
            path = {"/message"}
            name = {"Message"}
            selected = {selected}
            setSelected = {setSelected}
            />
          <Nav 
            nav  = {<PermIdentityIcon/>}
            path = {"/profile"}
            name = {"Profile"}
            selected = {selected}
            setSelected = {setSelected}
            />
          <Nav 
            nav  = {<StorefrontIcon/>}
            path = {"/Promotions"}
            name = {"Promotions"}
            selected = {selected}
            setSelected = {setSelected}
            />
          <Nav 
            nav  = {<PersonIcon/>}
            path = {"/professional"}
            name = {"Professional Profile"}
            selected = {selected}
            setSelected = {setSelected}
            />
          <Nav 
            nav  = {<CardMembershipIcon/>}
            path = {"/subscription"}
            name = {"Subscription"}
            selected = {selected}
            setSelected = {setSelected}
            />
        </div>
    </div>
  )
}

export default Profile;