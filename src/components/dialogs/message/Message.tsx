import React, {FC} from 'react';
import style from "../dialogs.module.scss";

type MessageType = {
    message: string
}

const Message:FC<MessageType> = ({message}) => {
    return (
        <div className={style.messages}>
            <div className={style.message}>{message}</div>
        </div>
    );
};

export default Message;