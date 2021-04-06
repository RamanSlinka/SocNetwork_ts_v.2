import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'

type DialogsPropsType = {
    name: string
    id: number
}

function Dialog(props: DialogsPropsType) {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.activeDialog}> {props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name='Kirkorov' id={1}/>
                <Dialog name='Klichko' id={2}/>
                <Dialog name='Snub Dog' id={3}/>
                <Dialog name='Basta' id={4}/>
                <Dialog name='Black Sabbath' id={5}/>

            </div>
            <div className={s.messages}>
                <Message message='Hello!'/>
                <Message message='How are you?'/>
                <Message message='WTF'/>
            </div>

        </div>
    )
}