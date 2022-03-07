import React from 'react'
import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitterSquare, FaWhatsapp} from "react-icons/fa";
import './Footer.css'
function Footer() {
    return (
        <>
            <footer>
                <div class="footer-top text-center">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-6 text-center my-3">
                                <h2 class="navbar-brand">LearnitNigeria</h2>
                                <p>You can get in touch with us via our social media handle below</p>
                                <div class="col-auto social-icons">
                                    <a href="https://web.facebook.com/Learnitnigeria-240128987907708/"><FaFacebook className='bx' /></a>
                                    <a href="https://twitter.com/learnitnigeria"><FaTwitterSquare className='bx' /></a>
                                    <a href="https://www.instagram.com/learnitnigeria/"><FaInstagram className='bx' /></a>
                                    <a href="https://www.linkedin.com/in/learnitnigeria-learnitnigeria-198978231/"><FaLinkedin className='bx' /></a>
                                    <a href="https://wa.me/2347032238595"><FaWhatsapp className='bx' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom text-center">
                    <p class="mb-0">Copyright@2022. All rights Reserved LearnitNigeria</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
