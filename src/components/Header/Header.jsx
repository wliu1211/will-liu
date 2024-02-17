import React from 'react'
import './Header.css'



function Header() {
  return (
    <nav className="header">
        <div className="name-init-container">
            <h4>Will Liu</h4>
        </div>
        <div className="header-item-container">
            <a href="#about">About</a>
            <a href="#skills">Experience/Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
    </nav>
  )
}

export default Header