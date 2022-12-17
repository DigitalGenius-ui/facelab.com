import React, { useEffect, useState } from 'react';
import "./Posts.scss";
import SinglePost from './SinglePost/SinglePost';
import { db } from '../../../../firbase/firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import FitbitIcon from '@mui/icons-material/Fitbit';
import { FaceLabContext } from '../../../../context/Context';

const Posts = () => {
  const {posts, setPosts} = FaceLabContext();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setLoad(true)
    const postRef = query(collection(db, "posts"), orderBy("time", 'desc'))
    onSnapshot(postRef, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({
            id : doc.id,
            ...doc.data()
        })))
        setLoad(false);
      })
  },[])
  
  if(load){
    return (
      <div className='load'>
        <div className="logo">
          <FitbitIcon className='logo__icon orang'/>
          <h1>facelab</h1>
        </div>
      </div>
    )
  }
  
  return (
    <>
      {!load && posts.map((post) => (
        <SinglePost
          key={post.id}
          post={post}
        />
      ))}
    </>
  )
}

export default Posts