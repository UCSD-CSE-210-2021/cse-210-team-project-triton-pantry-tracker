import React from 'react'
import "../App.css";
import MyGallery from './Gallery';
import { ReactComponent as Logo } from './logo_tracker.svg';

function AboutUs(){
    return(
    <div className=" text-center jumbfoot" style={{marginBottom:"30px"}}>
    <div className="row">
    {/* <div className="col-md-5">
        <figure><Logo style={{maxHeight:"250px", maxWidth:"500px"}} /></figure>
    </div> */}
    {/* <div className="jumbotron" style={{fontFamily:"Ärvo"}}>
        <h2><u>About Us</u></h2>
        <h5>
        ‘Triton Pantry Tracker’ is an online tracking system for the University of California San Diego (UCSD) students and the entire community to track and view the availability of the food items. This website will allow students to know about the list of items being distributed for the day at the food pantry. It will even let the students track the quantity left for each item - dried goods, canned goods and fresh produce at the pantry. Students need not visit the food pantry daily, every week, to get this information. It could easily be tracked and viewed through this online tracking system. This may save a lot of time and effort for every student residing at UC San Diego.
        </h5>
    </div> */}
    </div>
    </div>
    )
}

export default AboutUs;