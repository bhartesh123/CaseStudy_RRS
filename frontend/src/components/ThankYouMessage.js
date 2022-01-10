import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import thankyou from "../resources/back7edit.jpg"

export class ThankYouMessage extends Component {
  render() {
    return (
      <section className='card'>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        {/* <h1>Thank You</h1> */}
        <div class="jumbotron text-center">
            <h1 class="display-3" style={{fontFamily:'Harlow Solid Italic'}}><strong>Thank You! </strong>for Booking</h1>
            <h5 class="lead" style={{backgroundColor:'wheat',position:'relative',width:'35%',left:'35%'}}><strong>Please check your email</strong> for Booking Details.</h5>
            <hr/>
            <p>
              Having trouble? <a href="https://www.irctc.co.in/eticketing/contact.jsf">Contact us</a>
            </p>
            <p class="lead">
              <a class="btn btn-primary btn-sm" href="/" role="button">Continue to homepage</a>
            </p>
        </div>
        <br/>
        <br/>
        <br/>
        <br/><br/>
      </section>
    );
  }
}

export default ThankYouMessage
