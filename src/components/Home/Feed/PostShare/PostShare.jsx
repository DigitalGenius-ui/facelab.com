import React from 'react';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import "./PostShare.scss";


const Button = ({text, icon}) => {
    return (
      <div className="btn">
        <span>{icon}</span>
        <p>{text}</p>
      </div>
    );
}

const PostShare = () => {
  return (
    <div className="share__post">
        <div className="post__left">
          <img src="https://res.cloudinary.com/ghazni/image/upload/v1646637426/m_jvhkfn.jpg" alt="user" />
        </div>
        <div className="post__right">
          <div className="input">
          <textarea cols="10" rows="3" placeholder='Start making your post'></textarea>
          </div>
          <div className="btn__container">
            <Button
              icon={<ImageOutlinedIcon/>}
              text ="upload image"
              />
            <Button
              icon={<UploadFileOutlinedIcon/>}
              text ="upload file"
            />
            <Button
              icon={<VideocamOutlinedIcon/>}
              text ="upload video"
            />
          </div>
        </div>
      </div>
  )
}

export default PostShare