import React from 'react'
import "./SingleMessage.scss";

const SingleMessage = (props) => {
  const {id, name, image, text, isActive, newMessage} = props.user
  return (
    <div className="user__messages">
        <div className="message">
          <div className="message__image">
            <img src={image} alt="user" />
            <span className={isActive ? "green" : ""}></span>
          </div>
          <div className="user__detail">
            <h1 className={newMessage ? "newMessage" : ""}>{name}</h1>
            <p className={newMessage ? "newMessage" : ""}>{text}</p>
          </div>
        </div>
    </div>
  )
}

export default SingleMessage