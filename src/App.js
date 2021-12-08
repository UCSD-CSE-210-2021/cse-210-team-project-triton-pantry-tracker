import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import "./App.css";
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

function App() {
        return(
            <div className="App" style={{backgroundSize:"cover",backgroundImage: `url(${background})` ,backgroundRepeat: 'repeat-y',backgroundSize:"100%", backgroundAttachment:"fixed"}}>
                
            <Router>
            <Navbar />

                    <Routes>
                    <Route path='/' exact element={<AboutUs/>} />
                    <Route path='/gradhousing' element={<Categories/>} />
                    <Route path='/studentcenter' element={<Categories/>} />
                    <Route path='/contactus' element={<ContactUs/>} />
                    <Route path='/mygallery' element={<MyGallery/>} />
                    <Route path='/chatbot' element={<Chatbot/>}  />
                    <Route path='/scheduler' element={<MyScheduler/>} >
                    </Route>
                    </Routes>
            </Router>
            </div>
        )
    }

export default App;