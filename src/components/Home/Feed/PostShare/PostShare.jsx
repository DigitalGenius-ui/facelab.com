import React from 'react';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import "./PostShare.scss";

const PostShare = () => {
  return (
    <div className="share__post">
        <div className="flex">
          <div className="post__left">
            <img src="https://res.cloudinary.com/ghazni/image/upload/v1646637426/m_jvhkfn.jpg" alt="user" />
          </div>
          <div className="post__right">
            <div className="input">
            <textarea cols="10" rows="3" placeholder='Start making your post'></textarea>
            </div>
          </div>
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
      </div>
  )
}

export default PostShare;