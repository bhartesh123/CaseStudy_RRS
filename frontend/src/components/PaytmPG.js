import React, { Component } from "react";
import axios from "axios";
import paytmlogo from "../resources/paytm.png";
//import image
import { TOTAL } from "./PaymentMethod";
import ThankYouMessage from "./ThankYouMessage";
import GooglePayButton from '@google-pay/button-react'

class PaytmPG extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      mobileno: "",
      fourdigitpin: "",
      amount: "",
      total: ""
    };
  }
  componentDidMount() {
    this.setState({
      total: sessionStorage.getItem(TOTAL)
    });
  }
  onSubmit(e) {
    e.preventDefault();
    this.setState({
      mobileno: e.target.value,
      fourdigitpin: e.target.value,
      amount: e.target.value
    });

    const { mobileno, fourdigitpin, amount } = this.state;

    //     //Validating the input fields
    //     if (mobileno === "") {
    //       alert("Mobile Number cannot be empty");
    //     }
    //     if (fourdigitpin === "") {
    //       alert("PIN cannot be empty");
    //     }
    // else if{}
    const addPayment = {
      mobileno: this.state.mobileno,
      fourdigitpin: this.state.fourdigitpin,
      amount: this.state.amount
    };

    axios
      .post("http://localhost:9040/booking/addBooking", addPayment)
      .then(res => console.log(res.data));

    this.props.history.push(`/thankyou`);
  }

  render() {
    return (
      <div style={{ backgroundColor: "#D3D3D3" }}>
        <br/><br/><br/><br/><br/><br/>
        <form onSubmit={this.onSubmit}>
        <center>  <button type="submit" style={{color:'black',background:'black',padding: '2px 2px'}}>
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
                                            totalPrice: '612',
                                            currencyCode: 'INR',
                                            countryCode: 'IN',
                                          },
                                          shippingAddressRequired: true,
                                            callbackIntents:['PAYMENT_AUTHORIZATION']
                                        }}
                                        onLoadPaymentData={paymentRequest => {
                                            let tot=this.state.total
                                            paymentRequest=tot
                                          console.log('load payment data', paymentRequest);
                                        }}  
                                        // onLoadPaymentData={paymentRequest=>{
                                        //     console.log('Success',paymentRequest);
            
                                        // }}
                                        onPaymentAuthorized={paymentData=>{
                                            console.log('Payment Authorization Success ',paymentData)
                                            return {transactionState: 'SUCCESS'}
                                        }}
                                        existingPaymentMethodRequired='false'
                                        buttonColor='black'
                                        buttonType='Buy'

                                     onSubmit={ThankYouMessage}/></button></center></form>
        <br/><br/>
      </div>
    );
  }
}

export default PaytmPG;