import React from 'react'
import Hero from '../components/Hero'
import { Col, Row } from 'react-bootstrap'

const BlockchainView = () => {
  return (
    <div>
      <Hero heading='Blockchains' />

      <Row className='mt-2'>
          <Col md={12} className='p-4'>
            <div className='wrapper'>
              <h3 style={{ color: '#03ffc5'}}>What is a Blockchain?</h3>
              <p>
              A blockchain is a type of distributed ledger technology (DLT) where a digital ledger records transactions across an entire network that is linked to a particular blockchain. The digital information is stored in the block and distributed across the network like a chain, in a way that it can’t be changed or hacked. A record of each transaction on the blockchain is publicly recorded to the ledger of every participant.
              </p>
            </div>
          </Col>
          <Col md={12} className='p-4'>
            <div className='wrapper'>
              <h3 style={{ color: '#03ffc5'}}>How do they work?</h3>
              <p>
              Computers connected to the network or nodes as they are referred to, add new transcations to the blockchain in chronological order by performing mathematical calculations to generate new blocks containing the transaction information. Cryptographic hashing is used to ensure security of the information held, each block contains the hash used in the previous block which is then hashed. 
              </p>
            </div>
          </Col>
          <Col md={12} className='p-4'>
            <div className='wrapper'>
              <h3 style={{ color: '#03ffc5'}}>What are the advantages?</h3>
              <p>
              Computers connected to the network or nodes as they are referred to, add new transcations to the blockchain in chronological order by performing mathematical calculations to generate new blocks containing the transaction information. Cryptographic hashing is used to ensure security of the information held, each block contains the hash used in the previous block which is then hashed. 
              </p>
            </div>
          </Col>
        </Row>
    </div>
  )
}

export default BlockchainView
