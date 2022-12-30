import React from 'react'
import './Header.css'
import logo from '../assets/images/logo_vlof.png'

export const Header = () => {
  return (
    <header>
        <div>
            <img src={logo} className="logo-header" alt='logo-header'></img>
        </div>
        <div className='menu'>
            <nav>
                <a href='/'>Blog</a>
                <a href='/'>Recomendaciones</a>
                <a href='/'>Portafolio</a>
            </nav>
        </div>
    </header>
  )
}
