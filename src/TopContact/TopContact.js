import React from 'react'
import './TopContact.css'
import {FiMail,FiClock} from 'react-icons/fi'
import{BsFacebook,BsInstagram,BsLinkedin,BsTwitter,BsYoutube} from 'react-icons/bs'

function TopContact() {
  return (
    <div className="box">
    <ul className='leftSide'>
     <li className='infoMail'><p><FiMail className='icon'/>info@kksvidhyamandir.com</p></li> 
     <li className='timing'><p><FiClock className='icon'/>(8:00 AM to 5:00 PM)</p></li>
    </ul>
    <ul className='rightSide'>
        <li><BsFacebook/></li>
        <li><BsInstagram/></li>
        <li><BsLinkedin/></li>
        <li><BsTwitter/></li>
        <li><BsYoutube/></li>
    </ul>
    </div>

  )
}

export default TopContact