import React from 'react'
import Exp from '../assets/blockchainDefi.png'

export const ListCard = () => {
  return (
    <div className='main-card mt-5 mb-3 p-2'>
      <img className='mr-3' src={Exp} alt=""/>
      <div className='card-wrapper'>
        <h3>Binance</h3>
        <p>Binance is a cryptocurrency exchange that provides a platform for buying and trading various cryptocurrencies. It also offers tutorials, derivatives, savings, trading, staking and loans</p>
        <small>https://www.binance.com/en</small>
      </div>
    </div>
  )
}

export default ListCard