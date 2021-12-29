import React, { Component,useContext } from 'react'
import {UserContext} from '../App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
//import '../src/moduleCSS/header.css'

//Importing Images


//Importing Components
import HomeSlider from './HomeSlider';
import TrainList from './TrainList';
import SignUp from './SignUp';
import TicketBooking from './TicketBooking';
import PaymentMethod from './PaymentMethod';
import AdminSignIn from './AdminSignIn';
import PaytmPG from './PaytmPG';

import SBIBankPG from './SBIBank';
import ThankYouMessage from './ThankYouMessage';
import Login from './Login';
import Logout from './logout';
//import {reducer, initialState} from '../src/reducer.js/UseReducer'



 const NavBar =()=> {
    const {state,dispatch} = useContext(UserContext)
    const RenderMenu=()=>{
        
        if(state){
          return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{width:1265, height: 60}}>
          <div className="collapse navbar-collapse">
            <ul className= "navbar-nav mr-auto">
              <li className= "navbar-item">
                <Link to="/" className="Link" style={{ color: "white" }}>
                  <h4 style={{ fontFamily: "Harlow Solid Italic"}}><strong>Home</strong></h4>
                </Link>
              </li>
           
              <li className= "navbar-item">
                <Link to="/trainlist" className="Link" style={{ color: "white" }}>
                  <h4 style={{ fontFamily: "Harlow Solid Italic"}}><strong>Trains Available</strong></h4>
                </Link>
              </li>
            
              <li className= "navbar-item">
                <Link to="/booking" className="Link" style={{ color: "white" }}>
                  <h4 style={{ fontFamily: "Harlow Solid Italic"}}><strong>Book Train Tickets</strong></h4>
                </Link>
              </li>        
            
          {/* <div className="collapse navbar-collapse">
            <ul className= "navbar-nav mr-auto">
              <li className= "navbar-item">
                <Link to="/payment" className="Link" style={{ color: "white" }}>
                  <h4 style={{ fontFamily: "Harlow Solid Italic"}}><strong>Payment Here</strong></h4>
                </Link>
              </li>
            </ul>
          </div> */}
          
              <li className= "navbar-item">
                <Link to="/adminSignIn" className="Link" style={{ color: "white" }}>
                  <h4 style={{ fontFamily: "Harlow Solid Italic"}}><strong>Admin</strong></h4>
                </Link>
              </li>
           
              <li className= "navbar-item">
                <Link to="/" className="Link" style={{ color: "white" }} onClick={Logout}>
                  <img src='https://cdn-icons-png.flaticon.com/512/1828/1828445.png' style={{height:50}}/>
                </Link>
              </li>
            </ul>
          </div>
         
          
         
          </nav>
          )
        }
        else {
          return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{width:1265, height: 60}}>
          <div className="collapse navbar-collapse">
            <ul className= "navbar-nav mr-auto">
              <li className= "navbar-item">
                <Link to="/" className="Link" style={{ color: "white" }}>
                  <h4 style={{ fontFamily: "Harlow Solid Italic"}}><strong>Home</strong></h4>
                </Link>
              </li>
           <br/>&nbsp;
              <li className= "navbar-item">
                <Link to="/trainlist" className="Link" style={{ color: "white"}}>
                  <h4 style={{ fontFamily: "Harlow Solid Italic",marginLeft:20,marginTop:0 }}><strong>Trains Available</strong></h4>
                </Link>
              </li>
            
              <li className= "navbar-item">
                <Link to="/booking" className="Link" style={{ color: "white" }}>
                  <h4 style={{ fontFamily: "Harlow Solid Italic",marginLeft:20,marginTop:0 }}><strong>Book Train Tickets</strong></h4>
                </Link>
              </li>        
            
          {/* <div className="collapse navbar-collapse">
            <ul className= "navbar-nav mr-auto">
              <li className= "navbar-item">
                <Link to="/payment" className="Link" style={{ color: "white" }}>
                  <h4 style={{ fontFamily: "Harlow Solid Italic"}}><strong>Payment Here</strong></h4>
                </Link>
              </li>
            </ul>
          </div> */}
          
              <li className= "navbar-item">
                <Link to="/adminSignIn" className="Link" style={{ color: "white" }}>
                  <h4 style={{ fontFamily: "Harlow Solid Italic",marginLeft:20,marginTop:0 }}><strong>Admin</strong></h4>
                </Link>
              </li>
              <li className= "navbar-item">
                <Link to="/login" className="Link" style={{ color: "white" ,marginLeft:20,marginTop:0 }}>
                  <img src='https://cdn-icons.flaticon.com/png/128/3293/premium/3293473.png?token=exp=1640690016~hmac=ccf58912aa206dd528b7a89d41368969' style={{height:50}}/>
                </Link>
                </li>
              {/* <li className= "navbar-item">
                <Link to="/" className="Link" style={{ color: "white" }} onClick={Logout}>
                  <img src='https://cdn-icons-png.flaticon.com/512/1828/1828445.png' style={{height:50}}/>
                </Link>
              </li> */}
            </ul>
          </div>
         
          
         
          </nav>
          
          )
        }
      }
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{width:1265, height: 60}}>
      <div className="collapse navbar-collapse">
        <ul className= "navbar-nav mr-auto">
          <RenderMenu/>
        </ul>
      </div>
     
      
     
      </nav>
        )
    
}

export default NavBar
