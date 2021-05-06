import React from 'react'
import { Col, Row, Alert } from 'react-bootstrap'
import BlockchainDeFiImg from '../assets/blockchainDefi.png'
import Cyborg1 from '../assets/cyborg1.png'
import Cyborg2 from '../assets/cyborg2.png'
import { VFXImg } from 'react-vfx'
import Hero from '../components/Hero'

const HomeView = () => {
  return (
    <div>
      <Hero heading={'Blockchain & DeFi Resources'} para='A site to guide & inform. Find your way in the Blockchain and DeFi space.'/>
      <Row>
        <Col className='p-2 mx-auto text-center'>
          <VFXImg shader='rgbGlitch' className='home-img' src={BlockchainDeFiImg} alt="Blockchain & DeFi"/>
        </Col>
      </Row>
      <section className='home-section-1'>
        <Row className='mt-2'>
          <Col md={6} className='p-4'>
            <div className='wrapper'>
              <h3 className='' style={{ color: '#03ffc5'}}>New to this space?</h3>
              <p>Don't know what Blockchains are or how they work? <br/>Don't understand what Ethereum is or what it does? <br/>Interested in DeFi but don't know where to start?</p>
              <br/>
              <p>Don't worry you can find all this information right here..</p>
            </div>
          </Col>
          <Col md={6} className='p-2 text-center'>
            <img className='home-section-img' src={Cyborg1} alt="New to this space."/>
          </Col>
        </Row>
      </section>
      <section className='home-section-2'>
        <Row className='mt-2 home-section-2'>
          <Col md={6} className='p-2 text-center'>
            <img className='home-section-img' src={Cyborg2} alt="New to this space."/>
          </Col>
          <Col md={6} className='p-4'>
            <div className='wrapper'>
              <h3 className='mt-2' style={{ color: '#03ffc5'}}>Information & links to get you started if your new to this space</h3>
              <p>If your new to this space have a look around and learn about blockchain technology, Ethereum and DeFi. Find some helpful links to applications, websites and materials that you can use to help you find your way around crypto world</p>
            </div>
          </Col>
        </Row>
      </section>
      <section className='home-section-3 mt-5'>
        <Row className='mt-2'>
          <Col md={12} className='p-3'>
            <Alert className='p-3' variant='success' >
              <h3 style={{ color: '#000'}}>Updates</h3>
              <p style={{ color: '#000'}}>This site will be updated as frequently as possible with new information and links. This is a fast paced area with new protocols and projects emerging and evolving so keeping up will be tricky</p>
            </Alert>
          </Col> 
          <Col md={12} className='p-3'>
            <Alert className='p-3' variant='danger'>
              <h3 style={{ color: '#000'}}>Remember...</h3>
              <p style={{ color: '#000'}}>If you are engaging in a DeFi project, buying crypto currency or moving money between wallets, always ensure you are have researched and understand what you are doing. Please be aware that you should only carry out transactions with the genuine projects, smart contracts and wallet addresses. Make sure you know where your money is going.</p>
            </Alert>
          </Col> 
        </Row>
      </section>
    </div>
  )
}

export default HomeView
