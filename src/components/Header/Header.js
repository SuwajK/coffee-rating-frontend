import React, { useContext } from 'react'
import User from '../User'
import './header.css'

import { UserContext } from '../../contexts/UserContextProvider'
import Menu from '../Menu/Menu'

const Header = () => {

  const {id, token, username} = useContext(UserContext)

  return (

    <div className='header'>
      <div className='header__logo'>Coffee Ratings</div>
        <Menu/>
         <User id={id} token={token} username={username}/>
    </div>

  )
}

export default Header