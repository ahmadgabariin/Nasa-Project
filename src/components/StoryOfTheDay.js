import React from 'react'

function StoryOfTheDay(props) {
    const storyOfTheDay = props.story
    const youtubeURL = `https://www.youtube.com/watch?v`
    return (
        <div className='story-of-the-day'>
        <h3>{storyOfTheDay.title}</h3>
        {storyOfTheDay.url.includes(youtubeURL)
         ? <iframe className='video-of-the-day' src={storyOfTheDay.url}></iframe>
         : <img src={storyOfTheDay.url} className={`img-of-the-day`}></img> }
        <p>{storyOfTheDay.explanation ? storyOfTheDay.explanation : storyOfTheDay.description}</p>
    </div>
  )
}

export default StoryOfTheDay