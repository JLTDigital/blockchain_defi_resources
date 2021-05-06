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
          <Col md={12} className='p-3'>
            <div className='wrapper'>
              <h3 style={{ color: '#03ffc5'}}>Ethereum</h3>
              <p>
              A blockchain is a type of distributed ledger technology (DLT) where a digital ledger records transactions across an entire network that is linked to a particular blockchain. The digital information is stored in the block and distributed across the network like a chain, in a way that it can’t be changed or hacked. A record of each transaction on the blockchain is publicly recorded to the ledger of every participant.
              </p>
            </div>
          </Col>
        </Row>
    </div>
  )
}

export default EthereumView
