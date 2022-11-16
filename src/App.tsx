import React from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from './components/profile/Profile';
import Dialogs from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";




function  App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            <div className="app-wrapper-content">
                <Route path='/dialogs' render={() => <Dialogs
                    // dialogsData={props.state.dialogPage.dialogs}
                    // messagesData={props.state.dialogPage.messages}
                    // dispatch={props.dispatch}
                    // newMessage={props.state.dialogPage.newMessageText }
                />}/>
                <Route path='/profile' render={() =>
                    <Profile
                    // posts={props.state.profilePage.posts}
                    // dispatch = {props.dispatch}
                    // newPostText={props.state.profilePage.newPostText}

                />}/>

            </div>
        </div>

    );
}

export default App;
