import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import Post from './Post'
import SearchBar from './SearchBar'

function Search() {
  const [posts , setPosts] = useState([])
  const searchKeyWord = useRef(``)
  const port = 4000

  const addToFavoruite = (post) => {
    axios({method: 'post', url: 'http://localhost:4000/favourites',data:post})
    .then (() => getPosts(searchKeyWord.current))
    .catch(error => console.log(error))
  }

  const DeleteFromFavoruite = (postID) => {
    axios({method: `delete`, url:`http://localhost:4000/favourites/${postID}`})
    .then ( () => getPosts(searchKeyWord.current))
    .catch( error => console.log(error))
  }

  const getPosts = (keyWord) => {
    searchKeyWord.current = keyWord
    axios.get(`http://localhost:${port}/search/${keyWord}`)
    .then( data => setPosts(data.data))
    .catch( error => console.log(error))
  }  

  return (
    <div className='search-container'>
      <SearchBar getPosts = {getPosts} />
      <div className='body-grid'>
        { posts.map( post => 
          <Post post = {post}  key = {post.id} addToFavoruite = {addToFavoruite} DeleteFromFavoruite = {DeleteFromFavoruite}  />) 
        }
      </div>
    </div>
  )
}

export default Search