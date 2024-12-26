import React from 'react'
import './navbar.css'
import p_icon from '../../assests/p_icon.svg'
import github from '../../assests/github.jpg'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className="navbarmenu">
      <div className="p_logo">
      <img src={p_icon} alt="p_icon" className="logo"/>Portfolio
      </div>
      <div className="desktopmenu">
        <Link className="desktopmenulistitem" to="intro" smooth={true} duration={80}>Home</Link>
        <Link className="desktopmenulistitem" to="skills" smooth={true} duration={80}>Skills</Link>
        <Link className="desktopmenulistitem" to="projects" smooth={true} duration={80}>Projects</Link>
        <Link className="desktopmenulistitem" to="profiles" smooth={true} duration={80}>Profiles</Link>
        <Link className="desktopmenulistitem">Contact</Link>
      </div>
      <a href="https://github.com/Pushpa-Harshitha05" target="_blank" rel="noopener noreferrer" className='desktopmenubtn'>
      <img src={github} alt="->"className="desktopmenuimg"/>GitHub</a>
    </nav>
  )
}

export default Navbar;
