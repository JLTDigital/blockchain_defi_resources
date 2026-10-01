import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Meta from '../components/Meta'
import axios from 'axios'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Row, Col, Image } from 'react-bootstrap'

const WalletView = () => {

  const [wallets, setWallets] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    onRender()
    getWallets()
  }, [])
  
  const getWallets = async () => {
    await axios.get('/api/wallets')
    .then(response => response.data)
    .then(data => setWallets(data))
    .catch(error => setError(error))
  }

  const onRender = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <Meta title='Blockchain & DeFi Resources | Wallets' />
      <Hero heading='Wallets' para='The best hardware and software wallets.' />
      {!wallets ? (<Loader />) : (
        <Row className='resource-grid mt-4'>
          {wallets.map(wallet => (
            <Col key={wallet.name} md={6} xl={4} className='d-flex'>
              <div className='main-card'>
                <a href={wallet.url} target="_blank" rel="noopener noreferrer" className='card-link'>
                  <Image className='mr-3' src={wallet.image} alt="Wallets" fluid='true' />
                  <div className='card-wrapper'>
                    <h3>{wallet.name}</h3>
                    <p>{wallet.description}</p>
                  </div>
                </a>
              </div>
            </Col>  
          ))}
        </Row>
       )}
       {error ? (<Message>{error}</Message>) : ''}
    </div>
  )
}

export default WalletView
