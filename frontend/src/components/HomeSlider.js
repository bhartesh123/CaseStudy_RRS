
import React, { Component } from "react";
import axios from 'axios';
import "../../src/moduleCSS/home.css"
// import 'react-slideshow-image/dist/styles.css';
//import TicketBooking from "./TicketBooking";
// @import "react-slideshow-image/dist/styles.css";

//importing the images
// import slide1 from "../resources/slider1.jpg";
// import slide2 from "../resources/slider3.jpg";
// import slide3 from "../resources/slider11.jpg";

//save it to an array
//const slideImages = [slide1, slide2, slide3];
// const slideImages = [
//     slide1,slide2,slide3];
//    {
//     url: 'https://spic.one/wp-content/uploads/2019/01/0e692af388b316d67d80.jpg',
//     caption: 'Slide 1'
//   },
//    {
//     url: "https://images.pexels.com/photos/325200/pexels-photo-325200.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     caption: 'Slide 2'
//   },
//   {
//     url: "https://images.pexels.com/photos/5387999/pexels-photo-5387999.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     caption: 'Slide 3'
//   },
  
//     {
//       url: 'https://images.pexels.com/photos/5098043/pexels-photo-5098043.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//       caption: 'Slide 4'
//     },
//     {
//       url: 'https://images.pexels.com/photos/4555348/pexels-photo-4555348.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//       caption: 'Slide 5'
//     },
//     {
//       url: 'https://images.pexels.com/photos/3960133/pexels-photo-3960133.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//       caption: 'Slide 6'
//     }
//   ];
  
//slider properties
// const properties = {
//   duration: 2000,
//   transitionDuration: 500,
//   infinite: true,
//   indicators: true,
//   arrows: true
// };

class HomeSlider extends Component{
    // state={};
    // componentDidMount(){
    //  //axios.get('http://localhost:8682/auth')
    //  const config={
    //    headers: {
    //     Authorization: 'Bearer '+ localStorage.getItem('token'),
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    //    }
    //  };
    //  axios.get('http://localhost:8682/dashboard',config).then(
    //    res=>{
    //      this.setState({
    //        user: res.data
    //      })
    //      console.log(res)
    //    },
    //    err=>
    //    {
    //      console.log(err)
    //    }
    //  )
    // }
    render(){
       
    return (
     <section>
         {/* <h2>Logged Out</h2> */}
         {/* <marquee>Hii Welcome</marquee> */}
         <marquee class="pull-center" behavior="scroll" direction="left"
              style={{color:"#000066",position:'absolute',top:'21%'}}>
              <h5><strong>Please help Indian Railways and Government of India in moving towards a digitized and cashless economy. Eradicate black money. And be aware and take safety precautions of COVID-19.</strong></h5>
            </marquee>
            <center className="ce">
                <h3 style={{color:"#000066", fontFamily: "Times New Roman"}}><strong>INDIAN RAILWAYS</strong></h3>
                <h6><strong>As of March 2020, Indian Railways' rolling stock consisted of 2,93,077 freight wagons, 76,608 passenger coaches and 12,729 locomotives.IR owns locomotive and coach-production facilities at several locations in India. It had 1.254 million employees as of March 2020, making it the world's eighth-largest employer. The government has committed to electrifying India's entire rail network by 2023–24, and become a "net zero (carbon emissions) railway" by 2030.</strong></h6> 
                    
                </center>
        <div className="homs">
            <div className="ab">
                <div className='text-center card_details'>
                            <h5><strong>Indian Railways (IR)</strong></h5>
                  <p>Indian Railways (IR) is a government-owned-railway system under the ownership of Ministry of Railways, Government of India that operates India's national railway system.It manages the Third-largest railway network in the world by size, with a total route length of 126,511 km (78,610 mi) as of 31 December 2021. 45,881 km (28,509 mi) or 35% of all the broad-gauge routes are electrified with 25 kV 50 Hz AC electric traction as of 1 April 2021</p>
                    <a href="https://artsandculture.google.com/exhibit/a-history-of-indian-railways-national-rail-museum/TwJi7RwiKiTtKg?hl=en" 
                    class="news">Read More</a>
                </div>
            </div>
            <div className="ab">
            <div className='text-center card_details'>
                            <h5><strong>Inside Indian Railways' Rs 700 crore a year gamble </strong></h5>
                  <p>The Railways is India’s biggest landlord, with the Ministry of Defence coming a 
                    distant second.</p>
                    <a href="https://economictimes.indiatimes.com/industry/transportation/railways/inside-the-indian-railways-rs-700-crore-a-year-gamble/articleshow/88495908.cms" 
                    class="news">Read More</a>
                            </div>
            </div>
            <div className="ab">
                <div className='text-center card_details'>
                  <h5><strong>Passengers to get bedrolls, blankets in trains?</strong></h5>
                  <p>Indian Railways had stopped offering bedrolls and blankets in trains due to the COVID-19 pandemic. </p>
                  <a href="https://zeenews.india.com/economy/passengers-to-get-bedrolls-blankets-in-trains-check-what-indian-railways-has-to-say-2418318.html" 
                    class="news">Read More</a>
                </div>
            </div>
        </div>
     </section>
    )
    }
}

export default HomeSlider;
