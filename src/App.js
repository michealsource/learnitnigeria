
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Footer from './components/Footer';
import Goals from './components/Goals';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Showcase/>
     <Courses/>
     <About/>
     <Goals/>
     <Contact/>
     <Footer/>
     <a
        href="https://wa.me/2348088535523"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} class="whatsapp-icon"/>
      </a>
    </div>
  );
}

export default App;
