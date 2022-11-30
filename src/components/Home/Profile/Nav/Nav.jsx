import React from 'react'
import FoundationIcon from '@mui/icons-material/Foundation';
import WindowIcon from '@mui/icons-material/Window';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import CardMembershipIcon from '@mui/icons-material/CardMembership';

import "./Nav.scss"

const Nav = () => {
  return (
    <div className="sticky">
        <div className="navigation">
            <div className="nav active">
                <span><FoundationIcon/></span>
                <p>Home</p>
            </div>
            <div className="nav">
                <span><WindowIcon/></span>
                <p>Find Professionals</p>
            </div>
            <div className="nav">
                <span><NotificationsNoneIcon/></span>
                <p>Notification</p>
            </div>
            <div className="nav">
                <span><MailOutlineIcon/></span>
                <p>Message</p>
            </div>
            <div className="nav">
                <span><PermIdentityIcon/></span>
                <p>Profile</p>
            </div>
            <h1>Professional</h1>
            <div className="nav">
                <span><StorefrontIcon/></span>
                <p>Promotions</p>
            </div>
            <div className="nav">
                <span><PersonIcon/></span>
                <p>Professional Profile</p>
            </div>
            <div className="nav">
                <span><CardMembershipIcon/></span>
                <p>Subscription</p>
            </div>
        </div>
    </div>
  )
}

export default Nav