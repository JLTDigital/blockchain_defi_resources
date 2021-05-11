import React from 'react'
import Hero from '../components/Hero'
import { Row, Col } from 'react-bootstrap'

const DefiView = () => {
  return (
    <div>
      <Hero heading='DeFi' para='Decentralised Finance.' />

      <Row className='mt-1'>
          <Col md={12} className='p-4'>
            <div className='wrapper'>
              <h3 style={{ color: '#03ffc5'}}>What is Decentralised Finance (DeFi)</h3>
              <p>
              Decentralised Finance or DeFi for short is simply a term that refers to financial services such as borrowing, lending, and trading that are conducted on decentralised blockchain platforms as opposed to being carried out in the centralised manner of current financial services. Many of these functions can be conducted by something called Smart Contracts.
              </p>
            </div>
          </Col>
          <Col md={12} className='p-4'>
            <div className='wrapper'>
              <h3 style={{ color: '#03ffc5'}}>The purpose of DeFi</h3>
              <p>
              DeFi is pushing the accelerator on its attempts to create a financial system that is beyond centralised governance and instead gives people full control over their assets and be able to partake in the financial system that is open, fair, and built for the technological world we live in. As can be seen in this graph the DeFi space has skyrocketed in 2020 with the total value standing at $23.85 billion dollars as of 16th January 2021.
              </p>
            </div>
          </Col>
          <Col md={12} className='p-4'>
            <div className='wrapper'>
              <h3 style={{ color: '#03ffc5'}}>NFTs</h3>
              <p>
              Ethereum supports Smart Contracts and they are one of the cornestones of the platform. A smart contract is a self-executing contract with the terms of the agreement between buyer and seller being directly written into lines of code. The code and the agreements contained therein exist across a distributed, decentralized blockchain network, which in this case is the Ethereum blockchain.
              </p>
            </div>
          </Col>
        </Row>

    </div>
  )
}

export default DefiView
