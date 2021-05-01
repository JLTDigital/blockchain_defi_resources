import React from 'react'

export const ExchangeListCard = ({ exchange }) => {
  return (
    <div className='main-card mt-5 mb-3 p-2'>
      <a href={exchange.url} className='card-link'>
        <img className='mr-3' src={exchange.image} alt=""/>
        <div className='card-wrapper'>
          <h3>{exchange.name}</h3>
          <p>{exchange.description}</p>
        </div>
      </a>
    </div>
  )
}

export default ExchangeListCard