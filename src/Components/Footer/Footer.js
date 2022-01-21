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
                                    <Link to="/"><FaFacebook className='bx' /></Link>
                                    <Link to="/"><FaTwitterSquare className='bx' /></Link>
                                    <Link to="/"><FaInstagram className='bx' /></Link>
                                    <Link to="/"><FaLinkedin className='bx' /></Link>
                                    <Link to="/"><FaWhatsapp className='bx' /></Link>
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
