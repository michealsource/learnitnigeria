import React from 'react'
import smartphone from '../img/smartphone.png'
import responsive from '../img/responsive.png'
import backend from '../img/backend.png'

function Courses() {
    return (
       
        <section id="technologies" className="bg-what py-2 what">
          <div className="container">
            <h2 className="m-heading text-center">TECHNOLOGIES WE WORK WITH</h2>
            <div className="items">
              <div className="item mobile-development">
                <img src={smartphone} alt="smartphone" className="technologies" />
                <div>
                  <h3>Mobile</h3>
                  <p>React Native</p>
                  <p>Flutter</p>
                </div>
              </div>
              <div className="item front-end">
                  <img src={responsive} alt="responsive" className="technologies" />
                  <div>
                    <h3>Front End</h3>
                    <p>HTML 5</p>
                    <p>CSS</p>
                    <p>Javascript</p>
                    <p>Typescript</p>
                    <p>Bootstrap</p>
                  </div>
              </div>
              <div className="item backend">
                  <img src={backend} alt="backend" className="technologies"/>
                  <div>
                    <h3>Database/Backend</h3>
                    <p>Mongo DB</p>
                    <p>MYSQL</p>
                    <p>Firebase</p>
                    <p>Node js</p>
                    <p>PHP</p>
                    <p>Wordpress</p>
                    <p>Python</p>
                  </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Courses
