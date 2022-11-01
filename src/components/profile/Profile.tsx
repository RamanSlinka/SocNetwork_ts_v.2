import React from 'react';
import style from './profile.module.scss'

const Profile = () => {
    return (
        <div className={style.content}>
            Main content
            <div>My posts</div>
            <div>New post</div>
            <div>post1</div>
        </div>
    );
};

export default Profile;