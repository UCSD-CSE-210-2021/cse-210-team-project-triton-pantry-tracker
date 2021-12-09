import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import "./App.css";
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyScheduler from "./Component/Scheduler";
import Navbar from "./Component/Navbar";
import MyGallery from "./Component/Gallery";
import Categories from "./Component/categories";
import React from "react";
import Chatbot from "./Component/Chatbot";
import ContactUs from "./Component/ContactUs";
import AboutUs from "./Component/AboutUs";
import { ImageList } from "@material-ui/core";
import { Url } from "devextreme-react/chart";
import background from "./Images/bg_logo.png";
import { Center } from "devextreme-react/map";
=======
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyScheduler from './Component/Scheduler'
import Navbar from './Component/Navbar';
import MyGallery from './Component/Gallery';
import Categories from './Component/categories';
import React from 'react';
import Chatbot from './Component/Chatbot';
import ContactUs from './Component/ContactUs';
import AboutUs from './Component/AboutUs';
import { ImageList } from '@material-ui/core';
import { Url } from 'devextreme-react/chart';
import background from "./Images/bg_logo.png"
import Dashboard from './Component/OMSDashboard';
import Dashboard1 from './Component/SCDashboard';
>>>>>>> b9b01cafbcb9b3c5425fd834aba7cd95b20486c9

function App() {
  return (
    <div
      className="App parallax"
      // style={{
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   // height: "100vh",
      //   backgroundImage: `url(${background})`,
      //   backgroundRepeat: "np-repeat",
      //   // backgroundSize: "cover",
      //   // backgroundAttachment: "fixed",
      //   margin: "0px",
      // }}
    >
      <Router>
        <Navbar />

<<<<<<< HEAD
        <Routes>
          <Route path="/" exact element={<AboutUs />} />
          <Route path="/gradhousing" element={<Categories />} />
          <Route path="/studentcenter" element={<Categories />} />
          <Route path="/contactus" element={<ContactUs />} />
          {/* <Route path="/mygallery" element={<MyGallery />} /> */}
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/scheduler" element={<MyScheduler />}></Route>
        </Routes>
      </Router>
      {/* <div className="container-fluid"></div> */}
    </div>
  );
}
=======
                    <Routes>
                    <Route path='/' exact element={<AboutUs/>} />
                    <Route path='/gradhousing' element={<Categories/>} />
                    <Route path='/studentcenter' element={<Categories/>} />
                    <Route path='/contactus' element={<ContactUs/>} />
                    <Route path='/chatbot' element={<Chatbot/>}  />
                    <Route path='/scheduler' element={<MyScheduler/>} />
                    <Route path='/dashboard' element={<Dashboard/>} />
                    <Route path='/dashboard1' element={<Dashboard1/>} >   
                    </Route>
                    </Routes>
            </Router>
            </div>
        )
    }
>>>>>>> b9b01cafbcb9b3c5425fd834aba7cd95b20486c9

export default App;
