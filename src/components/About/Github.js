import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import { Row } from 'react-bootstrap'

function Github() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
      <h1 className='project-heading' style={{ paddingBottom: '20px' }}>
        Github Contributions <strong className='purple'>2022</strong>
      </h1>
      <GitHubCalendar
        username='johnbroaddusivccv'
        blockSize={15}
        blockMargin={5}
        color='#0671b7'
        fontSize={16}
      />
    </Row>
  )
}

export default Github
