import React from 'react'
import { Link } from 'react-router-dom'
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import "../App.css";
import "./Gallery"

function Navbar() {
    return (
        <>
        {/* <div className="Navbar"> */}
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="leftSide">
                <div className="ml-auto">
                    <div className="links">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link to = "/" >Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to = "/gradhousing">Grad Housing Pantry</Link>
                        </li>
                        <li className="nav-item">
                        <Link to = "/studentcenter">Student Center A Pantry</Link>
                        </li>
                        <li className="nav-item">
                        <Link to = "/contactus">Contact Us</Link>
                        </li>
                        {/* <li className="nav-item">
                        <Link to= "/mygallery">Gallery</Link>
                        </li> */}
                        <li className="nav-item">
                        <Link to= "/chatbot">Chatbot</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="rightSide"></div>
        </nav>
        {/* </div> */}
    </>
    )
}

export default Navbar;
