import React from 'react'
import { Card } from 'react-bootstrap'

const MainCard = ({ link, image, title, text }) => {
  return (
    <div className="feature-wrap">
      <Card className="feature-card">
        <a className="card-link" target="_blank" rel="noopener noreferrer" href={link}>
          <Card.Img variant="top" src={image} alt="" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {text}
            </Card.Text>
          </Card.Body>
        </a>
      </Card>
    </div>

  )
}

MainCard.defaultProps = {
  link: '',
  image: '',
  title: '',
  text: ''
}

export default MainCard
