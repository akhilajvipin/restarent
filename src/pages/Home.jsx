import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Restcard from '../components/Restcard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurant } from '../redux/resturantSlice'




function Home() {
  const allRestaurant = useSelector((state)=>state.resturantSlice.allRestaurant)
   console.log(allRestaurant);

 const dispatch = useDispatch()

  useEffect(()=>{
  dispatch(fetchRestaurant())
  },[])

  return (
   <Row>
   
     {allRestaurant?.length>0?
       allRestaurant?.map((restaurant)=>( <Col className='px-5 py-3'sm={6} md={4} >
    <Restcard restaurant={restaurant}/>
    </Col>))
   :<p className='text-danger fw-bolder'>No Restarent available</p>
  }
 
   </Row>
  )
}

export default Home