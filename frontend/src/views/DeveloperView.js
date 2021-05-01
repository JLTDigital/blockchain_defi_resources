import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import axios from 'axios'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Row, Col } from 'react-bootstrap'

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
      <Hero heading='Developers' para='Languages, tools and development resources to help ypu build your own Dapps and learn Blockchain development.' />
      {!developers ? (<Loader />) : (
        <Row className='mt-3'>
          {developers.map(developer => (
            <Col key={developer._id} className='p2' md={12}>
              <div className='main-card mt-5 mb-3 p-2'>
                <a href={developer.url} className='card-link'>
                  <img className='mr-3' src={developer.image} alt=""/>
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
