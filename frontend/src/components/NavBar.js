import React, { Component,useContext } from 'react'
import {UserContext} from '../App'

import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";


//Importing Images
import trainicon from '../../src/resources/trainicon.png'
import login from '../../src/resources/navLogin.png'
import logout from '../../src/resources/navLogout.png'
//Importing Components
import "../../src/moduleCSS/nav.css"
import Logout from './logout';
import navImage from '../../src/resources/navnew3.jpg'
import nav2 from '../../src/resources/nav2.png'
import axios from 'axios';
//import {reducer, initialState} from '../src/reducer.js/UseReducer'



 class  NavBar extends Component {
  // state={};
  // componentDidMount(){
  //  //axios.get('http://localhost:8682/auth')
  //  const config={
  //    headers: {
  //     Authorization: 'Bearer '+ localStorage.getItem('token'),
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  //    }
  //  };
  //  axios.get('http://localhost:8682/dashboard',config).then(
  //    res=>{
  //      this.setState({
  //        user: res.data
  //      })
  //      console.log(res)
  //    },
  //    err=>
  //    {
  //      console.log(err)
  //    }
  //  )
  // }
  
  render(){
    let button;
    if(this.props.user){
      button=(
      <ul>
      <li>
      
          <a className='active' href='/'>Home</a>
      </li>&nbsp;
      <li><a href='/trainlist'>Train List</a></li>
      <li><a href='/booking'>Book Ticket</a></li>
      
      {/* Login */}
      {/* <li><Link to="/login" className="nav-link" style={{ color: "white" }}>
            <img src={login} style={{height:50}}/>
            </Link> 
      </li>*/}
     {/* LogOut */}
     <li><Link to={'/'} className="nav-link" onClick={Logout}><img src={logout} style={{height:50}}/></Link></li>
      
     
  </ul>
  )
    }
    else{
      button= (
        <ul>
                <li>
                
                    <a className='active' href='/'>Home</a>
                </li>&nbsp;
                <li><a href='/trainlist'>Train List</a></li>
                {/* <li><a href='/booking'>Book Ticket</a></li> */}
                <li><a href='/adminSignIn'>Admin</a></li>
                {/* Login */}
                <li><Link to="/login" className="nav-link" style={{ color: "white" }}>
                      <img src={login} style={{height:50}}/>
                      </Link>
                </li>
               {/* LogOut */}
               {/* <li><Link to='/' className="nav-link" onClick={Logout}><img src={logout} style={{height:50}}/></Link></li> */}
                
               
            </ul>
      )
    }
        return (
         
     
    <div className="wrap">
            <nav>
              <div className="logo">
              
              <h3> <strong> Railway  &nbsp; Reservation &nbsp;  System</strong></h3>
              </div>
              {button}
              
            </nav>
      </div>
        )
      }
}

export default NavBar
