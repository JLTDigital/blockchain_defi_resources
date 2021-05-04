import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import axios from 'axios'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Row, Col } from 'react-bootstrap'

const LiteratureView = () => {

  const [literatures, setLiteratures] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    getLiterature()
  }, [])
  
  const getLiterature = async () => {
    await axios.get('/api/literature')
    .then(response => response.data)
    .then(data => setLiteratures(data))
    .catch(error => setError(error))
  }

  return (
    <div>
      <Hero heading='Literature' para='Great books to help build your understanding and discover new things about Blockchain technology, Crypto and DeFi.' />
      {!literatures? (<Loader />) : (
        <Row className='mt-3'>
          {literatures.map(literature => (
            <Col key={literature._id} className='p2' md={12}>
              <div className='main-card mt-5 mb-3 p-2'>
                <a href={literature.url} className='card-link'>
                  <img className='mr-3' src={literature.image} alt=""/>
                  <div className='card-wrapper'>
                    <h3>{literature.name}</h3>
                    <p>{literature.description}</p>
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

export default LiteratureView
