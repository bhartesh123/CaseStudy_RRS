import React, { Component } from 'react'
import visologo from "../resources/visalogo.png"
import masterlogo from "../resources/masterlogo.png"
import {SOURCE,DESTINATION,NOOFTICKETS, TRAINID} from "./TicketBooking"
import GooglePayButton from '@google-pay/button-react'
import ThankYouMessage from './ThankYouMessage'
import login from '../../src/resources/user.png'
import { Link, useHistory } from 'react-router-dom'
import "../../src/moduleCSS/payment.css"
// import { PaytmButton } from '../paytm-button/paytmButton';

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
        let total1=this.state.total;
        sessionStorage.setItem(TOTAL, total1);
    }
    handleSubmit(e){
        // e.preventDefault();
        
            var session=sessionStorage.getItem('token')
            if(session===null){
                alert("You are not logged in please login ")
                this.props.history.push(`/login`);               
            }
            else {
                // alert("You are already logged in you can proceed")
                // this.props.history.push(`/thankyou`);
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
                alert("Your ticket is Booked")
                console.log(response)
                // alert("Your ticket is not Booked")
            })
            .catch(err=>{
                alert("Your ticket is  Booked")
                // console.log(err)
            });
        
    }
   
    
    render() {
       
        const totalAmt=this.state.total;
        console.log("Total Amount render : ",totalAmt)
        sessionStorage.setItem(TOTAL,this.state.total)
        
            return (
               
                <div id='wrp'>
                    <div className='payment'>
                        <div className='product'>
                            <div>
                               <h1>Total Bill</h1>
                                <div className='price'>
                               <h5>₹ {this.state.total}</h5>
                                </div>
                            </div>
                        </div>
                        <div className='bill'>
                            <h2 style={{fontFamily:'Times New Roman'}}><strong>Receipt Summary</strong></h2>
                            <ul>
                                <strong>
                                <li>
                                    <span>Train Id : </span>
                                    <span>{this.state.trainId}</span>
                                </li>
                                <li>
                                    <span>Starting Station : </span>
                                    <span>{this.state.source}</span>
                                </li>
                                <li>
                                    <span>Destination : </span>
                                    <span>{this.state.destination}</span>
                                </li>
                                <li>
                                    <span>No of Seats : </span>
                                    <span>{this.state.nooftickets}</span>
                                </li>
                                <hr/>
                                <li>
                                    <span>Total Amount : </span>
                                    <span>{this.state.total}</span>
                                </li>
                                <hr/>
                                </strong>
                            </ul>
                            <h2>Payment Information</h2>
                           {/* <form onSubmit={this.handleSubmit}>
                                    <center>  <button type="submit" style={{background:'black',padding: '2px 2px'}}>  */}
                                    <GooglePayButton
                                                    environment="TEST"
                                                    paymentRequest={{
                                                    apiVersion: 2,
                                                    apiVersionMinor: 0,
                                                    allowedPaymentMethods: [
                                                        {
                                                        type: 'CARD',
                                                        parameters: {
                                                            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                                            allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                                        },
                                                        tokenizationSpecification: {
                                                            type: 'PAYMENT_GATEWAY',
                                                            parameters: {
                                                            gateway: 'example',
                                                            gatewayMerchantId: 'exampleGatewayMerchantId',
                                                            },
                                                        },
                                                        },
                                                    ],
                                                    merchantInfo: {
                                                        merchantId: '12345678901234567890',
                                                        merchantName: 'Demo Merchant',
                                                    },
                                                    transactionInfo: {
                                                        totalPriceStatus: 'FINAL',
                                                        totalPriceLabel: 'Total',
                                                        totalPrice: sessionStorage.getItem('TOTAL'),
                                                        currencyCode: 'INR',
                                                        countryCode: 'IN',
                                                    },
                                                    shippingAddressRequired: true,
                                                    callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
                                                    }}
                                                    onLoadPaymentData={paymentRequest => {
                                                    console.log('Success', paymentRequest);
                                                   
                                                    this.props.history.push('/thankyou')
                                                    this.handleSubmit()
                                                    }}
                                                    onPaymentAuthorized={paymentData => {
                                                        console.log('Payment Authorised Success', paymentData)
                                                        return { transactionState: 'SUCCESS'}
                                                    }
                                                    }
                                                    onPaymentDataChanged={paymentData => {
                                                        console.log('On Payment Data Changed', paymentData)
                                                        return { }
                                                    }
                                                    }
                                                    existingPaymentMethodRequired='false'
                                                    
                                                    
                                        />
                                     {/* </button>
                                     </center>
                                     </form> */}
                        </div>
                    </div>

                </div>
            )
            
        }
}

export default PaymentMethod
