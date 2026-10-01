import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Meta from '../components/Meta'
import axios from 'axios'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Row, Col, Image } from 'react-bootstrap'

const DappsView = () => {

  const [dapps, setDapps] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    onRender()
    getDapps()
  }, [])
  
  const getDapps = async () => {
    await axios.get('/api/defi/dapps')
    .then(response => response.data)
    .then(data => setDapps(data))
    .catch(error => setError(error))
  }

  const onRender = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <Meta title='Blockchain & DeFi Resources | Dapps' />
      <Hero heading='Dapps' para='Decentralised Applications' />
      {!dapps? (<Loader />) : (
        <Row className='resource-grid mt-4'>
          {dapps.map(dapp => (
            <Col key={dapp.name} md={6} xl={4} className='d-flex'>
              <div className='main-card'>
                <a href={dapp.url} target='_blank' rel="noreferrer" className='card-link'>
                  <Image className='mr-3' src={dapp.image} alt="dapp" fluid='true' />
                  <div className='card-wrapper'>
                    <h3>{dapp.name}</h3>
                    <p>{dapp.description}</p>
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

export default DappsView
