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
import Feedback from './Component/Feedback';

function App() {
        return(
            <div className="App">
                
            <Router>
            <Navbar />

                    <Routes>
                    <Route path='/' exact element={<MyScheduler/>} />
                    <Route path='/feedback' element={<Feedback/>} />
                    <Route path='/location' element={<Categories/>} />
                    <Route path='/contactus' element={<ContactUs/>} />
                    <Route path='/mygallery' element={<MyGallery/>} />
                    <Route path='/chatbot' element={<Chatbot/>} >
                    </Route>
                    </Routes>
            </Router>
            </div>
        )
    }

export default App;