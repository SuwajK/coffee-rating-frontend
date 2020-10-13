import React, { useContext } from 'react'
import User from '../User'
import './header.css'

import { UserContext } from '../../contexts/UserContextProvider'

const Header = () => {

  const {id, token, username} = useContext(UserContext)

  return (

    <div className='header'>
      <div className='logo'>Coffee Ratings</div>
      <div className='spacing'> </div>
      <nav className='nav'>
        <ul>
          <li><a href='./#'>Rating List</a></li>
          <li><a href='./#'>Coffee List</a></li>
          <li><a href='./#'>Coffee Machines List</a></li>
          <li><a href='./#'>Grinders List</a></li>
        </ul>
      </nav>
        <User id={id} token={token} username={username}/>
    </div>

  )
}

export default Header