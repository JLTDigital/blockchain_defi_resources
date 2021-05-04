import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import axios from 'axios'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Row, Col } from 'react-bootstrap'

const GamesView = () => {

  const [games, setGames] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    getGames()
  }, [])
  
  const getGames = async () => {
    await axios.get('/api/defi/games')
    .then(response => response.data)
    .then(data => setGames(data))
    .catch(error => setError(error))
  }

  return (
    <div>
      <Hero heading='Games' para='Some of the best games right now, built on blockchains.' />
      {!games? (<Loader />) : (
        <Row className='mt-3'>
          {games.map(game => (
            <Col key={game._id} className='p2' md={12}>
              <div className='main-card mt-5 mb-3 p-2'>
                <a href={game.url} className='card-link'>
                  <img className='mr-3' src={game.image} alt=""/>
                  <div className='card-wrapper'>
                    <h3>{game.name}</h3>
                    <p>{game.description}</p>
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

export default GamesView
