import React from 'react'
import Typewriter from 'typewriter-effect'

function TypingEffect() {
  return (
   <Typewriter
  options={{
    strings: ['Welcome To KKS Inter College...', 'The Great Aim of Education is not Knowledge, But Action...','We Help You to Learn New Things...'],
    autoStart: true,
    loop: true,
    
  }}
/>
  )
}

export default TypingEffect