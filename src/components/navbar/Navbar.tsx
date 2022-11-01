import React from 'react';
import style from './navbar.module.scss'
const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div><a href="">Profile</a></div>
            <div><a href="">Messages</a></div>
            <div><a href="">Friends</a></div>
        </nav>
    );
};

export default Navbar;