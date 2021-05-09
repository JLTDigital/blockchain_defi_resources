import React from 'react'
import Eth from '../assets/ethereum.png'
import Hero from '../components/Hero'
import { Col, Row } from 'react-bootstrap'


const EthereumView = () => {
  return (
    <div>
      <Hero heading='Ethereum' />

      <Row>
        <Col md={12} className='p-4 text-center'>
          <img className='ethereum' src={Eth} alt="Ethereum"/>
        </Col>
      </Row>

      <Row className='mt-1'>
          <Col md={12} className='p-4'>
            <div className='wrapper'>
              <h3 style={{ color: '#03ffc5'}}>Ethereum</h3>
              <p>
              Ethereum is an open-source, blockchain-based, decentralized platform that is used for its own cryptocurrency, Ether, as well as enabling the use of Smart Contracts and Distributed Applications (ĐApps) to be built and run without any downtime, fraud, control, or interference from a third party.
              </p>
            </div>
          </Col>
        </Row>
    </div>
  )
}

export default EthereumView
