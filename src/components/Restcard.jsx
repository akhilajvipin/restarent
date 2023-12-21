import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Restcard({restaurant}) {
  return (
    <div> 
        <Link to={`restarent_view/${restaurant.id}`} style={{textDecoration:'none'}}>
        <Card style={{ width: '100%' }}>
    <Card.Img  height={350} variant="top" src={restaurant.photograph} />
    <Card.Body>
      <Card.Title className='text-center text-warning'>{restaurant.name}</Card.Title>
      <hr />
      <Row className='p-4'>
      <Col className='ms-4'>
      <Card.Text>
        {restaurant.neighborhood} 
      </Card.Text>
        </Col>

        <Col className='ms-4'>
      <Card.Text>
      cuisine_type: {restaurant.cuisine_type}
      </Card.Text>
        </Col>
        
      </Row>
    </Card.Body>
  </Card>
  </Link>
  </div>
  )
}

export default Restcard