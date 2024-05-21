import React from 'react'

import QuoraBox from './quoraBox'

import Post from './post'

import "./CSS/feed.css"


const Feed = () => {
  return (
    <div className="feed">
      <QuoraBox/>
      <Post/>

      <Post/>
      <Post/>
      <Post/>
      <Post/>

      

     

      
    </div>
  )
}

export default Feed