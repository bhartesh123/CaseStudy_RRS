import axios from 'axios';
import React, { Component } from 'react'
const paymentApi="http://localhost:9090/"


const paytm =()=> {
    const pay=()=>{
        // axios
        // .get()
        // .then((response)=>{
            
        // })
        // .catch(function(error){
        //     console.log(error);
        // });
        
        fetch("http://localhost:9090/",{
            method:"GET",
            headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            'credentials': 'same-origin'
        })
        .then(response=>response.data)
    }
    
        return (
            
               pay()
            
        )
    
}

export default paytm
