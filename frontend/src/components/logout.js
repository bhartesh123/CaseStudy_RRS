import React, { useContext} from 'react'
import { Redirect } from 'react-router-dom'
import {UserContext} from '../App'

const Logout = () => { // export function from module 
    var session=sessionStorage.getItem('token')
//    const {state,dispatch} = useContext(UserContext)
   
    console.log(session)
    if(session!==null){
        
        //  dispatch({type:"USER", payload:false})
        sessionStorage.clear();
        alert("You have been logged Out")
        window.location.reload()
       
        
    }
    else{
        alert("Please Login First")
      
    }
    
  }
  export default Logout
  