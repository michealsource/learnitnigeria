import React from 'react'
import {Link} from 'react-scroll'

function Showcase() {
    return (
  <header id="showcase">
    <div className="showcase-content">
      <h1 className="l-heading">
       Welcome to LearnItNigeria
      </h1>
      <p className="lead">
      Hub of Information Technology
      </p>
      <Link to="contact" smooth={true} duration={2000} class="btn">Enroll</Link>
    </div>
  </header>
    )
}

export default Showcase
