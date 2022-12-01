import React, {ChangeEvent, FC} from 'react';
import style from './dialogs.module.scss';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {addMessage, DialogType, MessageType, updateNewMessageText} from "../../ redux/dialogReducer";
import { AppStateType} from "../../ redux/redux-store";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";


type DialogsType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    newMessage: string | undefined
}

const Dialogs: FC = () => {

    const dialogsData = useSelector<AppStateType, DialogType[]>(state => state.dialogPage.dialogs)
    const messagesData = useSelector<AppStateType, MessageType[]>(state => state.dialogPage.messages)
    const newMessage = useSelector<AppStateType, string | undefined>(state => state.dialogPage.newMessageText)
    const isAuth = useSelector<AppStateType, boolean>(state => state.isAuth.isAuth)


    const dispatch = useDispatch()

    const sendMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text: string | undefined = e.currentTarget.value
        dispatch(updateNewMessageText(text))
    }

    const onClickHandler = () => {
        dispatch(addMessage())
    }


    if(!isAuth) {return    <Redirect to='/login'/> }

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

            <div>
                <div>
                    <textarea
                        value={newMessage}
                        onChange={sendMessageHandler}
                        placeholder="Enter yor message"/>
                </div>
                <div>
                    <button onClick={onClickHandler}>Send message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;