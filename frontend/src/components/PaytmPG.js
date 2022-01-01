import React, { Component } from "react";
import axios from "axios";
import paytmlogo from "../resources/paytm.png";
//import image
import { TOTAL } from "./PaymentMethod";

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
        <div className="container" style={{ marginTop: 0 }}>
          <center>
            <div className="card" style={{ width: 600 }}>
              <h5
                className="card-header info-color white-text text-center py-4"
                style={{ backgroundColor: " #0000FF " }}
              >
                <strong style={{ color: "white" }}>
                  {" "}
                  <h2> Your Bill : {this.state.total} </h2>
                </strong>
              </h5>
              <div className="logo">
                <img src={paytmlogo} width="450" height="250" alt="" />
              </div>
              

              <h2> Paytm Payment Gateway </h2>
              <div className="card-body px-lg-5">
                <form
                  className="text-center"
                  style={{ color: "#757575" }}
                  onSubmit={this.onSubmit}
                >
                  <label> Mobile Number : </label>
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    className="form-control mb-4"
                    name="mobileno"
                  />
                  <label> Four Digit PIN Number : </label>
                  <input
                    type="text"
                    placeholder="Four Digit PIN Number"
                    className="form-control mb-4"
                    name="fourdigitpin"
                  />
                  <label> Amount : </label>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control mb-4"
                    name="amount"
                    value={this.state.total}
                    readOnly
                  />
                  <button
                    className="btn btn-outline-primary btn-rounded btn-block z-depth-0 my-4 waves-effect"
                    type="submit"
                  >
                    PAY NOW
                  </button>
                </form>
              </div>
            </div>
          </center>
        </div>
        <br/><br/>
      </div>
    );
  }
}

export default PaytmPG;