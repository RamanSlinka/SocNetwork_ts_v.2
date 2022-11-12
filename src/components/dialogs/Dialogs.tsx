import React, {ChangeEvent, FC} from 'react';
import style from './dialogs.module.scss';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {ActionsType,  DialogType, MessageType} from "../../ redux/state";
import {addMessage, updateNewMessageText} from "../../ redux/dialogReducer";


type DialogsType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    dispatch: (action: ActionsType) => void
    newMessage: string | undefined
}

const Dialogs: FC<DialogsType> = ({
                                      dialogsData, messagesData, dispatch, newMessage
                                  }) => {


    const sendMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {

        const text: string | undefined = e.currentTarget.value
        dispatch(updateNewMessageText(text))

    }

    const onClickHandler = () => {
        dispatch(addMessage())
    }

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