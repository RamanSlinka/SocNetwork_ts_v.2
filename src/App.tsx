import React from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from './components/profile/Profile';
import Dialogs from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";
import Users from "./components/users/Users";


function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            <div className="app-wrapper-content">
                <Route path='/dialogs' render={() => <Dialogs/>}/>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/users' render={() => <Users/>}/>
            </div>
        </div>

    );
}

export default App;
