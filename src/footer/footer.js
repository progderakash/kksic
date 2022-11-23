import React from 'react'
import {ImFacebook} from 'react-icons/im'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="icons">
        <div className="footer-icon"> <ImFacebook/></div>
        <div className="footer-icon"> <ImFacebook/></div>
        <div className="footer-icon"> <ImFacebook/></div>
      </div>
    
      <hr />
      <br />
    <div className="newsletter">
      
        <div><label style={{color:"white", fontSize:"20px"}}>Sign up for our newsletter :</label></div>
        <div><input  type="email" name="email" id="email" placeholder="Email address" style={{width:"250px", padding:"5px"}} /></div>
        <div><button className='subscribe-btn'>Subscribe</button></div>
      
    </div>
     <hr style={{marginTop:"20px"}} />
     <br />

<div className="copyright"><h6>KKSIC Copyright © 2022 KKS Inter College - All rights reserved <br/> || Designed By: Progder ||</h6></div>


    </div>
  )
}

export default Footer