import React, { createContext, useReducer, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import './moduleCSS/header.css'

//Importing Images
import navImage from './resources/navnew3.jpg'
import nav2 from './resources/nav2.png'
import trainicon from './resources/trainicon.png'

//Importing Components
import HomeSlider from './components/HomeSlider';
import TrainList from './components/TrainList';
import SignUp from './components/SignUp';
import TicketBooking from './components/TicketBooking';
import PaymentMethod from './components/PaymentMethod';
import AdminSignIn from './components/AdminSignIn';
import PaytmPG from './components/PaytmPG';

import SBIBankPG from './components/SBIBank';
import ThankYouMessage from './components/ThankYouMessage';
import Login from './components/Login';
import Logout from './components/logout'
import {reducer, initialState} from '../src/reducer.js/UseReducer'
import NavBar from './components/NavBar';

export const UserContext=createContext()
// const image =[
//   url: 'https://as1.ftcdn.net/v2/jpg/03/57/67/14/1000_F_357671482_zjGUwAniQOO5n1moRYO1iv9Ztrqzu7Hj.jpg'
// ]

const App=()=> {
  const [state, dispatch] = useReducer(reducer, initialState)
  //const isLoggedIn=sessionStorage.getItem('token')
  
  
 
  const RenderMenu=()=>{
    const {state,dispatch} = useContext(UserContext)
    if(state){
      return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{width:1265, height: 60}}>
      <div className="collapse navbar-collapse">
        <ul className= "navbar-nav mr-auto">
          <li className= "navbar-item">
            <Link to="/" className="nav-link" style={{ color: "white" }}>
              <h4 style={{ fontFamily: "Harlow Solid Italic"}}><strong>Home</strong></h4>
            </Link>
          </li>
        </ul>
      </div>
      <div className="collapse navbar-collapse">
        <ul className= "navbar-nav mr-auto">
          <li className= "navbar-item">
            <Link to="/trainlist" className="nav-link" style={{ color: "white" }}>
              <h4 style={{ fontFamily: "Harlow Solid Italic"}}><strong>Trains Available</strong></h4>
            </Link>
          </li>
        </ul>
      </div>
      
      <div className="collapse navbar-collapse">
        <ul className= "navbar-nav mr-auto">
          <li className= "navbar-item">
            <Link to="/booking" className="nav-link" style={{ color: "white" }}>
              <h4 style={{ fontFamily: "Harlow Solid Italic"}}><strong>Book Train Tickets</strong></h4>
            </Link>
          </li>        
        </ul>
      </div>
      {/* <div className="collapse navbar-collapse">
        <ul className= "navbar-nav mr-auto">
          <li className= "navbar-item">
            <Link to="/payment" className="nav-link" style={{ color: "white" }}>
              <h4 style={{ fontFamily: "Harlow Solid Italic"}}><strong>Payment Here</strong></h4>
            </Link>
          </li>
        </ul>
      </div> */}
      <div className="collapse navbar-collapse">
        <ul className= "navbar-nav mr-auto">
          <li className= "navbar-item">
            <Link to="/adminSignIn" className="nav-link" style={{ color: "white" }}>
              <h4 style={{ fontFamily: "Harlow Solid Italic"}}><strong>Admin</strong></h4>
            </Link>
          </li>
        </ul>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
      {/* LogIn Button */}
      <div className="collapse navbar-collapse">
        <ul className= "navbar-nav mr-auto">
          <li className= "navbar-item">
          <li className= "navbar-item">
                <Link to="/" className="Link" style={{ color: "white" }} onClick={Logout}>
                  <img src='https://cdn-icons.flaticon.com/png/128/3541/premium/3541911.png?token=exp=1640764761~hmac=9af56ce0ed658fa6a58369f114977a9d' style={{height:50}}/>
                </Link>
              </li>
          </li>
        </ul>
      </div>
      <div className="collapse navbar-collapse">
        <ul className= "navbar-nav mr-auto">
          <li className= "navbar-item">
            <Link to="/login" className="nav-link" style={{ color: "white" }}>
              <img src='https://cdn-icons.flaticon.com/png/128/3293/premium/3293473.png?token=exp=1640764653~hmac=cd4f78d16a7fd0e91c1e50c7f94749bf' style={{height:50}}/>
            </Link>
          </li>
        </ul>
      </div>
     
      </nav>
      )
    }
    else if(!state){
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{width:1265, height: 60}}>
      <div className="collapse navbar-collapse">
        <ul className= "navbar-nav mr-auto">
          <li className= "navbar-item">
            <Link to="/" className="nav-link" style={{ color: "white" }}>
              <h4 style={{ fontFamily: "Harlow Solid Italic"}}><strong>Home</strong></h4>
            </Link>
          </li>
        </ul>
      </div>
      <div className="collapse navbar-collapse">
        <ul className= "navbar-nav mr-auto">
          <li className= "navbar-item">
            <Link to="/trainlist" className="nav-link" style={{ color: "white" }}>
              <h4 style={{ fontFamily: "Harlow Solid Italic"}}><strong>Trains Available</strong></h4>
            </Link>
          </li>
        </ul>
      </div>
      
      {/* <div className="collapse navbar-collapse">
        <ul className= "navbar-nav mr-auto">
          <li className= "navbar-item">
            <Link to="/booking" className="nav-link" style={{ color: "white" }}>
              <h4 style={{ fontFamily: "Harlow Solid Italic"}}><strong>Book Train Tickets</strong></h4>
            </Link>
          </li>        
        </ul>
      </div> */}
      {/* <div className="collapse navbar-collapse">
        <ul className= "navbar-nav mr-auto">
          <li className= "navbar-item">
            <Link to="/payment" className="nav-link" style={{ color: "white" }}>
              <h4 style={{ fontFamily: "Harlow Solid Italic"}}><strong>Payment Here</strong></h4>
            </Link>
          </li>
        </ul>
      </div> */}
      <div className="collapse navbar-collapse">
        <ul className= "navbar-nav mr-auto">
          <li className= "navbar-item">
            <Link to="/adminSignIn" className="nav-link" style={{ color: "white" }}>
              <h4 style={{ fontFamily: "Harlow Solid Italic"}}><strong>Admin</strong></h4>
            </Link>
          </li>
        </ul>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {/* LogIn Button */}
        <div className="collapse navbar-collapse">
        <ul className= "navbar-nav mr-auto">
          <li className= "navbar-item">
            <Link to="/login" className="nav-link" style={{ color: "white" }}>
              <img src='https://cdn-icons.flaticon.com/png/128/3293/premium/3293473.png?token=exp=1640764653~hmac=cd4f78d16a7fd0e91c1e50c7f94749bf' style={{height:50}}/>
            </Link>
          </li>
        </ul>
      </div>
      
     
      </nav>
      
      )
    }
  }
  return (
    
    <Router>
      <UserContext.Provider value={{state,dispatch}}>
      <div className="navImage">
        <div class="row">
          <div class="column">
            <img src={nav2} />  
          </div>
          <div class="column1">
          <img src={navImage}/>
          </div>
  
        </div>
      {/* <a href="">
       
        <img src={navImage}/>
        
      </a> */}
    </div>
    <RenderMenu/>
    

    {/* Switchiong Between Components */}
    
      <Switch>
        <Route path="/" exact component={HomeSlider}/>
        <Route path="/trainlist" exact component={TrainList}/>
        <Route path="/signUp" exact component={SignUp}/>
        <Route path="/booking" exact component={TicketBooking}/>
        <Route path="/payment" exact component={PaymentMethod}/>
        <Route path="/adminSignIn" exact component={AdminSignIn}/>
        <Route path="/submitPaymentDetail" exact component={PaytmPG}/>
        <Route path="/sbipg" exact component={SBIBankPG}/>
        <Route path="/thankyou" exact component={ThankYouMessage}/>
        <Route path="/login" exact component={Login}/>
      </Switch> 

      <div className="footer" style={{ 'backgroundImage': `url('https://as1.ftcdn.net/v2/jpg/03/60/98/86/1000_F_360988603_WHuKjgvF4GuqSMtGW2g4X56EYL7Qy5WK.jpg')`, width: 1265, height: 70}}>
        <center>
          {" "}
          <div>
            <img src={trainicon} width="40"/>{" "}
          </div>{" "}
          <div style={{color: "white"}}></div>
          <p style={{color:'white',fontFamily: 'Chiller'}}><strong>&copy; {new Date().getFullYear()} Devloped By Bhartesh</strong></p>
        </center>
      </div>
     
      </UserContext.Provider>
    </Router>
   
  );
}

export default App;