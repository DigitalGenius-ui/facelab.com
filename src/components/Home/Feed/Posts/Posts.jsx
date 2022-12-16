import React, { useEffect, useState } from 'react';
import "./Posts.scss";
import SinglePost from './SinglePost/SinglePost';
// import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../../../firbase/firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    const postRef = query(collection(db, "posts"), orderBy("time", 'desc'))
    onSnapshot(postRef, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({
            id : doc.id,
            ...doc.data()
        })))
        setLoading(false)
      })
  },[])
  
  if(loading) return "Loading..."
  
  return (
    <>
      {!loading && posts.map((post) => (
        <SinglePost
          key={post.id}
          post={post}
        />
      ))}
    </>
  )
}

export default Posts