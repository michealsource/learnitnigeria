import React from 'react'
import { FaFacebook,FaInstagram,FaLinkedin,FaTwitterSquare,FaWhatsapp,FaEnvelope,FaPhoneAlt } from "react-icons/fa";
import './TopNav.css'
function TopNav() {
    return (
        <div className="top-nav" id="home">
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-auto d-flex">
                    <p className='email'> <FaEnvelope /> info@learnitnigeria.com</p>
                    <p> <FaPhoneAlt/> (+234) 7041033504/7058420122</p>
                </div>
                <div className="col-auto social-icons">

                    <a href="#"><FaFacebook className='bx'/></a>
                    <a href="#"><FaTwitterSquare className='bx'/></a>
                    <a href="#"><FaInstagram className='bx'/></a>
                    <a href="#"><FaLinkedin className='bx'/></a>
                    <a href="#"><FaWhatsapp className='bx'/></a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default TopNav
