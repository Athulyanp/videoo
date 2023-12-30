import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Landingpage() {

  // useNavigate is hook

  const navigate=useNavigate()

  const handleNavigate=()=>{
    // navigate to home
    navigate('/home')
  }


  return (
    <div>
      <Row className='align-items-center'>
        <Col></Col>
        <Col lg={6}>
          <h1>Welcome To Video.com</h1>
          <p style={{ textAlign: "justify" }}>when user can use their favorite videos,user can upload any youtube videos by copy and paste their url.  video.com will allowed to add and remove their uploaded videos and also arrange then in different categories by drag ang drop.it is free.Try it's now!!!!
          </p>
          <button onClick={handleNavigate}    className='btn btn-success'>Click here to know more!!!</button>

        </Col>
        <Col lg={4}>
          <img className='img-fluid ms-5 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xhmofQFD4pErQARuw_DpdFXgkHAUSXF89g&usqp=CAU" width={"1000px"} height={"300px"} alt="" />
        </Col>
        <Col></Col>

      </Row>
    </div>
  )
}

export default Landingpage