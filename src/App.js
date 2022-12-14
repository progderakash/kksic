import React from "react";
import {TbArrowTopCircle} from 'react-icons/tb'
import './gototop/gotop.css'
import Navbar from "./Navbar";
import Background from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import TopContact from './TopContact/TopContact'
import About from './About us/About/About'
import Vis from './About us/Vis&Mis/Vis&mis'
import Achievements from "./About us/Achivements/Achievements";
import Contact from './Contact us/contact'
import Events from './Gallery/events'
import Imggallery from './Gallery/imggallery'
import Infra from './Gallery/infra'
import Testinomials from './Gallery/testinomials'
import Footer from './footer/footer'





function App() {
  return (
<>
    <TopContact style={{color:"#fff"}}/>
   
      <Navbar/>
      {/* <Login/>*/}
  
      <Sidebar /> 
      <Background />
      <Submenu />
        <div className="gotop-container">
      <a href="#home"><TbArrowTopCircle className="gotop-icon"/></a>
    </div>
      <About/>
      
      <Vis/>
      <Achievements/>
      <Events/>
      <Infra/>
      <Imggallery/>
      <Testinomials/>
      <Contact/>
      <Footer/>

      </>

  );
}

export default App;
