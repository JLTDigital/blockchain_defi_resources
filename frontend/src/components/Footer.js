import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BlockchainDeFiImg from '../assets/blockchainDefi.png'
import { BiEnvelopeOpen } from 'react-icons/bi'

const Footer = () => {
  return (
    <footer className='site-footer'>
      <Container>
        <div className='footer-bar'>
          <Link to='/' className='footer-brand'>
            <img className='footer-img' src={BlockchainDeFiImg} alt='' />
            <span>Blockchain &amp; DeFi Resources</span>
          </Link>
          <p className='footer-meta'>
            <span>&copy; 2026</span>
            <a href='http://jlt.digital' target='_blank' rel='noopener noreferrer'>
              Built by JLTDigital
              <BiEnvelopeOpen aria-hidden='true' />
            </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
