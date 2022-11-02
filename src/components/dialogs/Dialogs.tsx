import React from 'react';
import style from './dialogs.module.scss';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialogs = () => {

    const dialogsData = [
        {user:'User1', id:'1'},
        {user:'User2', id:'2'},
        {user:'User3', id:'3'},
    ]
    const messagesData = [
        {message:'message1', id:'1'},
        {message:'message2', id:'2'},
        {message:'message3', id:'3'},

    ]

    return (
        <div className={style.dialogs}>
            <div>
                {dialogsData.map((dialog, index) => (
                    <DialogItem user={dialog.user} id={dialog.id} key={index}/>
                ))}

            </div>
        <div>
            {messagesData.map((message, index) => (
                <Message message={message.message} key={index}/>
            ))}


        </div>
        </div>
    );
};

export default Dialogs;