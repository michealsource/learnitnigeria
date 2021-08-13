import React, { useState } from 'react'
import Multiselect from 'multiselect-react-dropdown';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook, faInstagram,faTwitter} from "@fortawesome/free-brands-svg-icons"


function Contact() {
  const Technologies =[
    {
      name:"HTML 5",
      id:1
    },{
      name:"CSS",
      id:2
    },{
      name:"Javascript",
      id:3
    },{
      name:"Typescript",
      id:4
    },{
      name:"Bootstrap",
      id:5
    },{
      name:"React Native",
      id:6
    },{
      name:"Flutter",
      id:7
    },{
      name:"Mongo DB",
      id:8
    },{
      name:"MYSQL",
      id:9
    },{
      name:"Firebase",
      id:10
    },{
      name:"Node js",
      id:11
    },{
      name:"PHP",
      id:12
    },{
      name:"Wordpress",
      id:13
    },{
      name:"Python",
      id:14
    }
  ]

  const [options, setOptions]= useState(Technologies);
  const[firstname, setFirstname]=useState('');
  const[lastname, setLastname]=useState('');
  const[email, setEmail]=useState('');
  const[phone, setPhone]=useState('');
  const[message, setMessage]=useState('');
  const[selected,setSelected]=useState([])


    return (
    <section id="contact" className="container">
      
    <div className="contact-form bg-primary p-2">
      <h2 className="m-heading">Enroll so we can get your request</h2>
     
      <form>
        <div className="form-group">
          <label for="name">First Name</label>
          <input className="form-control" type="text" id="name" placeholder="FirstName"/>
        </div>

        <div className="form-group">
          <label for="name">Last Name</label>
          <input className="form-control" type="text" id="name" placeholder="LastName"/>
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <input className="form-control" type="email" id="email" placeholder="Enter Email"/>
        </div>

        <div className="form-group">
          <label for="phone">Phone Number</label>
          <input className="form-control" type="text" id="phone" placeholder="Enter Phone Number"/>
        </div>

        <div className="form-group">
          <label for="phone">Select lists of Technologies to Enroll</label>
          <Multiselect
           options={options}
           displayValue={"name"}
           id="css_custom"
            />
        </div>

        <div className="form-group">
          <label for="message">Message</label>
          <textarea name="message" id="message" placeholder="Enter Message"></textarea>
        </div>
        <div className="form-group">
             <input type="submit" value="Send" className="btn form-control btn-dark"/>
        </div>
      
      </form>
    </div>
    <div className="map">
    <h2 className="m-heading py-2">Contact Us</h2>
    <div className="social-links">
        <a href=""><FontAwesomeIcon icon={faInstagram} className="social instagram"/></a>
        <a href=""> <FontAwesomeIcon icon={faFacebook} className="social facebook" /></a>
        <a href=""><FontAwesomeIcon icon={faTwitter} className="social twitter"/></a>
    </div>

    <p className="email">Email: lernitNigeria@gmail.com</p>
    
    </div>
  </section>
    )
}

export default Contact
