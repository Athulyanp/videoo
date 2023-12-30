import React from 'react'
import { gethistory } from '../services/allapi'
import { useState } from 'react';
import { useEffect } from 'react';

function Watchhistory() {
    // to hold back end data
    const[history,sethistory]=useState([])
    const getwatchHistory=async()=>{
     const{data}= await  gethistory()
     sethistory(data)

    }
    console.log(history);
    useEffect(() => {
        getwatchHistory()
       
    }, [])
  return (
   
    
   <>
        <h1>
            Watchhistory
        </h1>
        <table className='table shadow m-3 rounded border'>
            <thead>
                 <tr>
                    <th>ID</th>
                    <th>CARD-NAME</th>
                    <th>URL</th>
                    <th>DATE</th>
                 </tr>
            </thead>
            <tbody>
                {
                    history.map((item,index)=>(
                        <tr>
                        <td>{index+1}</td>
                        <td>{item?.cardName}</td>
                        <td>{item?.url}</td>
                        <td>{item?.date}</td>
                    </tr>

                    ))

                }
              
            </tbody>

        </table>
   </>
  )
}

export default Watchhistory