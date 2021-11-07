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


function App() {
        return(
            <div className="App">
                
            <Router>
            <Navbar />

                    <Routes>
                    <Route path='/' exact element={<MyScheduler/>} />
                    <Route path='/feedback' element={App} />
                    <Route path='/location' element={<Categories/>} />
                    <Route path='/contactus' element={App} />
                    <Route path='/mygallery' element={<MyGallery/>} />
                    <Route path='/chatbot' element={<Chatbot/>} >
                    </Route>
                    </Routes>
            </Router>
            </div>
        )
    }

export default App;