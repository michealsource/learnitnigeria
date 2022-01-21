import React from 'react'
import home from '../../images/home.png'
import hospitalbuilding from '../../images/hospital-building.png'
import people from '../../images/people.png'
import accounting from '../../images/accounting.png'
import addCart from '../../images/add-to-cart.png'
import freelance from '../../images/freelance.png'

import './Industry.css'

function Industry() {
    return (
        <>
            <section id="services" class="text-center">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="intro">
                        <h1>INDUSTRY SPECIFIC SERVICES</h1>
                    </div>
                </div>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6" data-aos="zoom-in-down" data-aos-delay="300">
                    <div class="service">
                        <img src={home} alt=""/>
                        <h5>Proptech Development</h5>
                        <h6>INTUITIVE AND SCALABLE APPS FOR THE REAL ESTATE SECTOR</h6>
                        <p>Showcase properties, connect with buyers, explore new business models, and build an app for better building management.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="service">
                        <img src={hospitalbuilding} alt=""/>
                        <h5>Medtech Developmentt</h5>
                        <h6>CUSTOM MEDTECH SOFTWARE FOR MODERN HOSPITALS</h6>
                        <p>Build a medtech application that will revolutionize healthcare services by using big data and personalization.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6" data-aos="zoom-in-left" data-aos-delay="300">
                    <div class="service">
                        <img src={people} alt=""/>
                        <h5>HR Software Development</h5>
                        <h6>HR TECH, DEVELOPMENT, WEB APPS, DESIGN</h6>
                        <p>Build customized HR apps and let technology help you take better care of your teams.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6" data-aos="zoom-in-down" data-aos-delay="300">
                    <div class="service">
                        <img src={accounting} alt=""/>
                        <h5>Fintech Development</h5>
                        <h6>CUSTOMIZE APPS FOR THE FINANCIAL SERVICES SECTOR</h6>
                        <p>Build a a secure app and make your financial services safer and more efficient.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="service">
                        <img src={addCart} alt=""/>
                        <h5>Ecommerce Development</h5>
                        <h6>SCALABLE, SECURE PLATFORMS WITH SEAMLESS PURCHASING PROCESS</h6>
                        <p>Leverage the power of sales online, with a customized ecommerce platform that suits your needs.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6" data-aos="zoom-in-left" data-aos-delay="300">
                    <div class="service">
                        <img src={freelance} alt=""/>
                        <h5>Internet of Things Development</h5>
                        <h6>WORKSHOPS, PRODUCT-DESIGN, STRATEGY</h6>
                        <p>We build software that empowers businesses with insights from connected devices in the physical.</p>
                    </div>
                </div>
               
               
            </div>
            <div class="our-experties">
                <h2 data-aos="zoom-in-left" data-aos-delay="300">Your needs, Our Expertise.</h2>
                <div class="our-experties-row">
                    <div class="experties-inner-row">
                    <div class="number">
                        <span>01</span>
                    </div>
                    <div class="content">
                        <h4>Full-service and in-house</h4>
                        <p>We can run your project from start to finish without involving any remote contractors. Product designers, QA specialists, developers, business analysts — they will all work together, side by side (literally), ensuring smooth teamwork</p>
                    </div>
                </div>
                    
                <div class="experties-inner-row">
                    <div class="number">
                        <span>02</span>
                    </div>
                    <div class="content">
                        <h4>Tech lead support</h4>
                        <p>A dedicated tech lead makes sure the project runs like a well-oiled machine. If needed, they will step into the role of your virtual CTO and serve as the guardian of code quality.</p>
                    </div>
                </div>                
                </div>
                
            </div>
        </div>
    </section>
        </>
    )
}

export default Industry
