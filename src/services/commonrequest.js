

import axios from "axios";


// create a function for common api request
// body in post method
//axois is a library
 export const commonRequest=async (method,url,body)=>{

    // request configurationis done as an Object

    let reqConfig={
        method,
        //method means get,put,post,delete
        url,
        //"http://localhost:4000"
        data:body,
        //normal data:"content-Type":"application/json"
        //file upload content : multipart/form-data
        headers:{
            "content-Type":"application/json"
        }
    }
    
    //create axios instance
    // getting response
     // resolved state
      //api call 
    return  await axios(reqConfig).then((response)=>{

        return response
    })
    //reject state
    .catch((err)=>{
        return err
    })



}