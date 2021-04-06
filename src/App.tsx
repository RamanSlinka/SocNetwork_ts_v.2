
import React from "react";
import './App.css';
import Navbar from "./Component/Navbar/Navbar";
import Header from './Component/Header/Header';
import Dialogs from "./Component/Dialogs/Dialogs";
import Profile from "./Component/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
        <div className="AppBG">
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' component={ Profile}/>
                    <Route path='/dialogs' component={ Dialogs}/>

                </div>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
