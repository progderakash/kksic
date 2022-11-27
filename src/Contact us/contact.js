import React from 'react'
import './contact.css'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'

import {HiLocationMarker} from 'react-icons/hi'

import { Row, Col } from "react-bootstrap";


const Contact = () => {
 
  return (
<div id="contact_form">
  <h2> Contact</h2>
  <div className="contactus-container">
<div className="contact-form">
      <Row>
        <Col><input className="form-control" id="name" name="name" placeholder="Name" type="text" required /></Col>
      </Row>
      <Row>
        <Col><input className="form-control " id="email" name="email" placeholder="Email ID" type="email" required /></Col>
      </Row>
      <Row>
        <Col> <textarea className="form-control contact-msg " id="message" name="message" placeholder="Message" rows="5" required></textarea></Col>
      </Row>
      <Row>
        <Col><button className="btn contact-btn" type="submit">Send</button></Col>
      </Row>
</div>

<div className="contact-detailsss" id='contact-details'>
  
  
  <div>
    <BsFillTelephoneFill size={25} className="contactus-icons"/>
  <stronger>+911234567890</stronger>
  </div>
  
 <div>
  <GrMail size={25} className="contactus-icons"/>
  <stronger> ajayrai@gmail.com</stronger>
 </div>

<div>
   <HiLocationMarker size={25} className="contactus-icons"/>
  <stronger> location abhi nhi malum hai</stronger>
 </div>

</div>

</div>
</div>

  )
}
export default Contact