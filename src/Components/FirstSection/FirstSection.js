import React,{useEffect} from 'react'
import './FirstSection.css'
import devops from '../../images/devops.png'
import software from '../../images/software-development.png'
import web from '../../images/web-development.png'
import first from '../../images/first.jpg'
import 'aos/dist/aos.css'
import Aos from 'aos'

function FirstSection() {
useEffect(()=>{
    Aos.init()
},[])
    return (
        <>
            <section>
                <div class="container">
                    <div class="row justify-content-center">
                        <h2  className='text-center mb-5' >OUR TECHNOLOGY STANDARD</h2>
                        <div class="col-lg-5 py-5" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="700">
                            <div class="row">

                                <div class="col-12" >
                                    <div class="info-box">
                                        <img src={devops} alt="" />
                                        <div class="ms-4">
                                            <h5>Cloud & DevOps</h5>
                                            <p>Maintaining a scalable and secure architecture based on AWS cloud solutions </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 mt-4">
                                    <div class="info-box">
                                        <img src={software} alt="" />
                                        <div class="ms-4">
                                            <h5>Software architetcture</h5>
                                            <p>Developing a resilient software architecture centred on a scalability, top performance, and cost optimization </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 mt-4">
                                    <div class="info-box">
                                        <img src={web } alt="" />
                                        <div class="ms-4">
                                            <h5>Digital product design</h5>
                                            <p>Complete digital product creations from UX prototyping to final UI designs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="700">
                            <img src={first} alt="" class="first" />
                        </div>
                    </div>
                </div>
                
            </section>
        
        </>
    )
}

export default FirstSection
