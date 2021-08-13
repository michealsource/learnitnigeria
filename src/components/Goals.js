import React from 'react'
import sell from '../img/sell.png'
import unique from '../img/unique.png'
import development from '../img/development.png'

function Goals() {
    return (
        <section  className="bg-what what py-2">
        <div class="container">
          <h2 class="m-heading text-center">Our Core Goals</h2>
          <div class="items">
            <div class="item">
              <img src={sell} alt="sell" className="goals" />
              <div>
                <h4>Make your website sell better</h4>
              
              </div>
            </div>
            <div class="item">
                <img src={unique} alt="unique" className="goals" />
                <div>
                  <h4>Provide access to unique technologies, as well as the knowledge and experience to build a successful business on the Internet</h4>
                  
                </div>
            </div>
            <div class="item">
                <img src={development} alt="development" className="goals" />
                <div>
                  <h4>Show you a clear, measurable results and regular work on the development of your application</h4>
                  
                </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Goals
