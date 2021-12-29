import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import thankyou from "../resources/back7edit.jpg"

export class ThankYouMessage extends Component {
  render() {
    return (
      <div>
        {/* <h1>Thank You</h1> */}
        <center>
          <img src={thankyou} width="1000"/><br/>
          <Link to="/" style={{backgroundColor: "#6900cb",color:"white"}}>
            {" "}
            Go to Home{" "}
            <br/>
            <br/>
          </Link>
        </center>
      </div>
    );
  }
}

export default ThankYouMessage
