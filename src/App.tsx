import React from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from './components/profile/Profile';
import Dialogs from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";
import {StateType} from "./ redux/state";


type AppType = {
    state: StateType
    addPost: () => void
    updateNewPostText: (text: string) => void
}

function  App(props: AppType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            <div className="app-wrapper-content">
                <Route path='/dialogs' render={() => <Dialogs
                    dialogsData={props.state.dialogsPage.dialogs}
                    messagesData={props.state.dialogsPage.messages}
                />}/>
                <Route path='/profile' render={() =>
                    <Profile
                    posts={props.state.profilePage.posts}
                    addPost = {props.addPost}
                    newPostText={props.state.profilePage.newPostText}
                    updateNewPostText={props.updateNewPostText}
                />}/>

            </div>
        </div>

    );
}

export default App;
