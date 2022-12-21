import React, {useEffect} from 'react';
import style from './header.module.scss'

import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../ redux/redux-store";
import {getAuthUserData, logout} from "../../ redux/authReducer";
import {NavLink} from "react-router-dom";

const Header = () => {

    const isAuth = useSelector<AppStateType, boolean>(state => state.isAuth.isAuth)
    const user = useSelector<AppStateType, string | null>(state => state.isAuth.email)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch (getAuthUserData())
    }, [isAuth])




    return (
        <header className={style.header}>
            <div>
                <div>
                    <img
                        src="https://play-lh.googleusercontent.com/SLfKTYVm-AT-OiOAOfQFJ8zk42d9tAqRa9Uhil_f603pCqtdVSyrw4CdfgYkitboHM0O=w240-h480-rw"
                        alt="logo" style={{width: "40px"}}/>
                </div>
                <div style={{float: 'right'}}>
                    {isAuth
                        ? <div>{user}   <button onClick={() => dispatch(logout())}>Logout</button></div>
                        : <NavLink to={'/login'} style={{color: 'white'}}>Login</NavLink>
                    }


                </div>
            </div>
        </header>
    );
};

export default Header;