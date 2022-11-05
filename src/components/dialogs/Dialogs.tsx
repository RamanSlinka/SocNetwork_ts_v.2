import React, {FC} from 'react';
import style from './dialogs.module.scss';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {DialogType, MessageType} from "../../ redux/state";


type DialogsType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
}

const Dialogs:FC<DialogsType> = ({dialogsData, messagesData}) => {


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