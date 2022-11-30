import React from 'react';
import Filters from './Filters/Filters';
import Posts from './Posts/Posts';
import PostShare from './PostShare/PostShare';

const Feed = () => {
  return (
    <div className='feed'>
      <PostShare/>
      <Filters/>
      <Posts/>
    </div>
  )
}

export default Feed