import React from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import TicketBooking from "./TicketBooking";
// @import "react-slideshow-image/dist/styles.css";

//importing the images
// import slide1 from "../resources/slider1.jpg";
// import slide2 from "../resources/slider3.jpg";
// import slide3 from "../resources/slider11.jpg";

//save it to an array
//const slideImages = [slide1, slide2, slide3];
const slideImages = [
   // slide1,slide2,slide3];
   {
    url: 'https://spic.one/wp-content/uploads/2019/01/0e692af388b316d67d80.jpg',
    caption: 'Slide 1'
  },
   {
    url: "https://images.pexels.com/photos/325200/pexels-photo-325200.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    caption: 'Slide 2'
  },
  {
    url: "https://images.pexels.com/photos/5387999/pexels-photo-5387999.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    caption: 'Slide 3'
  },
  
    {
      url: 'https://images.pexels.com/photos/5098043/pexels-photo-5098043.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      caption: 'Slide 4'
    },
    {
      url: 'https://images.pexels.com/photos/4555348/pexels-photo-4555348.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      caption: 'Slide 5'
    },
    {
      url: 'https://images.pexels.com/photos/3960133/pexels-photo-3960133.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      caption: 'Slide 6'
    }
  ];
  
//slider properties
const properties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
};

const HomeSlider = () => {
    return (
      <div className="slide-container" >
        {/* <TicketBooking/> */}
        <Slide {...properties}>
            
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index} style={{backgroundColor: 'rgba(56, 51, 54, 0.88)'}}>
              <center><div style={{'backgroundImage': `url(${slideImage.url})`,width: 1000 ,height: 550 }}>
                {/* <span>{slideImage.caption}</span> */}
              </div></center>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default HomeSlider;
