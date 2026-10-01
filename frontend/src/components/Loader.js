import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <Spinner className='page-loader' animation='grow' role='status' variant='info'>
      <span className='sr-only'>Loading...</span>
    </Spinner>
  )
}

export default Loader
