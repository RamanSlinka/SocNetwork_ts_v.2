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
}

function App(props: AppType) {


    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            <div className="app-wrapper-content">
                {/*<Profile/>*/}
                <Route path='/dialogs' render={() => <Dialogs
                    dialogsData={props.state.dialogsPage.dialogs}
                    messagesData={props.state.dialogsPage.messages}
                />}/>
                <Route path='/profile' render={() => <Profile
                posts={props.state.profilePage.posts}
               /> }/>

            </div>
        </div>

    );
}

export default App;
