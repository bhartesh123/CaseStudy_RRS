import React, { createContext, useReducer, useContext, Component } from 'react';
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
import axios from 'axios';
import SBIBankPG from './components/SBIBank';
import ThankYouMessage from './components/ThankYouMessage';
import Login from './components/Login';
import Logout from './components/logout'
import {reducer, initialState} from '../src/reducer.js/UseReducer'
import NavBar from './components/NavBar';
import AddTrain from './components/AddTrain';
import paytm from './components/paytm';
import LogInCls from './components/LogInCls';
import { render } from 'react-dom';
import deleteTrain from './components/deleteTrain';

// export const UserContext=createContext()
// const image =[
//   url: 'https://as1.ftcdn.net/v2/jpg/03/57/67/14/1000_F_357671482_zjGUwAniQOO5n1moRYO1iv9Ztrqzu7Hj.jpg'
// ]

class App extends Component {
 
  //const isLoggedIn=sessionStorage.getItem('token')
  state={};
  componentDidMount(){
   //axios.get('http://localhost:8682/auth')
   const config={
     headers: {
      Authorization: 'Bearer '+ sessionStorage.getItem('token'),
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
     }
   };
   axios.get('dashboard',config).then(
     res=>{
       this.setState({
         user: res.data
       })
       console.log(res)
     },
     err=>
     {
       console.log(err)
     }
   )
  }
  render() {
 

  return (
    
    <Router>
       
    {/* <RenderMenu/> */}
    
    <NavBar user={this.state.user}/>
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
        <Route path="/login" exact component={LogInCls}/>
        <Route path="/addTrain" exact component={AddTrain}/>
        <Route path="/delTrain" exact component={deleteTrain}/>
        
      </Switch> 

      {/* <div className="footer" style={{ 'backgroundImage': `url('https://as1.ftcdn.net/v2/jpg/03/60/98/86/1000_F_360988603_WHuKjgvF4GuqSMtGW2g4X56EYL7Qy5WK.jpg')`, width: 1265, height: 70}}>
        <center>
          {" "}
          <div>
            <img src={trainicon} width="40"/>{" "}
          </div>{" "}
          <div style={{color: "white"}}></div>
          <p style={{color:'white',fontFamily: 'Chiller'}}><strong>&copy; {new Date().getFullYear()} Devloped By Bhartesh</strong></p>
        </center>
      </div> */}
     
      
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
      
    </Router>
    
  );
    }
}

export default App;