import React from 'react';
import style from './navbar.module.scss'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div>
                <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" activeClassName={style.active}>Messages</NavLink></div>

            <div><a href="/">Friends</a></div>
        </nav>
    );
};

export default Navbar;