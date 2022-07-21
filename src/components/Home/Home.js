import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import homeLogo from '../../Assets/logo.png'
import Particle from '../Particle'
import Home2 from './Home2'
import Type from './Type'

function Home() {
  return (
    <section>
      <Container fluid className='home-section' id='home'>
        <Particle />
        <Container className='home-content'>
          <Row>
            <Col md={7} className='home-header'>
              <h1 style={{ paddingBottom: 15 }} className='heading'>
                Technologist &amp; Software Engineer{' '}
              </h1>

              <h1 className='heading-name'>
                <strong className='main-name'> John Morgan Broaddus</strong>
              </h1>

              <div style={{ padding: 50, textAlign: 'left' }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                // src={homeLogo}
                src='https://media-exp1.licdn.com/dms/image/C5603AQEitrmFjaUIXA/profile-displayphoto-shrink_800_800/0/1608012996510?e=1663200000&v=beta&t=sY5enRptO76-e16harTeSyVPg3smvGPL4kVdZXaqPjg'
                alt='home pic'
                className='img-fluid'
                style={{ maxHeight: '450px', borderRadius: '50%' }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  )
}

export default Home
