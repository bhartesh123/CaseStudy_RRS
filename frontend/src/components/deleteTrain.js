import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminNavigationBar from "../components/AdminNavigationBar";


export default class deleteTrain extends Component {
  state = {
    alertMessage: String,
    train:sessionStorage.getItem('TRAINID')
  };

  componentDidMount() {
      
    axios
      .get(
        "http://localhost:9030/trains/delete/" +this.state.train
      )
      .then(response => {
        this.setState({
          alertMessage: "Train with ID Deleted Successfully"
        });
      })
      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <div>
        <AdminNavigationBar />
        <br /> <br />
        <div className="alert alert-success" role="alert" style={{width:'30%', left:'30%'}}>
          <h4 className="alert-heading">Well done!</h4>
          <h1>Train with ID {this.state.train} is Deleted Successfully</h1>
          {/* <h1>{this.state.alertMessage}</h1> */}
          <hr />
          <h3 className="mb-0">
            <Link to={"/trainlist"}> Go Back To Your Train List.</Link>
          </h3>
        </div>
      </div>
    );
  }
}