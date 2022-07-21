import React from 'react'
import Card from 'react-bootstrap/Card'
import { ImHeart } from 'react-icons/im'

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hello I am <span className='purple'>John Morgan Broaddus </span>
            from <span className='purple'> Austin, Texas</span>
            <br />
            <br />
            <b>
              I am a Technologist and Software Engineer experienced in the
              technologies that matter, present day, present time. I am an
              Innovated thinker excited to bring new ideas and bespoke solutions
              to your business, product, and service.
            </b>
            <br />
            <br />
            Apart from programming, I also enjoy
          </p>
          <ul>
            <li className='about-activity'>
              <ImHeart /> Playing Chess
            </li>
            <li className='about-activity'>
              <ImHeart /> Mathemathics
            </li>
            <li className='about-activity'>
              <ImHeart /> Producing Music
            </li>
          </ul>

          <p style={{ color: '#0671b7' }}>Do Everything In Love </p>
          <br />
          <p style={{ color: '#0671b7' }}>Live Long and Prosper </p>
          <footer className='blockquote-footer'>Dr. Spock</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
