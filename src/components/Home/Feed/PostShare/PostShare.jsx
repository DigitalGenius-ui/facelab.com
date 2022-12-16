import React, {useState} from 'react';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import SendIcon from '@mui/icons-material/Send';
import "./PostShare.scss";
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import auth, {db} from "../../../../firbase/firebase";
import { addDoc, collection } from 'firebase/firestore';
import { FaceLabContext } from '../../../../context/Context';

const PostShare = () => {
  const [fileSelected, setFileSelected] = useState(false);
  const [shareInput, setShareInput] = useState("");
  const { setAlert } = FaceLabContext();

  const sharePost = async () => {
    if(shareInput === ""){
      setAlert({
        type: "error",
        message : "Please Write Something",
        open : "true"
      });
      return;
    }
    try {
      setShareInput("")
      await addDoc(collection(db, "posts"), {
        text : shareInput,
        time : new Date(),
        author : {email : auth.currentUser.email, id : auth.currentUser.uid}
      });
      setAlert({
        type: "success",
        message : "New Post Has Been Added",
        open : "true"
      });
    } catch (error) {
      setAlert({
        type: "error",
        message : error.message,
        open : "true"
      });
    }
  }

  return (
    <div className="share__post">
        <div className="flex">
          <div className="post__left">
            <img src="https://res.cloudinary.com/ghazni/image/upload/v1646637426/m_jvhkfn.jpg" alt="user" />
          </div>
          <div className="post__right">
            <div className="input">
            <textarea 
            value={shareInput}
            onChange={(e) => setShareInput(e.target.value)}
            cols="10" rows="3" placeholder='Start making your post'></textarea>
            </div>
          </div>
          <Button 
            variant='contained'
            className='send__btn'
            size='small'
            onClick={sharePost}
            ><SendIcon className='send'/>
          </Button>
        </div>
          <div className="btn__container">
            <input type="file" id='img' className='input'/>
              <label className='btn' htmlFor="img">
                <ImageOutlinedIcon className='post__icons orang'/>
                <p><span>upload</span> image</p>
              </label>
            <input type="file" id='file' className='input'/>
            <label className='btn' htmlFor="file">
                <UploadFileOutlinedIcon className='post__icons orang'/>
                <p><span>upload</span> file</p>
            </label>
            <input type="file" id='video' className='input'/>
            <label className='btn' htmlFor="video">
                <VideocamOutlinedIcon className='post__icons orang'/>
                <p><span>upload</span> video</p>
            </label>
          </div>
          {fileSelected && (
            <div className="upload__image">
              <span><CloseIcon/></span>
              <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg" alt="image" />
            </div>
          )}
      </div>
  )
}

export default PostShare;