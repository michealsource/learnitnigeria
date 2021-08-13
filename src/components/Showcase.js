import React from 'react'
import {Link} from 'react-scroll'

function Showcase() {
    return (
  <header id="showcase">
    <div className="showcase-content">
      <h1 className="l-heading">
       Welcome to LearniTNigeria
      </h1>
      <p className="lead">
        Information Technology Digital Classess theat will Make you  job Ready Person
      </p>
      <Link to="contact" smooth={true} duration={2000} class="btn">Enroll</Link>
    </div>
  </header>
    )
}

export default Showcase
