import React from 'react';
import style from './profile.module.scss'
import MyPosts from "./myPosts/MyPosts";

const Profile = () => {
    return (
        <div className={style.content}>
            Main content
            <MyPosts/>

        </div>
    );
};

export default Profile;