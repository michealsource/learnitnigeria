import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitterSquare, FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import team1 from '../../images/team_1.jpg'
import team2 from '../../images/DSC_4222.jpg'
import team3 from '../../images/micheal.jpg'
import './Team.css'
function Team() {
    return (
        <>
            <section id="team">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="intro">
                                <h1>Our Team Members</h1>
                                <p class="mx-auto">Technology alone is not enough to succeed, every product needs a team of passionate people who will give it their best.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" class="col-lg-4 col-md-8">
                            <div class="team-member">
                                <div class="image">
                                    <img src={team1} alt="" />
                                    <div class="social-icons">
                                        <a href="#"><FaFacebook className='bx' /></a>
                                        <a href="#"><FaTwitterSquare className='bx' /></a>
                                        <a href="#"><FaInstagram className='bx' /></a>

                                    </div>
                                    <div class="overlay"></div>
                                </div>

                                <h5>Vincent Chibuke</h5>
                                <p>C.E.O</p>
                            </div>
                        </div>
                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" class="col-lg-4 col-md-8">
                            <div class="team-member">
                                <div class="image">
                                    <img height="350" src={team2} alt="" />
                                    <div class="social-icons">
                                        <a href="#"><FaFacebook className='bx' /></a>
                                        <a href="#"><FaTwitterSquare className='bx' /></a>
                                        <a href="#"><FaInstagram className='bx' /></a>
                                    </div>
                                    <div class="overlay"></div>
                                </div>

                                <h5>Ideh Charles Henry</h5>
                                <p>Chief Operation Officer</p>
                            </div>
                        </div>
                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" class="col-lg-4 col-md-8">
                            <div class="team-member">
                                <div class="image">
                                    <img height="350" src={team3} alt="" />
                                    <div class="social-icons">
                                        <a href="#"><FaFacebook className='bx' /></a>
                                        <a href="#"><FaTwitterSquare className='bx' /></a>
                                        <a href="#"><FaInstagram className='bx' /></a>
                                    </div>
                                    <div class="overlay"></div>
                                </div>
                                <h5>Shaibu Micheal</h5>
                                <p>Chief Techenical Officer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team
