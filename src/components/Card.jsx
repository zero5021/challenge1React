import React from 'react'
import Button from 'react-bootstrap/Button';

const Card = ({image, product, description}) => {
  return (
    <div className='cards'>
      <img src={image} alt="" />
      <div className='content'>
        <h3>{product}</h3>
        <h5>{description}</h5>
        <Button variant="danger">Ver más</Button>{' '}
      </div>
    </div>
  )
}

export default Card