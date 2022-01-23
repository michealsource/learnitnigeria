import React from 'react'

// IMAGES IMPORTATION
import web from '../../images/web-design.png'
import smartphone from '../../images/smartphone.png'
import socialMedia from '../../images/social-media.png'
import onlinelearning from '../../images/online-learning.png'
import telecommunication from '../../images/telecommunication.png'
import cybersecurity from '../../images/cyber-security.png'
import hosting from '../../images/hosting.png'
import rocket from '../../images/rocket.png'
import webdevelopment from '../../images/web-development.png'

function Services() {
    return (
        <>
            <section id="services" class="text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="intro">
                                <h6>Our Services</h6>
                                <h1>What We Do?</h1>
                                <p class="mx-auto">LearnitNigeria - Expert in Web Development and other strategic part in information communication technology</p>
                            </div>
                        </div>
                    </div>
                    <div class="row g-4">
                        <div class="col-lg-4 col-md-6" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <div class="service">
                                <img src={web} alt="" />
                                <h5>Website Design</h5>
                                <p>We are expert web designers build crative and user friendly and responsive websites.</p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <div class="service">
                                <img src={webdevelopment} alt="" />
                                <h5>Web Development</h5>
                                <p>We have extensive expertise, experience and resources in web development.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <div class="service">
                                <img src={socialMedia} alt="" />
                                <h5>Digital Marketing</h5>
                                <p>Businesses need to drive relevant, qualified traffic to their website, phone lines, or physical location. As your digital marketing and advertising agency, we help you choose the best places and media to help you grow your business and raise awareness.</p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <div class="service">
                                <img src={smartphone} alt="" />
                                <h5>Mobile Application Development</h5>
                                <p>Expand and develop your company via incentive applications that increase distribution and foster engagement. Break away from the competition and forge ahead on your digital transformation journey by utilizing mobile technology and expertise</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service">
                                <img src={onlinelearning} alt="" />
                                <h5>Software Development Training</h5>
                                <p>Gain a deep understanding of how to build, deploy, secure and scale everything
                                    from web apps to mobile apps using React, Node js, JavaScript and more.
                                    Stay up to speed on the ever-changing landscape of emerging software
                                    development tools and techniques.
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <div class="service">
                                <img src={telecommunication} alt="" />
                                <h5>ICT Symposiums</h5>
                                <p>we focuse on developing the international
                                    and national initiatives and experience on ICT in education, spreading information,
                                    making advices for academic and administrative staff in education, and supporting
                                    the initiatives on those issues.</p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <div class="service">
                                <img src={cybersecurity} alt="" />
                                <h5>System Integration</h5>
                                <p> In very broad terms, we connect different sub-systems (components)
                                    into a single larger system that functions as one. With regards to software solutions,
                                    we link together various IT systems,
                                    services and/or software to enable all
                                    of them to work functionally together.</p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <div class="service">
                                <img src={hosting} alt="" />
                                <h5>Networking</h5>
                                <p>We analyze the communication process among various computing
                                    devices or computer systems that are linked, or networked, together to exchange
                                    information and share resources, because computer networks are the backbone of modern-day communication
                                </p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <div class="service">
                                <img src={rocket} alt="" />
                                <h5>MVP Development</h5>
                                <p>Ship your MVP to market without spending months on assembling an in-house development team for your startup.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
