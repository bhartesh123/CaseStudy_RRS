import React, { Component } from 'react'
import visologo from "../resources/visalogo.png"
import masterlogo from "../resources/masterlogo.png"
import {SOURCE,DESTINATION,NOOFTICKETS, TRAINID} from "./TicketBooking"


export const TOTAL ="TOTAL"
class PaymentMethod extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             method: "",
             trainId:"",
             source: "",
             destination: "",
             nooftickets:"",
             total:""
        };
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    componentDidMount(){
        this.setState({
            ...this.state,
            trainId: sessionStorage.getItem(TRAINID)
            
        },()=>console.log(this.state.trainId)
        
        )
        this.setState({
            source: sessionStorage.getItem(SOURCE)
        });
        this.setState(
        {
            destination: sessionStorage.getItem(DESTINATION)
        }
        );
        this.setState({
            nooftickets:sessionStorage.getItem(NOOFTICKETS)
        });
        this.setState({
            total: sessionStorage.getItem(NOOFTICKETS)*340
        });
        this.setState({

        });
        this.setState({
            total:
            sessionStorage.getItem(NOOFTICKETS) * 340 - sessionStorage.getItem(NOOFTICKETS)* 340 * (10 / 100)
        });
    }

    handleChange(e){
        this.setState({
            method: e.target.value
        });
        let total=this.state.total;
        sessionStorage.setItem(TOTAL, total);
    }
    handleSubmit(e){
        e.preventDefault();
        let method = this.state.method;
        if(method === "creditcard"){
            this.props.history.push(`/sbipg`);
        }
        else if(method === "mobile"){
            var session=sessionStorage.getItem('token')
            if(session===null){
                alert("You are not logged in please login ")
                this.props.history.push(`/login`);
                
            }
            else {
                alert("You are already logged in you can proceed")
                this.props.history.push(`/submitPaymentDetail`);
            }            
        }
       
            fetch("http://localhost:9040/booking/addBooking",{
                "method":"POST",
                "headers":{
                    "content-type":"application/json",
                    "accept":"application/json",
                    "Access-Control-Allow-Origin":"*"
                },
                "body": JSON.stringify({
                    trainId: this.state.trainId,
                    nooftickets: this.state.nooftickets,
                    source: this.state.source,
                    destination: this.state.destination  
                })
            })
            .then(response=>response.json())
            .then(response=>{
                alert("Your ticket is not Booked")
            })
            .catch(err=>{
                alert("Your ticket is Booked")
            });
        
    }
    
    render() {
        return (
            <div style={{backgroundColor:'#D3D3D3'}}>
                 {/* <center>
                    <h1>Heyy....!</h1><br/>
                    <h4>Payment page is under Development</h4>
                </center> */}
                <div className='container' style={{marginTop: 0}}>
                    <center>
                        <div className='card' style={{width:600}}>
                            <h5 className='card-header info-color white-text text-center py-4' 
                            style={{backgroundColor:"#0000FF"}}>
                                <strong style={{color:"white"}}>
                                    {" "}
                                    Your Details
                                    <h6>
                                        {" "}
                                        Train Id : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                        <input type="text" value={this.state.trainId}
                                        readOnly style={{backgroundColor:"#80aaff",height: 30}}/>
                                        {" "}
                                    </h6>
                                    <h6>
                                        {" "}
                                        Source : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                        <input type="text" value={this.state.source}
                                        readOnly style={{backgroundColor:"#80aaff",height: 30}}/>
                                        {" "}
                                    </h6>
                                    <h6>
                                        {" "}
                                        Destination : {" "}
                                        <input type="text" value={this.state.destination}
                                        readOnly 
                                        style={{backgroundColor: "#80aaff",height: 30}}/>
                                    </h6>
                                    <h6>
                                        {" "}
                                        No of Tickets : {" "}
                                        <input type="text" value={this.state.nooftickets}
                                        readOnly
                                        style={{backgroundColor:"#80aaff"}}/>
                                    </h6>
                                    <h6>
                                        {" "}
                                        Your Total Bill :{" "}
                                        <input type="text" value={this.state.total} readOnly style={{backgroundColor:'#80aaff'}}/>
                                    </h6>
                                    Select Payment Method<br/>
                                </strong>
                            </h5>
                            <div className='card-body px-lg-5'>
                                <form className='text-center' style={{color:'#757575'}} onSubmit={this.handleSubmit}>
                                    <div className='custom-control custom-radio'>
                                        <input type="radio" className='custom-control-input' id="creditcard" name='method' value='creditcard' onChange={this.handleChange}/>
                                        <label className='custom-control-label' for="creditcard">
                                            Credit Card
                                            <div>
                                                
                                                <img src={visologo} width="50" height="20" alt="" />
                                                <img src={masterlogo} width="50" height="20" alt="" />
                                            </div>
                                        </label>
                                    </div>
                                    <div className='custom-radio'>
                                        <input type='radio' className='custom-control-input' id='mobilenum' name='method' value="mobile" onChange={this.handleChange}/>
                                        <label className='custom-control-label' for="mobilenum">
                                            Mobile Number (Payment will be added to the Mobile Bill)
                                        </label>
                                    </div>
                                    <button className='btn btn-outline-primary btn-rounded btn-block z-depth-0 my-4 waves-effect' type="submit">
                                        Confirm Payment Here
                                    </button>
                                </form>
                            </div>
                        </div>
                    </center>
                </div>
            </div>
        )
    }
}

export default PaymentMethod
