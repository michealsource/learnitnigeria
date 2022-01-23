import React,{useEffect} from 'react'
import './App.css';
import Aos from 'aos'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  useEffect(()=>{
    Aos.init()
},[])
  return (
   <>
   <Navbar/>
   <Footer />
   <a
        href="https://wa.me/2347032238595"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
   </>
  );
}

export default App;
