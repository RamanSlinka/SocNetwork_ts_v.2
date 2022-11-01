import React from 'react';
import style from './dialogs.module.scss'
import {NavLink} from "react-router-dom";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div>
                <DialogItem user='User1' id='1'/>
                <DialogItem user='User2' id='2'/>
                <DialogItem user='User3' id='3'/>
            </div>
        <div>
            <Message message='message1'/>
            <Message message='message2'/>
        </div>
        </div>
    );
};

export default Dialogs;