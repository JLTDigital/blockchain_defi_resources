import React from 'react'
import { useLocation } from 'react-router-dom'

const PageTransition = ({ children }) => {
  const { pathname } = useLocation()

  return (
    <div key={pathname} className='page-fade'>
      {children}
    </div>
  )
}

export default PageTransition
