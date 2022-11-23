import React from 'react'
import './About.css'
import ImageShadow from 'react-image-shadow';
import BackgroundSlider from 'react-background-slider'

const About = () => {
  return (
    <div id='about'>
      <h2>About</h2>
<div className="about-container">
      <div className="about-left">
        <ImageShadow  src={require('../../images/kkslogo.png')} />
        </div>
        <div className="about-right">
          <p style={{color:"black"}}> 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
     
    </div>
  )
}

export default About