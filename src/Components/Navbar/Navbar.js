import React from 'react'
import './Navbar.css'
import TopNav from '../TopNav/TopNav'
import logo from '../../images/logo.png'
import { Routes, Route, Link } from "react-router-dom"
import Home from '../Home/Home'
import Services from '../Services/Services'
import Technologies from '../Technologies/Technologies'
import Blog from '../Blog/Blog'
import About from '../About/About'
import RegistrationModal from '../RegistrationModal/RegistrationModal'
import ContactModal from '../ContactModal/ContactModal'
import Project from '../Project/Project'
function Navbar() {
    return (
        <>
            <TopNav />
            <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
                <div className="container">
                    <Link to="/" className="navbar-brand"><img src={logo} className="logo" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                           
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/project">Projects</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/technology">Our Technolgogy</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                           
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link data-bs-toggle="modal" data-bs-target="#exampleModal2" className="nav-link" to="/about">Contact</Link>
                            </li>
                            
                        </ul>
                       
                        <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn nav-link btn-brand ms-lg-3">Enroll Now</a>
                    </div>
                </div>
            </nav>
            <RegistrationModal/>
            <ContactModal/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/technology" element={<Technologies/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/project" element={<Project/>}></Route>
        </Routes>
        </>
    )
}

export default Navbar
