import React from 'react';
import style from './profile.module.scss'
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={style.content}>
            <ProfileInfo/>
            <MyPosts/>

        </div>
    );
};

export default Profile;