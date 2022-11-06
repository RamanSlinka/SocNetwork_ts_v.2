import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, state, updateNewPostText} from './ redux/state'


ReactDOM.render(
    <BrowserRouter>
        <App state={state}
             addPost={addPost}
             updateNewPostText={updateNewPostText}
        />
    </BrowserRouter>
    ,
    document.getElementById('root')
);