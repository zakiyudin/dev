import React from 'react'
import { Link } from 'react-router-dom'
import {
    FaSignInAlt,
    FaSignOutAlt,
    FaUserAlt,
} from 'react-icons/fa'

function Header() {
  return (
    <header className='header'>
        <div className='logo'>
            <Link to="/">Todo List</Link>
        </div>
        <ul>
            <li>
                <Link to="/login">
                    <FaSignInAlt /> Login
                </Link>
            </li>
            <li>
                <Link to="/register">
                    <FaUserAlt /> Register
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default Header