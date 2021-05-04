import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import axios from 'axios'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Row, Col } from 'react-bootstrap'

const NftView = () => {

  const [nfts, setNfts] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    getNfts()
  }, [])
  
  const getNfts = async () => {
    await axios.get('/api/defi/nft')
    .then(response => response.data)
    .then(data => setNfts(data))
    .catch(error => setError(error))
  }

  return (
    <div>
      <Hero heading='Non-Fungible Tokens (NFTs)' para='What are NFTs?' />
      {!nfts? (<Loader />) : (
        <Row className='mt-3'>
          {nfts.map(nft => (
            <Col key={nft._id} className='p2' md={12}>
              <div className='main-card mt-5 mb-3 p-2'>
                <a href={nft.url} className='card-link'>
                  <img className='mr-3' src={nft.image} alt=""/>
                  <div className='card-wrapper'>
                    <h3>{nft.name}</h3>
                    <p>{nft.description}</p>
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

export default NftView
