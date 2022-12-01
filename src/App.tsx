import React from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from './components/profile/Profile';
import Dialogs from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";
import Users from "./components/users/Users";
import Login from './components/login/Login';


function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            <div className="app-wrapper-content">
                <Route path='/dialogs' render={() => <Dialogs/>}/>
                <Route path='/profile/:userId?' render={() => <Profile/>}/>
                <Route path='/users' render={() => <Users/>}/>
                <Route path='/login' render={() => <Login/>}/>
            </div>
        </div>

    );
}

export default App;
