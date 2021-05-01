import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import axios from 'axios'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Row, Col } from 'react-bootstrap'

const DappsView = () => {

  const [dapps, setDapps] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    getDapps()
  }, [])
  
  const getDapps = async () => {
    await axios.get('/api/defi/dapps')
    .then(response => response.data)
    .then(data => setDapps(data))
    .catch(error => setError(error))
  }

  return (
    <div>
      <Hero heading='Dapps' para='Decentralised Applications' />
      {!dapps? (<Loader />) : (
        <Row className='mt-3'>
          {dapps.map(dapp => (
            <Col key={dapp._id} className='p2' md={12}>
              <div className='main-card mt-5 mb-3 p-2'>
                <a href={dapp.url} className='card-link'>
                  <img className='mr-3' src={dapp.image} alt=""/>
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
