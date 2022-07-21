import React from 'react'
import Typewriter from 'typewriter-effect'

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Technologist',
          'Deep Learning Engineer',
          'MERN Stack Developer',
          'Blockchain Engineer',
          'Data Scientist',
          'Web 3 Architecture',
          'Cognitive Computing',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Type
