import React from 'react'
import { Link } from 'react-router-dom'
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import "../App.css";
import "./Gallery"

function Navbar() {
    return (
        <>
        <div className="Navbar">
            <div className="leftSide">
                <div className="ml-auto">
                    <div className="links">
                        <Link to = "/">Home</Link>
                        <Link to = "/feedback">Feedback</Link>
                        <Link to = "/location">Locations</Link>
                        <Link to = "/contactus">ContactUs</Link>
                        <Link to= "/mygallery">Gallery</Link>
                        <Link to= "/chatbot">Chatbot</Link>
                    </div>
                </div>
            </div>
            <div className="rightSide"></div>
        </div>
    </>
    )
}

export default Navbar;
