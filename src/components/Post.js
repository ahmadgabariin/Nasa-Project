import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

function Post(props) {
    const post = props.post
     
    const likePost = (event) => {
        if (event.target.getAttribute(`name`) === `dislike`) {
            props.DeleteFromFavoruite(post.id)
        }
        else {
            props.addToFavoruite(post)
        }
    }

    return (
        <div className='post'>
            <Link to={`/Details`} state ={post}>
                <div className='img-title' >
                    <span>{post.title}</span>
                    <img src={post.url} className={`img-post`}></img>
                </div>
            </Link>
            <div>
                <button onClick={likePost} className='btn-like' name = {post.isLiked ? `dislike` : `like`}>
                <i  name = {post.isLiked ? `dislike` : `like`}  className={post.isLiked ? `fa-solid fa-thumbs-down`:`fa-solid fa-thumbs-up`}></i>
                </button>
            </div>
        </div>
    )
}

export default Post