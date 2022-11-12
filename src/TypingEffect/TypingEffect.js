import React from 'react'
import Typewriter from 'typewriter-effect'

function TypingEffect() {
  return (
   <Typewriter
  options={{
    strings: ['Welcome To KKS Vidhya Mandir', 'The Great Aim of Education is not Knowledge, But Action','We Help You to Learn New Things'],
    autoStart: true,
    loop: true,
  }}
/>
  )
}

export default TypingEffect