import React from 'react'
import './navbar.css'
import p_icon from '../../assests/p_icon.png'
import contact from '../../assests/contact.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className="navbarmenu">
      <img src={p_icon} alt="p_icon" className="logo"/>
      <div className="desktopmenu">
        <Link className="desktopmenulistitem" to="intro" smooth={true} duration={80}>Home</Link>
        <Link className="desktopmenulistitem" to="skills" smooth={true} duration={80}>Skills</Link>
        <Link className="desktopmenulistitem">Projects</Link>
        <Link className="desktopmenulistitem">Profiles</Link>
      </div>
      <button type="button" className="desktopmenubtn">
        <img src={contact} alt="->"className="desktopmenuimg"/> Contact Me</button>
    </nav>
  )
}

export default Navbar;
