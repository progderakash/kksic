import React,{useState}from 'react'
import './testimonials.css'
import Carousel from 'react-bootstrap/Carousel';

function Testinomials () {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div id='testinomials'>

<h2>Testimonials</h2>
<div className="testmonials">
    <div className="testimonials-container">
       <img src={require('../images/usericon.jpg')} alt="user-img" />
    <h4>Name singh</h4>
    <p style={{color:'black' }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo officia ullam velit perspiciatis doloribus accusamus expedita nobis modi ipsa vel. </p> 
    </div>
     <div className="testimonials-container">
       <img src={require('../images/usericon.jpg')} alt="user-img" />
    <h4>Name singh</h4>
    <p style={{color:'black' }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo officia ullam velit perspiciatis doloribus accusamus expedita nobis modi ipsa vel. </p> 
    </div>
     <div className="testimonials-container">
       <img src={require('../images/usericon.jpg')} alt="user-img" />
    <h4>Name singh</h4>
    <p style={{color:'black' }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo officia ullam velit perspiciatis doloribus accusamus expedita nobis modi ipsa vel. </p> 
    </div>
</div> 



    </div>
  );
}

export default Testinomials