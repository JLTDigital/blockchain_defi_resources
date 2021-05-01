import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import axios from 'axios'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Row, Col } from 'react-bootstrap'


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
      <Hero heading='Links' para='An assortment of links you might find helpful.' />
      {!links ? (<Loader />) : (
        <Row className='mt-3'>
          {links.map(link => (
            <Col key={link._id} className='p2' md={12}>
              <div className='main-card mt-5 mb-3 p-2'>
                <a href={link.url} className='card-link'>
                  <img className='mr-3' src={link.image} alt=""/>
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
