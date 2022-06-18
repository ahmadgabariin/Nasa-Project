import React, { useEffect, useState } from 'react'
import axios from 'axios'
import StoryOfTheDay from './StoryOfTheDay'
function Home() {

  const [storyOfTheDay , setStoryOfTheDay] = useState(undefined)

  useEffect( function () {
    axios.get('http://localhost:4000/pictureOfTheDay')
    .then( data => setStoryOfTheDay(data.data)  )
    .catch( error => console.log(error))
  } , [])

  return (
    <div className='home-container'>
      {storyOfTheDay ? <StoryOfTheDay story = {storyOfTheDay}/> : null}
    </div>
  )
}

export default Home