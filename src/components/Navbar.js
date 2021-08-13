import React from 'react'
import logo from '../img/logo2.png'

import {Link, animateScroll as scroll} from 'react-scroll'
function Navbar() {
    return (
  <nav id="navbar">
        <Link to="" onClick={()=> scroll.scrollToTop()}>
              <img src={logo} alt="" className="logo"/>
        </Link>
    <ul>
      <li><Link to="/" smooth={true} duration={1000} onClick={()=> scroll.scrollToTop()}>Home</Link></li>
      <li><Link to="about" smooth={true} duration={1000}>About</Link></li>
      <li><Link to="technologies" smooth={true} duration={1000}>Technologies</Link></li>
      <li><Link to="contact" smooth={true} duration={1000}>Contact</Link></li>
    </ul>
  </nav>
    )
}

export default Navbar
