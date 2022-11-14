import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store, {AppStateType} from "./ redux/redux-store";


let rerenderEntireTree = (state: AppStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                 dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>
        ,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(()=> {
    let state = store.getState()
    rerenderEntireTree(state)
})
