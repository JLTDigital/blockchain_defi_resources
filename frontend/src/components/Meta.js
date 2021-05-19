import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, author, keywords }) => {
  return (
      <Helmet>
        <title>{title}</title>
        <meta name='descripton' content={description} />
        <meta name='author' content={author} />
        <meta name='keywords' content={keywords} />
      </Helmet>
  )
}

Meta.defaultProps = {
  title: 'JLTDigital | Home',
  description: 'JLTDigital, Personal website of Jonathan Taft, Fullstack Developer',
  author: 'Jonathan Taft',
  keywords: 'Web Developer, Mobile Developer, Javascript, Full Stack, HTML, CSS, React, MERN, Vuejs, Nextjs, Typescript'
}

export default Meta
