import React from 'react'
import Hero from '../components/Hero'
import { Col, Row } from 'react-bootstrap'

const BlockchainView = () => {
  return (
    <div>
      <Hero heading='Blockchain' />

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
              <br />
              <br />
              Due to the decentralized nature of blockchains, all transactions can be transparently viewed by either having a personal node or by using blockchain explorers that allow anyone to see transactions occurring live. Each node has its own copy of the chain that gets updated as new blocks are confirmed.
              </p>
            </div>
            <div className='text-center mt-5'>
              <a href='https://blockgeeks.com/graphics/'>
                <img className='blockchain-img' src='https://blockgeeks.com/wp-content/uploads/2019/05/transactioncycle.jpg' alt='Transaction Cycle' border='0' />
              </a>
            </div>
          </Col>
          <Col md={12} className='p-4'>
            <div className='wrapper'>
              <h3 style={{ color: '#03ffc5'}}>Web 3.0</h3>
              <p>
              We've had the start of the internet, Web 1.0. We have the current internet, Web 2.0, well next is what could be the future, Web 3.0. This is the backend revolution as some have called it and refers to the next evolutionary stage of the internet. 
              <br />
              <br />
              It is felt that the current web that supports platforms such as social media and other organisations which use our data as well as store this on central servers has brought about a disconnect between ourselves and our data. We no longer control our personal data online and through data sovereignity on decentralised networks a new stateful data layer can be created which will be key in trasferring and managing values. The frontend of the internet remains the same but behind the scenes the P2P networks and blockchains replace the centralised servers that companies hold our data on.
              <br />
              <br />
               Blockchains and decentralised protocols can expect a convergence that will be seemlessly intergrated and automated through smart contracts to power anything from the smallest transactions to changing the very very complanies operate their businessess.
               <br />
               <br />
               Just see below at some of the impacts Web 3 and blockchains can have.
              </p>
            </div>
            <div className='text-center mt-5'>
            Please include attribution to www.blockgeeks.com  with this graphic.
            <p><a href='https://blockgeeks.com/graphics/'><img className='blockchain-img' src='https://blockgeeks.com/wp-content/uploads/2019/05/web3.0blockchainbusiness.jpg' alt='Web 3 and Blockchain Businesses' border='0' /></a>
            </p>
            </div>
          </Col> 
          <Col md={12} className='p-4'>
            <div className='wrapper'>
              <h3 style={{ color: '#03ffc5'}}>How secure are Blockchains?</h3>
              <p>
              A blockchain is a type of distributed ledger technology (DLT) where a digital ledger records transactions across an entire network that is linked to a particular blockchain. The digital information is stored in the block and distributed across the network like a chain, in a way that it can’t be changed or hacked. A record of each transaction on the blockchain is publicly recorded to the ledger of every participant.
              </p>
            </div>
          </Col>
        </Row>
    </div>
  )
}

export default BlockchainView
