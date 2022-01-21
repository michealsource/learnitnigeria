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
   </>
  );
}

export default App;
