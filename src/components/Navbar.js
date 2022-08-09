import React from 'react'

export default function Navbar() {
  return (
    <div className='header'>
      <div className='header-item'>
        <a href='/'>
          <strong>Blog Increíble</strong>
        </a>
      </div>
      <div className='header-item'>
        <a href='/login'>Inicio de Sesión</a>
      </div>
    </div>
  )
}
