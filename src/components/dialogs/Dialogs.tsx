import React from 'react';
import style from './dialogs.module.scss'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.users}>
                <NavLink to='/dialogs/1' activeClassName={style.active} className={style.user}>User1</NavLink>
                <NavLink to='/dialogs/2' activeClassName={style.active} className={style.user}>User2</NavLink>
                <NavLink to='/dialogs/3' activeClassName={style.active} className={style.user}>User3</NavLink>
            </div>
            <div className={style.messages}>
                <div className={style.message}>message1</div>
                <div className={style.message}>message2</div>
            </div>
        </div>
    );
};

export default Dialogs;