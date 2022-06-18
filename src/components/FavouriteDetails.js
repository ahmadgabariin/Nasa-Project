import React from 'react'
import { useLocation} from 'react-router-dom'
import StoryOfTheDay from './StoryOfTheDay'
import { useNavigate } from "react-router-dom"

function FavouriteDetails(props) {
  const post = useLocation().state 
  let navigate = useNavigate();

  return (
    <div className='home-container'>
      <StoryOfTheDay story = {post}/>
      <div className='btns-like-back'>
        <button  className='btn-like' name = {post.isLiked ? `dislike` : `like`}>
          <i className={post.isLiked ? `fa-solid fa-thumbs-down`:`fa-solid fa-thumbs-up`}></i>
        </button>
        <button className='btn-back' onClick={()=> navigate(-1)}><i className="fa-solid fa-left-long"></i></button>
      </div>
      
    </div>
  )
}

export default FavouriteDetails