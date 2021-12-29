import React, { useContext} from 'react'
import {UserContext} from '../App'

const Logout = () => { // export function from module 
    var session=sessionStorage.getItem('token')
  // const {state,dispatch} = useContext(UserContext)
   
    console.log(session)
    if(session!==null){
         //dispatch({type:"USER", payload:false})
        sessionStorage.removeItem("token");
        alert("You have been logged Out")
        
        
    }
    else{
        alert("Please Login First")
      
    }
    
  }
  export default Logout
  