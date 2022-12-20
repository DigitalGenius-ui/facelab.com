import React, { useState } from 'react';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { format } from 'timeago.js';
import "./Comments.scss";

const Comments = ({ comment, removeComment }) => {

  return (
    <div className="comments">
        <div className="comment">
          <img src={comment.image} alt="profile" />
          <div className="comment__body">
            <h1>{comment.name}<span>{format(comment.date)}</span></h1>
            <p>{comment.comment}</p>
            <div className="reactions">
              <span className='like'><ThumbUpOffAltIcon className='icon'/> 1</span>
              <span className='reply'>reply</span>
              <button
              onClick={removeComment}
              >remove</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Comments