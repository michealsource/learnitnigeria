import React from 'react'
import { FaFacebook,FaInstagram,FaLinkedin,FaTwitterSquare,FaWhatsapp,FaEnvelope,FaPhoneAlt } from "react-icons/fa";
import './TopNav.css'
function TopNav() {
    return (
        <div className="top-nav" id="home">
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-auto d-flex mobile-top-nav">
                    <p className='email'> <FaEnvelope /> info@learnitnigeria.com</p>
                    <p className='email'> <FaPhoneAlt/> (+234) 7041033504/7058420122</p>
                </div>
                <div className="col-auto social-icons">
                    <a href="https://web.facebook.com/Learnitnigeria-240128987907708/"><FaFacebook className='bx'/></a>
                    <a href="https://twitter.com/learnitnigeria"><FaTwitterSquare className='bx'/></a>
                    <a href="https://www.instagram.com/learnitnigeria/"><FaInstagram className='bx'/></a>
                    <a href="https://www.linkedin.com/in/learnitnigeria-learnitnigeria-198978231/"><FaLinkedin className='bx'/></a>
                    <a href="https://wa.me/2347032238595"><FaWhatsapp className='bx'/></a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default TopNav
