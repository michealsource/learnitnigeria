import React,{useEffect} from 'react'
import  './SecondSection.css'
import projectPlan from '../../images/project-plan.png'
import quality from '../../images/quality.png'
import global from '../../images/global-network.png'
import product from '../../images/product-management.png'
import 'aos/dist/aos.css'
import Aos from 'aos'
function SecondSection() {
    return (
        <>
        <section id="services" className="text-center">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="intro">
                        <h2>Support and management services</h2>
                    </div>
                </div>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-md-6" data-aos="flip-left" data-aos-delay="200">
                    <div className="service">
                        <img src={projectPlan} alt=""/>
                        <h5>Project management</h5>
                        <p>We have a well-laid-out communication scheme and coherent processes. Our Project Manager keeps their finger on the pulse and makes sure the project is delivered on time and within budget.</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6"  data-aos="flip-left" data-aos-delay="200">
                    <div className="service">
                        <img src={quality} alt=""/>
                        <h5>Quality assurance</h5>
                        <p>Quality assurance specialists are the quiet guardians of your project, making sure the product is released bug-free and that it provides users with a flawless experience.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6"  data-aos="flip-left" data-aos-delay="200">
                    <div className="service">
                        <img src={global} alt=""/>
                        <h5>Cloud technology</h5>
                        <p>We have rock-solid DevOps/SLA practices to help you leverage cloud technology speeding up development and increasing app security and scalability.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6"  data-aos="flip-left" data-aos-delay="200">
                    <div className="service">
                        <img src={product} alt=""/>
                        <h5>Product management</h5>
                        <p>We offer development and design enhancements for your existing product or service. We can also keep your infrastructure up to date.</p>
                    </div>
                </div>
              
            </div>
        </div>
    </section>
        </>
    )
}

export default SecondSection
