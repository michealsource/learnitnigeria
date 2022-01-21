import React from 'react'
import './Blog.css'
import project1 from '../../images/project5.jpg'
import project2 from '../../images/project4.jpg'
import project3 from '../../images/project2.jpg'
import {Link } from "react-router-dom"
function Blog() {
    return (
<>
    <section id="blog">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="intro">
                        <h1 >LearnitNigeria Blog Posts</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                    <article class="blog-post">
                        <img src={project1} alt=""/>
                        <Link to="#" class="tag">Web Design</Link>
                        <div class="content">
                            <small>01 Dec, 2022</small>
                            <h5>Web Design trends in 2022</h5>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                piece of classical Latin literature from</p>
                        </div>
                    </article>
                </div>
                <div class="col-md-4">
                    <article class="blog-post">
                        <img src={project2} alt=""/>
                        <Link to="#" class="tag">Programming</Link>
                        <div class="content">
                            <small>01 Dec, 2022</small>
                            <h5>Web Design trends in 2022</h5>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                piece of classical Latin literature from</p>
                        </div>
                    </article>
                </div>
                <div class="col-md-4" data-aos="flip-left"
                                      data-aos-easing="ease-out-cubic"
                                      data-aos-duration="2000">
                    <article class="blog-post">
                        <img src={project3} alt=""/>
                        <Link to="#" class="tag">Marketing</Link>
                        <div class="content">
                            <small>01 Dec, 2022</small>
                            <h5>Web Design trends in 2022</h5>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                piece of classical Latin literature from</p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
  
        </>
    )
}

export default Blog
