import React, {FC} from 'react';
import style from "../dialogs.module.scss";
import {NavLink} from "react-router-dom";

type DialogItemType ={
    user: string
    id: string
}

const DialogItem:FC<DialogItemType> = ({user, id}) => {
    return (
        <div className={style.users}>
            <NavLink to={`/dialogs/${id}`} activeClassName={style.active} className={style.user}>{user}</NavLink>

        </div>
    );
};

export default DialogItem;