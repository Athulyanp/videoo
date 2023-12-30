import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Videocard from './Videocard'
import { getVideo } from '../services/allapi'
import { useEffect } from 'react'
import { useState } from 'react'

function View({serverRes}) {

  


  // create a state for holding api request

  const[allVideos,setallVideos]=useState([])

  // automatically show deleted item

  const[deleteStatus,setdeleteStatus]=useState(false)

  const handledeleteStatus=(res)=>{

    setdeleteStatus(res)
  }


  //hook used for getting data at the time of loading page
   
  useEffect(() => {
    //call back function body
    getallVideos()
    
  
   
  }, [serverRes,deleteStatus])
  
    
  const getallVideos=async()=>{
    let response =await getVideo()
   setallVideos(response.data);

  }
  console.log(allVideos);




  return (
    <div className='border p-3 rounted ms-5'>

        <Row>
          {
            allVideos.map(video=>(
            <Col className='ps-3 mb-3' sm={12} md={6}>
               <Videocard card={video} handledeleteStatus={handledeleteStatus} />
            </Col>
            ))
          }
        </Row>

    </div>
  )
}

export default View