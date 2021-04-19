import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='py-2 text-center'>
          <Col md={6} className='p-2'>
            <p>Blockchain & DeFi Resources &copy; 2021</p>
          </Col>
          <Col md={6} className='p-2'>
            <p>Built by JLTDigital - Fullstack Developer</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
