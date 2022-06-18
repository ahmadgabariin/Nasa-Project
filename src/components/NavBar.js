import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='nav-bar'>
          <Link to={`/`}>Home</Link>
          <Link to={`/search`}>Search</Link>
          <Link to={`/favourites`}>Favourites</Link>
    </div>
  )
}

export default NavBar