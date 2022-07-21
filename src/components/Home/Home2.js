import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import myImg from '../../Assets/Icon.png'
import Tilt from 'react-parallax-tilt'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: '2.6em' }}>
              About <span className='purple'> Me, </span> &amp;
              <span className='purple'> Technology</span>
            </h1>
            <p className='home-about-body'>
              <br />
              <br />
              <b>I automate industries, services, and products.</b>
              <i>
                <b> I live the life of a computer scientist. </b>
              </i>
              <br />
              <br />
              <b>I currently teach Full Stack Flex Curriculum remote at </b>
              <a
                style={{
                  textDecoration: 'none',
                  color: '#eee',
                  fontSize: '1.2em',
                  fontFamily: 'sans-serif',
                  borderBottom: '1px, solid, red',
                }}
                href='https://2u.com/'
                target='blank'
              >
                2U
              </a>{' '}
              . &nbsp;
              <i>
                <b>
                  We deliver high-quality digital education at scale. <br></br>{' '}
                  <br></br>
                  We partner with non-profit universities and corporate partners{' '}
                  <b>to expand access to world class online education</b>{' '}
                  <b>
                    <strong>and unlock human potential.</strong>
                  </b>
                </b>{' '}
                <br></br>
                <br></br>
                <b>
                  Continuously learning about the identity and behaviours of
                  computing, physics, applied mathemathics, chemistry,
                  audio-engineering, astronomy, and chess.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className='purple'>Node.js</b> and
              <i>
                <b className='purple'>
                  {' '}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className='purple'> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={myImg} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1>YOUR NETWORK</h1>
            <p>
              IS <span className='purple'>YOUR </span> NETWORTH
            </p>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://github.com/johnbroaddusivccv'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://twitter.com/broaddusmedia'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/john-broaddus/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.youtube.com/channel/UCmxGTeuQ889sgXfZ1uy3zVQ'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'
                >
                  <AiFillYoutube />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Home2
