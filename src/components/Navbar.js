import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div className='header'>
      <div className='header-item'>
        <Link to='/'>
          <strong>Blog Increíble</strong>
        </Link>
      </div>
      <div className='header-item'>
        <a href='/login'>Inicio de Sesión</a>
        <button onClick={toggleTheme}>
          {theme === 'light' ? 'Theme:light' : 'Theme:dark'}
        </button>
      </div>
    </div>
  )
}
