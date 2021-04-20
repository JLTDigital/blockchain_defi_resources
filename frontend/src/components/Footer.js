import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='py-2 text-center'>
          <Col md={6} className='p-2'>
            <small>Blockchain & DeFi Resources &copy; 2021</small>
          </Col>
          <Col md={6} className='p-2'>
            <small>Built by JLTDigital - Fullstack Developer</small>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
