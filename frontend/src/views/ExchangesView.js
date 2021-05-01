import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Hero from '../components/Hero'
import Loader from '../components/Loader'
import Message from '../components/Message'
import ExchangeListCard from '../components/ExchangeListCard'
import { Row, Col } from 'react-bootstrap'

const ExchangesView = () => {

  const [exchanges, setExchanges] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    getExchanges()
  }, [])
  
  const getExchanges = () => {
    axios.get('/api/exchanges')
    .then(response => response.data)
    .then(data => setExchanges(data))
    .catch(error => setError(error))
  }

  return (
    <>
      <Hero heading='Exchanges' para='Best places to make your crypto purchases, trades, loans and build some crypto savings.' />
       {!exchanges ? (<Loader />) : (
        <Row className='mt-3'>
          {exchanges.map(exchange => (
            <Col key={exchange._id} className='p2' md={12}>
              <ExchangeListCard exchange={exchange} />
            </Col>  
          ))}
        </Row>
       )}
       {error ? (<Message>{error}</Message>) : ''}
    </>
  )
}

export default ExchangesView
