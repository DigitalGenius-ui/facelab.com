import React, { useState } from 'react';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import "./SinglePost.scss";
import { FaceLabContext } from '../../../../../context/Context';
import auth, { db } from '../../../../../firbase/firebase';
import { setDoc, collection, deleteDoc, doc, onSnapshot, addDoc } from 'firebase/firestore';
import { format } from 'timeago.js';
import { useEffect } from 'react';

const SinglePost = ({ post }) => {
  const [show, setShow] = useState(false);
  const { isAuth } = FaceLabContext();
  const [textLong, setTextLong] = useState(true);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState([]);
  
  const removePost = async () => {
    const remove = doc(collection(db, "posts"), post.id);
    try {
      await deleteDoc(remove);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    onSnapshot(collection(db, "posts", post.id, "likes"), (snapshot) => 
      setLikes(snapshot.docs)
    )
  },[db, post.id])

  useEffect(() =>
    setLiked(
      likes.findIndex((like) => (like.id === isAuth.uid)) !== -1
    ),
    [likes]
  );

  const likePost = async() => {
    if(liked){
      await deleteDoc(doc(db,"posts", post.id, "likes", isAuth.uid));
    } else{
      await setDoc(doc(db, "posts", post.id, "likes", isAuth.uid), {
        name : isAuth.displayName || isAuth.email
      });
    }
  }

  return (
    <div className='post'>
      <div className="post__head">
        <div className="user__image">
          <img src={post.author.image || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="user" />
        </div>
        <div className="user__details">
          <div className="detail">
            <h1>{post.author.name || post.author.email}</h1>
            <p className='time'><PublicOutlinedIcon className="icon"/>{format(post.time)}</p>
          </div>
          <p className='follow'>Following</p>
        </div>
        <span 
        onClick={() => setShow(!show)}
        className='dot'><MoreHorizOutlinedIcon/></span>
        {/* user feature  */}
        {show && (
          isAuth && post.author.id === auth.currentUser.uid ? (
            <div className="user__features">
              <div className='user__btn'
              onClick={removePost}
              ><DeleteIcon className='icon'/>Remove Post</div>
              <div className='user__btn'><ModeEditIcon className='icon'/> Edit Post</div>
              {/* <div className='user__btn'><SendOutlinedIcon className='icon'/> send messages</div> */}
            </div>
          ) : (
            <div className="user__features">
              <div className='user__btn'><ReportOutlinedIcon className='icon'/>report post</div>
              <div className='user__btn'><PersonRemoveOutlinedIcon className='icon'/> unfollow</div>
              <div className='user__btn'><SendOutlinedIcon className='icon'/> send messages</div>
            </div>
          )
        )}
      </div>
      <div className="user__text">
        <p className='post__text'>{`${textLong ? post.text.substring(0,220) : post.text}`}
        {post.text.length > 220 && 
        <button 
        className='textLong'
        onClick={() => setTextLong(!textLong)}>{textLong ? "...see more" : "see less"}</button>}</p>
      </div>
      {post.image && (
        <div className="post__image">
          <img src={post.image}/>
        </div>
      )}
      <div className="total__reactions">
        <div className="reaction">
          <ThumbUpOffAltOutlinedIcon className='icon'/>
          <p>{likes.length} <span>Likes</span></p>
        </div>
        <div className="reaction flex">
          <ChatBubbleOutlineOutlinedIcon className='icon'/>
          <p>1.6k <span>Comments</span></p>
        </div>
        <ShareOutlinedIcon className='icon'/>
      </div>
      <div className="reaction__buttons">
        <div 
        onClick={likePost}
        className={`button ${liked ? "liked" : ""}`}>
          <button>{liked ? <ThumbUpAltIcon className='icon'/> : <ThumbUpOffAltOutlinedIcon className='icon'/>} Like</button>
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