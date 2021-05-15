import React from 'react'
import Eth from '../assets/ethereum.png'
import Hero from '../components/Hero'
import { VFXImg } from 'react-vfx'
import { Col, Row } from 'react-bootstrap'
import { BiLinkExternal } from 'react-icons/bi'


const EthereumView = () => {
  return (
    <div>
      <Hero heading='Ethereum' />

      <Row>
        <Col md={12} className='p-4 text-center'>
          <VFXImg shader='rgbGlitch' className='ethereum' src={Eth} alt="Ethereum"/>
        </Col>
        <Col md={12} className='p-2 text-center'>
          <h6 style={{ color: '#fff' }}>You can find out more about Ethereum over on their website 
          <a className='p-2' href="https://ethereum.org/en/">
            <BiLinkExternal color='#03ffc5' />
          </a> 
          </h6>
        </Col>
      </Row>

      <Row className='mt-1'>
          <Col md={12} className='p-4'>
            <div className='wrapper'>
              <h3 style={{ color: '#03ffc5'}}>Ethereum</h3>
              <p>
              Ethereum is an open-source, blockchain-based, decentralized platform that is used for its own cryptocurrency, Ether, as well as enabling the use of Smart Contracts and Distributed Applications (ĐApps) to be built and run without any downtime, fraud, control, or interference from a third party.
              <br />
              <br />
              The community working on Ethereum has built a booming digital economy which is creating new ways for people to earn, create and work.
              </p>
            </div>
          </Col>
          <Col md={12} className='p-4'>
            <div className='wrapper'>
              <h3 style={{ color: '#03ffc5'}}>Ethereum Virtual Machine (EMV)</h3>
              <p>
              The Ethereum Virtual Machine (EVM) is the runtime environment for smart contracts in Ethereum. It is a 256-bit register stack designed to run the same code exactly as intended. It is the fundamental consensus mechanism for Ethereum.
              <br />
              <br />
              <span style={{ fontStyle: 'italic' }}>
              "The Ethereum protocol itself exists solely for the purpose of keeping the continuous, uninterrupted, and immutable operation of this machine. The EVM is the environment in which all Ethereum accounts and smart contracts live, and at any given block in the chain, Ethereum has one and only one 'canonical' state, and the EVM is what defines the rules for computing a new valid state from block to block.""
              </span>
              </p>
            </div>
          </Col>
          <Col md={12} className='p-4'>
            <div className='wrapper'>
              <h3 style={{ color: '#03ffc5'}}>Smart Contracts</h3>
              <p>
              Ethereum supports Smart Contracts and they are one of the core functions of the platform. A smart contract is a self-executing contract with the terms of the agreement between buyer and seller being directly written into lines of code. This code exists across a decentralized blockchain network, which in this case is the Ethereum blockchain. 
              <br />
              <br />
              Smart contracts are typically written in the programming language Solidity, which is the most popular as well as Vyper, a lanuguage based off the Python language.
              </p>
            </div>
          </Col>
          <Col md={12} className='p-4'>
            <div className='wrapper'>
              <h3 style={{ color: '#03ffc5'}}>Dapps</h3>
              <p>
              Decentralised applications have grown massivly in recent times and are now growing in capability to disrupt traditional businesses and create new types of businesses.
              </p>
            </div>
          </Col>
          <Col md={12} className='p-4'>
            <div className='wrapper'>
              <h3 style={{ color: '#03ffc5'}}>Non-Fungible Tokens (NFTs)</h3>
              <p>
              Ethereum supports Smart Contracts and they are one of the cornestones of the platform. A smart contract is a self-executing contract with the terms of the agreement between buyer and seller being directly written into lines of code. The code and the agreements contained therein exist across a distributed, decentralized blockchain network, which in this case is the Ethereum blockchain.
              </p>
            </div>
          </Col>
        </Row>
    </div>
  )
}

export default EthereumView
