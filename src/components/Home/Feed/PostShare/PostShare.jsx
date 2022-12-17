import React, { useState } from "react";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import SendIcon from "@mui/icons-material/Send";
import "./PostShare.scss";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import auth, { db, storage } from "../../../../firbase/firebase";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { FaceLabContext } from "../../../../context/Context";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useRef } from "react";

const PostShare = () => {
  const [fileSelected, setFileSelected] = useState(null);
  const [shareInput, setShareInput] = useState("");
  const { setAlert, isAuth } = FaceLabContext();
  const imageRef = useRef(null);

  const sharePost = async () => {
    if (shareInput === "") {
      setAlert({
        type: "error",
        message: "Please Write Something",
        open: true,
      });
      return;
    }

    try {
      setShareInput("");
      setFileSelected(false);
      const docRef = await addDoc(collection(db, "posts"), {
        text: shareInput,
        time: Date.now(),
        author: {
          email: auth.currentUser.email,
          id: auth.currentUser.uid,
          name: auth.currentUser.displayName,
          image: auth.currentUser.photoURL,
        },
      });

      const imageRef = ref(storage, `posts/${docRef.id}/image`);
      if (fileSelected) {
        await uploadString(imageRef, fileSelected, "data_url").then(
          async () => {
            const downloadURL = await getDownloadURL(imageRef);
            await updateDoc(doc(db, "posts", docRef.id), {
              image: downloadURL,
            });
          }
        );
      }
      setAlert({
        type: "success",
        message: "New Post Has Been Added",
        open: true,
      });
    } catch (error) {
      setAlert({
        type: "error",
        message: error.message,
        open: true,
      });
    }
  };

  const addImage = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setFileSelected(readerEvent.target.result);
    };
  };

  return (
    <div className="share__post">
      <div className="flex">
        <div className="post__left">
          <img
            src={
              isAuth.photoURL ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="user"
          />
        </div>
        <div className="post__right">
          <div className="input">
            <textarea
              value={shareInput}
              onChange={(e) => setShareInput(e.target.value)}
              cols="10"
              rows="3"
              placeholder="Start making your post"
            ></textarea>
          </div>
        </div>
        <Button
          variant="contained"
          className="send__btn"
          size="small"
          onClick={sharePost}
        >
          <SendIcon className="send" />
        </Button>
      </div>
      <div className="btn__container">
        <input
          ref={imageRef}
          onChange={addImage}
          type="file"
          className="input"
        />
        <div onClick={() => imageRef.current.click()} className="btn">
          <ImageOutlinedIcon className="post__icons orang" />
          <p>
            <span>upload</span> image
          </p>
        </div>

        <input type="file" id="file" className="input" />
        <div className="btn">
          <UploadFileOutlinedIcon className="post__icons orang" />
          <p>
            <span>upload</span> file
          </p>
        </div>

        <input type="file" id="video" className="input" />
        <div className="btn">
          <VideocamOutlinedIcon className="post__icons orang" />
          <p>
            <span>upload</span> video
          </p>
        </div>
      </div>

      {fileSelected && (
        <div className="upload__image">
          <span onClick={() => setFileSelected(false)}>
            <CloseIcon />
          </span>
          <img src={fileSelected} alt="image" />
        </div>
      )}
    </div>
  );
};

export default PostShare;
