import React, { useState } from 'react';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import "./Chat.scss";
import SingleMessage from './SingleMessage/SingleMessage';

const Chat = () => {
  const [isActive, setIsActive] = useState(false);
  const [newMessage, setNewMessage] = useState(false);
  return (
    <div className='user__chat'>
      <div className="chat__head">
        <div className="chat__image">
          <img src="https://res.cloudinary.com/ghazni/image/upload/v1646637426/m_jvhkfn.jpg" alt="user" />
        </div>
        <div className="icons">
          <span><BorderColorOutlinedIcon className='icon edit'/></span>
          <span><MoreHorizOutlinedIcon className='icon'/></span>
        </div>
      </div>
      <SingleMessage
        isActive ={isActive}
        newMessage ={newMessage}
      />
      <SingleMessage
        isActive ={true}
        newMessage ={true}
      />
      <SingleMessage
        isActive ={isActive}
        newMessage ={newMessage}
      />
    </div>
  )
}

export default Chat