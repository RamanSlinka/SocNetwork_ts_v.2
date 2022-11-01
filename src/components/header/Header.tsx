import React from 'react';
import style from './header.module.scss'

const Header = () => {
    return (
        <header className={style.header}>
            <div>
                <div>
                    <img
                        src="https://play-lh.googleusercontent.com/SLfKTYVm-AT-OiOAOfQFJ8zk42d9tAqRa9Uhil_f603pCqtdVSyrw4CdfgYkitboHM0O=w240-h480-rw"
                        alt="logo" style={{width: "40px"}}/>
                </div>
            </div>
        </header>
    );
};

export default Header;