import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Post from './Post'

function Favourites() {
  const port = 4000
  const [favourites , setFavourites] = useState([])

  const getFavourites = () => {
    axios.get(`http://localhost:${port}/favourites`)
    .then  (data => setFavourites(data.data))
    .catch (error => console.log(error))
  }

  const DeleteFromFavoruite = (postID) => {
    axios({method: `delete`, url:`http://localhost:4000/favourites/${postID}`})
    .then ( () =>getFavourites())
    .catch( error => console.log(error))
  }

  useEffect(function () {
    getFavourites()
  } 
  , [])

  return (
    <div>
      <span className='favourites-title'>Favourites : </span>
      <div className='body-grid'>
        {favourites.map(post => <Post post = {post} key={post.id} DeleteFromFavoruite = {DeleteFromFavoruite} />)}
      </div>
    </div>
  )
}

export default Favourites