import React, { useState } from 'react';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import "./Chat.scss";
import SingleMessage from './SingleMessage/SingleMessage';

const Chat = () => {
  let data = [
    {
      id : 1,
      name : "John Smith",
      image : "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
      text : "Okay I will let you...",
      isActive:false,
      newMessage : false
    },
    {
      id : 2,
      name : "Sarah Jack",
      image : "https://img.freepik.com/free-photo/portrait-young-woman-with-passport_1258-48213.jpg",
      text : "I think I am going to...",
      isActive:true,
      newMessage : true
    },
    {
      id : 3,
      name : "James Paul",
      image : "https://img.freepik.com/free-photo/photo-as-passport-young-man-with-stylish-haircut_295783-869.jpg?w=2000",
      text : "I got what you said...",
      isActive:false,
      newMessage : false
    }
  ]
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
      {data.map((user) => {
        return <SingleMessage user={user} key={user.id}/>
      })}
    </div>
  )
}

export default Chat