import React from 'react'
import image1 from '../../images/interface.png'
import image2 from '../../images/programming.png'
import './Carousel.css'

function Carousel() {


    return (
        <>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active dark">
                        {/* <h3 class="display-3 my-4">BUILDING INNOVATIVE SOFTWARE FOR INDUSTRY LEADERS</h3> */}
                        <img src={image1} class="d-block w-100 height" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h1 className='carousel-text-color display-5'>BUILDING INNOVATIVE SOFTWARE FOR INDUSTRY LEADERS</h1>
                        </div>
                    </div>
                    <div class="carousel-item slide dark">
                        <img src={image2} class="d-block w-100 height" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h1  className='carousel-text-color display-5'>Contact us for your software development solutions for your business</h1>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel
