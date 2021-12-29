import React, { Component } from 'react'
import axios from 'axios';

const Train = props=>(
    <tr>
        <td>{props.train.trainId}</td>
        <td>{props.train.trainName}</td>
        <td>{props.train.startStation}</td>
        <td>{props.train.endStation}</td>
    </tr>
);
    

 class TrainList extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              traintickets: []
         };
     }
     componentDidMount(){
         axios
         .get("http://localhost:9030/search/allTrains")
         .then(response =>{
             this.setState({traintickets: response.data});
         })
         .catch(function(error){
             console.log(error);
         });
     }

     trainList(){
         return this.state.traintickets.map(function(currentTrain, i){
             return <Train train={currentTrain} key={i}/>
         })
     }
     
    render() {
        return (
            <div className='abv'>
                {/* <center>
                    <h1>Heyy....!</h1><br/>
                    <h4>TrainList page is under Development</h4>
                </center> */}
                <center>
                    <h1 style={{ fontFamily: "Old English Text MT", backgroundColor:'#DADADA '}}><strong>Train Details</strong></h1>
                    <table className="table table-striped" >
                        <thead style={{backgroundColor: "#676b6a"}}>
                            <tr >
                                <th style={{color:'white'}}>Train ID</th>
                                <th style={{color:'white'}}>Train Name</th>
                                <th style={{color:'white'}}>Start Station</th>
                                <th style={{color:'white'}}>Destination</th>
                            </tr>
                        </thead>
             
                        <tbody style={{backgroundColor: "#f2938d"}}>{this.trainList()}</tbody>    
                    </table>
                </center>
            </div>
        )
    }
}

export default TrainList
