import React from 'react'
import './header.css'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'
import Menu from '../Menu/Menu'

const Header = () => {


  return (

    <div className='header'>
      <Router>
        <Link to='/' className='header__logo'>Coffee Ratings</Link>
      </Router>
      <Menu/>
    </div>

  )
}

export default Header