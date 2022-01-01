import React, { Component } from "react";
import AdminNavigationBar from "../components/AdminNavigationBar";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import _get from 'lodash.get'




class AddTrain extends Component {
  state = {
    trainid: "",
    trainName: "",
    startStation: "",
    endStation: "",
    price:"",
    isTrainCreated: false
  };

  handleTrainid = event => {
    const { value } = event.target;
    if (value != null) {
      
      this.setState({ trainid: value.toUpperCase() });
      
    }
  };


  handleTrainName = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ trainName: value.toUpperCase() });
    }
  };

  handlestartStation = event => {
    const { value } = event.target;
    this.setState({ startStation: value.toUpperCase() });
  };

  handleendStation = event => {
    const { value } = event.target;
    this.setState({ endStation: value.toUpperCase() });
  };
  handleprice = event => {
    const { value } = event.target;
    this.setState({ price: value.toUpperCase() });
  };
  handleDel = event => {
    sessionStorage.setItem('TRAINID',this.state.trainid);
  };


  handleSubmit = event => {
    event.preventDefault();

    // const newTrain = {
    //   trainid: this.state.trainid,
    //   trainName: this.state.trainName,
    //   startStation: this.state.startStation,
    //   endStation: this.state.endStation,
    //   price: this.state.price
      
    // };

    // axios
    //   .post(
    //     "http://localhost:9030/trains/addTrain",
    //     newTrain
    //   )
      fetch("http://localhost:9030/trains/addTrain",{
                "method":"POST",
                "headers":{
                    "content-type":"application/json",
                    "accept":"application/json",
                    "Access-Control-Allow-Origin":"*"
                },
                "body": JSON.stringify({
                    trainId: this.state.trainid,
                    trainName: this.state.trainName,
                    startStation: this.state.startStation,
                    endStation: this.state.endStation,
                    price: this.state.price
                })
            })
            .then(response=> response.json())
          
            .then(msg=>{console.log(msg)
                this.history.push(`/trainlist`)
            })
      .catch(error => error.message);
      
    window.alert("Train created successfully");
    this.setState({
        trainid: "",
        trainName: "",
        startStation: "",
        endStation: "",
        price:"",
    
      isTrainCreated: true
    });
  };
  render() {
    if (this.state.isTrainCreated) {
      return <Redirect to="/trainlist" />;
    }
   
    return (
      <div>
        <AdminNavigationBar />
        <div className="d-flex justify-content-center">
          <div className="card bg-light mb-3">
            <div className="card-header" style={{width:500}}>
              <h3 className="d-flex justify-content-center">Create Train</h3>
            </div>
            <br />
            <div className="card-body">
              <h5 className="card-title">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="trainNumber">Train Id</label>
                      <input
                        type="name"
                        className="form-control"
                        id="trainid"
                        onChange={this.handleTrainid}
                        value={this.state.trainid}
                        required
                      />
                    </div>
                    <br />
                    <div className="col">
                      <label htmlFor="trainName">Train Name</label>
                      <input
                        type="name"
                        className="form-control"
                        id="trainName"
                        onChange={this.handleTrainName}
                        value={this.state.trainName}
                        required
                      />
                    </div>
                  </div>
                  <br />
                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="inputState">Source</label>
                      <input
                        id="from"
                        className="form-control"
                        onChange={this.handlestartStation}
                        value={this.state.startStation}
                        required
                      />
                    </div>
                    <br />
                    <div className="col">
                      <label htmlFor="inputState">Destination</label>
                      <input
                        id="to"
                        className="form-control"
                        onChange={this.handleendStation}
                        value={this.state.endStation}
                        required
                      />
                    </div>
                    <br />
                    <div className="col">
                      <label htmlFor="inputState">Ticket Price</label>
                      <input
                        id="price"
                        className="form-control"
                        onChange={this.handleprice}
                        value={this.state.price}
                        required
                      />
                    </div>
                  </div>
                  <br />
                
              
                  <br />
                  <div>
                    <button
                      type="submit"
                      value="createTicket"
                      className="btn btn-dark btn-lg btn-block"
                     
                    >
                      Create Train
                    </button>
                    <br/>
                    <p>Delete Train?<Link to="/delTrain" onClick={this.handleDel}> Click Here</Link></p>
                  </div>
                </form>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddTrain
