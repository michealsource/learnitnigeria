import React from 'react'
import agency from '../../web-images/agency.png'
import construction from '../../web-images/construction.png'
import travel from '../../web-images/travel.png'
import education from '../../web-images/education.png'
import food from '../../web-images/food.png'
import power from '../../web-images/power-deal.png'
import ecommerce from '../../web-images/ecommerce.png'
import doctor from '../../web-images/doctor.png'

import { Link } from "react-router-dom"
import './Projects.css'
function Project() {
    return (
        <>
       
        <div className='project-container overflow-hidden mb-5 mt-4'>
            <h2 className='text-center py-5'>Explore projects built by learnitNigeria.</h2>

            <div class="container overflow-hidden">
            <div class="row gx-5">
                
                <div class="col-md-4">

                <a target="_blank" href="https://learnitnigeria.github.io/agency/">
                        <div class="project">
                        <img src={agency} alt=""/>
                        <h4>Agency Website</h4>
                    </div>
                </a>
                </div>
                

                <div class="col-md-4">
                <a target="_blank" href="https://learnitnigeria.github.io/construction/">
                    <div class="project">
                    <img src={construction} alt=""/>
                    <h4>Construction Website</h4>
                    </div>
                    </a>
                </div>

                <div class="col-md-4">
                    <a target="_blank" href="https://learnitnigeria.github.io/travel-website/">
                    <div class="project">
                    <img src={travel} alt=""/>
                    <h4>Travel Website</h4>
                    </div>
                    </a>
                </div>

                <div class="col-md-4">
                <a target="_blank" href="https://learnitnigeria.github.io/education-website/">
                    <div class="project">
                    <img src={education} alt=""/>
                    <h4>Education Website</h4>
                    </div>
                    </a>
                </div>

                <div class="col-md-4">
                <a target="_blank" href="https://learnitnigeria.github.io/ecommerce/">
                    <div class="project">
                    <img src={ecommerce} alt=""/>
                    <h4>Ecommerce Website</h4>
                    </div>
                    </a>
                </div>

                <div class="col-md-4">
                <a target="_blank" href="https://learnitnigeria.github.io/food-website/">
                    <div class="project">
                    <img src={food} alt=""/>
                    <h4>Resturant Website</h4>
                    </div>
                    </a>
                </div>

                <div class="col-md-4">
                <a target="_blank" href="https://powerdeals.ng/">
                    <div class="project">
                    <img src={power} alt=""/>
                    <h4>Power Deal Website</h4>
                    </div>
                    </a>
                </div>

                <div class="col-md-4">
                <a target="_blank" href="https://aeglehealth.io/">
                    <div class="project">
                    <img src={doctor} alt=""/>
                    <h4>Doctor Consultation Website</h4>
                    </div>
                    </a>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Project
