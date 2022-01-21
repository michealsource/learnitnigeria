import React,{useEffect} from 'react'
import './Bootcamp.css'
import Aos from 'aos'
import bootOne from '../../images/boot-1.jpg'
import bootTwo from '../../images/boot-2.jpg'
import bootThree from '../../images/boot-3.jpg'
import bootFour from '../../images/boot-4.jpg'

// FIRST UNIT IMAGE IMPORT
import html from '../../front-one/html.png'
import css from '../../front-one/css.png'
import sass from '../../front-one/sass.png'
import vscode from '../../front-one/vscode.png'
import git from '../../front-one/git.png'
import chrome from '../../front-one/chrome.png'

// GIF IMAGE ANIMATIONS
import load from '../../images/load.gif'
import second from '../../images/second.gif'
import third from '../../images/third.gif'
import fourth from '../../images/fourth.gif'

// SECOND UNIT IMAGE IMPORT
import javascript from '../../front-two/javascript.png'
import postman from '../../front-two/postman.png'
import axios from '../../front-two/axios.png'
// THIRD UNIT IMAGE IMPORATATION
import reactjs from '../../front-three/reactjs.png'
import npm from '../../front-three/npm.png'
// FOURTH UNIT IMPORTATION
import nodejs from '../../four/nodejs.png'
import expressjs from '../../four/expressjs.png'
import jira from '../../four/jira.png'
function Bootcamp() {
    return (
        <>
            <section className="text-center bootcamp-section">
                <div className="container">
                    <h1>The Bootcamp Experience</h1>
                    <p>learnitnigeria is more than a Web Development bootcamp: it's a career transformation experience. Beyond learning the essential technical skills you'll need to start a new career as a Web Developer, you'll gain hands-on, industry experience through unique real-world projects where you'll work alongside industry professionals on real business problems and collaborate with designers, data scientists, and digital marketers to deliver a real-world solution. </p>

                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="service">
                                <img src={bootOne} className="boot" alt="" />
                                
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="service">
                                <img src={bootTwo} className="boot" alt="" />

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="service">
                                <img src={bootThree} className="boot" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="service">
                                <img src={bootFour} className="boot" alt="" />
                            </div>
                        </div>
                    </div>

                    <h1>Hands-On Industry Experience Before You Graduate</h1>
                    <p>Get practical, hands-on experience applying what you've learned as a Web Developer to a real business case presented by a leading digital businesses. In these dynamic industry projects, you'll work alongside industry practitioners while cross-collaborating with learnitnigeria students from other to develop a compelling digital solution. This is essential experience applying your technical skills to a real-world business problem working as part of a diverse digital team, just like you will in your new career as a Web Developer. </p>

                    {/* TECHNOLOGIES TO LEARN SECTION */}
                    <div className="technolgy-cntainer mt-5">
                        <div className="row">
                            <div data-aos="fade-right" data-aos-delay="200" className="col-lg-7 col-md-7">
                                <span className="bootcamp-header">Unit 1</span>
                                <h2 className="bootcamp-header">Web Development Foundations</h2>
                                <p className="bootcamp-header">Quickly get up to speed with the basics of web development, including HTML, CSS, Git, Terminal, and other computer science fundamentals. By the end of this foundational web development unit, you'll be able to set up new projects and build styled multi-page websites from scratch by applying concepts like BEM, Flexbox, and Sass to build static web pages. You'll also learn how to structure your projects like an experienced Web Developer and protect your work by using Git to manage files and control versions of your work.</p>
                                <div className="what-to-learn-container">
                                    <div className="img-single">
                                        <div>
                                            <img src={html} alt="html" />
                                        </div>

                                        <div>
                                            <img src={css} alt="css" />
                                        </div>
                                        
                                        <div>
                                            <img src={sass} alt="sass" />
                                        </div>
                                        
                                        <div>
                                            <img src={sass} alt="sass" />
                                        </div>
                                        
                                        <div>
                                            <img src={vscode} alt="vscode" />
                                        </div>

                                        <div>
                                         <img src={git} alt="git" />
                                        </div>
                                        
                                        <div>
                                            <img src={chrome} alt="chrome" />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div data-aos="fade-left" data-aos-delay="400" data-aos-duration="800" className="col-lg-5 col-md-5">
                                <img src={load} className="boot" alt="" />
                            </div>
                        </div>
                        <div className="skills-container  align-items-center mt-4">
                            <h3>KEY SKILLS:</h3>
                            <div>
                                Project Structure & Setup
                            </div>
                            <div>
                                Static Websites
                            </div>
                            <div>
                                Multi-Page Websites
                            </div>
                            <div>
                                Version Control
                            </div>

                            <div>
                                Research & Problem Solving
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-lg-6 col-md-6">
                                <h4>Build Stylish, Multi-Page Websites</h4>
                                <p>Master HTML/CSS and build websites with complex layouts using Flexbox. Learn to apply BEM and Sass to write efficient code, and gain hands-on experience through multiple web development projects and exercises.</p>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <h4>Learn Your Development Environment & Tools</h4>
                                <p>Get familiar with the web development environment and other key tools that form an essential part of any Web Developer workflow. In this coding bootcamp, learn the key coding skills and resources used by web development professionals every day to solve problems quickly and efficiently.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div data-aos="fade-right" data-aos-delay="400" data-aos-duration="800" className="col-lg-7">
                            <span>UNIT 2</span>
                            <h2>JavaScript</h2>
                            <p>Alongside HTML/CSS, learn how to use JavaScript, one of the world's most popular programming languages. JavaScript enables you to manipulate the underlying code of a webpage and unlocks the ability to create dynamic, interactive experiences through HTML, CSS, and Javascript. In this unit, you'll learn the fundamentals of programming with JavaScript, and will apply it to build your first web development portfolio project. You'll also learn invaluable problem-solving skills such as whiteboarding and how to think like a programmer, which will help you throughout this Web Development program and into your new career as a Web Developer.</p>
                            <div className="what-to-learn-container">
                                <div className="img-single">
                                    <img src={javascript} alt="html" />
                                    <img src={postman} alt="html" />
                                    <img src={axios} alt="html" />
                                    <img src={git} alt="html" />
                                    <img src={vscode} alt="html" />
                                </div>
                            </div>

                        </div>
                        <div data-aos="fade-left" data-aos-delay="400" data-aos-duration="800" className="col-lg-5">
                            <img src={second} alt=""/>
                        </div>
                        <div className="skills-container d-flex align-items-center mt-4">
                            <h6>KEY SKILLS:</h6>
                            <div>
                                JavaScript
                            </div>
                            <div>
                                Dynamic Websites
                            </div>

                            <div>
                                API Data Handling
                            </div>

                            <div>
                                Asynchronous Code
                            </div>

                            <div>
                                Programmatic Thinking
                            </div>

                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-4 col-md-6">
                                <h4>Learn Programming Fundamentals</h4>
                                <p>Explore the basics of programming with JavaScript, and immediately apply it towards building interactive features into your websites combining HTML, CSS, and Javascript. With a solid understanding of programming and computer science fundamentals, you'll have an easier time learning new frameworks and computer programming languages in the future.</p>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <h4>Use APIs to Access & Use Data</h4>
                                <p>Learn how to use Application Programming Interfaces (APIs) to incorporate dynamic data into your interactive websites.</p>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <h4>Get Hands-On Experience With Real-World Projects</h4>
                                <p>In this Web Development bootcamp, tackle hands-on projects that challenge you to apply what you've learned, building web experiences from mockups made by real designers. As you complete these projects throughout the course, you'll be able to develop a web development portfolio of work demonstrating your new coding skills.</p>

                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-7" data-aos="fade-right" data-aos-delay="400" data-aos-duration="800">
                            <span>UNIT 3</span>
                            <h2>React & Single Page Applications</h2>
                            <p>Build upon your HTML/CSS and JavaScript knowledge to leverage React, a leading front-end library used by companies like Facebook, Netflix, and more. Because React is a library (and not a framework), it provides enormous flexibility when building rich user interfaces and has developed a passionate community with excellent web developer and software development support. Using React, learn to build Single Page Applications - progressive web applications that feel like a native app. This modern software development approach is used by companies like Twitter and Facebook, and you'll learn how to deploy it in your own web development projects..</p>
                            <div className="what-to-learn-container">
                                <div className="img-single">
                                    <img src={reactjs} alt="html" />
                                    <img src={npm} alt="html" />
                                    <img src={axios} alt="html" />
                                    <img src={javascript} alt="html" />
                                    <img src={vscode} alt="html" />
                                </div>
                            </div>

                        </div>
                        <div data-aos="fade-left" data-aos-delay="400" data-aos-duration="800" className="col-lg-5">
                            <img src={third} alt=""/>
                        </div>
                        <div className="skills-container d-flex align-items-center mt-4">
                            <h6>KEY SKILLS:</h6>
                            <div>
                                React JS
                            </div>
                            <div>
                                Single Page Applications
                            </div>

                            <div>
                                Dynamic URLs
                            </div>

                            <div>
                                Routing
                            </div>

                            <div>
                                Advanced JavaScript
                            </div>
                            <div>
                                Browser Data Handling
                            </div>

                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-4 col-md-6">
                                <h4>Apply React to Your Web Development Projects</h4>
                                <p>As the front-end library behind many of the world's most popular web applications, React is one of the most important full-stack web developer skills.</p>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <h4>Discover How to Write Efficient, High-Performance React Code</h4>
                                <p>Learn how to structure your React application like a software developer to run quickly and effectively to deliver the best web experiences across all your current and future projects.</p>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <h4>Build Modern Single Page Applications</h4>
                                <p>Develop real Single Page Applications and learn how this approach to front-end web development enables progressive web applications to look and feel like high-performance native applications.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div  className="col-lg-7 col-md-6" data-aos="fade-right" data-aos-delay="400" data-aos-duration="800">
                            <span>Unit 4</span>
                            <h2>Back-End Development & Collaboration</h2>
                            <p>Complement your front-end knowledge and build a full-stack web development foundation by learning about back-end web development. Create your own REST API web server leveraging Node.js and Express, and use it to power a functioning web application. Learn Agile methodologies and explore the world of collaborative development and pair programming – critical in-demand skills for the workplace. Through a hands-on collaborative project, you'll leverage JIRA, an Agile project management tool, and Git for version control to collaborate on building a robust web application as part of this Web Development bootcamp.</p>
                            <div className="what-to-learn-container">
                                <div className="img-single">
                                    <img src={nodejs} alt="html" />
                                    <img src={expressjs} alt="html" />
                                    <img src={jira} alt="html" />

                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-left" data-aos-delay="400" data-aos-duration="800" className="col-lg-5 col-md-6 mt-5">
                            <img src={fourth} className="boot" alt="" />
                        </div>
                        <div className="skills-container d-flex align-items-center mt-4">
                            <h6>KEY SKILLS:</h6>
                            <div>
                                Web Applications
                            </div>
                            <div>
                                REST APIs
                            </div>

                            <div>
                                Database(MONGO DB)
                            </div>

                            <div>
                                Collaborative Development
                            </div>

                            <div>
                                Pair Programming
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bootcamp
