import React from 'react';
import Sidebar from './Sidebar';
import Home from './pages/Home';
import MasterRuas from './pages/MasterRuas';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

class RunApp extends React.Component { 
    render() {
        return (
        <Router>
            <div id="wrapper">
                <div className="bg-white">
                    <Sidebar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/master" element={<MasterRuas/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
        );

     }
}
 
export default RunApp;