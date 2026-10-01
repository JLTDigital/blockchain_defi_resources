import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Meta from '../components/Meta'
import axios from 'axios'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Row, Col, Image } from 'react-bootstrap'


const LinksView = () => {

  const [links, setLinks] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    getLinks()
  }, [])
  
  const getLinks = async () => {
    await axios.get('/api/links')
    .then(response => response.data)
    .then(data => setLinks(data))
    .catch(error => setError(error))
  }

  return (
    <div>
      <Meta title='Blockchain & DeFi Resources | Links' />
      <Hero heading='Links' para='An assortment of links you might find helpful.' />
      {!links ? (<Loader />) : (
        <Row className='resource-grid mt-4'>
          {links.map(link => (
            <Col key={link.name} md={6} xl={4} className='d-flex'>
              <div className='main-card'>
                <a href={link.url} target="_blank" rel="noreferrer" className='card-link'>
                  <Image className='mr-3' src={link.image} alt="Links" fluid='true' />
                  <div className='card-wrapper'>
                    <h3>{link.name}</h3>
                    <p>{link.description}</p>
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

export default LinksView
