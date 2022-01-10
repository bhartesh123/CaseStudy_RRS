import React, { Component, useContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import "../../src/moduleCSS/header.css";
import nav1 from "../../src/resources/ticket1.jpg";
import paytm from './paytm';
import {UserContext} from '../App'


export const TRAINID="TRAINID";
export const SOURCE= "SOURCE";
export const DESTINATION= "DESTINATION";
export const NOOFTICKETS= "NOOFTICKETS";

class TicketBooking extends Component {
    
    constructor(props) {
        super(props)
        this.checktrainId=this.checktrainId.bind(this)
        this.checkSource=this.checkSource.bind(this)
        this.checkDestination=this.checkDestination.bind(this)
        this.checkTickets=this.checkTickets.bind(this)
        this.storeDetails=this.storeDetails.bind(this)
        this.state = {
            trainId:"",
             source: "",
             destination: "",
             nooftickets: ""
        };
    }
    checktrainId(e){
        var tList=document.getElementById("tList").value;
        this.setState({
            trainId: e.target.value
        })
        console.log("TRAIN ID: "+tList)
    }

    checkSource(e){
        var soList=document.getElementById("soList").value;
        this.setState({
            source: e.target.value
        });
        console.log("Source: "+soList)
    }
    checkDestination(e){
        var deList=document.getElementById("deList").value;
        this.setState({
            destination: e.target.value
        });
        console.log("Destination: "+deList)
    }
    checkTickets(e){
        var tickets=document.getElementById("tickets").value
        this.setState({
            nooftickets: e.target.value
        });
        console.log("No. of Tickets: "+tickets);
    }
    storeDetails(e){
        let trainId=this.state.trainId;
        let source=this.state.source;
        let destination= this.state.destination;
        let nooftickets= this.state.nooftickets;
        //Validating the source and if validated then storing the data to the session storage
        var session=sessionStorage.getItem('token')
        if(session===null){
                // alert("You are not logged in please login ")
                this.props.history.push(`/login`);
                
        }
        else {
            // dispatch({type:"USER", payload: true})
                // alert("You are already logged in you can proceed")
                // this.props.history.push(`/submitPaymentDetail`);
        if(trainId===""){
            // alert("Train ID cannot be empty...!")
            this.props.history.push(`/booking`)
        }
        else{
            sessionStorage.setItem(TRAINID,trainId)
            this.props.history.push(`/payment`);
        }
        if(source=== ""){
            // alert("SOURCE cannot be empty...!");
            //Redirecting to the same page if Source field is no given
            this.props.history.push(`/booking`);
        }
        // else if(source===destination){
        //     alert("Destinatoin field and source field cannot be same...!");
        //     //Redirecting to the same page if Source field is no given
        //     this.props.history.push(`/booking`);
        // }
        else{
            sessionStorage.setItem(SOURCE,source);
            //go to payment component when store method is called
            //this.props.history.push(`/payment`);
            this.props.history.push(`/payment`);
        }
         //Validating the destination and if validated then storing the data to the session storage
         if(destination=== ""){
            // alert("Destinatoin field cannot be empty...!");
            //Redirecting to the same page if Source field is no given
            this.props.history.push(`/booking`);
        }
       
        if(destination===source){
                // alert("Source and Destination both Cannot be Same...!");
                this.props.history.push(`/booking`);
            }
            
         else if(destination !== ""){
            sessionStorage.setItem(DESTINATION,destination);
            //go to payment component when store method is called
            this.props.history.push(`/payment`);

        }
        //Validating the No of Tickets and if validated then storing the data to the session storage
        if(nooftickets=== ""){
            // alert("No. of Tickets field cannot be empty...!");
            //Redirecting to the same page if Source field is no given
            this.props.history.push(`/booking`);
        }
        if(nooftickets===0){
            // alert("No of Tickets cannot be Empty...!");
            this.props.history.push(`/booking`);
        }
       
        else if(nooftickets !== "" ){
            sessionStorage.setItem(NOOFTICKETS,nooftickets);
            //go to payment component when store method is called
            this.props.history.push(`/payment`);

        }
    }
    }
    render() {
        
        return (
            <Router>
                {/* <div>
                    <center>
                        <h1>Heyy....!</h1><br/>
                        <h4>Tickets Booking page is under Development</h4>
                    </center>
                </div> */}

                <div style={{'backgroundImage': `url(${nav1}`,width: "100%", height: 600}}>
                    <br/> <br/><br/>
                    <div className="container" style={{marginTop:'8%'}}>
                        <center>
                            <div className="card" style={{width: 600}}>
                                <h2 className="card-header info-color white-text text-center py-4" style={{backgroundColor: "#6BD9D7"}}>
                                    <strong style={{color:"black",fontFamily: "Monotype Corsiva"}}>
                                        {" "}
                                        Book Your Train Tickets Online{" "}
                                    </strong>
                                </h2>
                                <div className='card-body px-lg-5'>
                                    <form className='text-center' style={{color: "#757575"}} onSubmit={this.storeDetails}>
                                        {/* <label>Train ID&nbsp;</label> */}
                                        <input type="text" id='tList' placeholder='Enter Train ID' onChange={this.checktrainId} style={{border:'none',outline:'none',borderBottom:'2px solid purple'}}/><br/><br/>
                                        <label>From : &nbsp; </label>
                                        <select class="browser-default custom-select mb-4" id="soList" onChange={this.checkSource}>
                                            <option value="" disabled selected>Choose Option</option>
                                            <option value="Kolhapur">Kolhapur</option>
                                            <option value="Bangalore">Bangalore</option>
                                            <option value="Miraj">Miraj</option>
                                            <option value="Dadar">Dadar(Mumbai)</option>
                                        </select>
                                        
                                        <label>&nbsp;To : &nbsp;</label>
                                        <select class="browser-default custom-select mb-4" onFocus="red" id="deList" onChange={this.checkDestination}>
                                        <option value="" disabled selected>Choose Option</option>
                                            <option value="Kolhapur">Kolhapur</option>
                                            <option value="Bangalore">Bangalore</option>
                                            <option value="Miraj">Miraj</option>
                                            <option value="Dadar">Dadar(Mumbai)</option>
                                        </select>
                                        {/* <label>No. of Tickets: </label> */}
                                        <input type="text" placeholder="No.of Tickets (No of Seats)" className='form-control mb-4' id="tickets" onChange={this.checkTickets} style={{border:'none',outline:'none',borderBottom:'2px solid purple'}}>
                                            
                                        </input>
                                        <button className='btn btn-outline-primary btn-rounded btn-block z-depth-0 my-4 waves-effect' type='submit'>Confirm</button>
                                    </form>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
            </Router>

            
        )
    }
}

export default TicketBooking
