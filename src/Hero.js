import React from "react";
import './Hero.css'
import TypingEffect from './TypingEffect/TypingEffect'
import { useGlobalContext } from "./context";
import school from './images/school-image.jpeg'

const Background = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <img className="backgroundimg" src={school} style={{
        opacity:"0.4",
      zIndex:"-7",
      height: '100vh',
      width:"100%",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover' }}/>
      <div className="hero-center" >
        <article className="hero-info" >
          <h1><TypingEffect/></h1>
         
          <p style={{color:"black"}}> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            possimus quibusdam similique unde architecto fugiat cumque sint
            nemo, ea aliquid esse. Quod, sequi numquam eveniet minus iusto
            adipisci cum harum!
          </p>

          <button className="btn login-btn">Sign In</button>
        </article>
      </div>
    </section>
  );
};

export default Background;
