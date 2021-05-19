import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import BlockchainDeFiImg from '../assets/blockchainDefi.png'
import { BiLinkExternal, BiEnvelopeOpen } from 'react-icons/bi'

const Footer = () => {
  return (
    <footer className='footer bg-light mt-3'>
      <Container>
        <Row className='py-2 text-center'>
          <Col md={6} className='p-2 mt-2'>
            <img className='footer-img' src={BlockchainDeFiImg} alt="Logo"/>
            <small className='ml-1 footer-title'>Blockchain & DeFi Resources &copy; 2021</small>
          </Col>
          <Col md={6} className='p-2 mt-2 text-center'>
            <small>Built by JLTDigital - Fullstack Developer</small>
            <br/>
            <small>Issues: <a href="https://github.com/JLTDigital/blockchain_defi_resources">
              <BiLinkExternal color='#000' />
            </a> 
            </small>
            <br/>
            <small>Contact me: <a href="http://jlt.digital">
            <BiEnvelopeOpen color='#000' />
            </a>
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
