import React, { useState } from 'react'
import Multiselect from 'multiselect-react-dropdown';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook, faInstagram,faTwitter} from "@fortawesome/free-brands-svg-icons"
import axios from "axios"
import { ShowMessage, type } from "./Toastr/ShowMessage";
import Select from 'react-select';
import Loader from "react-loader-spinner";


function Contact() {
  const Technologies =[
    {
      value:"HTML",
      label:"HTML",
    },{
      value:"CSS",
      label:"CSS",
    },{
      value:"Javascript",
      label:"Javascript"
    },{
      value:"Bootstrap",
      label:"Bootstrap",
    },{
      value:"React Native",
      label:"React Native",
    },
    {
      value:"React JS",
      label:"React JS",
    },{
      value:"Mongo DB",
      label:"Mongo DB",
    },{
      value:"Node js",
      label:"Node js",
    },{
      value:"PHP",
      label:"PHP",
    },{
      value:"Wordpress",
      label:"Wordpress",
    },{
      value:"Intro to Python",
      label:"Intro to Python",
    }
  ]

  const [options, setOptions]= useState(Technologies);
  const[firstname, setFirstname]=useState('');
  const[lastname, setLastname]=useState('');
  const[email, setEmail]=useState('');
  const[phone, setPhone]=useState('');
  const[selected,setSelected]=useState([])
  const [isProcessing, setIsProcessing] = useState(false)



  const payload = {
    firstName: firstname, 
    lastName: lastname,
    email,
    phone,
    listOfTech:selected
  }

  const handleRest = () => {
    setFirstname('')
    setLastname('')
    setEmail('')
    setPhone('')
  }

  
  const handleSubmit = async(e) => {
    e.preventDefault()
    if(firstname === "" || lastname === "" || email === "" || phone === "" || !selected.length){
      ShowMessage(type. ERROR, "All fields are required.")
      return;
    }
    setIsProcessing(true)
    await axios.post('/register', payload ).then((res) => {
      handleRest()
      setIsProcessing(false)
      ShowMessage(type. DONE, res.data)
    }).catch((err) => {
      setIsProcessing(false)
      ShowMessage(type. ERROR, err)
    })
  }


  const handleChange = (options) => {
    setSelected(options.map(val => val.value));
  };

    return (
    <section id="contact" className="container">
    <div className="contact-form bg-primary p-2">
      <h2 className="m-heading">Enroll so we can get your request</h2>
     
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label for="name">First Name</label>
          <input value={firstname} className="form-control" onChange={(e) => setFirstname(e.target.value)} type="text" id="name" placeholder="FirstName"/>
        </div>

        <div className="form-group">
          <label for="name">Last Name</label>
          <input value={lastname} className="form-control" onChange={(e) => setLastname(e.target.value)} type="text" id="name" placeholder="LastName"/>
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <input value={email} className="form-control" onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="Enter Email"/>
        </div>

        <div className="form-group">
          <label for="phone">Phone Number</label>
          <input value={phone} className="form-control" onChange={(e) => setPhone(e.target.value)} type="text" id="phone" placeholder="Enter Phone Number"/>
        </div>

        <div style={{color: "#000"}} className="form-group" >
          <label style={{color: "#fff"}} for="phone">Select lists of Technologies to Enroll</label>
        <Select
          isMulti = {true}
          options={options}
          closeMenuOnSelect={false}
          onChange={handleChange}/>
          
        </div>
        <div className="form-group">
             <button type="submit" className="btn form-control btn-dark">{isProcessing ? <Loader type="Circles" color="#00BFFF" height={35} width={35}/> : "Send"}</button>
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
