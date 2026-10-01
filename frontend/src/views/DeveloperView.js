import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Meta from '../components/Meta'
import axios from 'axios'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Row, Col, Image } from 'react-bootstrap'

const DeveloperView = () => {

  const [developers, setDevelopers] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    getDevelopers()
  }, [])
  
  const getDevelopers = async () => {
    await axios.get('/api/developer')
    .then(response => response.data)
    .then(data => setDevelopers(data))
    .catch(error => setError(error))
  }

  return (
    <div>
      <Meta title='Blockchain & DeFi Resources | Developers' />
      <Hero heading='Developers' para='Languages, tools and development resources to help ypu build your own Dapps and learn Blockchain development.' />
      {!developers ? (<Loader />) : (
        <Row className='resource-grid mt-4'>
          {developers.map(developer => (
            <Col key={developer.name} md={6} xl={4} className='d-flex'>
              <div className='main-card'>
                <a href={developer.url} target="_blank" rel="noreferrer" className='card-link'>
                  <Image className='mr-3' src={developer.image} alt="developer" fluid='true'/>
                  <div className='card-wrapper'>
                    <h3>{developer.name}</h3>
                    <p>{developer.description}</p>
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

export default DeveloperView
