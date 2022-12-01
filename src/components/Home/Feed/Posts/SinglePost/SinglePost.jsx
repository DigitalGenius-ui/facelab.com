import React, { useState } from 'react';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

import "./SinglePost.scss";

const SinglePost = () => {
  const [show, setShow] = useState(false);

  return (
    <div className='post'>
      <div className="post__head">
        <div className="user__image">
          <img src="https://res.cloudinary.com/ghazni/image/upload/v1646637426/m_jvhkfn.jpg" alt="user" />
        </div>
        <div className="user__details">
          <div className="detail">
            <h1>Milad Amiri</h1>
            <p className='time'><PublicOutlinedIcon className="icon"/> 2 hours ago</p>
          </div>
          <p className='follow'>Following</p>
        </div>
        <span 
        onClick={() => setShow(!show)}
        className='dot'><MoreHorizOutlinedIcon/></span>
        {/* user feature  */}
        {show && <div className="user__features">
          <div className='user__btn'><ReportOutlinedIcon className='icon'/> report post</div>
          <div className='user__btn'><PersonRemoveOutlinedIcon className='icon'/> unfollow</div>
          <div className='user__btn'><SendOutlinedIcon className='icon'/> send messages</div>
        </div>}
      </div>
      <div className="user__text">
        <p className='post__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Illo, error beatae. Cum labore exercitationem fugiat. 
          Molestiae suscipit magni voluptatem, quam dicta sed. 
          Asperiores voluptatum.</p>
      </div>
      <div className="post__image">
        <img src="https://images.pexels.com/photos/15286/pexels-photo.jpg?cs=srgb&dl=pexels-luis-del-r%C3%ADo-15286.jpg&fm=jpg" alt="post" />
      </div>
      <div className="total__reactions">
        <div className="reaction">
          <ThumbUpOffAltOutlinedIcon className='icon'/>
          <p>1.6k <span>Likes</span></p>
        </div>
        <div className="reaction flex">
          <ChatBubbleOutlineOutlinedIcon className='icon'/>
          <p>1.6k <span>Comments</span></p>
        </div>
        <ShareOutlinedIcon className='icon'/>
      </div>
      <div className="reaction__buttons">
        <div className="button">
          <button><ThumbUpOffAltOutlinedIcon className='icon'/> Like</button>
        </div>
        <div className="button flex">
          <button><ChatBubbleOutlineOutlinedIcon className='icon'/> Comment</button>
        </div>
        <div className="button">
          <button><ShareOutlinedIcon className='icon'/> Share</button>
        </div>
      </div>
    </div>
  )
}

export default SinglePost