import React from 'react'
import "./SingleMessage.scss";

const SingleMessage = ({isActive, newMessage}) => {
  return (
    <div className="user__messages">
        <div className="message">
          <div className="message__image">
            <img src="https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg" alt="user" />
            <span className={isActive ? "green" : ""}></span>
          </div>
          <div className="user__detail">
            <h1 className={newMessage ? "newMessage" : ""}>John Smith</h1>
            <p className={newMessage ? "newMessage" : ""}>Okay I will to to you...</p>
          </div>
        </div>
    </div>
  )
}

export default SingleMessage