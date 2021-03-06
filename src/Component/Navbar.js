import React from "react";
import { Link } from "react-router-dom";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import "../App.css";
import "./Gallery";
import { ReactComponent as Logo } from "./logo_tracker.svg";

// import { ReactComponent as Logo } from './image2vector.svg';
function Navbar() {
  return (
    <>
      {/* <div className="Navbar"> */}
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#22423b" }}
      >
        <div className="leftSide">
          <div className="ml-auto">
            <div className="links">
              <ul
                className="navbar-nav"
                style={{ fontSize: "25px", fontFamily: "Book Antiqua" }}
              >
                <li className="nav-item">
                  <Link to="/">
                    <b className="navtext">Home</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/scheduler">
                    <b className="navtext">Schedule</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/gradhousing">
                    <b className="navtext">Grad Housing Pantry</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/studentcenter">
                    <b className="navtext">Student Center A Pantry</b>
                  </Link>
                </li>
                {/* <li className="nav-item">
                        <Link to= "/mygallery">Gallery</Link>
                        </li> */}

                <li className="nav-item">
                  <Link to="/dashboard">
                    <b className="navtext">Grad Housing Analytics</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard1">
                    <b className="navtext">Student Center Analytics</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/chatbot">
                    <b className="navtext">Chatbot</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contactus">
                    <b className="navtext">Contact Us</b>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* </div> */}
    </>
  );
}

export default Navbar;
