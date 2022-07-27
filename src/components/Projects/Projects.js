import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import leaf from '../../Assets/projects/anime.png'
import emotion from '../../Assets/projects/ASAS.png'
import editor from '../../Assets/projects/cloud.png'
import chatify from '../../Assets/projects/Expense.png'
import suicide from '../../Assets/projects/quarantine.png'
import bitsOfCode from '../../Assets/projects/huawei.png'

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Body of <strong className='purple'>Work </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title='Expense Calculator'
              description='Using React hooks users can create and delete transactions that will return the income, expense, and grand total in USD. Hosted on Heroku. // MERN STACK.'
              ghLink='https://github.com/johnbroaddusivccv/hooked-expense-tracker'
              demoLink='https://hooked-expense-tracker.herokuapp.com/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title='Huawei Clone'
              description='ui ux principles huawei website // HTML, PURE CSS, JAVASCRIPT, PHP'
              ghLink='https://github.com/johnbroaddusivccv/huawei-clone'
              demoLink='https://johnbroaddusivccv.github.io/huawei-clone/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title='Cloud-website'
              description='Technology start up landing page. HTML, CSS, JAVASCRIPT, &amp; PHP Hosted on Netlify'
              ghLink='https://github.com/johnbroaddusivccv/cloud-website'
              demoLink='https://distracted-davinci-88ccab.netlify.app/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title='Anime-Matrix'
              description='Anime streaming multi media landing page built with hmtl, css, javascript, and php.'
              ghLink='https://github.com/johnbroaddusivccv/anime-matrix'
              demoLink='https://johnbroaddusivccv.github.io/anime-matrix/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title='Quarantine-Chat'
              description='a form of synchronous conferencing. MERN STACK. Hosted on Heroku.'
              ghLink='https://github.com/johnbroaddusivccv/discord-replica'
              demoLink='https://quarantinechat.herokuapp.com/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title='ASAS non-profit Organization'
              description='Website for a college organization that provides community service.  '
              ghLink='https://github.com/johnbroaddusivccv/asas-v2'
              demoLink='https://johnbroaddusivccv.github.io/asas-v2/'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
