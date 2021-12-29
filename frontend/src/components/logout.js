import React, { useContext} from 'react'
import {UserContext} from '../App'

const Logout = () => { // export function from module 
    const {state,dispatch} = useContext(UserContext)
    var session=sessionStorage.getItem('token')
    if(session!==null){
        dispatch({type:"USER", payload: false})
        sessionStorage.removeItem("token");
        alert("You have been logged Out")
        
        
    }
    else{
        alert("Please Login First")
      
    }
    
  }
  export default Logout
  