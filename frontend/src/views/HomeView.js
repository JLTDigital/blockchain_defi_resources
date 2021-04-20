import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BlockchainDeFiImg from '../assets/blockchainDefi.png'
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
      <Row className='mt-2'>
        <Col md={6} className='p-3'>
          <h2 style={{ color: '#03ffc5'}}>Information & links to get you started if your new to this space</h2>
          <p>This site will be updated as frequently as possible with new information and links. This is a fast paced area with new protocols and projects emerging and evolving so keeping up will be tricky</p>
        </Col>
        <Col md={6} className='p-3'>
          <h2 style={{ color: '#ff2a6d'}}>Remember...</h2>
          <p>If you are engaging in a DeFi project, buying crypto currency or moving money between wallets, always ensure you are have researched and understand what you are doing. Please be aware that you should only carry out transactions with the genuine projects, smart contracts and wallet addresses. Make sure you know where your money is going.
          <br/>
          <br/>  
          If you lose money through a mistake on your part, sorry but you were told...</p>
        </Col>
      </Row>
    </div>
  )
}

export default HomeView
