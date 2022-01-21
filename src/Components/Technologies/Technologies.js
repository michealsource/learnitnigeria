import React from 'react'
import Industry from '../Industry/Industry'
import './Technologies.css'

// IMAGE IMPORTATION
import react from '../../images/react.png'
import atomSymbol from '../../images/atom-symbol.png'
import nodejs from '../../images/node-js.png'


function Technologies() {
    return (
        <>
           <section id="services" class="text-center">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="intro">
                        <h1>TECHNLOGIES WE USE</h1>
                    </div>
                </div>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6" data-aos="zoom-in-down" data-aos-delay="300">
                    <div class="service">
                        <img src={react} alt=""/>
                        <h5>React js Development</h5>
                        <h6>RAPID DEVELOPMENT, PROGRESSIVENESS, WEB, USER INTERFACE</h6>
                        <p>Release your product faster with the most flexible Javascript framework out there.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="service">
                        <img src={atomSymbol} alt=""/>
                        <h5>React Native Development</h5>
                        <h6>MOBILE, NATIVE CAPABILITIES </h6>
                        <p>Take advantage of native features by building your next iOS, Android, or web app with React Native. Multiple platforms compatibility trusted by industry giants.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6"  data-aos="zoom-in-left" data-aos-delay="300">
                    <div class="service">
                        <img src={nodejs} alt=""/>
                        <h5>Node.js Development</h5>
                        <h6>JAVASCRIPT, SCALABILITY, LIGHTWEIGHT,BACKEND</h6>
                        <p>Build performant and scalable apps - from concept, through design up to development and maintenance.</p>
                    </div>
                </div>
               
            </div>
        </div>
    </section>
    <Industry/>
        </>
    )
}

export default Technologies
