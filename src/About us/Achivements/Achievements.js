import React from 'react'
import './achivements.css'
import CountUp from 'react-countup'
import{GiSandsOfTime} from 'react-icons/gi'
import {HiUserGroup,HiOutlineUserGroup,HiAcademicCap} from 'react-icons/hi'



const Achievements = () => {
  return (
    <div id='achivements'>
      <h2>Achivements</h2>
      <div className="achievements-counter">
      <div className="success-years achcount">
        <GiSandsOfTime className='achicons' size={40}/>
        <h4><CountUp end={10} start={0} delay={4}duration={2} /></h4><h4>Successfull years</h4>
      </div>
      <div className="students  achcount">
        <HiAcademicCap className='achicons' size={40} />
        <h4><CountUp end={37050} start={0}   delay={6}duration={4}/></h4><h4>Students Enrolled</h4>
      </div>
      
      <div className="parents  achcount">
        <HiOutlineUserGroup className='achicons' size={40} />
        <h4><CountUp end={30034} start={0}  delay={10}duration={4}  /></h4><h4>Happy Parents</h4>
      </div>
     
      <div className="teachers  achcount">
        <HiUserGroup className='achicons' size={40}/>
        <h4><CountUp end={28} start={0}  delay={14}duration={2}/></h4><h4>Certified Teachers</h4>
      </div>
      </div>
       </div>


  )
}

export default Achievements